import React from 'react';

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const AccordianSectionQA = ({ title, desc }) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{title}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div dangerouslySetInnerHTML={{ __html: desc }} />
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordianSectionQA;
