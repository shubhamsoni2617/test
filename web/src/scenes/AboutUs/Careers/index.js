import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carrier from '../../../../src/assets/images/carrier.png';

const Careers = ({}) => {
  const sliderArr = [
    {
      id: 1,
      name: 'random name',
      image: Carrier,
      des:
        'Auto-merging web/src/shared/components/Header/index.js\
        CONFLICT (content): Merge conflict in web/src/shared/components/Header/index.js\
        Auto-merging web/src/scenes/AboutUs/index.js\
        Automatic merge failed; fix conflicts and then commit the result.'
    },
    {
      id: 2,
      name: 'random name',
      image: Carrier,
      des:
        'Auto-merging web/src/shared/components/Header/index.js\
        CONFLICT (content): Merge conflict in web/src/shared/components/Header/index.js\
        Auto-merging web/src/scenes/AboutUs/index.js\
        Automatic merge failed; fix conflicts and then commit the result.'
    },
    {
      id: 3,
      name: 'random name',
      image: Carrier,
      des:
        'Auto-merging web/src/shared/components/Header/index.js\
        CONFLICT (content): Merge conflict in web/src/shared/components/Header/index.js\
        Auto-merging web/src/scenes/AboutUs/index.js\
        Automatic merge failed; fix conflicts and then commit the result.'
    },
    {
      id: 4,
      name: 'random name',
      image: Carrier,
      des:
        'Auto-merging web/src/shared/components/Header/index.js\
        CONFLICT (content): Merge conflict in web/src/shared/components/Header/index.js\
        Auto-merging web/src/scenes/AboutUs/index.js\
        Automatic merge failed; fix conflicts and then commit the result.'
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
                    {elem.des}
                  </li>
                );
              })}
            </Slider>
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
