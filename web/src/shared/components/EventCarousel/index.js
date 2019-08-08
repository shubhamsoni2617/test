import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './style.scss';
import ReactPlayer from 'react-player';
import playIcon from '../../../assets/images/play.svg';

const Arrow = () => {
  return null;
}

const EventCarousel = (props) => {

  const [navLarge, setNavLarge] = useState(null);
  const [navSmall, setNavSmall] = useState(null);

  useEffect(() => {
    setNavLarge(slider1);
    setNavSmall(slider2);
  }, [])

  let slider1 ={};
  let slider2 ={};

  const settings1 = {
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    className: "center",
    centerMode: true,
  }

  const settings2 = {
    className: "center",
    centerMode: true,
  }

  const { images } = props;

  return (
      <div className="banner-carousel">
        <Slider
          asNavFor={navSmall}
          ref={slider => (slider1 = slider)}
          {...settings1}
          variableWidth ={true}
          adaptiveHeight={true}
        >
          {images.map((obj, idx) => {
            if (obj.type && obj.type.id == 1) {
              return <div key={idx}>
                <img src={obj.full_image} />
              </div>
            } else {
              return <div className="videoimg" key={idx}>
                <ReactPlayer url={obj.video_url} controls={true} width='100%' height='100%' />
              </div>
            }
          })}
        </Slider>
        <div className="carousel-thumbnails">
            <Slider
            asNavFor = {navLarge}
            ref={slider => (slider2 = slider)}
            slidesToShow={images.length}
            variableWidth ={true}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settings2}
            >
            {images.map((obj, idx) => {
                if (obj.type && obj.type.id == 1) {
                return <div key={idx} style={{width : 130}}>
                    <img src={obj.thumb_image} />
                </div>
                } else {
                return <div className="videoimg" key={idx} style={{width : 130}}>
                    <img src={playIcon} className="play-icon" alt="Play Icon" />
                    <img src={obj.thumb_image} />
                </div>
                }
            })}
            </Slider>
        </div>
      </div>
  );

}

export default EventCarousel;