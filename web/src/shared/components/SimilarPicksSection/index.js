import React from 'react';
import Carousel from '../Carousel';
import './style.scss';
import RightArrow from '../../../assets/images/right-arrow.svg';
import PropTypes from 'prop-types';

const SimilarPicksSection = ({ data }) => {
  if (!data || !data.length) return null;
  return (
    <section className="similar-picks">
      <div className="container-fluid">
        <div className="section-top-wrapper">
          <h2>Similar Picks</h2>
          <div className="carousel-dots"><a href="">See all <img src={RightArrow} className="img-fluid" alt="arrow" /></a></div>
        </div>
        <Carousel
          imgArray={data}
          arrows={true}
          slidesToShow={5}
          slidesToScroll={5}
        />
      </div>
    </section>
  );
};

export default SimilarPicksSection;

SimilarPicksSection.propTypes = {
  data: PropTypes.array.isRequired
};
