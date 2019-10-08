import React, { useState, useEffect } from 'react';
import './style.scss';
import Contact from '../../../shared/components/Contact';

const CustomerEnquiry = ({ sendCategoryToFaqs }) => {
  const [enquiry, setEnquiry] = useState('Select an Enquiry');

  useEffect(() => {
    sendCategoryToFaqs(enquiry);
  }, [enquiry]);

  const handleEnquiry = enqId => {
    setEnquiry(enqId);
  };

  return (
    <div className="customer-enquiry-wrapper">
      <div className="customer-enquiry">
        <h3 className="heading-text">Customer Enquiries</h3>
        <Contact attachement={false} handleEnquiry={handleEnquiry} />
      </div>
    </div>
  );
};

export default CustomerEnquiry;
