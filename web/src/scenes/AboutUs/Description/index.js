import React from 'react';
import './style.scss';
import mission from '../../../assets/images/our-mission.png';
import history from '../../../assets/images/our-history.png';
import promise from '../../../assets/images/our-promise.png';

const Description = ({ content }) => {
  return (
    <div className="aboutus-description-wrapper">
      <div className="container">
        <section className="our-mission">
          <div className="about-desc-img">
            <img src={mission} alt="our-mission" />
          </div>
          <div className="about-desc-content">
            <h3>{content && content[0].title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: content && content[0].description
              }}
            ></p>
          </div>
        </section>
        <section className="our-history">
          <div className="about-desc-content">
            <h3>{content && content[1].title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: content && content[1].description
              }}
            ></p>
          </div>
          <div class="about-desc-img">
            <img src={history} alt="our-history" />
          </div>
        </section>
        <section className="our-promise">
          <div className="about-desc-img">
            <img src={promise} alt="our-mission" />
          </div>
          <div className="about-desc-content">
            <h3>{content && content[2].title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: content && content[2].description
              }}
            ></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Description;
