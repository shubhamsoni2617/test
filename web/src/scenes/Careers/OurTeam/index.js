import React from 'react';
import './style.scss';
import TeamImg from '../../../../src/assets/images/team.png';
import arrowWhite from '../../../../src/assets/images/career/opening-blue-arrow.svg';
import arrowBlue from '../../../../src/assets/images/buy-arrow-b.png';
import { Link } from 'react-scroll';
import Utilities from '../../../shared/utilities';

const OurTeam = ({ banner }) => {
  return (
    <div className="row our-team no-gutters">
      <div className="col-lg-5 col-md-6 our-team-content">
        <div className="ourteam-inner">
          <h4>{banner && banner.title}</h4>
          <h2>{banner && banner.subtitle}</h2>
          <div
            className="career-subtext"
            dangerouslySetInnerHTML={{ __html: banner && banner.description }}
          ></div>
          <Link
            to="opening"
            spy={true}
            smooth={true}
            offset={
              Utilities.mobilecheck()
                ? 10
                : Utilities.mobileAndTabletcheck()
                ? -50
                : -80
            }
            duration={1000}
          >
            <button>
              See Job Openings
              <img className="arrow-white" src={arrowWhite} alt="arrow" />
              <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
            </button>
          </Link>
        </div>
      </div>
      <div className="col-lg-7 col-md-6 our-team-img"></div>
    </div>
  );
};

export default OurTeam;
