import React, { useState } from 'react';
import Slider from 'react-slick';
import './style.scss';
import ReactPlayer from 'react-player';

const SliderBanner = ({ data }) => {
  const [imageArr, setImageArr] = useState(
    data.map(el => {
      return { ...el, isPlaying: true };
    })
  );

  const [autoplay, setAutoPlay] = useState(true);
  const [vdoIndex, setVdoIndex] = useState(null);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    autoplay: autoplay,
    beforeChange: () => {
      if (vdoIndex) {
        let arr = [...imageArr];
        arr[vdoIndex].isPlaying = false;
        setImageArr(arr);
      }
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
                  light={true}
                  onPlay={() => {
                    let arr = [...imageArr];
                    arr[i].isPlaying = true;
                    setImageArr(arr);
                    setAutoPlay(false);
                    setVdoIndex(i);
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
