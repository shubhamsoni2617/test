import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './style.scss';
import ReactPlayer from 'react-player';

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

  let slider1 = {};
  let slider2 = {};



  const settings1 = {
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    className: "center",
    variableWidth: true
  }

  const settings2 = {
    className: "center",
    centerMode: true,
    variableWidth: true,
    infinite: false,
    focusOnSelect: true
  }

  const { images } = props;

  return (
    <div className="banner-carousel">
      <Slider
        asNavFor={navSmall}
        ref={slider => (slider1 = slider)}
        {...settings1}
      >
        {images.map((obj, idx) => {
          if (obj.type && obj.type.id == 1) {
            return <div key={idx} style={{ width: '100%' }}>
              <img src={obj.full_image} />
            </div>
          } else {
            return <div className="videoimg" key={idx} style={{ width: '100%' }}>
              <img src='http://192.168.10.195:8081/sistic/docroot/sites/default/files/2019-08/slide1%20%282%29_0.jpg' />
              <ReactPlayer url={obj.video_url} controls={true} />
            </div>
          }
        })}
      </Slider>
      <div className="carousel-thumbnails">
        <Slider
          asNavFor={navLarge}
          ref={slider => (slider2 = slider)}
          {...settings2}
        >
          {images.map((obj, idx) => {
            if (obj.type && obj.type.id == 1) {
              return <div key={idx} style={{ width: 130 }}>
                <img src={obj.thumb_image} />
              </div>
            } else {
              return <div className="videoimg" key={idx} style={{ width: 130 }} >
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
