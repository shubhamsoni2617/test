import React, { Component } from 'react';
import Breadcrub from '../../App/Breadcrumb';
import JobDesBanner from '../../../../src/assets/images/job-des.png';
import Utilities from '../../../shared/utilities';
import PersonalInfo from './PersonalInfo';
import Description from './Description';
import CareerService from '../../../shared/services/CareerService';

class JobDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetail: [],
      jobDetailErr: '',
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

  componentDidMount() {
    const jobId = this.props.match.params.jobId;
    const params = {
      job_id: jobId
    };
    this.getParticularJobDetail(params);
  }

  getParticularJobDetail(params) {
    CareerService.getParticularJobDetail(params)
      .then(res => {
        if (res && res.data) {
          this.setState({ jobDetail: res.data });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ jobDetailErr: 'Something went wrong...' });
        }
      });
  }

  handleSubmit = e => {
    console.log(this.state);
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
    } else {
      this.setState({ errMsg: 'Please select all mandatory field...' });
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
      let val = value.trim();
      if (val.length > 0) {
        this.setState({ [name]: value });
      }
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
    const {
      firstName,
      lastName,
      email,
      contact_number,
      message,
      files,
      errMsg,
      jobDetail,
      jobDetailErr
    } = this.state;
    return (
      <div className="">
        <Breadcrub breadCrumbData={this.breadCrumbData} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <Description jobDetail={jobDetail} jobDetailErr={jobDetailErr} />
            </div>
            <div className="col-lg-5">
              <PersonalInfo
                state={this.state}
                firstName={firstName}
                lastName={lastName}
                email={email}
                contact_number={contact_number}
                message={message}
                files={files}
                errMsg={errMsg}
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
