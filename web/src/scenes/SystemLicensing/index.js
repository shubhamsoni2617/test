import React, { useState, useEffect } from 'react';
import './style.scss';
import B2BService from '../../shared/services/B2BService';
import Constants from '../../shared/constants';
import Banner from './Banner';
import WhySistic from './WhySistic';
import TicketingSystem from './TicketingSystem';

const SystemLicensing = ({}) => {
  const [systemLicensing, setSystemLicensing] = useState([]);
  useEffect(() => {
    const params = {
      client: Constants.CLIENT
    };
    B2BService.getSystemLicensing(params)
      .then(res => {
        if (res && res.data) {
          setSystemLicensing(res.data);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  }, []);
  const {
    banner_title,
    button_link,
    button_text,
    banner_description,
    content
  } = systemLicensing;
  return (
    <div className="system-licence">
      <Banner
        title={banner_title}
        buttonLink={button_link}
        buttonText={button_text}
        description={banner_description}
      />
      <WhySistic whySistic={content && content.why_sistic} />
      <TicketingSystem ticketingSystem={content && content.tickeying_system} />
      <section>
            <div className="methodology">
                <div className="container-fluid">
                    <h2 className="text-center section-title">Product Design Methodology</h2>
                    <p className="text-center sub-text">SISTIC’S Product design team practice a human centric design approach while designing any new product or feature. The team involve as many stakeholders as possible during the design process through various methods like contextual interviews, job shadowing, usability testing and surveys. Artefacts such as wireframes and prototypes are used for testing and validation before the team embark on a development phase to mitigate the risk of device-widtheloping unwanted or unusable products and features.</p>
                    <div className="methodology-inner-wrapper">
                        <div className="item">
                            <h4>Strategy</h4>
                            <ul>
                               <li>Product Vision</li>
                               <li>Brand Stragedy</li>
                               <li>Measure of Success</li>
                            </ul>
                        </div>
                        <div className="item blue">
                            <h4>Discovery</h4>
                            <ul>
                               <li>Business Requirements</li>
                               <li>Analytics Review</li>
                               <li>Content Audit</li>
                               <li>User Interviews</li>
                               <li>Ethnography Research</li>
                            </ul>
                        </div>
                        <div className="item deep-orange">
                            <h4>Analysis</h4>
                            <ul>
                               <li>Use Case</li>
                               <li>Experience</li>
                               <li>Map</li>
                               <li> Workflow</li>
                            </ul>
                        </div>
                        <div className="item purple">
                            <h4>Design</h4>
                            <ul>
                               <li>Prototype</li>
                               <li>Usablity Testing</li>
                            </ul>
                        </div>
                        <div className="item light-green">
                            <h4>Production</h4>
                            <ul>
                               <li>P.O.C</li>
                               <li>Beta Launch</li>
                               <li>User Testing</li>
                               <li>Release</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default SystemLicensing;
