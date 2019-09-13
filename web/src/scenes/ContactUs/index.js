import React, { Component } from 'react';
import './style.scss';
import ContactUsService from '../../shared/services/ContactUsService';
import FindUs from './FindUs';
import Faqs from './FAQs';
import CustomerEnquiry from './CustomerEnquiry';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiryCategory: [],
      contactDetail: {},
      category: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchEnquiry();
    this.fetchContactDetail()
  }

  fetchEnquiry = () => {
    ContactUsService.getEnquiry()
      .then((res) => {
        if (res && res.data) {
          this.setState({ enquiryCategory: res.data.data })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchContactDetail = () => {
    ContactUsService.getContactDetail()
      .then((res) => {
        if (res && res.data) {
          this.setState({ contactDetail: res.data.data });
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  sendCategoryToFaqs = (category) => {
    this.setState({ category: category })
  }

  render() {
    const { enquiryCategory, contactDetail,category } = this.state;

    return (
      <div className="contact-us">
        <h1 className="text-center contact-us-header">Contact Us</h1>
        <div className="container">
          <div className="contact-us-block">
            <div className="row">
              <CustomerEnquiry enquiryCategory={enquiryCategory} sendCategoryToFaqs={this.sendCategoryToFaqs} />
              <div className="col-lg-5 pr-0">
                <FindUs contactDetail={contactDetail} />
              </div>
            </div>
          </div>
          <Faqs category={category} />
        </div>
      </div>
    );
  }
}

export default ContactUs;
