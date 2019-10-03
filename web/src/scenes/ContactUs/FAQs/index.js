import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import ContactUsService from '../../../shared/services/ContactUsService';
import AccordionSection from '../../../shared/components/AccordionSection';

const Faqs = props => {
  const { category } = props;
  const [faqsData, setFaqsData] = useState([]);

  useEffect(() => {
    if (category) {
      fetchFaqsData();
    }
  }, [category]);

  const fetchFaqsData = () => {
    const params = {
      category: category
    };
    ContactUsService.getFaqs(params)
      .then(res => {
        if (res.data && res.data.data) {
          setFaqsData(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="contact-page-faq">
      <h3>FAQs</h3>
      {faqsData &&
        faqsData.slice(0, 5).map(faq => {
          return (
            <AccordionSection
              key={faq.id}
              title={faq.question}
              desc={faq.answer}
            />
          );
        })}
      <Link to="/faq/top-questions" className="contact-us-all-faq">
        See all FAQs
      </Link>
    </div>
  );
};

export default Faqs;
