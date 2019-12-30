import React, { Component, memo } from 'react';
import Slider from 'react-slick';
import './style.scss';
import HomeService from '../../../shared/services/HomeService';
import Utilities from '../../../shared/utilities';
import Shadow from '../../../assets/images/shadow.png';

class HomePageCarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: '',
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
        arrows: true,
        prevArrow: <this.SampleArrow />,
        nextArrow: <this.SampleArrow />
      },
      thumbSliderSettings: {
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 13,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        prevArrow: <this.SampleArrow />,
        nextArrow: <this.SampleArrow />
      },
      loading: true,
      loadingThumbnail: true,
      currentSlide: 0
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentSlide !== this.state.currentSlide) {
      this.thumbSlider.slickGoTo(this.state.currentSlide);
      this.mainSlider.slickGoTo(this.state.currentSlide);
      this.changeBackgroundImage(this.state.currentSlide);
    }
  }

  changeBackgroundImage = index => {
    setTimeout(() => {
      this.setState({ sliderBackgroudImage: index });
    }, 200);
    // this.thumbSlider.slickGoTo(index);
  };

  onLoad = () => {
    setTimeout(() => {
      this.setState({
        imageLoaded: 'show-shadow'
      });
    }, 500);
  };
  handleResolution = (postLength = 0) => {
    let mainSliderSettings = this.state.mainSliderSettings;
    let thumbSliderSettings = this.state.thumbSliderSettings;
    let screen = Utilities.getScreenResolution();
    mainSliderSettings.centerPadding = `${Math.round(
      (290 / 1366) * screen.width
    )}px`;
    // let slidesToShow = Math.round((13 / 1366) * screen.width);
    // thumbSliderSettings.slidesToShow = 9;
    // if (this.state.posts.length < thumbSliderSettings.slidesToShow) {
    //   thumbSliderSettings.slidesToShow =
    //     this.state.posts.length < 5 ? 4 : this.state.posts.length;
    //   thumbSliderSettings.centerMode = false;
    // }
    if (window.innerWidth >= 1480 && window.innerWidth <= 1980) {
      thumbSliderSettings.slidesToShow = 13;
      if (this.state.posts.length < 13) {
        thumbSliderSettings.slidesToShow = this.state.posts.length;
        thumbSliderSettings.centerMode = false;
      }
    } else if (window.innerWidth > 1280 && window.innerWidth < 1480) {
      thumbSliderSettings.slidesToShow = 13;
      if (this.state.posts.length < 13) {
        thumbSliderSettings.slidesToShow = this.state.posts.length;
        thumbSliderSettings.centerMode = false;
      }
    } else if (window.innerWidth > 1136 && window.innerWidth <= 1280) {
      thumbSliderSettings.slidesToShow = 11;
      if (this.state.posts.length < 11) {
        thumbSliderSettings.slidesToShow = this.state.posts.length;
        thumbSliderSettings.centerMode = false;
      }
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      thumbSliderSettings.slidesToShow = 9;
      if (this.state.posts.length < 9) {
        thumbSliderSettings.slidesToShow = this.state.posts.length;
        thumbSliderSettings.centerMode = false;
      }
    } else if (window.innerWidth >= 568 && window.innerWidth <= 767) {
      thumbSliderSettings.slidesToShow = 5;
      if (this.state.posts.length < 5) {
        thumbSliderSettings.slidesToShow = this.state.posts.length;
        thumbSliderSettings.centerMode = false;
      }
    } else if (window.innerWidth >= 320 && window.innerWidth <= 450) {
      thumbSliderSettings.slidesToShow = 4;
      if (this.state.posts.length < 4) {
        thumbSliderSettings.slidesToShow = this.state.posts.length;
        thumbSliderSettings.centerMode = false;
      }
    }

    this.setState({
      mainSliderSettings: mainSliderSettings,
      thumbSliderSettings: thumbSliderSettings
    });
  };

  SampleArrow = props => {
    const { className, style, onClick, currentSlide } = props;
    this.setState({
      currentSlide
    });
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };

  render() {
    const { posts, errorMsg, sliderBackgroudImage } = this.state;

    if (posts && posts.length == 0) {
      // return null;
    }

    return (
      <div className={`banner ${this.state.imageLoaded}`}>
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
              // asNavFor={this.thumbSlider}
              ref={slider => (this.mainSlider = slider)}
              // afterChange={index => this.changeBackgroundImage(index)}
              className="slider-for"
              swipe={true}
              focusOnSelect={true}
              // autoplay={this.state.sliderAutoPlay}
              // autoplaySpeed={1000}
            >
              {posts.length
                ? posts.map((post, key) => (
                    <div>
                      <img
                        onClick={() => {
                          this.thumbSlider.slickGoTo(key);
                          this.changeBackgroundImage(key);
                          if (sliderBackgroudImage == key) {
                            window.open(post.navigation_link, '_blank');
                          }
                        }}
                        src={post.full_image}
                        alt="image1"
                        className="img1 img-responsive"
                        onLoad={this.onLoad}
                      />
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
              // asNavFor={this.mainSlider}
              ref={slider => (this.thumbSlider = slider)}
              focusOnSelect={true}
              swipe={true}
            >
              {posts.length
                ? posts.map((post, key) => (
                    <div
                      key={post.title}
                      onClick={() => {
                        this.mainSlider.slickGoTo(key);
                        this.changeBackgroundImage(key);
                      }}
                    >
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

export default memo(HomePageCarouselContainer);
