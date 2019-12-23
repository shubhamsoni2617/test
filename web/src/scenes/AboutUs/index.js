import React, { Component } from 'react';
import Header from '../../shared/components/Header';
import Banner from './Banner';
import OurPeople from './OurPeople';

import Description from './Description';
import ContactUs from '../ApiPartner/ContactUs';
import AboutUsService from '../../shared/services/AboutUsService';
import './style.scss';
import Careers from '../../shared/components/Careers';
import CareerService from '../../shared/services/CareerService';
import MetaData from '../../shared/components/MetaData';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUsContent: '',
      testimonial: null
    };
  }
  componentDidMount() {
    this.fetchAboutUsContent();
    this.getTestimonial();
    this.scrollToTop();
  }
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  fetchAboutUsContent = () => {
    AboutUsService.getAboutUsContent()
      .then(res => {
        if (res.data) {
          this.setState({ aboutUsContent: res.data });
        }
      })
      .catch(err => {});
  };
  getTestimonial = () => {
    CareerService.getTestimonial()
      .then(res => {
        if (res && res.data) {
          this.setState({ testimonial: res.data });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {
      banner_title,
      banner_description,
      button_text,
      button_link,
      content
    } = this.state.aboutUsContent;
    return (
      <div className="about-us-wrapper">
        <MetaData
          location={this.props.location}
          data={this.props.staticContext}
        />
        <Banner
          title={banner_title}
          description={banner_description}
          buttonText={button_text}
          buttonLink={button_link}
        />
        <Description content={content && content} />
        <OurPeople content={content && content} />
        <Careers
          sliderArr={
            this.state.testimonial && this.state.testimonial.testimonials
          }
        />
        <div className="apipartners-wrapper">
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default AboutUs;
