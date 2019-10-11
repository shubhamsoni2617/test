import React from 'react';
import './style.scss';
import MisImg from '../../../../src/assets/images/mission.png';
import play from '../../../../src/assets/images/career/our-mission.svg';

const Mission = ({ mission }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="mission">
            <h2 className="career-title">{mission && mission.title}</h2>
            <p
              className="career-subtext"
              dangerouslySetInnerHTML={{
                __html: mission && mission.description
              }}
            ></p>
          </div>
        </div>
        <div className="col-lg-7 blue-line col-md-6">
          <img src={MisImg} alt="mission" />
          <div className="play">
            <img src={play} alt="play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
