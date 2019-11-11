import React from 'react';
import './style.scss';

const Banner = ({ bannerTitle, bannerDescription, buttonLink, buttonText }) => {
  return (
    <section>
      <div className="event-wrapper">
        <div className="event-banner">
          <div className="banner-content">
            <h2>{bannerTitle}</h2>
            <p dangerouslySetInnerHTML={{ __html: bannerDescription }}></p>
            {buttonText && <a href={buttonLink}>{buttonText}</a>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
