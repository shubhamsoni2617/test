import React, { Component, createRef } from "react";
import Helmet from "react-helmet";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import InstagramFeed from "../../shared/components/InstagramFeed/InstagramFeed";
import CarouselConatiner from "./CarouselConatiner";
import WhatsNew from "./WhatsNew/WhatsNew";
import PromotionCarousel from "./PromotionCarousel";
import TopPics from "./TopPics";
import HotShowPopup from "../../shared/components/HotShowPopup";
import FeaturedEvents from "./FeaturedEvents";
import TrendingNow from "./TrendingNow";
import Explore from "./Explore";
import Cookies from "../../shared/components/Cookies";
import NewsTicker from "./NewsTicker";
import ModalPopup from "../../shared/components/Modal";
import primeSlider from "../../assets/images/main-banner.png";
import ShimmerEffect from '../../shared/components/ShimmerEffect';
import HomeService from "../../shared/services/HomeService";

const preLoadImgage = (src) => {
  let img = new Image();
  img.src = src;
}
preLoadImgage(primeSlider);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetRadius: 0,
      showNavigation: "",
      config: {},
      modal: false,
      modalContent: "",
      newsTickerStatus: true,
      imageUrl: ''
    };
    this.homePageRef = createRef();
    this.preLoadImgage(primeSlider);
  }

  preLoadImgage = (src) => {
    let img = new Image();
    img.onload = () => {
      // setTimeout(() => {
        this.setState({imageUrl: src});
      // }, 5000);
    };
    img.src = src;
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
          <img className={`main-image ${this.state.imageUrl ? 'show-image' : ''}`} src={primeSlider} alt="prime Slider" />
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
            api={HomeService.getNewRelease} />
        <Explore />
        <InstagramFeed />
        <Cookies />
        <ModalPopup
          showModal={this.state.modal}
          content={this.state.modalContent}
          title="News Ticker"
          handleClose={() => this.setState({ modal: false, modalContent: "" })}
          htmlContent={true}
        />
      </div>
    );
  }
}

export default withRouter(props => <Home {...props} />);
