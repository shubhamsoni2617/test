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
import { Provider } from './store';
import { initialState } from './store/reducers';
import Utilities from '../../shared/utilities';
import query from '../../shared/HelperFunctions/queryString';
import cal from '../../assets/images/preview-calendar.svg';
import PreviewNavigator from './PreviewNavigator';

export default class App extends React.Component {
  static getInitialData(req) {
    let url = `http://${req.hostname}:8081${Constants.DOC_ROOT_URL}`;
    if (req.hostname === 'previewuat.sistic.com.sg') {
      url = `http://${req.hostname}:8081${Constants.DOC_ROOT_URL}preview`;
    }
    HomeService.setBaseURL(url);

    return [
      HomeService.getMetadata(req.url && req.url.substr(1)),
      HomeService.getHomepageVenues(0, 5, ''),
      HomeService.getGenre(),
      AdvertisementService.getFindAnEventAds({
        client: Constants.CLIENT,
        limit: 3,
        first: 0
      })
    ];
  }
  static getInitialState(response) {
    // console.log('response', response);
    let result = { ...initialState };
    if (response.length > 0) {
      for (let i = 0; i < response.length; i++) {
        let urlArray =
          response &&
          response[i] &&
          response[i].config &&
          response[i].config.url &&
          response[i].config.url.split('/');
        if (urlArray.length > 0) {
          if (urlArray[urlArray.length - 1] === 'genres') {
            result.global['genreData'] = Object.keys(response[i].data.data).map(
              key => {
                return response[i].data.data[key];
              }
            );
          }
        }
      }
    }
    return result;
  }
  constructor(props) {
    super(props);

    this.state = {
      initialState: props.response || initialState,
      collapsed: false,
      showPreviewButton: false,
      showPreview: false,
      previewDate: ''
    };
    // if (typeof window == 'undefined') {
    //   console.log('server');
    // }
    if (typeof window != 'undefined') {
      if (window.location.hostname === 'previewuat.sistic.com.sg') {
        document.body.classList.add('preview');
        API.defaults.baseURL += 'preview';
        if (query(window.location).date) {
          API.defaults.headers.common['dated'] = query(window.location).date;
        }
      }
      API.defaults.headers.common['device_id'] = Utilities.getDeviceID();
    }
  }

  componentDidMount() {
    if (window.location.hostname === 'previewuat.sistic.com.sg') {
      this.setState({
        showPreviewButton: true
      });
    }
    if (localStorage.getItem('email')) {
      API.defaults.headers.common['email'] = localStorage.getItem('email');
    }

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
    const { showPreview, showPreviewButton } = this.state;
    return (
      <Provider initialState={this.state.initialState}>
        <div className="wrapper">
          <DownloadAppPopup />
          <Advertisement {...this.props} />
          <TopNav {...this.props} />
          {/* <Navigator {...this.props} /> */}
          <PreviewNavigator {...this.props} />
          {/* {!showPreviewButton && <Footer {...this.props} />} */}
          {showPreviewButton && (
            <span
              className={`preview-btn ${showPreview ? 'close-btn' : ''}`}
              onClick={() => {
                this.setState({
                  showPreview: !showPreview
                });
              }}
            >
              <img src={cal} alt="cal" />
              <i class="fa fa-calendar" aria-hidden="true"></i>
            </span>
          )}
          {showPreview && (
            <Preview
              history={this && this.props && this.props.history}
              urlDate={query(window.location).date}
            />
          )}
        </div>
      </Provider>
    );
  }
}
