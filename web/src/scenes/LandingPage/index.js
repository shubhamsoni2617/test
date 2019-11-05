import React, { useState, useEffect } from 'react';
import './style.scss';
import Banner from './Banner';
import GetStarted from './GetStarted';
import B2BService from '../../shared/services/B2BService';
import Media from './Media';
import VideoBreak from './VideoBreak';
import CareerService from '../../shared/services/CareerService';
import Careers from '../../shared/components/Careers';
import Network from './Network';
import ContactUs from '../ApiPartner/ContactUs';

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [testimonial, setTestimonial] = useState(null);
  useEffect(() => {
    fetchLandingPageData();
    getTestimonial();
  }, []);

  const fetchLandingPageData = () => {
    B2BService.getLandingPage()
      .then(res => {
        setLandingPageData(res.data);
      })
      .catch(err => console.log(err));
  };

  const getTestimonial = () => {
    CareerService.getTestimonial()
      .then(res => {
        setTestimonial(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="b2b-landing">
      <Banner bannerData={landingPageData} />
      <GetStarted
        getStartedData={landingPageData && landingPageData.content.get_started}
      />
      <Media mediaData={landingPageData && landingPageData.content.media} />
      <VideoBreak
        videoData={landingPageData && landingPageData.content.video}
      />
      <Careers sliderArr={testimonial && testimonial.testimonials} />
      <Network
        networkData={landingPageData && landingPageData.content.network}
      />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
