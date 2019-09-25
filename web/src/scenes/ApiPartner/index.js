import React, { Component } from 'react';
import './style.scss';
import ApiBanner from './ApiBanner';
import Partners from './Partners';
import ContactUs from './ContactUs';
import ApiPartnersService from '../../shared/services/ApiPartnersService';

class ApiPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: [],
      name: '',
      email: '',
      phone: '',
      message: '',
      errMsg: ''
    };
  }
  componentDidMount() {
    this.scrollToTop();
    this.fetchApiPartners();
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  fetchApiPartners = () => {
    const params = {
      first: 1,
      limit: 10
    };
    ApiPartnersService.getApiPartnersService(params)
      .then(res => {
        if (res.data) {
          this.setState({ partners: res.data });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phone, message } = this.state;
    if (name && email && phone && message) {
    } else {
      this.setState({ errMsg: 'Please complete all fields' });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const allowOnlyNum = /^[0-9\b]+$/;
      if (value === '' || allowOnlyNum.test(value)) {
        this.setState({ [name]: value });
      }
    } else {
      this.setState({ [name]: value, errMsg: '' });
    }
  };

  render() {
    const { name, email, phone, message, partners, errMsg } = this.state;
    const { banner_title, banner_description, data } = partners;
    return (
      <div className="apipartners-wrapper">
        <ApiBanner title={banner_title} description={banner_description} />
        <Partners partnersLogo={data} />
        <ContactUs
          name={name}
          email={email}
          phone={phone}
          message={message}
          errMsg={errMsg}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
export default ApiPartner;
