import React, { Component } from 'react';
import './style.scss';
import ApiBanner from './ApiBanner';
import Partners from './Partners';
import ContactUs from './ContactUs';
import ApiPartnersService from '../../shared/services/ApiPartnersService';
import MetaData from '../../shared/components/MetaData';
// import './style.scss';

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
      first: 0
      // limit: 10
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
        <MetaData
          location={this.props.location}
          data={this.props.staticContext}
        />
        <ApiBanner title={banner_title} description={banner_description} />
        {/* <h2>View some of the partners that we work with</h2> */}
        <Partners partnersLogo={data} />
        <ContactUs type={'contact'} />
      </div>
    );
  }
}
export default ApiPartner;
