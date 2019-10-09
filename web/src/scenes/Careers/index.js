import React, { Component } from 'react';
import './style.scss';
import OurTeam from './OurTeam';
import Mission from './Mission';
import CoreValues from './CoreValues';
import Opening from './Opening';
import StayUpdated from './StayUpdated';
import Testimonials from './Testimonial';
import Utilities from '../../shared/utilities';
import CareerService from '../../shared/services/CareerService';
import Constants from '../../shared/constants';

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
      errMsg: '',
      submit: false
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
    if (areas && email) {
      // const data = {
      //   category: Number(enquiry),
      //   name: name,
      //   email,
      //   contact_number: phone,
      //   message: message,
      // };
      this.setState({ errMsg: '', submit: true });
    } else if (areas.length === 0 && !email) {
      this.setState({ errMsg: 'Fill all required fields...' });
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
    this.setState({ files: {}, maxFileLimitMsg: '' });
    const filesLength = files.length;
    let fileSize = 0;
    for (let key in files) {
      if (files.hasOwnProperty(key)) {
        fileSize = fileSize + files[key].size;
      }
    }
    const sizeInMB = fileSize / (1024 * 1024);
    if (filesLength > 3 || sizeInMB > 5) {
      this.setState({
        maxFileLimitMsg: 'Max 3 files can be uploaded, with up to 5MB size.'
      });
    } else {
      this.submitUploadAttachment(files);
      this.setState({
        files: files
      });
    }
  };

  handleMultipleCheckbox = checkbox => {
    const checkboxInObj = Object.assign({}, checkbox);
    console.log(checkbox);
    this.setState({ areas: checkbox });
  };

  onClickSubmit = () => {
    this.setState({ submit: false });
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
      console.log(values);
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
          handleMultipleCheckbox={this.handleMultipleCheckbox}
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
