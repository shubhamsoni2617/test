import React from 'react';
import './style.scss';

import mission from '../../../assets/images/our-mission.png';
import history from '../../../assets/images/our-history.png';
import promise from '../../../assets/images/our-promise.png';

const Description = ({

}) => {
  return (
    <div className="aboutus-description-wrapper">
      <div className="container">
        <section className="our-mission">
          <div class="about-desc-img">
            <img src={mission} alt="our-mission" />
          </div>
          <div className="about-desc-content">
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.</p>
          </div>
        </section>
        <section className="our-history">
          <div class="about-desc-img">
            <img src={history} alt="our-history" />
          </div>
          <div className="about-desc-content">
            <h3>Our History</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.</p>
          </div>
        </section>
        <section className="our-promise">
          <div class="about-desc-img">
            <img src={promise} alt="our-mission" />
          </div>
          <div className="about-desc-content">
            <h3>Our Promise</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Description;