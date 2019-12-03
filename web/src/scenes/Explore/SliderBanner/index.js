import React, { useState } from 'react';
import Slider from 'react-slick';
import './style.scss';
import ReactPlayer from 'react-player';
import articleBanner from '../../../assets/images/article-banner.jpg';

const SliderBanner = ({ data }) => {
  const [playing, setPlaying] = useState(false);
  const [autoplay, setAutoPlay] = useState(true);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    autoplay: autoplay,
    beforeChange: () => {
      setPlaying(false);
      setAutoPlay(true);
    },
    afterChange: () => {
      setPlaying(false);
      setAutoPlay(true);
    }
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
                  loop={false}
                  controls
                  light={true}
                  onPlay={() => {
                    setPlaying(true);
                    setAutoPlay(false);
                  }}
                  playing={playing}
                />
              );
            }
          })}
      </Slider>
    </div>
  ) : null;
};

export default SliderBanner;
