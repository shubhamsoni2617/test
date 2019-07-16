import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import './style.scss';
import CurrentlyShowing from '../../shared/components/Sliders/CurrentlyShowing';

export default class Home extends Component {

  render() {
    
    return (
        
        <div>
          {/* Home page Banner start */}
          <section className="st-banner">
              <div className="st-banner-carousel">
                  <div className="st-active-banner-image">
                      <img src="assets/images/slide1.jpg" alt="active-slide" className="img-fluid" />
                  </div>
                  <ul>
                      <li className="slide"><img src="assets/images/slide1.jpg" className="img-fluid" alt="slide1" /></li>
                      <li className="slide active"><img src="assets/images/slide1.jpg" className="img-fluid" alt="slide2" /></li>
                      <li className="slide"><img src="assets/images/slide1.jpg" className="img-fluid" alt="slide3" /></li>
                  </ul>
                  <div className="st-carousel-navigation">
                      <div className="st-left-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/left-oval-arrow.svg" className="img-fluid" alt="left-navigation" />
                          </a>
                      </div>
                      <div className="st-right-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/right-oval-arrow.svg" className="img-fluid" alt="right-navigation" />
                          </a>
                      </div>
                  </div>
              </div>
              <div className="st-banner-thumbnail">
                  <ul>
                      <li><a href="javascript:void(0);"><img src="assets/images/thumbnail.png" className="img-fluid"
                                  alt="" /></a></li>
                      <li><a href="javascript:void(0);"><img src="assets/images/thumbnail.png" className="img-fluid"
                                  alt="" /></a></li>
                      <li><a href="javascript:void(0);"><img src="assets/images/thumbnail.png" className="img-fluid"
                                  alt="" /></a></li>
                      <li><a href="javascript:void(0);"><img src="assets/images/thumbnail.png" className="img-fluid"
                                  alt="" /></a></li>
                      <li><a href="javascript:void(0);"><img src="assets/images/thumbnail.png" className="img-fluid"
                                  alt="" /></a></li>
                      <li><a href="javascript:void(0);"><img src="assets/images/thumbnail.png" className="img-fluid"
                                  alt="" /></a></li>
                      <li><a href="javascript:void(0);"><img src="assets/images/thumbnail.png" className="img-fluid"
                                  alt="" /></a></li>
                  </ul>
              </div>
          </section>
          {/* Home page Banner end */}
  
          {/* Top-picks-for-you section start */}
          <section className="st-top-picks-for-you">
              <div className="container-fluid">
                  <h3 className="st-section-title">Top Picks For You</h3>
                  <div className="grid-container">
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="item-desc">
                                  <span className="st-video-icon"><img src="assets/images/video-icon.svg" /></span>
                                  <div className="st-item-img">
                                      <img src="assets/images/kurios.png" className="img-fluid st-item-image" alt="kurios" />
                                  </div>
                                  <span className="st-category st-musical st-top-picks-category">Musical</span>
                                  <div className="item-overlay st-musical-overlay">
                                      <div className="st-overlay-wrapper">
                                          <p className="st-picks-title">Kurios Cabinet of Curiosities</p>
                                          <p className="st-picks-date-time">Fri, 19 Apr- Sun, 19 May 2019</p>
                                          <p className="st-picks-desc">Under the big top Bayfront Avenue, beside Marina Bay
                                              Sands</p>
                                          <p className="st-picks-desc">Cirque du Soleil comes to Singapore with its most
                                              acclaimed touring show, KURIOS – Cabinet of Curiosities. </p>
                                      </div>
                                  </div>
                              </div>
                              <p className="st-item-title">Kurios Cabinet of Curiosities</p>
                              <a href="javascript:void(0);" className="st-item-title-overlay"><span>BUY NOW </span><img
                                      src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="item-desc">
                                  <div className="st-item-img">
                                      <img src="assets/images/katya.jpg" className="img-fluid st-item-image" alt="katya" />
                                  </div>
                                  <span className="st-category st-comedy st-top-picks-category">Comedy</span>
                                  <div className="item-overlay st-comedy-overlay">
                                      <div className="st-overlay-wrapper">
                                          <p className="st-picks-title">Katya: Help Me I’m Dying</p>
                                          <p className="st-picks-date-time">Fri, 19 Apr- Sun, 19 May 2019</p>
                                          <p className="st-picks-desc">Under the big top Bayfront Avenue, beside Marina Bay
                                              Sands</p>
                                          <p className="st-picks-desc">Cirque du Soleil comes to Singapore with its most
                                              acclaimed touring show, KURIOS – Cabinet of Curiosities. </p>
                                      </div>
                                  </div>
                              </div>
                              <p className="st-item-title">Katya: Help Me I’m Dying</p>
                              <a href="javascript:void(0);" className="st-item-title-overlay"><span>BUY NOW </span><img
                                      src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="item-desc">
                                  <span className="st-video-icon"><img src="assets/images/video-icon.svg" /></span>
                                  <div className="st-item-img">
                                      <img src="assets/images/ballet.jpg" className="img-fluid st-item-image" alt="ballet" />
                                  </div>
                                  <span className="st-category st-dance st-top-picks-category">Dance</span>
                                  <div className="item-overlay st-dance-overlay">
                                      <div className="st-overlay-wrapper">
                                          <p className="st-picks-title">Ballet Under The Stars Presented…</p>
                                          <p className="st-picks-date-time">Fri, 19 Apr- Sun, 19 May 2019</p>
                                          <p className="st-picks-desc">Under the big top Bayfront Avenue, beside Marina Bay
                                              Sands
                                              </p>
                                          <p className="st-picks-desc">Cirque du Soleil comes to Singapore with its most
                                              acclaimed touring show, KURIOS – Cabinet of Curiosities. 
                                            </p>
                                      </div>
                                  </div>
                              </div>
                              <p className="st-item-title">Ballet Under The Stars Presented…</p>
                              <a href="javascript:void(0);" className="st-item-title-overlay"><span>BUY NOW </span><img
                                      src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="item-desc">
                                  <div className="st-item-img">
                                      <img src="assets/images/panthom-of-opera.jpg" className="img-fluid st-item-image"
                                          alt="panthom-of-opera" />
                                  </div>
                                  <span className="st-category st-musical st-top-picks-category">Musical</span>
                                  <div className="item-overlay st-musical-overlay">
                                      <div className="st-overlay-wrapper">
                                          <p className="st-picks-title">The Phantom Of The Opera</p>
                                          <p className="st-picks-date-time">Fri, 19 Apr- Sun, 19 May 2019</p>
                                          <p className="st-picks-desc">Under the big top Bayfront Avenue, beside Marina Bay
                                              Sands</p>
                                          <p className="st-picks-desc">Cirque du Soleil comes to Singapore with its most
                                              acclaimed touring show, KURIOS – Cabinet of Curiosities. </p>
                                      </div>
                                  </div>
                              </div>
                              <p className="st-item-title">The Phantom Of The Opera</p>
                              <a href="javascript:void(0);" className="st-item-title-overlay"><span>BUY NOW </span><img
                                      src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="item-desc">
                                  <span className="st-video-icon"><img src="assets/images/video-icon.svg" /></span>
                                  <div className="st-item-img">
                                      <img src="assets/images/kurios.png" className="img-fluid st-item-image" alt="kurios" />
                                  </div>
                                  <span className="st-category st-musical st-top-picks-category">Musical</span>
                                  <div className="item-overlay st-musical-overlay">
                                      <div className="st-overlay-wrapper">
                                          <p className="st-picks-title">Kurios Cabinet of Curiosities</p>
                                          <p className="st-picks-date-time">Fri, 19 Apr- Sun, 19 May 2019</p>
                                          <p className="st-picks-desc">Under the big top Bayfront Avenue, beside Marina Bay
                                              Sands</p>
                                          <p className="st-picks-desc">Cirque du Soleil comes to Singapore with its most
                                              acclaimed touring show, KURIOS – Cabinet of Curiosities. </p>
                                      </div>
                                  </div>
                              </div>
                              <p className="st-item-title">Kurios Cabinet of Curiosities</p>
                              <a href="javascript:void(0);" className="st-item-title-overlay"><span>BUY NOW </span><img
                                      src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="item-desc">
                                  <span className="st-video-icon"><img src="assets/images/video-icon.svg" /></span>
                                  <div className="st-item-img">
                                      <img src="assets/images/ballet.jpg" className="img-fluid st-item-image" alt="ballet" />
                                  </div>
                                  <span className="st-category st-dance st-top-picks-category">Dance</span>
                                  <div className="item-overlay st-dance-overlay">
                                      <div className="st-overlay-wrapper">
                                          <p className="st-picks-title">Ballet Under The Stars Presented…</p>
                                          <p className="st-picks-date-time">Fri, 19 Apr- Sun, 19 May 2019</p>
                                          <p className="st-picks-desc">Under the big top Bayfront Avenue, beside Marina Bay
                                              Sands</p>
                                          <p className="st-picks-desc">Cirque du Soleil comes to Singapore with its most
                                              acclaimed touring show, KURIOS – Cabinet of Curiosities. </p>
                                      </div>
                                  </div>
                              </div>
                              <p className="st-item-title">Ballet Under The Stars Presented…</p>
                              <a href="javascript:void(0);" className="st-item-title-overlay"><span>BUY NOW </span><img
                                      src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                          </div>
                      </div>
                  </div>
                  <div className="st-carousel-navigation">
                      <div className="st-left-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                          </a>
                      </div>
                      <div className="st-right-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/right-arrow-blue.svg" className="img-fluid" alt="right-navigation" />
                          </a>
                      </div>
                  </div>
              </div>
          </section>
          {/* Top-picks-for-you section end */}
  
          {/* Gift-card section start  */}
          <section className="st-gift-cart">
              <div className="st-gift-cart-image">
                  <img src="assets/images/gift-card.png" className="img-fluid" alt="Gift-cart" />
              </div>
          </section>
           {/* Gift-card section end  */}
  
           {/* featured events section start  */}
          <section className="st-featured-events">
              <div className="container-fluid">
                  <div className="st-section-top-wrapper">
                      <h3 className="st-section-title">Featured Events</h3>
                      <div className="st-carousel-dots">
                          <a href="javascript:void(0);">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                  alt="arrow" /></a>
                          <div className="st-dots-group">
                              <span className="active"><a href="javascript:void(0);"></a></span>
                              <span><a href="javascript:void(0);"></a></span>
                              <span><a href="javascript:void(0);"></a></span>
                          </div>
                      </div>
                  </div>
                  <div className="grid-container">
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/explore.png" className="img-fluid" alt="explore" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">SSO Red Balloon Series: Rhythums, Rites
                              </a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
  
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/pretty-girls.jpg" className="img-fluid" alt="pretty-girls" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">This is what happens to pretty girls</a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
                      </div>
  
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/dance-theature.jpg" className="img-fluid"
                                          alt="dance-theature" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">Singapore Dance Theatre - Season Pass
                                  2019</a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
  
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty-keos" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">SSO Red Balloon Series: Rhythums, Rites
                              </a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
                      </div>
  
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">Aladdin - The Hit Broadway Musical </a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
  
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/voice-legends.jpg" className="img-fluid" alt="voice-legends" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">Voice of Legends 2019</a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
                      </div>
  
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/pride-passion.jpg" className="img-fluid" alt="pride-passion" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">Singapore Dance Theatre - Season Pass
                                  2019</a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
  
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty-keos" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">SSO Red Balloon Series: Rhythums, Rites
                              </a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
                      </div>
  
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">Aladdin - The Hit Broadway Musical</a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
  
                          <div className="st-item-wrapper">
                              <div className="st-featured-item-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/voice-legends.jpg" className="img-fluid" alt="voice-legends" />
                                  </div>
                                  <span className="st-category">Dance</span>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">SSO Red Balloon Series: Rhythums, Rites
                              </a>
                              <p className="st-featured-date">Fri, 3 May 2019</p>
                              <p className="st-featured-desc">Esplanade Concert Hall</p>
                          </div>
                      </div>
                  </div>
                  <div className="st-carousel-navigation">
                      <div className="st-left-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                          </a>
                      </div>
                      <div className="st-right-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/right-arrow-blue.svg" className="img-fluid" alt="right-navigation" />
                          </a>
                      </div>
                  </div>
              </div>
          </section>
           {/* featured events section end  */}
           {/* currently showing section start  */}
            <CurrentlyShowing />
           {/* currently showing section end  */}
  
           {/* Promotions section start  */}
          <section className="st-promotions">
              <div className="container-fluid">
                  <div className="st-section-top-wrapper">
                      <h3 className="st-section-title">Promotions <span className="st-promotions-animated-img"><img
                                  src="assets/images/illustration.svg" className="img-fluid" alt="promotions-image" /></span>
                      </h3>
                      <div className="st-carousel-dots">
                          <a href="javascript:void(0);">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                  alt="arrow" /></a>
                          <div className="st-dots-group">
                              <span className="active"><a href="javascript:void(0);"></a></span>
                              <span><a href="javascript:void(0);"></a></span>
                              <span><a href="javascript:void(0);"></a></span>
                          </div>
                      </div>
                  </div>
                  <div className="grid-container">
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-promotions-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/headrock.jpg" className="img-fluid" alt="headrock" />
                                  </div>
                                  <div className="st-promotion-timer">
                                      <ul>
                                          <li className="st-timer-watch">
                                              <img src="assets/images/stopwatch.svg" className="img-fluid" alt="watch" />
                                          </li>
                                          <li className="st-timer-days">
                                              <span>70</span>
                                              <span className="st-timer-label">Days</span>
                                          </li>
                                          <li className="st-timer-hours">
                                              <span>11</span>
                                              <span className="st-timer-label">Hrs</span>
                                          </li>
                                          <li className="st-timer-minutes">
                                              <span>29</span>
                                              <span className="st-timer-label">Mins</span>
                                          </li>
                                          <li className="st-timer-seconds">
                                              <span>58</span>
                                              <span className="st-timer-label">Sec</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">HeadRock VR</a>
                          </div>
                          <div className="st-item-wrapper">
                              <div className="st-promotions-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/live-up.jpg" className="img-fluid" alt="headrock" />
                                  </div>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">LiveUp Partnership</a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-promotions-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/master-card.jpg" className="img-fluid" alt="privilage" />
                                  </div>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">Book with Mastercard and enjoy these
                                  privileges!</a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-promotions-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/mozart36.jpg" className="img-fluid" alt="privilage" />
                                  </div>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">Mozart 36</a>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-promotions-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/headrock.jpg" className="img-fluid" alt="headrock" />
                                  </div>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">HeadRock VR</a>
                          </div>
                          <div className="st-item-wrapper">
                              <div className="st-promotions-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/peter-blue.jpg" className="img-fluid" alt="headrock" />
                                  </div>
                              </div>
                              <a href="javascript:void(0);" className="st-item-title">LiveUp Partnership</a>
                          </div>
                      </div>
                  </div>
                  <div className="st-carousel-navigation">
                      <div className="st-left-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                          </a>
                      </div>
                      <div className="st-right-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/right-arrow-blue.svg" className="img-fluid" alt="right-navigation" />
                          </a>
                      </div>
                  </div>
              </div>
          </section>
           Promotions section end 
  
           Trending now section start 
          <section className="st-trending-now">
              <div className="container-fluid">
                  <h3 className="st-section-title">Trending Now</h3>
                  <div className="grid-container">
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
  
                                  <div className="st-item-img">
                                      <img src="assets/images/kurios.png" className="img-fluid" alt="kurios" />
                                  </div>
                                  <div className="st-video-icon">
                                      <img src="assets/images/video-icon.svg" className="img-fluid" alt="video-icon" />
                                  </div>
                              </div>
                              <p className="st-item-title">Kurios Cabinet of Curiosities</p>
                              <p className="st-trending-now-date">Thu, 2 May 2019</p>
                              <p className="st-trending-now-text">Esplanade Concert Hall</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/trending-now.jpg" className="img-fluid" alt="trending-now" />
                                  </div>
                              </div>
                              <p className="st-item-title">Singapore Dance Theatre- Season Pass…</p>
                              <p className="st-trending-now-date">Thu, 2 May 2019</p>
                              <p className="st-trending-now-text">Various Venues</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="trending-hetty" />
                                  </div>
                              </div>
                              <p className="st-item-title">Hetty Koes Endang (Indonesia)</p>
                              <p className="st-trending-now-date">Thu, 2 May 2019</p>
                              <p className="st-trending-now-text">Esplanade Concert Hall</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/trending-now.jpg" className="img-fluid" alt="trending-now" />
                                  </div>
                              </div>
                              <p className="st-item-title">Singapore Dance Theatre- Season Pass…</p>
                              <p className="st-trending-now-date">Thu, 2 May 2019</p>
                              <p className="st-trending-now-text">Various Venues</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty" />
                                  </div>
                              </div>
                              <p className="st-item-title">Hetty Koes Endang (Indonesia)</p>
                              <p className="st-trending-now-date">Sun, 21 Jul 2019</p>
                              <p className="st-trending-now-text">Esplanade Concert Hall</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                                  </div>
                              </div>
                              <p className="st-item-title">Aladdin - The Hit Broadway Musical</p>
                              <p className="st-trending-now-date">Sun, 21 Jul 2019</p>
                              <p className="st-trending-now-text">Marina Bay Sands</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/voice-legends.jpg" className="img-fluid" alt="voicelegends" />
                                  </div>
                              </div>
                              <p className="st-item-title">Voice of Legends 2019</p>
                              <p className="st-trending-now-date">Thu, 2 May 2019</p>
                              <p className="st-trending-now-text">Suntec Convention Centre</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/trending-now.jpg" className="img-fluid" alt="trending-now" />
                                  </div>
                              </div>
                              <p className="st-item-title">Singapore Dance Theatre- Season Pass…</p>
                              <p className="st-trending-now-date">Thu, 2 May 2019</p>
                              <p className="st-trending-now-text">Various Venues</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <span className="st-category">Dance</span>
                              <div className="st-trending-now-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty" />
                                  </div>
                              </div>
                              <p className="st-item-title">Hetty Koes Endang (Indonesia)</p>
                              <p className="st-trending-now-date">Thu, 2 May 2019</p>
                              <p className="st-trending-now-text">Esplanade Concert Hall</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
           {/* Trending now section end  */}
  
           {/* What's new section start  */}
          <section className="st-whats-new">
              <div className="container-fluid">
                  <div className="st-section-top-wrapper">
                      <h3 className="st-section-title">What's New</h3>
                      <div className="st-carousel-dots">
                          <a href="javascript:void(0);">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                  alt="arrow" /></a>
                          <div className="st-dots-group">
                              <span className="active"><a href="javascript:void(0);"></a></span>
                              <span><a href="javascript:void(0);"></a></span>
                              <span><a href="javascript:void(0);"></a></span>
                          </div>
                      </div>
                  </div>
                  <div className="grid-container">
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-currently-showing-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/atul-khatri.jpg" className="img-fluid" alt="atul-khatri" />
                                  </div>
                              </div>
                              <span className="st-category st-comedy">Comedy</span>
                              <p className="st-currently-showing-date">Thu, 2 May 2019</p>
                              <p className="st-item-title">Atul Khatri - Live in Singapore</p>
                              <p className="st-currently-showing-place">Sota Concert Hall</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-currently-showing-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios" />
                                  </div>
                              </div>
                              <span className="st-category st-musical">Musical</span>
                              <p className="st-currently-showing-date">Sun, 21 Jul 2019</p>
                              <p className="st-item-title">KURIOS – Cabinet of Curiosities</p>
                              <p className="st-currently-showing-place">Marina Bay Sands Singapore</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-currently-showing-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/panthom-of-opera.jpg" className="img-fluid"
                                          alt="panthom-of-opera" />
                                  </div>
                              </div>
                              <span className="st-category st-musical">Musical</span>
                              <p className="st-currently-showing-date">Thu, 2 May 2019</p>
                              <p className="st-item-title">Atul Khatri - Live in Singapore</p>
                              <p className="st-currently-showing-place">Sota Concert Hall</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-currently-showing-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/atul-khatri.jpg" className="img-fluid" alt="atul-khatri" />
                                  </div>
                              </div>
                              <span className="st-category st-comedy">Comedy</span>
                              <p className="st-currently-showing-date">Sun, 21 Jul 2019</p>
                              <p className="st-item-title">KURIOS – Cabinet of Curiosities</p>
                              <p className="st-currently-showing-place">Marina Bay Sands Singapore</p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-currently-showing-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios" />
                                  </div>
                              </div>
                              <span className="st-category st-musical">Musical</span>
                              <p className="st-currently-showing-date">Sat, 8 Jun 2019</p>
                              <p className="st-item-title">The Phantom of Opera</p>
                              <p className="st-currently-showing-place">Sands Theatre at Marina Bay </p>
                          </div>
                      </div>
                      <div className="item">
                          <div className="st-item-wrapper">
                              <div className="st-currently-showing-img">
                                  <div className="st-item-img">
                                      <img src="assets/images/panthom-of-opera.jpg" className="img-fluid"
                                          alt="panthom-of-opera" />
                                  </div>
                              </div>
                              <span className="st-category st-musical">Musical</span>
                              <p className="st-currently-showing-date">Sat, 8 Jun 2019</p>
                              <p className="st-item-title">The Phantom of Opera</p>
                              <p className="st-currently-showing-place">Sands Theatre at Marina Bay </p>
                          </div>
                      </div>
                  </div>
                  <div className="st-carousel-navigation">
                      <div className="st-left-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                          </a>
                      </div>
                      <div className="st-right-navigation">
                          <a href="javascript:void(0);">
                              <img src="assets/images/right-arrow-blue.svg" className="img-fluid" alt="right-navigation" />
                          </a>
                      </div>
                  </div>
              </div>
          </section>
           {/* What's new section end  */}
  
           {/* explore section start  */}
          <section className="st-explore">
              <div className="container-fluid">
                  <div className="st-section-top-wrapper">
                      <h3 className="st-section-title">Explore</h3>
                      <div className="st-carousel-dots">
                          <a href="javascript:void(0);">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                  alt="arrow" /></a>
                      </div>
                  </div>
                  <span className="st-explore-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius
                      tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. </span>
                  <div className="grid-container">
                      <div className="item">
                          <div className="st-item-wrapper st-explore-article">
                              <div className="st-explore-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/explore-01.jpg" className="img-fluid" alt="explore" />
                                  </div>
                              </div>
                              <div className="st-explore-text-wrapper">
                                  <p className="st-explore-category">Article</p>
                                  <p className="st-item-title">A Guide to SIFA 2019’s Music-centric Gems</p>
                              </div>
                          </div>
                      </div>
                      <div className="item st-explore-rightside-content">
                          <div className="st-item-wrapper">
                              <div className="st-explore-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                                  </div>
                              </div>
                              <div className="st-explore-text-wrapper">
                                  <p className="st-explore-category">Quiz</p>
                                  <p className="st-item-title">A Guide to SIFA 2019’s Music-centric Gems</p>
                              </div>
                          </div>
                      </div>
                      <div className="item st-explore-rightside-content">
                          <div className="st-item-wrapper">
                              <div className="st-explore-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                                  </div>
                              </div>
                              <div className="st-explore-text-wrapper">
                                  <p className="st-explore-category">Quiz</p>
                                  <p className="st-item-title">A Guide to SIFA 2019’s Music-centric Gems</p>
                              </div>
                          </div>
                      </div>
                      <div className="item st-explore-rightside-content">
                          <div className="st-item-wrapper">
                              <div className="st-explore-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                                  </div>
                              </div>
                              <div className="st-explore-text-wrapper">
                                  <p className="st-explore-category">Quiz</p>
                                  <p className="st-item-title">A Guide to SIFA 2019’s Music-centric Gems</p>
                              </div>
                          </div>
                      </div>
                      <div className="item st-explore-rightside-content">
                          <div className="st-item-wrapper">
                              <div className="st-explore-image">
                                  <div className="st-item-img">
                                      <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                                  </div>
                              </div>
                              <div className="st-explore-text-wrapper">
                                  <p className="st-explore-category">Quiz</p>
                                  <p className="st-item-title">A Guide to SIFA 2019’s Music-centric Gems</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
           {/* explore section end  */}
  
           {/* SISTIC Moments Start  */}
          <section className="st-sistic-moments">
              <div className="container-fluid">
                  <h3 className="st-section-title">#SISTICMoments</h3>
              </div>
              <div className="st-moments-wrapper grid-container">
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
                  <img src="assets/images/moments.png" alt="" />
              </div>
          </section>
           {/* SISTIC Moments End  */}
        </div>   
    )
  }
}