import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

class AccordianSectionQA extends Component {
  constructor(props) {
    super(props);
    this.categoryLinkRef = createRef();
  }

  componentDidUpdate() {
    const { categoryLinkHeightHandler } = this.props;

    if (
      this.categoryLinkRef.current.innerText
        .replace(/\s/g, '-')
        .toLowerCase() === this.props.paramId
    ) {
      categoryLinkHeightHandler(
        this.categoryLinkRef.current.offsetParent.offsetTop
      );
    }
  }

  render() {
    const {
      categoryName,
      categoryId,
      currentCategoryId,
      toggleContentHandler,
      toggleContent
    } = this.props;
    return (
      <Link
        className={`nav-item nav-link  ${
          currentCategoryId === categoryId ? `active` : ``
        }`}
        to={`/faq/${categoryName.replace(/\s/g, '-').toLowerCase()}`}
        onClick={() => {
          if (window.innerWidth > 991) {
            window.scrollTo({
              top: 400,
              left: 0,
              behavior: 'smooth'
            });
            toggleContentHandler(true);
          } else {
            if (currentCategoryId === categoryId) {
              toggleContentHandler(!toggleContent);
            } else {
              toggleContentHandler(true);
            }
          }
        }}
      >
        <span ref={this.categoryLinkRef}>{categoryName}</span>
      </Link>
    );
  }
}

export default AccordianSectionQA;
