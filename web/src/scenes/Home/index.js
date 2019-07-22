import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import './style.scss';
import InstagramFeed from '../../shared/components/InstagramFeed/InstagramFeed';
import CurrentlyShowing from './CurrentlyShowing/CurrentlyShowing';
import WhatsNew from "./WhatsNew/WhatsNew";
import PromotionCarousel from "./PromotionCarousel";
import TopPics from './TopPics';
import FeaturedEvents from './FeaturedEvents';


export default class Home extends Component {
   render() {
      return (
         <div className="home-page-wrapper">
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
                        <a href="/">
                           <img src="assets/images/left-arrow-white.svg" className="img-fluid" alt="left-navigation" />
                        </a>
                     </div>
                     <div className="right-navigation">
                        <a href="/">
                           <img src="assets/images/right-arrow-white.svg" className="img-fluid" alt="right-navigation" />
                        </a>
                     </div>
                  </div>
               </div>
               <div className="banner-thumbnail">
                  <ul>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                     <li><a href="/"><img src="assets/images/thumbnail.png" className="img-fluid"
                        alt="" /></a></li>
                  </ul>
               </div>
            </section>
            {/* Home page Banner end */}

            {/* Top-picks-for-you section start */}
            <TopPics />
            {/* Top-picks-for-you section end */}

            {/* Gift-card section start  */}
            <section className="gift-cart">
               <div className="gift-cart-image">
                  <img src="assets/images/gift-card.png" className="img-fluid" alt="Gift-cart" />
               </div>
            </section>
            {/* Gift-card section end  */}

            {/* featured events section start  */}
            <FeaturedEvents />
            {/* featured events section end  */}

            {/* currently showing section start  */}
            <CurrentlyShowing />
            {/* currently showing section end  */}

            {/* Promotions section start  */}
            <PromotionCarousel />
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
                        <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
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