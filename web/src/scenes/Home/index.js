import React, { Component, createRef } from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import './style.scss';
import InstagramFeed from '../../shared/components/InstagramFeed/InstagramFeed';
import CurrentlyShowing from './CurrentlyShowing/CurrentlyShowing';
import WhatsNew from "./WhatsNew/WhatsNew";
import PromotionCarousel from "./PromotionCarousel";
import TopPics from './TopPics';
import HotShowPopup from '../../shared/components/HotShowPopup';
import FeaturedEvents from './FeaturedEvents';
import TrendingNow from './TrendingNow';
import Explore from './Explore';
import Cookies from '../../shared/components/Cookies';
import NewsTicker from './NewsTicker';
import { MainSlider } from '../../shared/components/MainSlider';
import primeSlider from '../../assets/images/main-banner.png';
import mainSliderImg from '../../assets/images/slide1.jpg';
import thumbnailImg from '../../assets/images/thumb-img-one.png';
import thumbnailImg1 from '../../assets/images/thumb-img1.png';
import thumbnailImg2 from '../../assets/images/thumbnail.png';
import thumbnailImg3 from '../../assets/images/thumb-img4.jpg';
import thumbnailImg4 from '../../assets/images/thumb-img3.jpg';
import leftArrow from '../../assets/images/left-arrow-white.svg';
import rightArrow from '../../assets/images/right-arrow-white.svg';
import leftThumbArrrow from '../../assets/images/left-thumb-arrow.svg';
import rightThumbArrrow from '../../assets/images/right-thumb-arrow.svg';

const slides = [
  <img src={mainSliderImg} alt="1" />,
  <img src={mainSliderImg} alt="2" />,
  <img src={mainSliderImg} alt="3" />,
  <img src={mainSliderImg} alt="4" />,
  <img src={mainSliderImg} alt="5" />,
  <img src={mainSliderImg} alt="5" />,
  <img src={mainSliderImg} alt="5" />,
  <img src={mainSliderImg} alt="5" />,
  <img src={mainSliderImg} alt="5" />,
  <img src={mainSliderImg} alt="5" />,
  <img src={mainSliderImg} alt="5" />,
  <img src={mainSliderImg} alt="5" />,
]


const thumbnail = [
  <img src={thumbnailImg} alt="1" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="2" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="3" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="4" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
  <img src={thumbnailImg} alt="5" height="20px" width="100px" />,
]
export default class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      offsetRadius: 0,
      showNavigation: '',
      config: {},
      slides: slides,
      slideTotal: slides.length - 1,
      thumbnail: thumbnail,
      slideDir: "right"
    };
    this.homePageRef = createRef()
  }


  render() {
    const { slides, thumbnail } = this.state;
    let slide = []
    slides.forEach(slid => {
      let slideobject = {
        class: "slider-single proactivede",
        element: slid
      }
      slide.push(slideobject);
    });
    return (
      <div className="home-page-wrapper" ref={this.homePageRef}>
        {/* Home page Banner start */}
        <NewsTicker homePageRef={this.homePageRef} />
        <HotShowPopup showPopup={true} eventCount={1} />
        <section className="banner">
          <img src={primeSlider} alt="prime Slider" />
        </section>
        {/* <MainSlider
            slides={slide}
            thumbnail = {thumbnail}
            auto = {true}
          /> */}
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

        {/* SISTIC Moments End  */}
        <Cookies />
        {/* SISTIC Moments End  */}
      </div>
    )
  }
}
