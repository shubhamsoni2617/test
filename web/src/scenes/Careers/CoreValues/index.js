import React from 'react';
import "./style.scss";
import CoreValImg from '../../../../src/assets/images/core-value.png';


const CoreValues = ({

}) => {
  return (
    <div className="row container core-value">
      <div className="col-lg-7">
        <img src={CoreValImg} alt="team" />
      </div>
      <div className="col-lg-5 text-right">
        <h1>Core Values</h1>
        <h5>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five.
      </h5>
      </div>
    </div>
  );
};

export default CoreValues;
