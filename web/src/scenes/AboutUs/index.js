import React, { Component } from 'react';
import Header from '../../shared/components/Header';
import Banner from './Banner';
import OurPeople from './OurPeople';
import Careers from './Careers';
import Description from './Description';
import ContactUs from '../ApiPartner/ContactUs';
import AboutUsService from '../../shared/services/AboutUsService';
import './style.scss';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUsContent: ''
    };
  }
  componentDidMount() {
    this.fetchAboutUsContent();
  }
  fetchAboutUsContent = () => {
    AboutUsService.getAboutUsContent()
      .then(res => {
        if (res.data) {
          this.setState({ aboutUsContent: res.data });
        }
      })
      .catch(err => { });
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
        {/* <Header /> */}
        <Banner
          title={banner_title}
          description={banner_description}
          buttonText={button_text}
          buttonLink={button_link}
        />
        <Description content={content && content} />
        <OurPeople content={content && content} />
        {/* <Careers /> */}
        <div className="apipartners-wrapper">
          <ContactUs />
        </div>
      </div>
    );
  }
}

export default AboutUs;
