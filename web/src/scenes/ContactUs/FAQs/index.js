import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import ContactUsService from '../../../shared/services/ContactUsService';
import AccordionSection from '../../../shared/components/AccordionSection';

const Faqs = (props) => {

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
      .then((res) => {
        if (res.data && res.data.data) {
          setFaqsData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      {faqsData && faqsData.map((faq) => {
        return (
          <AccordionSection
            key={faq.id}
            title={faq.question}
            desc={faq.answer}
          />
        );
      })}
    </div>
  );
};

export default Faqs;
