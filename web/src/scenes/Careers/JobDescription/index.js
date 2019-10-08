import React, { Component } from 'react';
import Breadcrub from '../../App/Breadcrumb';
import JobDesBanner from '../../../../src/assets/images/job-des.png';
import Utilities from '../../../shared/utilities';
import PersonalInfo from './PersonalInfo';
import Description from './Description';

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
      page: 'UI/UX Design',
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
    if (name === 'contact_number') {
      const allowNumbersOnly = /^[0-9\b]+$/;
      if (value === '' || allowNumbersOnly.test(value)) {
        this.setState({ [name]: value });
      }
    } else {
      this.setState({ [name]: value });
    }
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
      <div className="">
        <Breadcrub breadCrumbData={this.breadCrumbData} />
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-7">
            <Description />
          </div>
          <div className="col-lg-5">
            <PersonalInfo
              state={this.state}
              handleChange={this.handleChange}
              handleFiles={this.handleFiles}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default JobDescription;
