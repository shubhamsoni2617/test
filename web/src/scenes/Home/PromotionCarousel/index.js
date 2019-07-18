import React, { Component } from "react";
import Slider from "react-slick";

export default class PromotionCarousel extends Component {

  constructor(props){
    super(props);
      this.slides = {
        "promotions": [
          {
            "slides": [
              {
                "url": "1"
              },
              {
                "url": "2"
              }
            ]
          },
          {
            "slides": [
              {
                "url": "3"
              }
            ]
          },
          {
            "slides": [
              {
                "url": "4"
              }
            ]
          },
          {
            "slides": [
              {
                "url": "5"
              },
              {
                "url": "6"
              }
            ]
          },
          {
            "slides": [
              {
                "url": "7"
              },
              {
                "url": "8"
              }
            ]
          },
          {
            "slides": [
              {
                "url": "9"
              }
            ]
          },
          {
            "slides": [
              {
                "url": "10"
              }
            ]
          },
          {
            "slides": [
              {
                "url": "11"
              },
              {
                "url": "12"
              }
            ]
          }
        ]
      }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3
    };
    return (
      <section className="promotions">
               <div className="container-fluid">
                  <div className="section-top-wrapper">
                     <h2>Promotions <span className="promotions-animated-img"><img src="assets/images/illustration.svg" className="img-fluid" alt="promotions-image" /></span></h2>
                     <div className="carousel-dots">
                        <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                           alt="arrow" /></a>
                        <div className="dots-group">
                           <span className="active"><a href="/"></a></span>
                           <span><a href="/"></a></span>
                           <span><a href="/"></a></span>
                        </div>
                     </div>
                  </div>
                  <div className="grid-container">
                  <Slider {...settings}>
                    {this.slides.promotions.map((promo) => {
                      return (
                        <div>
                          {promo.slides.length == 2 && promo.slides.map((slide) => {
                            return (
                              <div className="item">
                                  <div className="item-wrapper">
                                    <div className="promotions-img">
                                        <div className="item-img">
                                          <img src="assets/images/headrock.jpg" className="img-fluid" alt="headrock" />
                                        </div>
                                        <div className="promotion-timer">
                                          <ul>
                                              <li className="timer-watch">
                                                <img src="assets/images/stopwatch.svg" className="img-fluid" alt="watch" />
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
                              </div>
                            )
                          })}
                          {promo.slides.length == 1 && promo.slides.map((slide) => {
                            return (
                              <div className="item">
                              <div className="item-wrapper">
                                <div className="promotions-img">
                                    <div className="item-img">
                                      <img src="assets/images/master-card.jpg" className="img-fluid" alt="privilage" />
                                    </div>
                                </div>
                                <h3>Book with Mastercard and enjoy these privileges!</h3>
                              </div>
                          </div>
                            )
                          })}
                        </div>
                      );
                    })}
                  </Slider>
              </div>
            </div>
        </section>
    );
  }
}