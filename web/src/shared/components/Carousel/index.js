import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselSlide from '../CarouselSlide';
import Constants from '../../constants';
import './style.scss';
import Utilities from '../../utilities';

const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const Carousel = props => {
  // const [width, setWidth] = useState(window.innerWidth);
  const {
    type,
    imgArray,
    arrows,
    slidesToShow,
    slidesToScroll,
    autoplay,
    infinite
  } = props;

  const [autoplayValue, setAutoplayValue] = useState(autoplay);
  const settings = {
    dots: true,
    arrows: arrows,
    dots: props.dots === false ? false : true,
    infinite: infinite || false,
    autoplay: autoplayValue || false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => {
      if (props.dots) {
        return (
          <ul onClick={() => setAutoplayValue(false)} style={{ margin: '0px' }}>
            {dots}
          </ul>
        );
      } else {
        return <ul style={{ margin: '0px' }}> {null} </ul>;
      }
    },
    customPaging: i => {
      return (
        <div className="dots-group">
          <span>
            <a href="/" onClick={e => e.preventDefault()}>
              {i}
            </a>
          </span>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  // useEffect(() => {
  //   window.addEventListener('resize', handleWindowResize);
  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);

  // const handleWindowResize = () => {
  //   setWidth(window.innerWidth);
  // };

  if (!imgArray || imgArray.length < 0) {
    return null;
  } else {
    return (
      <>
        {Utilities.mobilecheck() ? (
          <div className="row">
            <div className="grid-container">
              {imgArray.map(elem => {
                elem.venue_name = Utilities.showLimitedChars(
                  elem.venue_name,
                  25
                );
                return <CarouselSlide type={type} elem={elem} key={elem.id} />;
              })}
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {imgArray.map(elem => {
              return <CarouselSlide type={type} elem={elem} key={elem.id} />;
            })}
          </Slider>
        )}
      </>
    );
  }
};
export default Carousel;
