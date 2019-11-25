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

  return data && data.length ? (
    <div className="sliderBottomDot festival-top-slider">
      <Slider {...settings}>
        {data &&
          data.map((dataObj, i) => {
            if (dataObj.type.id == 1) {
              return (
                <img src={dataObj.full_image} key={dataObj.thumb_image + i} />
              );
            } else {
              return (
                <ReactPlayer
                  key={dataObj.thumb_image + i}
                  className="react-player"
                  url={dataObj.video_url}
                  width="100%"
                  height="349px"
                  controls
                />
              );
            }
          })}
      </Slider>
    </div>
  ) : null;
};

export default SliderBanner;
