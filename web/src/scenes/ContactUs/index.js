import React, { Component } from 'react';
import './style.scss';
import FindUs from './FindUs';
import Faqs from './FAQs';
import CustomerEnquiry from './CustomerEnquiry';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  sendCategoryToFaqs = category => {
    this.setState({ category: category });
  };

  render() {
    const { category } = this.state;

    return (
      <div className="contact-us banner-overlay">
        <h1 className="text-center contact-us-header">Contact Us</h1>
        <div className="container">
          <div className="contact-us-block">
            <CustomerEnquiry
              sendCategoryToFaqs={this.sendCategoryToFaqs}
              type="contact"
            />
            <div className="contact-find-us">
              <FindUs />
            </div>
          </div>
          <Faqs category={category} />
        </div>
      </div>
    );
  }
}

export default ContactUs;
