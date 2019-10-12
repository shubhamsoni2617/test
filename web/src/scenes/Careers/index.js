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

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticContent: '',
      staticContentErr: '',
      testimonial: [],
      testimonialErr: '',
      jobListing: [],
      jobListingErr: '',
      areaOfInterest: [],
      areaOfInterestErr: '',
      selectedAreas: [],
      selectedIds: [],
      email: '',
      filePath: [],
      maxFileLimitMsg: '',
      errMsg: '',
      submit: false,
      isMultiple: true,
      loading: false,
      successMsg: '',
      serverErr: []
    };
  }

  componentDidMount() {
    this.scrollToTop();
    this.getStaticContent();
    this.getTestimonial();
    this.getJobListing();
    this.getAreaOfInterest();
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
        if (res && res.data) {
          this.setState({ staticContent: res.data });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ staticContentErr: 'Something went wrong...' });
        }
      });
  }

  getTestimonial() {
    CareerService.getTestimonial()
      .then(res => {
        if (res && res.data) {
          this.setState({ testimonial: res.data });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ testimonialErr: 'Something went wrong...' });
        }
      });
  }

  getJobListing() {
    CareerService.getJobListing()
      .then(res => {
        if (res && res.data) {
          this.setState({ jobListing: res.data });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ jobListingErr: 'Something went wrong...' });
        }
      });
  }

  getAreaOfInterest() {
    CareerService.getAreaOfInterest()
      .then(res => {
        if (res && res.data) {
          this.setState({ areaOfInterest: res.data.data });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ areaOfInterestErr: 'Something went wrong...' });
        }
      });
  }

  getJobDetail(id) {
    const params = {
      job_id: id
    };
    CareerService.getJobDetail(params)
      .then(res => {
        if (res && res.data) {
          this.setState({ jobDetail: res.data });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ jobDetail: 'Something went wrong...' });
        }
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, selectedIds, filePath } = this.state;
    if (email && selectedIds.length) {
      const data = {
        email,
        area_of_interest: selectedIds,
        attachment: filePath
      };
      this.setState({ loading: true });
      this.submitInterestUpdates(data);
    } else {
      this.setState({ errMsg: 'Please select all mandatory fields' });
    }
  };

  submitInterestUpdates(data) {
    CareerService.formSubmission(data)
      .then(res => {
        if (res && res.data) {
          this.setState({
            email: '',
            submit: true,
            selectedAreas: [],
            selectedIds: [],
            errMsg: '',
            successMsg: res.data.message,
            loading: false
          });
        }
      })
      .catch(err => {
        if (err && err.response) {
          this.setState({ serverErr: err.response.data, loading: false });
        }
      });
  }

  handleEmail = email => {
    this.setState({ email, errMsg: '', successMsg: '', serverErr: [] });
  };

  handleFiles = filePath => {
    this.setState({ filePath });
  };

  onClickSubmit = () => {
    this.setState({ submit: false });
    if (!this.state.multiple) {
      this.setState({ selectedAreas: [] });
    }
  };

  onSelect = values => {
    if (values && typeof values === 'object') {
      let selectedIds = [];
      this.state.areaOfInterest.filter(elem => {
        values.map(e => {
          if (elem.name === e) {
            selectedIds.push(Number(elem.id));
          }
        });
      });
      this.setState({ selectedAreas: values, selectedIds });
    }
  };

  render() {
    const {
      staticContent,
      staticContentErr,
      testimonial,
      testimonialErr,
      jobListing,
      jobListingErr,
      selectedAreas,
      areaOfInterest,
      areaOfInterestErr,
      email,
      successMsg,
      serverErr,
      loading,
      maxFileLimitMsg,
      errMsg,
      submit
    } = this.state;
    return (
      <div>
        <OurTeam banner={staticContent.banner} />
        <Mission mission={staticContent.section_one} />
        <CoreValues coreValues={staticContent.section_two} />
        <Opening jobListing={jobListing} jobListingErr={jobListingErr} />
        <StayUpdated
          stayUpdated={staticContent.section_three}
          staticContentErr={staticContentErr}
          options={areaOfInterest}
          areaOfInterestErr={areaOfInterestErr}
          selectedAreas={selectedAreas}
          email={email}
          maxFileLimitMsg={maxFileLimitMsg}
          errMsg={errMsg}
          submit={submit}
          successMsg={successMsg}
          serverErr={serverErr}
          loading={loading}
          handleEmail={this.handleEmail}
          handleFiles={this.handleFiles}
          handleSubmit={this.handleSubmit}
          onClickSubmit={this.onClickSubmit}
          onSelect={this.onSelect}
        />
        <Testimonials
          testimonial={testimonial}
          testimonialErr={testimonialErr}
        />
      </div>
    );
  }
}
export default Careers;
