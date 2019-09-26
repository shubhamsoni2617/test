import React, { Component } from 'react';
import './style.scss';
import ApiBanner from './ApiBanner';
import Partners from './Partners';
import ContactUs from '../../../src/shared/components/ContactUs';
import ApiPartnersService from '../../shared/services/ApiPartnersService';

class ApiPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partners: []
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

  render() {
    const { partners } = this.state;
    const { banner_title, banner_description, data } = partners;
    return (
      <div className="apipartners-wrapper">
        <ApiBanner title={banner_title} description={banner_description} />
        <Partners partnersLogo={data} />
        <ContactUs />
      </div>
    );
  }
}
export default ApiPartner;
