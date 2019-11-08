import React, { useState, Fragment } from 'react';
import './style.scss';
import arrowBlack from '../../../../src/assets/images/career/apply-black-arrow.svg';
import arrowBlue from '../../../../src/assets/images/career/apply-active-arrow.svg';
import viewJobs from '../../../../src/assets/images/career/view-all-jobs.svg';
import { Link } from 'react-router-dom';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Utilities from '../../../shared/utilities';

const Opening = ({ jobListing, jobListingErr }) => {
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);

  return (
    <div className="open-position" id="opening">
      <div className="container">
        <h2 className="text-center career-title">Open Positions</h2>
        <div className="row">
          {jobListing &&
            jobListing.slice(0, limit).map((elem, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-6 position-inner"
                  key={elem.job_id}
                >
                  <h4>{elem.title}</h4>
                  <p>
                    {' '}
                    <span className="place">{elem.location} </span>
                    {elem.job_type && elem.job_type[0] !== null && (
                      <span>{elem.job_type.toString().replace(',', ', ')}</span>
                    )}
                  </p>
                  <Link to={`/career/jobdescription/${elem.job_id}`}>
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
        {loading && (
          <ShimmerEffect
            height={10}
            count={
              Utilities.mobilecheck()
                ? 1
                : Utilities.mobileAndTabletcheck()
                ? 2
                : 3
            }
            type="LIST"
            propCls={`shm_col-xs-${Utilities.mobilecheck() ? 1 : 2} col-md-${
              Utilities.mobilecheck()
                ? 12
                : Utilities.mobileAndTabletcheck()
                ? 6
                : 4
            }`}
          />
        )}
        {jobListing && jobListing.length > limit && (
          <div
            className="text-center"
            id="button"
            onClick={() => {
              document.getElementById('button').style.display = 'none';
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setLimit(jobListing.length);
              }, 1000);
            }}
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
