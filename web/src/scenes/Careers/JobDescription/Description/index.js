import React, { Fragment } from 'react';
import './style.scss';
import place from '../../../../assets/images/job-description/place.svg';
import experince from '../../../../assets/images/job-description/experince.svg';
import { Link } from 'react-scroll';

const Description = ({ jobDetail, jobDetailErr }) => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="job-des-wrapper">
      <h2>
        {jobDetail && jobDetail.title}
        <Link to="applynow" spy={true} smooth={true}>
          Apply Now
        </Link>
      </h2>
      <div className="experince-wrapper">
        {jobDetail && jobDetail.location && (
          <span className="experince">
            <img src={place} alt="place" />
            {capitalizeFirstLetter(jobDetail.location)}
          </span>
        )}
        {jobDetail && jobDetail.experience && (
          <span className="experince">
            <img src={experince} alt="experince" />
            {jobDetail.experience} Experience
          </span>
        )}
      </div>
      <div className="skills-requied">
        {jobDetail && jobDetail.skills && jobDetail.skills[0] !== null && (
          <Fragment>
            <h4>Skills Required</h4>
            <ul>
              {jobDetail.skills.map(skill => {
                return (
                  <li className="skills" key={skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>
          </Fragment>
        )}
        <p
          className="career-subtext job-description"
          dangerouslySetInnerHTML={{
            __html: jobDetail && jobDetail.description
          }}
        ></p>
      </div>
    </div>
  );
};

export default Description;
