import React, { Component } from 'react';
import Breadcrub from '../../App/Breadcrumb';
import JobDesBanner from '../../../../src/assets/images/job-des.png';
import PersonalInfo from './PersonalInfo';
import Description from './Description';
import CareerService from '../../../shared/services/CareerService';
import moment from 'moment';

class JobDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobId: Number(this.props.match.params.jobId),
      jobDetail: [],
      jobDetailErr: '',
      firstName: '',
      lastName: '',
      email: '',
      contact_number: '',
      startDate: '',
      message: '',
      isFileMandatory: true,
      filePath: [],
      sendCopy: false,
      loading: false,
      submit: false,
      successMsg: '',
      serverErr: [],
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
    const jobId = Number(this.props.match.params.jobId);
    if (jobId) {
      const params = {
        job_id: jobId
      };
      this.getParticularJobDetail(params);
    }
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
    e.preventDefault();
    const {
      jobId,
      firstName,
      lastName,
      email,
      contact_number,
      startDate,
      message,
      filePath,
      sendCopy
    } = this.state;
    if (
      jobId &&
      firstName &&
      lastName &&
      email &&
      contact_number &&
      message &&
      filePath.length
    ) {
      const data = {
        job_id: jobId,
        first_name: firstName,
        last_name: lastName,
        email,
        phone: contact_number,
        start_date: startDate ? moment(startDate).format('YYYY-MM-DD') : '',
        message,
        attachment: filePath,
        send_copy: sendCopy
      };
      this.setState({ loading: true });
      this.applyJobFormSubmission(data);
    } else {
      this.setState({ errMsg: 'Please select all mandatory field...' });
    }
  };

  applyJobFormSubmission(data) {
    CareerService.applyJobFormSubmission(data)
      .then(res => {
        if (res && res.data) {
          this.setState({
            loading: false,
            submit: true,
            successMsg: res.data.message,
            firstName: '',
            lastName: '',
            email: '',
            contact_number: '',
            message: '',
            startDate: '',
            filePath: [],
            sendCopy: false,
            errMsg: '',
            serverErr: []
          });
        }
      })
      .catch(err => {
        if (err && err.response && err.response.data) {
          this.setState({ serverErr: err.response.data, loading: false });
        }
      });
  }

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'contact_number') {
      const allowNumbersOnly = /^[0-9\b]+$/;
      if (value === '' || allowNumbersOnly.test(value)) {
        this.setState({
          [name]: value,
          successMsg: '',
          serverErr: [],
          submit: false
        });
      }
    } else {
      let val = value.trim();
      if (val.length > 0) {
        this.setState({
          [name]: value,
          successMsg: '',
          serverErr: [],
          submit: false
        });
      } else {
        this.setState({
          [name]: '',
          successMsg: '',
          serverErr: [],
          submit: false
        });
      }
    }
  };

  handleStartDate = startDate => {
    this.setState({ startDate });
  };

  handleCopy = sendCopy => {
    this.setState({ sendCopy });
  };

  handleFiles = filePath => {
    console.log(filePath);
    this.setState({ filePath, submit: false });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      contact_number,
      startDate,
      message,
      isFileMandatory,
      filePath,
      sendCopy,
      loading,
      submit,
      successMsg,
      serverErr,
      errMsg,
      jobDetail,
      jobDetailErr
    } = this.state;
    this.breadCrumbData.page = jobDetail && jobDetail.title;
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
                firstName={firstName}
                lastName={lastName}
                email={email}
                contact_number={contact_number}
                startDate={startDate}
                message={message}
                isFileMandatory={isFileMandatory}
                filePath={filePath}
                sendCopy={sendCopy}
                loading={loading}
                submit={submit}
                successMsg={successMsg}
                serverErr={serverErr}
                errMsg={errMsg}
                handleChange={this.handleChange}
                handleStartDate={this.handleStartDate}
                handleCopy={this.handleCopy}
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
