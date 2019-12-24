import React from 'react';
import './style.scss';

const Banner = ({ title, buttonLink, buttonText, description }) => {
  return (
    <section>
      <div className="event-wrapper">
        <div className="event-banner">
        <div className="container-fluid custom-container">
            <div className="banner-content col-lg-7">
              <h2>{title}</h2>
              <p
                className="sub-text"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
              {buttonText && (
                <a href={buttonLink} target="_blank">
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
