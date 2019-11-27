import React from 'react';
import Carousel from '../Carousel';
import './style.scss';
import PropTypes from 'prop-types';

const SimilarPicksSection = ({ data }) => {
  if (!data || !data.length) return null;
  return (
    <section className="similar-picks">
      <div className="container-fluid">
        <div className="section-top-wrapper">
          <h2>Similar Picks</h2>
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
