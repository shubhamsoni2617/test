import React, { Component } from 'react';
import './style.scss';
import OurTeam from './OurTeam';
import Mission from './Mission';
import CoreValues from './CoreValues';
import Opening from './Opening';
import StayUpdated from './StayUpdated';
import Testimonials from './Testimonial';
import CareerService from '../../shared/services/CareerService';
import Constants from '../../shared/constants';
import ContactUsService from '../../shared/services/ContactUsService';

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { name: 'Rock' },
        { name: 'Paper' },
        { name: 'Salt' },
        { name: 'Air' }
      ],
      areas: [],
      email: '',
      files: {},
      maxFileLimitMsg: '',
      filePath: [],
      errMsg: '',
      submit: false,
      isMultiple: true
    };
  }

  componentDidMount() {
    this.scrollToTop();
    this.getStaticContent();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  getStaticContent() {
    const params = {
      client: Constants.CLIENT
    };
    CareerService.getStaticContent(params)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { areas, email } = this.state;
    this.setState({ areas: [], submit: true });

    // if (areas && email) {
    //   const data = {
    //   category: Number(enquiry),
    //   name: name,
    //   email,
    //   contact_number: phone,
    //   message: message,
    //   };
    //   this.setState({ errMsg: '', submit: true });
    // } else if (areas.length === 0 && !email) {
    //   this.setState({ errMsg: 'Fill all required fields...' });
    // } else if (!email) {
    //   this.setState({ errMsg: 'Email is required...' });
    // }
  };

  submitUploadAttachment = files => {
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append('files[' + i + ']', file);
    }
    // ContactUsService.uploadAttachement(formData)
    //   .then(res => {
    //     if (res && res.data) {
    //       this.setState({ filePath: res.data.path });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err.response);
    //   });
  };

  handleEmail = email => {
    this.setState({ email, errMsg: '' });
  };

  handleFiles = files => {
    this.submitUploadAttachment(files);
  };

  onClickSubmit = () => {
    this.setState({ submit: false });
    if (!this.state.multiple) {
      this.setState({ values: '' });
    }
  };

  onSelect = values => {
    if (values && typeof values === 'object') {
      // let selectedId;
      // options.filter(elem => {
      //   if (elem.name === values) {
      //     selectedId = Number(elem.id);
      //   }
      // });
      this.setState({ areas: values });
    }
  };

  render() {
    const {
      options,
      areas,
      email,
      files,
      maxFileLimitMsg,
      errMsg,
      submit
    } = this.state;

    return (
      <div>
        <OurTeam />
        <Mission />
        <CoreValues />
        <Opening />
        <StayUpdated
          options={options}
          areas={areas}
          email={email}
          files={files}
          maxFileLimitMsg={maxFileLimitMsg}
          errMsg={errMsg}
          submit={submit}
          handleEmail={this.handleEmail}
          handleFiles={this.handleFiles}
          handleSubmit={this.handleSubmit}
          onClickSubmit={this.onClickSubmit}
          onSelect={this.onSelect}
        />
        <Testimonials />
      </div>
    );
  }
}
export default Careers;
