import React from 'react';
import AccordianSectionQA from './AccordianSectionQA';
import { Accordion } from 'react-accessible-accordion';
import './style.scss';

const Content = props => {
  let filteredData = props.data.filter(content =>
    content.category_id.includes(props.categoryId)
  );
  if (!filteredData.length) {
    return <span className="no-faq-found">No related FAQ's found</span>;
  }
  return (
    <div className="sidebar-accordion">
      <Accordion
        allowZeroExpanded
        preExpanded={[props.location.search.split('=')[1]]}
      >
        {filteredData.map((content, i) => {
          return (
            <div key={content.question + i}>
              <AccordianSectionQA
                title={content.question}
                desc={content.answer}
                uuid={content.id}
                optionalSearchId={props.location.search.split('=')[1]}
              />
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Content;
