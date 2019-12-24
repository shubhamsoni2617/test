import React from 'react';
import './style.scss';
import CoreValImg from '../../../../src/assets/images/core-value.png';

const CoreValues = ({ coreValues }) => {
  return (
    <div className="container-fluid custom-container">
      <div className="row core-value">
        <div className="col-lg-7 col-md-6 blue-line">
          <img src={CoreValImg} alt="team" />
        </div>
        <div className="col-lg-5 col-md-6 text-right">
          <div className="core-value-inner">
            <h2 className="career-title">{coreValues && coreValues.title}</h2>
            <p
              className="career-subtext"
              dangerouslySetInnerHTML={{
                __html: coreValues && coreValues.description
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
