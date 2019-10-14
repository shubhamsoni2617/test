import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import Constants from '../../../shared/constants';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Timer from '../../../shared/components/Timer';
import Image from '../../../shared/components/Image';

export default class PromotionCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      promotions: [],
      expiredText: ''
    };
    this.slides = {
      promotions: [
        {
          slides: [
            {
              url: '1'
            },
            {
              url: '2'
            }
          ]
        },
        {
          slides: [
            {
              url: '3'
            }
          ]
        },
        {
          slides: [
            {
              url: '4'
            }
          ]
        },
        {
          slides: [
            {
              url: '5'
            },
            {
              url: '6'
            }
          ]
        },
        {
          slides: [
            {
              url: '7'
            },
            {
              url: '8'
            }
          ]
        },
        {
          slides: [
            {
              url: '9'
            }
          ]
        },
        {
          slides: [
            {
              url: '10'
            }
          ]
        },
        {
          slides: [
            {
              url: '11'
            },
            {
              url: '12'
            }
          ]
        }
      ]
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
    this.getPromotions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    this.setState({ width: window.innerWidth });
  }

  handlePromotionExpired = text => {
    this.setState({ text });
  };

  getPromotions() {
    const params = {
      client: Constants.CLIENT,
      first: 1
      // limit: 10
    };
    HomeService.getPromotions(params)
      .then(res => {
        if (res && res.data) {
          this.setState({ promotions: res.data.data });
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  }

  render() {
    const { width } = this.state;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      // rows: 2,
      // slidesPerRow: 4,
      slidesToShow: 4,
      slidesToScroll: 3,
      customPaging: i => {
        return (
          <div className="dots-group">
            <span />
          </div>
        );
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        }
      ]
    };
    return (
      <section className="promotions">
        <div className="container-fluid">
          <div className="section-top-wrapper">
            <h2>
              Promotions{' '}
              <span className="promotions-animated-img">
                <img
                  src="assets/images/illustration.svg"
                  className="img-fluid"
                  alt="promotions"
                />
              </span>
            </h2>
            <div className="carousel-dots">
              <a href="/promotions" onClick={e => e.preventDefault()}>
                See all{' '}
                <img
                  src="assets/images/right-arrow.svg"
                  className="img-fluid"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
          <div className="grid-container">
            {width <= Constants.MOBILE_BREAK_POINT ? (
              <div>
                {this.slides.promotions.map((promo, idx) => {
                  return (
                    <div className="item" key={idx}>
                      {promo.slides.length === 2 &&
                        promo.slides.map(slide => {
                          return (
                            <div key={slide.url} className="item-wrapper">
                              <div className="promotions-img">
                                <div className="item-img">
                                  <img
                                    src="assets/images/headrock.jpg"
                                    className="img-fluid"
                                    alt="headrock"
                                  />
                                </div>
                                <div className="promotion-timer">
                                  <ul>
                                    <li className="timer-watch">
                                      <img
                                        src="assets/images/stopwatch.svg"
                                        className="img-fluid"
                                        alt="watch"
                                      />
                                    </li>
                                    <li className="timer-days">
                                      <span>70</span>
                                      <span className="timer-label">Days</span>
                                    </li>
                                    <li className="timer-hours">
                                      <span>11</span>
                                      <span className="timer-label">Hrs</span>
                                    </li>
                                    <li className="timer-minutes">
                                      <span>29</span>
                                      <span className="timer-label">Mins</span>
                                    </li>
                                    <li className="timer-seconds">
                                      <span>58</span>
                                      <span className="timer-label">Sec</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h3>HeadRock VR</h3>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <Fragment>
                <Slider {...settings}>
                  {this.slides.promotions.map((promo, index) => {
                    return (
                      promo.slides.length === 2 &&
                      Utilities.mobileAndTabletcheck() && (
                        <div key={index} className="item">
                          {promo.slides.length === 2 &&
                            promo.slides.map(slide => {
                              return (
                                <div key={slide.url} className="item-wrapper">
                                  <div className="promotions-img">
                                    <div className="item-img">
                                      <img
                                        src="assets/images/headrock.jpg"
                                        className="img-fluid"
                                        alt="headrock"
                                      />
                                    </div>
                                    <div className="promotion-timer">
                                      <ul>
                                        <li className="timer-watch">
                                          <img
                                            src="assets/images/stopwatch.svg"
                                            className="img-fluid"
                                            alt="watch"
                                          />
                                        </li>
                                        <li className="timer-days">
                                          <span>70</span>
                                          <span className="timer-label">
                                            Days
                                          </span>
                                        </li>
                                        <li className="timer-hours">
                                          <span>11</span>
                                          <span className="timer-label">
                                            Hrs
                                          </span>
                                        </li>
                                        <li className="timer-minutes">
                                          <span>29</span>
                                          <span className="timer-label">
                                            Mins
                                          </span>
                                        </li>
                                        <li className="timer-seconds">
                                          <span>58</span>
                                          <span className="timer-label">
                                            Sec
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h3>HeadRock VR</h3>
                                </div>
                              );
                            })}
                        </div>
                      )
                    );
                  })}
                </Slider>

                {!Utilities.mobileAndTabletcheck() && (
                  <Slider {...settings}>
                    {this.slides.promotions.map((promo, index) => {
                      return (
                        <div key={index} className="item">
                          {promo.slides.length === 2 &&
                            promo.slides.map(slide => {
                              return (
                                <div key={slide.url} className="item-wrapper">
                                  <div className="promotions-img">
                                    <div className="item-img">
                                      <img
                                        src="assets/images/headrock.jpg"
                                        className="img-fluid"
                                        alt="headrock"
                                      />
                                    </div>
                                    <div className="promotion-timer">
                                      <ul>
                                        <li className="timer-watch">
                                          <img
                                            src="assets/images/stopwatch.svg"
                                            className="img-fluid"
                                            alt="watch"
                                          />
                                        </li>
                                        <li className="timer-days">
                                          <span>70</span>
                                          <span className="timer-label">
                                            Days
                                          </span>
                                        </li>
                                        <li className="timer-hours">
                                          <span>11</span>
                                          <span className="timer-label">
                                            Hrs
                                          </span>
                                        </li>
                                        <li className="timer-minutes">
                                          <span>29</span>
                                          <span className="timer-label">
                                            Mins
                                          </span>
                                        </li>
                                        <li className="timer-seconds">
                                          <span>58</span>
                                          <span className="timer-label">
                                            Sec
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <h3>HeadRock VR</h3>
                                </div>
                              );
                            })}
                          {promo.slides.length === 1 &&
                            promo.slides.map(slide => {
                              return (
                                <div
                                  key={slide.url}
                                  className="item-wrapper full-promo"
                                >
                                  <div className="promotions-img">
                                    <div className="item-img">
                                      <img
                                        src="assets/images/master-card.jpg"
                                        className="img-fluid"
                                        alt="privilage"
                                      />
                                    </div>
                                  </div>
                                  <h3>
                                    Book with Mastercard and enjoy these
                                    privileges!
                                  </h3>
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}
                  </Slider>
                )}
              </Fragment>
            )}

            {/* <Slider {...settings}>
              {this.state.promotions &&
                this.state.promotions.map((promotion, index) => {
                  return (
                    <div key={promotion.id} className="item-wrapper">
                      <div className="promotions-img">
                        <div className="item-img">
                          <Image
                            src={promotion.featured_image}
                            className="img-fluid"
                            alt="promotion-img"
                            type="Horizontal"
                          />
                        </div>
                        {promotion.show_timer === '1' && (
                          <div className="promotion-timer">
                            <ul>
                              {!this.state.expiredText ? (
                                <ul>
                                  <li className="timer-watch">
                                    <img
                                      src="assets/images/stopwatch.svg"
                                      className="img-fluid"
                                      alt="watch"
                                    />
                                  </li>
                                  <Timer
                                    endDate={promotion.publish_end_date}
                                    promotionExpired={
                                      this.handlePromotionExpired
                                    }
                                  />
                                </ul>
                              ) : null}
                            </ul>
                          </div>
                        )}
                      </div>
                      <h3>{promotion.title}</h3>
                    </div>
                  );
                })}
            </Slider> */}
          </div>
        </div>
      </section>
    );
  }
}
