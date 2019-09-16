import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';
import InstagramFeed from '../../shared/components/InstagramFeed/InstagramFeed';
import CarouselConatiner from './CarouselConatiner';
import PromotionCarousel from './PromotionCarousel';
import TopPics from './TopPics';
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
import HomeService from '../../shared/services/HomeService';

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
    };
    this.homePageRef = createRef();
  }

  showNewsTicker = data => {
    this.setState(data);
  };

  render() {
    return (
      <div className="home-page-wrapper" ref={this.homePageRef}>
        <NewsTicker
          homePageRef={this.homePageRef}
          showNewsTicker={this.showNewsTicker}
          modal={this.state.modal}
        />
        <HotShowPopup />
        <div className={`banner`}>
          <Image src={primeSlider2} largeImage={primeSlider} />
          {/* <img className={`main-image ${this.state.imageUrl ? 'show-image' : ''}`} src={primeSlider} alt="prime Slider" /> */}
        </div>
        <TopPics />
        <section className="gift-cart">
          <div className="gift-cart-image">
            <img
              src="assets/images/gift-card.png"
              className="img-fluid"
              alt="Gift-cart"
            />
          </div>
        </section>
        <FeaturedEvents />
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
        <InstagramFeed />
        <Cookies />
        <ModalPopup
          showModal={this.state.modal}
          content={this.state.modalContent}
          title="News Ticker"
          handleClose={() => this.setState({ modal: false, modalContent: '' })}
          htmlContent={true}
        />
      </div>
    );
  }
}

export default withRouter(props => <Home {...props} />);
