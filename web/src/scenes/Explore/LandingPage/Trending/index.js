import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Utilities from '../../../../shared/utilities';

const Item = trending => {
  return (
    trending &&
    trending.sub_section_six &&
    trending.sub_section_six.map(({ image, url }, index) => {
      return (
        <div className="item" key={index}>
          <a href={url} target="_blank">
            <Image src={image} type="Horizontal" />
          </a>
        </div>
      );
    })
  );
};
const Trending = ({ trending }) => {
  const settings = {
    infinite: false,
    speed: 500,
    row: 1,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  return (
    <section className="trending-wrapper">
      <div className="container-fluid">
        {trending && (
          <div className="section-top-wrapper">
            <h2>{trending.heading}</h2>
          </div>
        )}
        {Utilities.mobilecheck() ? (
        <div className="item-wrapper">  {Item(trending)} </div>
        ) : (
          <Slider {...settings}>{Item(trending)}</Slider>
        )}
      </div>
    </section>
  );
};

export default Trending;
