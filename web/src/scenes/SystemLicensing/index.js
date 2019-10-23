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
    <div>
      <Banner
        title={banner_title}
        buttonLink={button_link}
        buttonText={button_text}
        description={banner_description}
      />
      <WhySistic whySistic={content && content.why_sistic} />
      <TicketingSystem ticketingSystem={content && content.tickeying_system} />
    </div>
  );
};

export default SystemLicensing;
