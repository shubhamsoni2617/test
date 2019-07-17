import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import './style.scss';
import InstagramFeed from '../../shared/components/InstagramFeed/InstagramFeed';
import CurrentlyShowing from './CurrentlyShowing/CurrentlyShowing';
import WhatsNew from "./WhatsNew/WhatsNew";


export default class Home extends Component {
  render() {
    return (
        <div>
          {/* Home page Banner start */}
          <section className="banner">
               <div className="banner-carousel">
                  <div className="active-banner-image">
                     <img src="assets/images/slide1.jpg" alt="active-slide" className="img-fluid" />
                  </div>
                  <ul>
                     <li className="slide"><img src="assets/images/slide1.jpg" className="img-fluid" alt="slide1" /></li>
                     <li className="slide active"><img src="assets/images/slide1.jpg" className="img-fluid" alt="slide2" /></li>
                     <li className="slide"><img src="assets/images/slide1.jpg" className="img-fluid" alt="slide3" /></li>
                  </ul>
                  <div className="carousel-navigation">
                     <div className="left-navigation">
                        <a href="javascript:void(0);">
                        <img src="assets/images/left-arrow-white.svg" className="img-fluid" alt="left-navigation" />
                        </a>
                     </div>
                     <div className="right-navigation">
                        <a href="javascript:void(0);">
                        <img src="assets/images/right-arrow-white.svg" className="img-fluid" alt="right-navigation" />
                        </a>
                     </div>
                  </div>
               </div>
               <div className="banner-thumbnail">
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
          <section className="top-picks">
               <div className="container-fluid">
                  <h2>Top Picks For You</h2>
                  <div className="grid-container">
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="item-desc">
                              <span className="video-icon"><img src="assets/images/video-icon.svg" /></span>
                              <div className="item-img">
                                 <img src="assets/images/kurios.png" className="img-fluid item-image" alt="kurios" />
                              </div>
                              <span className="category musical top-picks-category">Musical</span>
                              <div className="item-overlay musical-overlay">
                                 <div className="overlay-wrapper">
                                    <h3>Kurios Cabinet of Curiosities</h3>
                                    <p>Fri, 19 Apr- Sun, 19 May 2019</p>
                                    <p>Under the big top Bayfront Avenue, beside Marina Bay
                                       Sands
                                    </p>
                                    <p>Cirque du Soleil comes to Singapore with its most
                                       acclaimed touring show, KURIOS – Cabinet of Curiosities. 
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <h3>Kurios Cabinet of Curiosities</h3>
                           <a href="javascript:void(0);" className="item-title-overlay"><span>BUY NOW </span><img
                              src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="item-desc">
                              <div className="item-img">
                                 <img src="assets/images/katya.jpg" className="img-fluid item-image" alt="katya" />
                              </div>
                              <span className="category comedy top-picks-category">Comedy</span>
                              <div className="item-overlay comedy-overlay">
                                 <div className="overlay-wrapper">
                                    <h3>Katya: Help Me I’m Dying</h3>
                                    <p>Fri, 19 Apr- Sun, 19 May 2019</p>
                                    <p>Under the big top Bayfront Avenue, beside Marina Bay Sands</p>
                                    <p>Cirque du Soleil comes to Singapore with its most acclaimed touring show, KURIOS – Cabinet of Curiosities. </p>
                                 </div>
                              </div>
                           </div>
                           <h3>Katya: Help Me I’m Dying</h3>
                           <a href="javascript:void(0);" className="item-title-overlay"><span>BUY NOW </span><img
                              src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="item-desc">
                              <span className="video-icon"><img src="assets/images/video-icon.svg" /></span>
                              <div className="item-img">
                                 <img src="assets/images/ballet.jpg" className="img-fluid item-image" alt="ballet" />
                              </div>
                              <span className="category dance top-picks-category">Dance</span>
                              <div className="item-overlay dance-overlay">
                                 <div className="overlay-wrapper">
                                    <h3>Ballet Under The Stars Presented…</h3>
                                    <p>Fri, 19 Apr- Sun, 19 May 2019</p>
                                    <p>Under the big top Bayfront Avenue, beside Marina Bay
                                       Sands
                                    </p>
                                    <p>Cirque du Soleil comes to Singapore with its most
                                       acclaimed touring show, KURIOS – Cabinet of Curiosities. 
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <h3>Ballet Under The Stars Presented…</h3>
                           <a href="javascript:void(0);" className="item-title-overlay"><span>BUY NOW </span><img
                              src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="item-desc">
                              <div className="item-img">
                                 <img src="assets/images/panthom-of-opera.jpg" className="img-fluid item-image"
                                    alt="panthom-of-opera" />
                              </div>
                              <span className="category musical top-picks-category">Musical</span>
                              <div className="item-overlay musical-overlay">
                                 <div className="overlay-wrapper">
                                    <h3>The Phantom Of The Opera</h3>
                                    <p>Fri, 19 Apr- Sun, 19 May 2019</p>
                                    <p>Under the big top Bayfront Avenue, beside Marina Bay
                                       Sands
                                    </p>
                                    <p>Cirque du Soleil comes to Singapore with its most
                                       acclaimed touring show, KURIOS – Cabinet of Curiosities. 
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <h3>The Phantom Of The Opera</h3>
                           <a href="javascript:void(0);" className="item-title-overlay"><span>BUY NOW </span><img
                              src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="item-desc">
                              <span className="video-icon"><img src="assets/images/video-icon.svg" /></span>
                              <div className="item-img">
                                 <img src="assets/images/kurios.png" className="img-fluid item-image" alt="kurios" />
                              </div>
                              <span className="category musical top-picks-category">Musical</span>
                              <div className="item-overlay musical-overlay">
                                 <div className="overlay-wrapper">
                                    <h3>Kurios Cabinet of Curiosities</h3>
                                    <p>Fri, 19 Apr- Sun, 19 May 2019</p>
                                    <p>Under the big top Bayfront Avenue, beside Marina Bay
                                       Sands
                                    </p>
                                    <p>Cirque du Soleil comes to Singapore with its most
                                       acclaimed touring show, KURIOS – Cabinet of Curiosities. 
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <h3>Kurios Cabinet of Curiosities</h3>
                           <a href="javascript:void(0);" className="item-title-overlay"><span>BUY NOW </span><img
                              src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="item-desc">
                              <span className="video-icon"><img src="assets/images/video-icon.svg" /></span>
                              <div className="item-img">
                                 <img src="assets/images/ballet.jpg" className="img-fluid item-image" alt="ballet" />
                              </div>
                              <span className="category dance top-picks-category">Dance</span>
                              <div className="item-overlay dance-overlay">
                                 <div className="overlay-wrapper">
                                    <h3>Ballet Under The Stars Presented…</h3>
                                    <p>Fri, 19 Apr- Sun, 19 May 2019</p>
                                    <p>Under the big top Bayfront Avenue, beside Marina Bay
                                       Sands
                                    </p>
                                    <p>Cirque du Soleil comes to Singapore with its most
                                       acclaimed touring show, KURIOS – Cabinet of Curiosities. 
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <h3>Ballet Under The Stars Presented…</h3>
                           <a href="javascript:void(0);" className="item-title-overlay"><span>BUY NOW </span><img
                              src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-navigation">
                     <div className="left-navigation">
                        <a href="javascript:void(0);">
                        <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                        </a>
                     </div>
                     <div className="right-navigation">
                        <a href="javascript:void(0);">
                        <img src="assets/images/right-arrow-blue.svg" className="img-fluid" alt="right-navigation" />
                        </a>
                     </div>
                  </div>
               </div>
            </section>
          {/* Top-picks-for-you section end */}
  
          {/* Gift-card section start  */}
          <section className="gift-cart">
              <div className="gift-cart-image">
                  <img src="assets/images/gift-card.png" className="img-fluid" alt="Gift-cart" />
              </div>
          </section>
           {/* Gift-card section end  */}
  
           {/* featured events section start  */}
           <section className="featured-events">
               <div className="container-fluid">
                  <div className="section-top-wrapper">
                     <h2>Featured Events</h2>
                     <div className="carousel-dots">
                        <a href="javascript:void(0);">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                           alt="arrow" /></a>
                        <div className="dots-group">
                           <span className="active"><a href="javascript:void(0);"></a></span>
                           <span><a href="javascript:void(0);"></a></span>
                           <span><a href="javascript:void(0);"></a></span>
                        </div>
                     </div>
                  </div>
                  <div className="grid-container">
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/explore.png" className="img-fluid" alt="explore" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/pretty-girls.jpg" className="img-fluid" alt="pretty-girls" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>This is what happens to pretty girls</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/dance-theature.jpg" className="img-fluid"
                                    alt="dance-theature" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>Singapore Dance Theatre - Season Pass 2019</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty-keos" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>Aladdin - The Hit Broadway Musical </h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/voice-legends.jpg" className="img-fluid" alt="voice-legends" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>Voice of Legends 2019</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/pride-passion.jpg" className="img-fluid" alt="pride-passion" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>Singapore Dance Theatre - Season Pass 2019</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty-keos" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>Aladdin - The Hit Broadway Musical</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                        <div className="item-wrapper">
                           <div className="featured-item-img">
                              <div className="item-img">
                                 <img src="assets/images/voice-legends.jpg" className="img-fluid" alt="voice-legends" />
                              </div>
                              <span className="category">Dance</span>
                           </div>
                           <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                           <p>Fri, 3 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-navigation">
                     <div className="left-navigation">
                        <a href="javascript:void(0);">
                        <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                        </a>
                     </div>
                     <div className="right-navigation">
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
           <section className="promotions">
               <div className="container-fluid">
                  <div className="section-top-wrapper">
                     <h2>Promotions <span className="promotions-animated-img"><img src="assets/images/illustration.svg" className="img-fluid" alt="promotions-image" /></span></h2>
                     <div className="carousel-dots">
                        <a href="javascript:void(0);">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                           alt="arrow" /></a>
                        <div className="dots-group">
                           <span className="active"><a href="javascript:void(0);"></a></span>
                           <span><a href="javascript:void(0);"></a></span>
                           <span><a href="javascript:void(0);"></a></span>
                        </div>
                     </div>
                  </div>
                  <div className="grid-container">
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
                        <div className="item-wrapper">
                           <div className="promotions-img">
                              <div className="item-img">
                                 <img src="assets/images/live-up.jpg" className="img-fluid" alt="headrock" />
                              </div>
                           </div>
                           <h3>LiveUp Partnership</h3>
                        </div>
                     </div>
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
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="promotions-img">
                              <div className="item-img">
                                 <img src="assets/images/mozart36.jpg" className="img-fluid" alt="privilage" />
                              </div>
                           </div>
                           <h3>Mozart 36</h3>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <div className="promotions-img">
                              <div className="item-img">
                                 <img src="assets/images/headrock.jpg" className="img-fluid" alt="headrock" />
                              </div>
                           </div>
                           <h3>HeadRock VR</h3>
                        </div>
                        <div className="item-wrapper">
                           <div className="promotions-img">
                              <div className="item-img">
                                 <img src="assets/images/peter-blue.jpg" className="img-fluid" alt="headrock" />
                              </div>
                           </div>
                           <h3>LiveUp Partnership</h3>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-navigation">
                     <div className="left-navigation">
                        <a href="javascript:void(0);">
                        <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                        </a>
                     </div>
                     <div className="right-navigation">
                        <a href="javascript:void(0);">
                        <img src="assets/images/right-arrow-blue.svg" className="img-fluid" alt="right-navigation" />
                        </a>
                     </div>
                  </div>
               </div>
            </section>
           {/*Promotions section end */}
  
           {/*Trending now section start */}
           <section className="trending-now">
               <div className="container-fluid">
                  <h2>Trending Now</h2>
                  <div className="grid-container">
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/kurios.png" className="img-fluid" alt="kurios" />
                              </div>
                              <div className="video-icon">
                                 <img src="assets/images/video-icon.svg" className="img-fluid" alt="video-icon" />
                              </div>
                           </div>
                           <h3>Kurios Cabinet of Curiosities</h3>
                           <p>Thu, 2 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/trending-now.jpg" className="img-fluid" alt="trending-now" />
                              </div>
                           </div>
                           <h3>Singapore Dance Theatre- Season Pass…</h3>
                           <p>Thu, 2 May 2019</p>
                           <p>Various Venues</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="trending-hetty" />
                              </div>
                           </div>
                           <h3>Hetty Koes Endang (Indonesia)</h3>
                           <p>Thu, 2 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/trending-now.jpg" className="img-fluid" alt="trending-now" />
                              </div>
                           </div>
                           <h3>Singapore Dance Theatre- Season Pass…</h3>
                           <p>Thu, 2 May 2019</p>
                           <p>Various Venues</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty" />
                              </div>
                           </div>
                           <h3>Hetty Koes Endang (Indonesia)</h3>
                           <p>Sun, 21 Jul 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                              </div>
                           </div>
                           <h3>Aladdin - The Hit Broadway Musical</h3>
                           <p>Sun, 21 Jul 2019</p>
                           <p>Marina Bay Sands</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/voice-legends.jpg" className="img-fluid" alt="voicelegends" />
                              </div>
                           </div>
                           <h3>Voice of Legends 2019</h3>
                           <p>Thu, 2 May 2019</p>
                           <p>Suntec Convention Centre</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/trending-now.jpg" className="img-fluid" alt="trending-now" />
                              </div>
                           </div>
                           <h3>Singapore Dance Theatre- Season Pass…</h3>
                           <p>Thu, 2 May 2019</p>
                           <p>Various Venues</p>
                        </div>
                     </div>
                     <div className="item">
                        <div className="item-wrapper">
                           <span className="category">Dance</span>
                           <div className="trending-now-image">
                              <div className="item-img">
                                 <img src="assets/images/hetty-keos.jpg" className="img-fluid" alt="hetty" />
                              </div>
                           </div>
                           <h3>Hetty Koes Endang (Indonesia)</h3>
                           <p>Thu, 2 May 2019</p>
                           <p>Esplanade Concert Hall</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
          
           {/* Trending now section end  */}
  
           {/* What's new section start  */}
            <WhatsNew />
           {/* What's new section end  */}
  
           {/* explore section start  */}
           <section className="explore">
               <div className="container-fluid">
                  <div className="section-top-wrapper">
                     <h2>Explore</h2>
                     <div className="carousel-dots">
                        <a href="javascript:void(0);">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                           alt="arrow" /></a>
                     </div>
                  </div>
                  <span className="explore-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius
                  tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. </span>
                  <div className="grid-container">
                     <div className="item">
                        <div className="item-wrapper explore-article">
                           <div className="explore-image item-img">
                              <img src="assets/images/explore-01.jpg" className="img-fluid" alt="explore" />
                           </div>
                           <div className="explore-text-wrapper">
                              <span className="explore-category">Article</span>
                              <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                           </div>
                        </div>
                     </div>
                     <div className="item explore-rightside-content">
                        <div className="item-wrapper">
                           <div className="explore-image item-img">
                              <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                           </div>
                           <div className="explore-text-wrapper">
                              <span className="explore-category">Quiz</span>
                              <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                           </div>
                        </div>
                     </div>
                     <div className="item explore-rightside-content">
                        <div className="item-wrapper">
                           <div className="explore-image item-img">
                              <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                           </div>
                           <div className="explore-text-wrapper">
                              <span className="explore-category">Quiz</span>
                              <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                           </div>
                        </div>
                     </div>
                     <div className="item explore-rightside-content">
                        <div className="item-wrapper">
                           <div className="explore-image item-img">
                              <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                           </div>
                           <div className="explore-text-wrapper">
                              <span className="explore-category">Quiz</span>
                              <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                           </div>
                        </div>
                     </div>
                     <div className="item explore-rightside-content">
                        <div className="item-wrapper">
                           <div className="explore-image item-img">
                              <img src="assets/images/explore-02.jpg" className="img-fluid" alt="explore" />
                           </div>
                           <div className="explore-text-wrapper">
                              <span className="explore-category">Quiz</span>
                              <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
           {/* explore section end  */}
  
           {/* SISTIC Moments Start  */}
           <InstagramFeed />
           {/* SISTIC Moments End  */}
        </div>   
    )
  }
}