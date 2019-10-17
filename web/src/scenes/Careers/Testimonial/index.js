import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
const Testimonials = ({ testimonial, testimonialErr }) => {
  const settings = {
    focusOnSelect: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '300px',
    slidesToShow: 1,
    initialSlide: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 976,
        settings: {
          centerMode: true,
          centerPadding: '0px'
        }
      }
      // {
      //   breakpoint: 600,
      //   settings: {
      //     centerMode: false,
      //     centerPadding: '0px'
      //   }
      // }
    ]
  };
  return (
    <div className="testimonials-wrapper">
      <div className="testimonials">
        <h3 className="text-center">Testimonials</h3>
        <div className="testimonials-content">
          <ul className="testimonials-slider">
            <Slider {...settings}>
              {testimonial &&
                testimonial.testimonials &&
                testimonial.testimonials.map((elem, index) => {
                  return (
                    <li key={index}>
                      <div className="message">{elem.message}</div>
                      <div className="name text-center">
                        <h5>{elem.name}</h5>
                      </div>
                      <img src={elem.image} height="200" width="100%" />
                    </li>
                  );
                })}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
