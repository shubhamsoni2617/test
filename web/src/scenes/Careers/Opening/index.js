import React from 'react';
import './style.scss';
import arrowBlack from '../../../../src/assets/images/career/apply-black-arrow.svg';
import arrowBlue from '../../../../src/assets/images/career/apply-active-arrow.svg';
import viewJobs from '../../../../src/assets/images/career/view-all-jobs.svg';

const Opening = ({}) => {
  return (
    <div className="open-position">
      <div className="container">
        <h2 className="text-center career-title">Open Positions</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 position-inner">
            <h4>Sr.Developer</h4>
            <p> <span className="place"> Singapore </span>
                <span> 
                  Full Time,Temporary,Contract
                </span>
            </p>
            <a>Apply Now
              <img className="arrow-black" src={arrowBlack} alt="arrow" />
              <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 position-inner">
            <h4>Sr.Developer</h4>
            <p>Singapore Full Time,Temporary,Contract</p>
            <a>Apply Now
              <img className="arrow-black" src={arrowBlack} alt="arrow" />
              <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 position-inner">
            <h4>Sr.Developer</h4>
            <p>Singapore Full Time,Temporary,Contract</p>
            <a>Apply Now
              <img className="arrow-black" src={arrowBlack} alt="arrow" />
              <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 position-inner">
            <h4>Sr.Developer</h4>
            <p>Singapore Full Time,Temporary,Contract</p>
            <a>Apply Now
              <img className="arrow-black" src={arrowBlack} alt="arrow" />
              <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 position-inner">
            <h4>Sr.Developer</h4>
            <p>Singapore Full Time,Temporary,Contract</p>
            <a>Apply Now
              <img className="arrow-black" src={arrowBlack} alt="arrow" />
              <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
            </a>
          </div>
          <div className="col-lg-4 col-md-6 position-inner">
            <h4>Sr.Developer</h4>
            <p>Singapore Full Time,Temporary,Contract</p>
            <a>Apply Now
              <img className="arrow-black" src={arrowBlack} alt="arrow" />
              <img className="arrow-blue" src={arrowBlue} alt="white-arrow" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <a className="view-jobs">View all Jobs
            <img className="arrow-blue" src={viewJobs} alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Opening;
