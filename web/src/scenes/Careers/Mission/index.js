import React from 'react';
import "./style.scss";
import MisImg from '../../../../src/assets/images/mission.png';


const Mission = ({

}) => {
  return (
    <div className="row">
      <div className="col-lg-5">
        <h1 className="text-center">Our Mission</h1>
        <h4 className="text-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
      </h4>
      </div>
      <div className="col-lg-7">
        <img src={MisImg} alt="mission" />
      </div>
    </div>
  );
};

export default Mission;
