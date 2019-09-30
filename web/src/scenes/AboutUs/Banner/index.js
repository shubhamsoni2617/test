import React from 'react';
import './style.scss';

const Banner = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="banner-leftalign-wrapper">
      <div className="container-fluid">
        <div className="banner-leftalign">
          <div className="banner-desc">
            <div className="banner-title">
              <p>{title}</p>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            {buttonText && (
              <a className="buy-now" href={buttonLink}>
                <span>{buttonText}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
