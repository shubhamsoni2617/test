import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';
import moment from 'moment';
import InstagramFeed from '../../shared/components/InstagramFeed/InstagramFeed';
import CarouselConatiner from './CarouselConatiner';
import PromotionCarousel from './PromotionCarousel';
import HotShowPopup from '../../shared/components/HotShowPopup';
import FeaturedEvents from '../../shared/components/FeaturedEvents';
import TrendingNow from './TrendingNow';
import CustomSectionTwo from './CustomSectionTwo';
import CustomSectionThree from './CustomSectionThree';
import GiftCard from './GiftCard';
import Explore from '../../shared/components/Explore';
import Cookies from '../../shared/components/Cookies';
import Image from '../../shared/components/Image';
import NewsTicker from './NewsTicker';
import ModalPopup from '../../shared/components/Modal';
import primeSlider from '../../assets/images/main-banner.png';
import primeSlider2 from '../../assets/images/main-banner.png';
import mobileBanner from '../../assets/images/home-mobile-banner.png';
import HomeService from '../../shared/services/HomeService';
import Utilities from '../../shared/utilities';
import Constants from '../../shared/constants';
import AdvertisementService from '../../shared/services/AdvertisementService';
// import CustomSection from './CustomSection';
import TopPics from './TopPics';
import MetaData from '../../shared/components/MetaData';
// import Royals from './Royals';
import HomePageCarouselContainer from './HomePageCarouselContainer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableCookies: false,
      orientation: '',
      offsetRadius: 0,
      showNavigation: '',
      config: {},
      modal: false,
      modalContent: '',
      newsTickerStatus: true,
      imageUrl: '',
      itemsOrder: [
        {
          sec_key: 'TOP_PICKS',
          label: 'Top Picks For You',
          hide_section: '0'
        },
        {
          sec_key: 'MID_PANEL',
          label: 'Mid Panel Ad Slot',
          hide_section: '0'
        },
        {
          sec_key: 'FEATURED_EVENTS',
          label: 'Featured Events',
          hide_section: '0'
        },
        {
          sec_key: 'CURRENTLY_SHOWING',
          label: 'Currently Showing',
          hide_section: '1'
        },
        {
          sec_key: 'PROMOTIONS',
          label: 'Promotions',
          hide_section: '0'
        },
        {
          sec_key: 'TRENDING_NOW',
          label: 'Trending Now',
          hide_section: '1'
        },
        {
          sec_key: 'WHATS_NEW',
          label: "What's New",
          hide_section: '0'
        },
        {
          sec_key: 'EXPLORE',
          label: 'Explore',
          hide_section: '0'
        },
        {
          sec_key: 'CUS_SEC_1',
          label: 'Featured Events',
          hide_section: '0'
        },
        {
          sec_key: 'CUS_SEC_2',
          label: 'Royals',
          hide_section: '0'
        },
        {
          sec_key: 'CUS_SEC_3',
          label: 'Videos',
          hide_section: '1'
        }
      ]
    };
    this.homePageRef = createRef();
  }

  componentDidMount() {
    if (window.location.hostname === 'previewuat.sistic.com.sg') {
      this.setState({
        disableCookies: true
      });
    }
    this.getItemsOrder();
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ orientation: 'landscape' });
  };

  showNewsTicker = data => {
    this.setState(data);
  };

  getItemsOrder() {
    const params = {
      client: Constants.CLIENT
    };
    HomeService.getItemsOrder(params)
      .then(res => {
        if (res && res.data) {
          this.setState({ itemsOrder: res.data.data });
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  }

  render() {
    return (
      <div className="home-page-wrapper" ref={this.homePageRef}>
        {this.props.location && (
          <MetaData
            location={this.props.location}
            data={this.props.staticContext}
          />
        )}
        <NewsTicker
          homePageRef={this.homePageRef}
          showNewsTicker={this.showNewsTicker}
          modal={this.state.modal}
        />
        <HotShowPopup />
        <div className={`banner`}>
          <HomePageCarouselContainer />
          {/* <Image
            src={Utilities.mobilecheck() ? mobileBanner : primeSlider2}
            largeImage={Utilities.mobilecheck() ? mobileBanner : primeSlider}
          /> */}
          {/* <img className={`main-image ${this.state.imageUrl ? 'show-image' : ''}`} src={primeSlider} alt="prime Slider" /> */}
        </div>
        {this.state.itemsOrder &&
          this.state.itemsOrder.length > 0 &&
          this.state.itemsOrder.map(
            ({ sec_key, label, hide_section, description }) => {
              if (hide_section === '1') return null;
              switch (sec_key) {
                case 'TOP_PICKS':
                  return <TopPics heading={label} />;
                case 'MID_PANEL':
                  return (
                    <GiftCard
                      api={
                        AdvertisementService.getSidePanelBetweenTopPicksFeaturedEvents
                      }
                      params={{ client: Constants.CLIENT }}
                    />
                  );
                case 'FEATURED_EVENTS':
                  return (
                    <FeaturedEvents
                      api={AdvertisementService.getFeaturedEvents}
                      heading={label}
                      seeAll={true}
                    />
                  );
                case 'CURRENTLY_SHOWING':
                  return (
                    <CarouselConatiner
                      title={label}
                      classStr="currently-showing"
                      autoplay={true}
                      infinite={false}
                      api={HomeService.getCurrentlyShowing}
                      link={`${'/events?s=' +
                        moment().format('YYYY-MM-DD') +
                        '--' +
                        moment()
                          .add(6, 'days')
                          .format('YYYY-MM-DD') +
                        '&'}`}
                    />
                  );
                case 'PROMOTIONS':
                  return <PromotionCarousel heading={label} />;
                case 'TRENDING_NOW':
                  return <TrendingNow heading={label} />;
                case 'WHATS_NEW':
                  return (
                    <CarouselConatiner
                      title={label}
                      classStr="whats-new"
                      arrows={true}
                      autoplay={false}
                      infinite={false}
                      api={HomeService.getNewRelease}
                    />
                  );
                case 'EXPLORE':
                  return <Explore heading={label} description={description} />;
                case 'CUS_SEC_1':
                  return (
                    <FeaturedEvents
                      heading={label}
                      api={AdvertisementService.getCustomizeSectionOne}
                      cssClassName="alternate-featured-events"
                      seeAll={false}
                    />
                  );
                case 'CUS_SEC_2':
                  return (
                    <CustomSectionTwo
                      heading={label}
                      customData={[]}
                      orientation={this.state.orientation}
                    />
                  );
                case 'CUS_SEC_3':
                  return (
                    <CustomSectionThree
                      heading={label}
                      customData={[]}
                      isHomePage={true}
                      orientation={this.state.orientation}
                    />
                  );
              }
            }
          )}

        <InstagramFeed />
        {!this.state.disableCookies && <Cookies />}
        <ModalPopup
          showModal={this.state.modal}
          content={this.state.modalContent}
          title="News Ticker"
          handleClose={() =>
            this.showNewsTicker({ modal: false, modalContent: '' })
          }
          htmlContent={true}
        />
      </div>
    );
  }
}

export default withRouter(props => <Home {...props} />);
