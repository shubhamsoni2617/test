import React, { Component } from 'react';
import Slider from 'react-slick';
import './style.scss';
import HomeService from '../../../shared/services/HomeService';
import Utilities from '../../../shared/utilities';
import Shadow from '../../../assets/images/shadow.png';

// const mainSliderSettings = {
//   className: 'center',
//   centerMode: true,
//   infinite: true,
//   focusOnSelect: true,
//   centerPadding: Utilities.mobilecheck() ? '60px' : '250px',
//   slidesToShow: 1,
//   speed: 500,
//   arrows: true
// };
// const thumbSliderSettings = {
//   centerMode: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: Utilities.mobilecheck() ? 3 : 13,
//   slidesToScroll: 1,
//   focusOnSelect: true,
//   arrows: true
// };

export default class HomePageCarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nav1: null,
      nav2: null,
      posts: [],
      errorMsg: '',
      sliderBackgroudImage: 0,

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
      }
    };
  }

  componentDidMount() {
    this.handleResolution();
    window.addEventListener('resize', this.handleResolution);
    HomeService.getRotationalBanner()
      .then(res => {
        if (res && res.data) {
          this.setState({
            posts: res.data.data,
            sliderBackgroudImage: res.data.data.length - 1
          });
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
    this.setState({ sliderBackgroudImage: index });
  };

  handleResolution = () => {
    let mainSliderSettings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      focusOnSelect: true,
      centerPadding: '250px',
      slidesToShow: 1,
      speed: 500,
      arrows: true
    };
    let thumbSliderSettings = {
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 13,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: true
    };
    let screen = Utilities.getScreenResolution();
    if (screen.width >= 1366 && screen.width <= 1980) {
      mainSliderSettings.centerPadding = '300px';
      thumbSliderSettings.slidesToShow = 13;
    } else if (screen.width > 1024 && screen.width < 1366) {
      mainSliderSettings.centerPadding = '180px';
      thumbSliderSettings.slidesToShow = 13;
    } else if (screen.width > 812 && screen.width <= 1024) {
      mainSliderSettings.centerPadding = '140px';
      thumbSliderSettings.slidesToShow = 8;
    } else if (screen.width >= 568 && screen.width <= 840) {
      mainSliderSettings.centerPadding = '100px';
      thumbSliderSettings.slidesToShow = 6;
    } else if (screen.width > 300 && screen.width <= 450) {
      mainSliderSettings.centerPadding = '50px';
      thumbSliderSettings.slidesToShow = 5;
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
        <div className="banner-carousel">
          <div className="shadow">
            <img src={Shadow} />
          </div>
          {posts.length > 0 && (
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
          >
            {posts.length
              ? posts.map((post, key) => (
                  <div>
                    <img
                      onClick={
                        sliderBackgroudImage == key
                          ? () => window.open('someLink', '_blank')
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
        <div className="banner-thumbnail">
          <Slider
            {...this.state.thumbSliderSettings}
            asNavFor={this.mainSlider}
            ref={slider => (this.thumbSlider = slider)}
            focusOnSelect={true}
            swipe={false}
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
      </div>
    );
  }
}
