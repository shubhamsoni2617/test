import React, { Component } from 'react';
import Banner from './Banner';
import OurPeople from './OurPeople';
import Careers from './Careers';
import Description from './Description';
// import ContactUs from '../../../src/shared/components/ContactUs';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Banner />
        <Description />
        <OurPeople />
        <Careers />
        {/* <ContactUs /> */}
      </div>
    );
  }
}

export default AboutUs;
