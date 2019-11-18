import React, { useRef, useState, useEffect } from 'react';
import './style.scss';
import Slider from 'react-slick';
const BannerSlider = ({ bannerData }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = useRef();
  let slider2 = useRef();
  console.log(bannerData);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);
  const settings = {
    arrows: false,
    draggable: false
  };
  const settingsSlider = {
    autoplay: true
  };
  return (
    <section className="explore-page-banner">
      <div className="banner-content">
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={slider => (slider1 = slider)}
        >
          {bannerData &&
            bannerData.map(banner => {
              return (
                <div>
                  <div>
                    <h2>{banner.banner_title}</h2>
                    <div
                      className="text-center sub-text"
                      dangerouslySetInnerHTML={{
                        __html: banner.banner_description
                      }}
                    />
                    <a href={banner.banner_url} target="_blank">
                      <button>{banner.button_text}</button>
                    </a>
                  </div>
                  <img src={banner.image} alt="banner_image" />
                </div>
              );
            })}
        </Slider>
      </div>
      <div className="banner-slider">
        <Slider
          {...settingsSlider}
          asNavFor={nav1}
          ref={slider => (slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {bannerData &&
            bannerData.map(banner => {
              return (
                <div>
                  <img src={banner.image} alt="banner_image" />
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};
export default BannerSlider;
