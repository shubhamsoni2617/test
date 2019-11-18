import React, { Fragment } from 'react';
import Slider from 'react-slick';
import './style.scss';
import Image from '../../../assets/images/promo-img1.svg';
const SliderBanner = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true
  };
  return (
    <div className="sliderBottomDot festival-top-slider">
      <Slider {...settings}>
        <img src={Image} height="300px" />
        <img src={Image} height="300px" />
        <img src={Image} height="300px" />
        <img src={Image} height="300px" />
        <img src={Image} height="300px" />
      </Slider>
    </div>
  );
};

export default SliderBanner;
