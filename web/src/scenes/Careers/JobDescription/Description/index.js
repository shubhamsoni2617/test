import React from 'react';
import './style.scss';
import place from '../../../../assets/images/job-description/place.svg';
import experince from '../../../../assets/images/job-description/experince.svg';
import { Link } from 'react-scroll';
const Description = ({ jobDetail, jobDetailErr }) => {
  return (
    <div className="job-des-wrapper">
      <h2>
        {jobDetail && jobDetail.title}
        <Link to="applynow" spy={true} smooth={true}>
          Apply Now
        </Link>
      </h2>
      <div className="experince-wrapper">
        <span className="experince">
          <img src={place} alt="place" />
          {jobDetail && jobDetail.location}
        </span>
        <span className="experince">
          <img src={experince} alt="experince" />
          {jobDetail && jobDetail.experience}
        </span>
      </div>
      <div className="skills-requied">
        <h4>Skills Required</h4>
        {jobDetail && jobDetail.skills && (
          <ul>
            {jobDetail.skills.map(skill => {
              return (
                <li className="skills" key={skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
        )}
        <p
          className="career-subtext job-description"
          dangerouslySetInnerHTML={{
            __html: jobDetail && jobDetail.description
          }}
        ></p>
      </div>
      {/* <div>
        <div className="job-description">
          <h4>Job Description</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
          </ul>
        </div>

        <div className="job-description">
          <h4>Roles & Responsibilities</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et.
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Description;
