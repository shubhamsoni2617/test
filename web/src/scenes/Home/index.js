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
import TrendingNow from './TrendingNow';
import Explore from './Explore';


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
            <TrendingNow />
            {/* Trending now section end  */}

            {/* What's new section start  */}
            <WhatsNew />
            {/* What's new section end  */}

            {/* explore section start  */}
            <Explore />
            {/* explore section end  */}

            {/* SISTIC Moments Start  */}
            <InstagramFeed />
            {/* SISTIC Moments End  */}
         </div>
      )
   }
}