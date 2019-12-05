import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navigator from './Navigator';
import TopNav from './TopNav';
import Advertisement from '../../shared/components/Advertisement';
import './style.css';
import AdvertisementService from '../../shared/services/AdvertisementService';
import Constants from '../../shared/constants';
import HomeService from '../../shared/services/HomeService';
import DownloadAppPopup from '../../shared/components/DownloadAppPopup';

export default class App extends React.Component {
  static getInitialData(req) {
    return [
      HomeService.getMetadata(req.url && req.url.substr(1)),
      AdvertisementService.getLeaderboardImage({
        client: Constants.CLIENT,
        page: 1
      }),
      HomeService.getHomepageVenues(0, 5, ''),
      HomeService.getGenre(),
      AdvertisementService.getFindAnEventAds({
        client: Constants.CLIENT,
        limit: 3,
        first: 1
      })
    ];
  }
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      document.body.classList.remove('fix-height');
      document.getElementById('loader').classList.add('loaded');
    }, 1000);
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="wrapper">
        {/* <DownloadAppPopup /> */}
        <Advertisement {...this.props} />
        <TopNav {...this.props} />
        <Navigator {...this.props} />
        <Footer />
      </div>
    );
  }
}
