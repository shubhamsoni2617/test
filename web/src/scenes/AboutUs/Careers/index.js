import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Careers = ({}) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
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
            {/* <Slider {...settings}>
              {imgArray.map(elem => {
                return <li></li>;
              })}
            </Slider> */}
          </ul>
          <div className="job-openings">
            <a href="">
              <span>See Job Openings</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
