import React, { useState, useEffect ,createRef } from 'react';
import Slider from "react-slick";
import './style.scss';
import ReactPlayer from 'react-player';
import playIcon from '../../../assets/images/play.svg';
import videoImage from '../../../assets/images/slide1.jpg';

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

  let slider1 = createRef()
  let slider2 = createRef()



  const settings1 = {
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    className: "center",
    variableWidth: true
  }

  let settings2 = {
    className: "center",
    centerMode: false,
    variableWidth: true,
    infinite: false,
    focusOnSelect: true
  }







  const { images } = props;
  //  if(images.length <= 7){
  //   settings2.nextArrow = <Arrow />
  //   settings2.prevArrow = <Arrow />
  // }
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
              <img src={videoImage} />
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
