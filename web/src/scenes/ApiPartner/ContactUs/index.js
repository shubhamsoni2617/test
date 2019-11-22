import React, { useEffect } from 'react';
import Contact from '../../../shared/components/Contact';
import { useCustomContactDetail } from '../../../../src/shared/components/CustomHooks';
import { animateScroll } from 'react-scroll';
const ContactUs = ({ type, location, dataLoaded }) => {
  useEffect(() => {
    if (dataLoaded && location && location.hash) {
      const offset = document
        .getElementById(location.hash)
        .getBoundingClientRect().top;
      animateScroll.scrollMore(offset - 75);
    }
  }, [dataLoaded]);

  const [contactDetail] = useCustomContactDetail();
  return (
    <div className="contact-us banner-overlay">
      <h1 className="text-center contact-us-header" id="#contact-us">
        Contact Us
      </h1>
      <div className="container">
        <div className="contact-us-block">
          <div className="contact-we-are-at">
            <div className="we-are-at">
              <h3>We are at</h3>
              <p
                className="text"
                dangerouslySetInnerHTML={{
                  __html: contactDetail.address && contactDetail.address.name
                }}
              ></p>
              <a
                href={`https://maps.google.com/?q=${contactDetail.address &&
                  contactDetail.address.latitude},${contactDetail.address &&
                  contactDetail.address.longitude}`}
                target="_blank"
              >
                Open in Maps
              </a>
            </div>
            <div className="contactus-hotline-number">
              <h4>Hotline Number</h4>
              <p>
                {contactDetail.contact_information &&
                  contactDetail.contact_information.contact_number}
              </p>
            </div>
          </div>
          <div className="customer-enquiry-wrapper">
            <div className="customer-enquiry">
              <h3 className="heading-text">Corporate Enquiries</h3>
              <Contact type={type} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
