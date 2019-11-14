import React from 'react';
import './style.scss';
import bannerImg from '../../../../assets/images/explore-banner2.png';

const Banner = ({}) => {
  return (
    <section className="explore-page-banner">
      <div className="banner-content">
        <div className="banner-desc">
          <h3>Kurios: Cabinet of Curiosities Cirque du Soleil</h3>
          <p>
            Cirque du Soleil arrives in Singapore with its most acclaimed
            touring show to date called, KURIOS – Cabinet of Curiosities. Kurios
            will premier under a new grey-and-white Big Top from 6 July 2019…
          </p>
        </div>
        <div className="banner-btn">
          <a>Read More</a>
        </div>
      </div>
      <div className="banner-slider">
        <img src={bannerImg} alt="explore-slider" />
      </div>
    </section>
  );
};

export default Banner;
