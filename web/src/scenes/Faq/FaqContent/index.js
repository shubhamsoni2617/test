import React, { Fragment } from 'react';
import AccordionSection from '../../../shared/components/AccordionSection';
import { Accordion } from 'react-accessible-accordion';
class Content extends React.Component {
  Scrolldown() {
    let hash = this.props.location.search.split('=')[1];
    if (hash) {
      let node = this.refs[hash];
      let nodePosition = node.offsetTop - 100;
      if (nodePosition) {
        window.scroll({
          top: nodePosition,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  componentDidMount() {
    window.onload = this.Scrolldown();
  }

  render() {
    let filteredData = this.props.data.filter(content =>
      content.category_id.includes(this.props.categoryId)
    );
    if (!filteredData.length) {
      return <span className="no-faq-found">No related FAQ's found</span>;
    }
    return (
      <Accordion allowZeroExpanded>
        {filteredData.map((content, i) => {
          return (
            <div ref={content.id} key={content.question + i}>
              <AccordionSection
                title={content.question}
                desc={content.answer}
              />
            </div>
          );
        })}
      </Accordion>
    );
  }
}

export default Content;
