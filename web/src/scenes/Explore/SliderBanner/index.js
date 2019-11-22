import React from 'react';
import Slider from 'react-slick';
import './style.scss';
import ReactPlayer from 'react-player';

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
          data.map((image, i) => {
            return <img src={image} key={image} />;
            // return (
            //   <ReactPlayer
            //     className="react-player"
            //     url="https://www.youtube.com/watch?v=-l5G5BT8-fQ"
            //     width="100%"
            //     height="349px"
            //     controls
            //   />
            // );
          })}
      </Slider>
    </div>
  ) : null;
};

export default SliderBanner;
