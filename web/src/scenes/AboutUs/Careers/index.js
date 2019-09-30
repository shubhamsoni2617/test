import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carrier from '../../../../src/assets/images/carrier.png';
import suiteCase from '../../../assets/images/suitcase.svg';
import './style.scss';

const Careers = ({ }) => {
  const sliderArr = [
    {
      id: 1,
      name: 'John Deo',
      image: Carrier,
      des:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, \
      sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. \
      Mauris malesuada nisi sit amet accumsan tincidunt. Maecenas tincidunt.'
    },
    {
      id: 2,
      name: 'John Deo',
      image: Carrier,
      des:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, \
      sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. \
      Mauris malesuada nisi sit amet accumsan tincidunt. Maecenas tincidunt.'
    },
    {
      id: 3,
      name: 'John Deo',
      image: Carrier,
      des:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, \
      sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. \
      Mauris malesuada nisi sit amet accumsan tincidunt. Maecenas tincidunt.'
    },
    {
      id: 4,
      name: 'John Deo',
      image: Carrier,
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, \
      sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. \
      Mauris malesuada nisi sit amet accumsan tincidunt. Maecenas tincidunt.'
    }
  ];
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
              {sliderArr.map((elem, index) => {
                return (
                  <li key={elem.id}>
                    <img src={elem.image} alt="Carrier" />
                    <h5>{elem.name}</h5>
                    {elem.des}
                  </li>
                );
              })}
            </Slider>
          </ul>
          <div className="job-openings">
            <a><img src={suiteCase} alt="job-opnings" />
              <span>See Job Openings</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
