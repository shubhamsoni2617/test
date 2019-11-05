import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';
import InstagramFeed from '../../shared/components/InstagramFeed/InstagramFeed';
import CarouselConatiner from './CarouselConatiner';
import PromotionCarousel from './PromotionCarousel';
import HotShowPopup from '../../shared/components/HotShowPopup';
import FeaturedEvents from './FeaturedEvents';
import TrendingNow from './TrendingNow';
import Explore from './Explore';
import Cookies from '../../shared/components/Cookies';
import Image from '../../shared/components/Image';
import NewsTicker from './NewsTicker';
import ModalPopup from '../../shared/components/Modal';
import primeSlider from '../../assets/images/main-banner.png';
import primeSlider2 from '../../assets/images/main-banner-2.png';
import mobileBanner from '../../assets/images/home-mobile-banner.png';
import HomeService from '../../shared/services/HomeService';
import Utilities from '../../shared/utilities';
import Constants from '../../shared/constants';
import AdvertisementService from '../../shared/services/AdvertisementService';
import CustomSection from './CustomSection';
import TopPics from './TopPics';
// import Royals from './Royals';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetRadius: 0,
      showNavigation: '',
      config: {},
      modal: false,
      modalContent: '',
      newsTickerStatus: true,
      imageUrl: '',
      giftCard: []
    };
    this.homePageRef = createRef();
  }

  componentDidMount() {
    this.getSidePanelBetweenTopPicksFeaturedEvents();
  }

  showNewsTicker = data => {
    this.setState(data);
  };

  getSidePanelBetweenTopPicksFeaturedEvents() {
    const params = {
      client: Constants.CLIENT,
      limit: 1,
      first: 0,
      sort_order: 'DESC'
    };
    AdvertisementService.getSidePanelBetweenTopPicksFeaturedEvents(params)
      .then(res => {
        if (res && res.data) {
          this.setState({ giftCard: res.data.data });
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  }

  render() {
    const { giftCard } = this.state;
    return (
      <div className="home-page-wrapper" ref={this.homePageRef}>
        <NewsTicker
          homePageRef={this.homePageRef}
          showNewsTicker={this.showNewsTicker}
          modal={this.state.modal}
        />
        <HotShowPopup />
        <div className={`banner`}>
          <Image
            src={Utilities.mobilecheck() ? mobileBanner : primeSlider2}
            largeImage={Utilities.mobilecheck() ? mobileBanner : primeSlider}
          />
          {/* <img className={`main-image ${this.state.imageUrl ? 'show-image' : ''}`} src={primeSlider} alt="prime Slider" /> */}
        </div>
        <TopPics />
        {giftCard &&
          giftCard.map(elem => {
            return (
              <div className="adds-container">
                <a
                  href={elem && elem.navigation_link}
                  className="giftcard-anchor"
                  target="_blank"
                  key={elem.title}
                >
                  {/* <section className="gift-cart">
                    <div className="gift-cart-image"> */}
                  <img
                    src={elem && elem.full_image}
                    className="img-fluid"
                    alt={elem && elem.alt_text}
                    title={elem && elem.title}
                  />
                  {/* </div>
                  </section> */}
                </a>
              </div>
            );
          })}
        <FeaturedEvents
          api={AdvertisementService.getFeaturedEvents}
          heading="Featured Events"
        />
        <CarouselConatiner
          title="Currently Showing"
          classStr="currently-showing"
          autoplay={true}
          infinite={false}
          api={HomeService.getCurrentlyShowing}
        />
        <PromotionCarousel />
        <TrendingNow />
        <CarouselConatiner
          title="What's New"
          classStr="whats-new"
          arrows={true}
          autoplay={false}
          infinite={false}
          api={HomeService.getNewRelease}
        />
        <Explore />
        <CustomSection />
        <InstagramFeed />
        <Cookies />
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
