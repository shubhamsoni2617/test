import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.scss';
import HomeService from '../../../shared/services/HomeService';
import Utilities from '../../../shared/utilities';
import Shadow from '../../../assets/images/shadow.png';

export default class HomePageCarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav1: null,
      nav2: null,
      posts: [],
      errorMsg: '',
      sliderBackgroudImage: 0,
      sliderAutoPlay: true,
      mainSliderSettings: {
        className: 'center',
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        centerPadding: '250px',
        slidesToShow: 1,
        speed: 500,
        arrows: true
      },
      thumbSliderSettings: {
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 13,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true
      },
      loading: true,
      loadingThumbnail: true
    };
  }

  componentDidMount() {
    this.handleResolution();
    window.addEventListener('resize', this.handleResolution);
    HomeService.getRotationalBanner()
      .then(res => {
        if (res && res.data && res.data.data && res.data.data.length > 0) {
          setTimeout(() => {
            this.setState(
              {
                posts: res.data.data,
                sliderBackgroudImage: 0,
                loading: false
              },
              () => {
                this.handleResolution(res.data.data.length);
                this.setState({
                  loadingThumbnail: false
                });
              }
            );
          }, 500);
        }
      })
      .catch(err => {
        if (err && err.res) {
          console.log(err.res);
        }
      });

    this.setState({
      nav1: this.mainSlider,
      nav2: this.thumbSlider
    });
  }

  changeBackgroundImage = index => {
    this.setState({ sliderBackgroudImage: index, sliderAutoPlay: false });
  };

  handleResolution = (postLength = 0) => {
    let mainSliderSettings = this.state.mainSliderSettings;
    let thumbSliderSettings = this.state.thumbSliderSettings;
    let screen = Utilities.getScreenResolution();
    if (screen.width >= 1480 && screen.width <= 1980) {
      mainSliderSettings.centerPadding = '380px';
      thumbSliderSettings.slidesToShow = 13;
      if (postLength && postLength < 13) {
        thumbSliderSettings.slidesToShow = postLength;
        thumbSliderSettings.centerMode = false;
      }
    } else if (screen.width > 1280 && screen.width < 1480) {
      mainSliderSettings.centerPadding = '290px';
      thumbSliderSettings.slidesToShow = 13;
      if (postLength && postLength < 13) {
        thumbSliderSettings.slidesToShow = postLength;
        thumbSliderSettings.centerMode = false;
      }
    } else if (screen.width > 1136 && screen.width <= 1280) {
      mainSliderSettings.centerPadding = '240px';
      thumbSliderSettings.slidesToShow = 11;
      if (postLength && postLength < 11) {
        thumbSliderSettings.slidesToShow = postLength;
        thumbSliderSettings.centerMode = false;
      }
    } else if (screen.width >= 768 && screen.width <= 1024) {
      mainSliderSettings.centerPadding = '110px';
      thumbSliderSettings.slidesToShow = 7;
      if (postLength && postLength < 7) {
        thumbSliderSettings.slidesToShow = postLength;
        thumbSliderSettings.centerMode = false;
      }
    } else if (screen.width >= 568 && screen.width <= 767) {
      mainSliderSettings.centerPadding = '70px';
      thumbSliderSettings.slidesToShow = 5;
      if (postLength && postLength < 5) {
        thumbSliderSettings.slidesToShow = postLength;
        thumbSliderSettings.centerMode = false;
      }
    } else if (screen.width > 320 && screen.width <= 450) {
      mainSliderSettings.centerPadding = '48px';
      // mainSliderSettings.slidesToShow = 0.9;
      thumbSliderSettings.slidesToShow = 4;
      if (postLength && postLength < 4) {
        thumbSliderSettings.slidesToShow = postLength;
        thumbSliderSettings.centerMode = false;
      }
    }

    this.setState({
      mainSliderSettings: mainSliderSettings,
      thumbSliderSettings: thumbSliderSettings
    });
  };

  render() {
    const { posts, errorMsg, sliderBackgroudImage } = this.state;

    if (posts && posts.length == 0) {
      // return null;
    }

    return (
      <div className="banner">
        {!this.state.loading && (
          <div className="banner-carousel">
            <div className="banner-background"></div>
            <div className="shadow">
              <img src={Shadow} />
            </div>
            {posts && posts.length > 0 && (
              <div className="active-banner-image">
                <img src={posts[sliderBackgroudImage].full_image} />
              </div>
            )}
            <Slider
              {...this.state.mainSliderSettings}
              asNavFor={this.thumbSlider}
              ref={slider => (this.mainSlider = slider)}
              afterChange={index => this.changeBackgroundImage(index)}
              className="slider-for"
              // autoplay={this.state.sliderAutoPlay}
              // autoplaySpeed={1000}
            >
              {posts.length
                ? posts.map((post, key) => (
                    <div>
                      <img
                        onClick={
                          sliderBackgroudImage == key
                            ? () => window.open(post.navigation_link, '_blank')
                            : ''
                        }
                        src={post.full_image}
                        alt="image1"
                        className="img1 img-responsive"
                      ></img>
                    </div>
                  ))
                : null}
              {errorMsg ? <div>{errorMsg}</div> : null}
            </Slider>
          </div>
        )}
        {!this.state.loadingThumbnail && (
          <div className="banner-thumbnail">
            <Slider
              {...this.state.thumbSliderSettings}
              asNavFor={this.mainSlider}
              ref={slider => (this.thumbSlider = slider)}
              focusOnSelect={true}
              swipe={true}
            >
              {posts.length
                ? posts.map(post => (
                    <div>
                      <img
                        src={post.full_image}
                        alt="image1"
                        className="img img-responsive"
                      ></img>
                    </div>
                  ))
                : null}
              {errorMsg ? <div>{errorMsg}</div> : null}
            </Slider>
          </div>
        )}
      </div>
    );
  }
}
