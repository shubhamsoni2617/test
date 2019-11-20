import React from 'react';
import Slider from 'react-slick';
import './style.scss';

const SliderBanner = ({ data }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true
  };
  return data && data.length > 0 ? (
    <div className="sliderBottomDot festival-top-slider">
      <Slider {...settings}>
        {data &&
          data.map(image => {
            return <img src={image} key={image} />;
          })}
      </Slider>
    </div>
  ) : null;
};

export default SliderBanner;
