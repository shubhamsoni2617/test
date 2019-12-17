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
import API from '../../shared/api';
import preview from '../../assets/images/preview.png';
import Preview from '../../shared/components/Preview';
import Utilities from '../../shared/utilities';

export default class App extends React.Component {
  static getInitialData(req) {
    HomeService.setBaseURL(
      `http://${req.hostname}:8081${Constants.DOC_ROOT_URL}`
    );

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
        first: 0
      })
    ];
  }
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      showPreviewButton:
        this.props.history.location.pathname.split('/')[1] === 'preview',
      showPreview: false
    };
  }

  componentDidMount() {
    if (this.props.history.location.pathname.split('/')[1] === 'preview') {
      API.defaults.baseURL += 'preview';
    }

    if (localStorage.getItem('email')) {
      API.defaults.headers.common['email'] = localStorage.getItem('email');
    }
    API.defaults.headers.common['device_id'] = Utilities.getDeviceID();

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
        {/* <Footer {...this.props} /> */}
        {!this.state.showPreviewButton && <Footer {...this.props} />}

        {/* {this.state.showPreviewButton && (
          <span
            className="scroll-left"
            onClick={() => {
              this.setState({
                showPreview: !this.state.showPreview
              });
            }}
          >
            <img src={preview} alt="preview" />
          </span>
        )} */}
        {/* {this.state.showPreview && <Preview />} */}
      </div>
    );
  }
}
