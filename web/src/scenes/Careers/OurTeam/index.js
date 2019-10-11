import React from 'react';
import './style.scss';
import TeamImg from '../../../../src/assets/images/team.png';
import arrowWhite from '../../../../src/assets/images/career/opening-blue-arrow.svg';
import arrowBlue from '../../../../src/assets/images/buy-arrow-b.png';
import Utilities from '../../../shared/utilities';

const OurTeam = ({ banner }) => {
  const scrollToBottom = () => {
    if (Utilities.mobilecheck()) {
      scroll(1570);
    } else if (Utilities.mobileAndTabletcheck()) {
      scroll(1000);
    } else {
      scroll();
    }
  };
  const scroll = (top = 1500) => {
    window.scrollTo({ top: top, behavior: 'smooth' });
  };
  return (
    <div className="row our-team no-gutters">
      <div className="col-lg-5 col-md-6">
        <div className="ourteam-inner">
          <h4>{banner && banner.title}</h4>
          <h2>{banner && banner.subtitle}</h2>
          <p
            className="career-subtext"
            dangerouslySetInnerHTML={{ __html: banner && banner.description }}
          ></p>
          <button onClick={scrollToBottom}>
            See Job Openings
            <img className="arrow-white" src={arrowWhite} alt="arrow" />
            <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
          </button>
        </div>
      </div>
      <div className="col-lg-7 col-md-6 our-team-img"></div>
    </div>
  );
};

export default OurTeam;
