import React, { useState } from 'react';
import Slider from 'react-slick';
import './style.scss';
import ReactPlayer from 'react-player';

const SliderBanner = ({ data }) => {
  const [imageArr, setImageArr] = useState(
    data.map(el => {
      return { ...el, isPlaying: false };
    })
  );

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
      let arr = [...imageArr];
      let newArr = arr.map(el => {
        return { ...el, isPlaying: false };
      });
      setImageArr(newArr);
    }
  };

  return imageArr && imageArr.length ? (
    <div className="sliderBottomDot festival-top-slider">
      <Slider {...settings}>
        {imageArr &&
          imageArr.map((dataObj, i) => {
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
                  onPlay={() => {
                    let arr = [...imageArr];
                    arr[i].isPlaying = true;
                    setImageArr(arr);
                    setAutoPlay(false);
                  }}
                  playing={dataObj.isPlaying}
                />
              );
            }
          })}
      </Slider>
    </div>
  ) : null;
};

export default SliderBanner;
