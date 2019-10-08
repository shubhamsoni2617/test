import React from 'react';
import "./style.scss";
import TeamImg from '../../../../src/assets/images/team.png';
import arrowWhite from '../../../../src/assets/images/career/opening-blue-arrow.svg';
import arrowBlue from '../../../../src/assets/images/buy-arrow-b.png';


const OurTeam = ({

}) => {
  return (
    <div className="row our-team no-gutters">
      <div className="col-lg-5 col-md-6">
        <div className="ourteam-inner">
          <h4>Careers at SISTIC</h4>
          <h2>Join Our Team</h2>
          <p className="career-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan.
          </p>
          <button>See Job Openings 
          <img className="arrow-white" src={arrowWhite} alt="arrow" />
          <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
          </button>
      </div>
      </div>
      <div className="col-lg-7 col-md-6 our-team-img">
      </div>
    </div>
  );
};

export default OurTeam;
