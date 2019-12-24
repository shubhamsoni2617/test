import React from 'react';
import './style.scss';
import apibanner from '../../../assets/images/api-partners-banner.png';

const ApiBanner = ({ title, description }) => {
  return (
    <div className="banner-leftalign-wrapper">
      <div className="container-fluid custom-container">
        <div className="banner-leftalign">
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
