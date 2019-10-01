import React, { useRef, useEffect } from 'react';

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const AccordianSectionQA = ({ title, desc, uuid }) => {
  const titleRef = useRef();

  useEffect(() => {
    if (titleRef) {
      let indexOFQuestionID = titleRef.current.baseURI.indexOf('=');
      if (indexOFQuestionID !== -1) {
        let questionID = titleRef.current.baseURI.slice(
          indexOFQuestionID + 1,
          titleRef.current.baseURI.length
        );
        if (questionID === uuid) {
          window.scrollTo({
            top: titleRef.current.offsetParent.offsetTop + 299,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [titleRef]);
  return (
    <AccordionItem uuid={uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <span ref={titleRef}>{title}</span>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordianSectionQA;
