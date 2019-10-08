import React from 'react';
import "./style.scss";
import CoreValImg from '../../../../src/assets/images/core-value.png';


const CoreValues = ({

}) => {
  return (
    <div className="container">
      <div className="row core-value">
        <div className="col-lg-7 col-md-6 blue-line">
          <img src={CoreValImg} alt="team" />
        </div>
        <div className="col-lg-5 col-md-6 text-right">
          <div className="core-value-inner">
            <h2 className="career-title">Core Values</h2>
            <p className="career-subtext">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
