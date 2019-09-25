import React from 'react';
import './style.scss';
import apibanner from '../../../assets/images/api-partners-banner.png';

const ApiBanner = ({ title, description }) => {
  return (
    <div className="apipartnerheader">
      <div className="container">
        <div className="apipartnerheader-banner">
          <div className="banner-desc">
            <p>{title}</p>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <div className="banner-title" />
          </div>
          <div className="banner-image">
            <img src={apibanner} alt="api-partners" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiBanner;
