import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import suiteCase from '../../../assets/images/suitcase.svg';
import './style.scss';

const Careers = ({ sliderArr }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: false,
    //       dots: true
    //     }
    //   }
    // ]
  };
  return (
    <div className="carrier-wrapper">
      <div className="container">
        <h3>Careers</h3>
        <div className="carrier-content">
          <ul className="carrier-slider">
            <Slider {...settings}>
              {sliderArr &&
                sliderArr.map(elem => {
                  return (
                    <li key={elem.name}>
                      <img src={elem.image} alt="Carrier" />
                      <h5>{elem.name}</h5>
                      {elem.message}
                    </li>
                  );
                })}
            </Slider>
          </ul>
          <div className="job-openings">
            <Link to="/career">
              <img src={suiteCase} alt="job-opnings" />
              <span>See Job Openings</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
