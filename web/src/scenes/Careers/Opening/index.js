import React, { useState, Fragment } from 'react';
import './style.scss';
import arrowBlack from '../../../../src/assets/images/career/apply-black-arrow.svg';
import arrowBlue from '../../../../src/assets/images/career/apply-active-arrow.svg';
import viewJobs from '../../../../src/assets/images/career/view-all-jobs.svg';
import { Link } from 'react-router-dom';

const Opening = ({ jobListing, jobListingErr }) => {
  const [limit, setLimit] = useState(6);
  return (
    <div className="open-position">
      <div className="container">
        <h2 className="text-center career-title">Open Positions</h2>
        <div className="row">
          {jobListing &&
            jobListing.slice(0, limit).map(elem => {
              return (
                <div
                  className="col-lg-4 col-md-6 position-inner"
                  key={elem.job_id}
                >
                  <h4>{elem.title}</h4>
                  <p>
                    {' '}
                    <span className="place">{elem.location} </span>
                    {elem.job_type.map((jobType, i) => {
                      return (
                        <Fragment>
                          <span key={i}> {jobType}</span>{' '}
                        </Fragment>
                      );
                    })}
                  </p>
                  <Link to="/careers/jobdescription">
                    Apply Now
                    <img className="arrow-black" src={arrowBlack} alt="arrow" />
                    <img
                      className="arrow-blue"
                      src={arrowBlue}
                      alt="white-arrow"
                    />
                  </Link>
                </div>
              );
            })}
        </div>
        {jobListing && jobListing.length > limit && (
          <div
            className="text-center"
            onClick={() => setLimit(jobListing && jobListing.length)}
          >
            <a className="view-jobs">
              View all Jobs
              <img className="arrow-blue" src={viewJobs} alt="arrow" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Opening;
