import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Testimonials = ({ testimonial, testimonialErr }) => {
  const settings = {
    focusOnSelect: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '300px',
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerMode: false,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          centerPadding: '0px'
        }
      }
    ]
  };
  return (
    <div className="testimonials">
      <h1 className="text-center">Testimonials</h1>
      <Slider {...settings}>
        {testimonial &&
          testimonial.testimonials &&
          testimonial.testimonials.map((elem, index) => {
            return (
              <div key={index}>
                <div className="message">{elem.message}</div>
                <img src={elem.image} height="200" width="100%" />
                <div className="name text-center">
                  <h3>{elem.name}</h3>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Testimonials;
