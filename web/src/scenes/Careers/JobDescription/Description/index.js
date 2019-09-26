import React from 'react';
import './style.scss';
import place from '../../../../assets/images/job-description/place.svg';
import experince from '../../../../assets/images/job-description/experince.svg';

const Description = ({

}) => {
  return (
    <div className="container">
      <div className="job-des-wrapper">
        <h2>Senior Experience Designer</h2>
        <div className="experince-wrapper">
        <span className="experince"><img src={place} alt="place" />Singapore</span>
        <span className="experince"><img src={experince} alt="experince" />3+ Years Experience</span>
        </div>
        <div className="skills-requied">
          <h4>Skills Required</h4>
          <ul>
            <li className="skills">Web Layout</li>
            <li className="skills">Mobile Layout</li>
            <li className="skills">Branding</li>
            <li className="skills">Typography</li>
            <li className="skills">Iconography</li>
            <li className="skills">HTML/CSS</li>
          </ul>
          <p className="career-subtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived no.
          </p>
        </div>
        <div>
          <div className="job-description">
            <h4>Job Description</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
            </ul>
          </div>

          <div className="job-description">
            <h4>Roles & Responsibilities</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Description;
