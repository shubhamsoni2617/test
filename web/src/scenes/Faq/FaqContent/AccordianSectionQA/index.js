import React, { Component, createRef } from 'react';

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class AccordianSectionQA extends Component {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
  }

  scrollToTitleHandler = () => {
    const { optionalSearchId, uuid, categoryLinkHeight } = this.props;
    if (this.titleRef && this.titleRef.current && optionalSearchId) {
      if (optionalSearchId === uuid && window.innerWidth > 991) {
        window.scrollTo({
          top: this.titleRef.current.offsetParent.offsetTop + 299,
          left: 0,
          behavior: 'smooth'
        });
      } else if (
        optionalSearchId === uuid &&
        window.innerWidth < 992 &&
        this.titleRef.current
      ) {
        window.scrollTo({
          top:
            199 +
            categoryLinkHeight +
            this.titleRef.current.offsetParent.offsetTop,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  };
  componentDidUpdate(prevProps) {
    setTimeout(() => {
      if (prevProps.optionalSearchId !== this.props.optionalSearchId) {
        this.scrollToTitleHandler();
      }
    }, 300);
  }
  componentDidMount() {
    setTimeout(() => {
      this.scrollToTitleHandler();
    }, 300);
  }

  render() {
    const { title, desc, uuid } = this.props;
    return (
      <AccordionItem uuid={uuid}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span ref={this.titleRef}>{title}</span>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </AccordionItemPanel>
      </AccordionItem>
    );
  }
}

export default AccordianSectionQA;
