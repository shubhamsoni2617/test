import React, { Component } from 'react';
import Breadcrub from '../../App/Breadcrumb';
import JobDesBanner from '../../../../src/assets/images/job-des.png';
import Utilities from '../../../shared/utilities';
import PersonalInfo from './PersonalInfo';

class JobDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      contact_number: '',
      message: '',
      files: {},
      errMsg: ''
    };
    this.breadCrumbData = {
      page_banner: JobDesBanner,
      page: 'JobDescription',
      count: 0,
      breadcrumb_slug: [
        { path: '/', title: 'Home' },
        { path: '/careers', title: 'Careers' },
        { title: 'JobDescription' }
      ]
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, contact_number, message } = this.state;
    if (firstName && lastName && email && contact_number && message) {
      const data = {
        firstName,
        lastName,
        email,
        contact_number,
        message
      };
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  allowNumbersOnly = e => {
    var code = e.which ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
    console.log(e.target.value);
  };

  handleFiles = files => {
    const multiFiles = Utilities.maxFileSize(files);
    if (multiFiles.length <= 3) {
      this.setState({ files: multiFiles, errMsg: '' });
    } else {
      this.setState({ errMsg: multiFiles });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <Breadcrub breadCrumbData={this.breadCrumbData} />
        <div className="row">
          <div className="col-lg-8"></div>
          <div className="col-lg-4">
            <PersonalInfo
              state={this.state}
              handleChange={this.handleChange}
              allowNumbersOnly={this.allowNumbersOnly}
              handleFiles={this.handleFiles}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default JobDescription;
