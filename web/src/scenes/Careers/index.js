import React, { Component } from 'react';
import './style.scss';
import Header from './Header';
import OurTeam from './OurTeam';
import Mission from './Mission';
import CoreValues from './CoreValues';
import Opening from './Opening';
import StayUpdated from './StayUpdated';
import Testimonials from './Testimonial';
import Utilities from '../../shared/utilities';

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: 'Rock' },
        { value: 'Paper' },
        { value: 'Salt' },
        { value: 'Air' }
      ],
      areas: [],
      email: '',
      files: {},
      errMsg: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { areas, email } = this.state;
    const isEmailValid = Utilities.ValidateEmail(email);
    if (areas.length && isEmailValid) {
      // const data = {
      //   category: Number(enquiry),
      //   name: name,
      //   email: email,
      //   contact_number: phone,
      //   message: message,
      // };
      this.setState({ errMsg: '' });
    } else if (areas.length === 0 && !email) {
      this.setState({ errMsg: 'Fill all required fields...' });
    } else if (isEmailValid && areas.length === 0) {
      this.setState({ errMsg: 'choose at least one area of interest' });
    } else if (!email) {
      this.setState({ errMsg: 'Email is required...' });
    }
  };

  submitUploadAttachment = files => {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append('files[' + i + ']', file);
    }
  };

  handleEmail = email => {
    this.setState({ email, errMsg: '' });
  };

  handleFiles = files => {
    const multiFiles = Utilities.maxFileSize(files);
    if (multiFiles.length <= 3) {
      this.setState({ files: multiFiles, errMsg: '' });
    } else {
      this.setState({ errMsg: multiFiles });
    }
  };

  handleMultipleCheckbox = checkbox => {
    const checkboxInObj = Object.assign({}, checkbox);
    console.log(checkbox);
    this.setState({ areas: checkbox });
  };

  render() {
    return (
      <div>
        <Header />
        <OurTeam />
        <Mission />
        <CoreValues />
        <Opening />
        <StayUpdated
          state={this.state}
          handleEmail={this.handleEmail}
          handleFiles={this.handleFiles}
          handleMultipleCheckbox={this.handleMultipleCheckbox}
          handleSubmit={this.handleSubmit}
        />
        <Testimonials />
      </div>
    );
  }
}
export default Careers;
