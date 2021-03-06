import React, { Component, createRef } from 'react';
import Slider from 'react-slick';
import Constants from '../../../shared/constants';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Timer from '../../../shared/components/Timer';
import Image from '../../../shared/components/Image';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import './style.scss';
import { Link } from 'react-router-dom';
import promoImg1 from '../../../assets/images/promo-img1.svg';
import promoImg2 from '../../../assets/images/promo-img2.svg';
import promoImg3 from '../../../assets/images/promo-img3.svg';
import promoImg4 from '../../../assets/images/promo-img4.svg';
import EventHeading from '../../../shared/components/EventHeading';

const ItemWrapper = ({ promotion, expiredText, handlePromotionExpired }) => {
  return (
    <Link to="/promotions">
      <div className="promotions-home-item">
        {promotion && (
          <div className="promotions-img">
            <div
              className={
                promotion.show_timer === '1' && !expiredText
                  ? 'item-img promotion-timer-exist'
                  : 'item-img'
              }
            >
              <Image
                src={promotion.featured_image}
                className="img-fluid"
                alt="promotion-img"
                type="Promotion"
              />
            </div>
            {promotion.show_timer === '1' && (
              <div className="promotion-timer">
                <ul>
                  {!expiredText ? (
                    <ul>
                      <li className="timer-watch">
                        <img
                          src="assets/images/stopwatch.svg"
                          className="img-fluid"
                          alt="watch"
                        />
                      </li>
                      <Timer
                        endDate={promotion.publish_end_date}
                        promotionExpired={handlePromotionExpired}
                      />
                    </ul>
                  ) : null}
                </ul>
              </div>
            )}
          </div>
        )}
        <EventHeading
          title={promotion.title}
          lines={2}
          height={
            Utilities.mobilecheck()
              ? 18
              : Utilities.mobileAndTabletcheck()
              ? 18
              : 20
          }
        />
      </div>
    </Link>
  );
};

export default class PromotionCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotions: [],
      expiredText: '',
      loading: true,
      error: false
    };
    this.element = createRef(null);
  }

  componentDidMount() {
    this.getPromotions();
  }

  handlePromotionExpired = expiredText => {
    this.setState({ expiredText });
  };

  getPromotions() {
    const params = {
      client: Constants.CLIENT,
      first: 0,
      limit: 24
    };
    HomeService.getPromotions(params)
      .then(res => {
        if (res && res.data) {
          this.setState({ promotions: res.data.data, loading: false });
        }
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  render() {
    const { loading, promotions, expiredText, error } = this.state;
    if (!loading && promotions && promotions.length === 0) {
      return null;
    }
    if (error) return null;

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      rows: 2,
      slidesPerRow: 4,
      customPaging: i => {
        return (
          <div className="dots-group">
            <span />
          </div>
        );
      },
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesPerRow: 3
          }
        }
      ]
    };
    let shimmer = (
      <>
        <ShimmerEffect
          height={Utilities.mobilecheck() ? 80 : 150}
          count={
            Utilities.mobilecheck()
              ? 2
              : Utilities.mobileAndTabletcheck()
              ? 3
              : 4
          }
          type="TILE"
          propCls={`shm_col-xs-2 col-md-${
            Utilities.mobilecheck()
              ? 6
              : Utilities.mobileAndTabletcheck()
              ? 4
              : 3
          }`}
        />
        <br />
        <ShimmerEffect
          height={Utilities.mobilecheck() ? 80 : 150}
          count={
            Utilities.mobilecheck()
              ? 2
              : Utilities.mobileAndTabletcheck()
              ? 3
              : 4
          }
          type="TILE"
          propCls={`shm_col-xs-2 col-md-${
            Utilities.mobilecheck()
              ? 6
              : Utilities.mobileAndTabletcheck()
              ? 4
              : 3
          }`}
        />
      </>
    );
    return (
      <section className="promotions" ref={node => (this.element = node)}>
        <div className="container-fluid custom-container">
          <div className="section-top-wrapper">
            <h2>
              {this.props.heading}
              <div className="promo-animation-wrap">
                <div className="promo-animation-img first">
                  <img src={promoImg1} className="img-fluid" alt="promotions" />
                </div>
                <div className="promo-animation-img second">
                  <img src={promoImg2} className="img-fluid" alt="promotions" />
                </div>
                <div className="promo-animation-img third">
                  <img src={promoImg3} className="img-fluid" alt="promotions" />
                </div>
                <div className="promo-animation-img fourth">
                  <img src={promoImg4} className="img-fluid" alt="promotions" />
                </div>
              </div>
            </h2>
            <div className="carousel-dots">
              <Link to="/promotions" id="promotions">
                See all{' '}
                <img
                  src="assets/images/right-arrow.svg"
                  className="img-fluid"
                  alt="arrow"
                />
              </Link>
            </div>
          </div>
          <div className="grid-container">
            {loading ? (
              shimmer
            ) : Utilities.mobilecheck() ? (
              <div className="promotions-grid-wrapper">
                {promotions &&
                  promotions.map((promotion, index, array) => {
                    return (
                      <div key={promotion.id} className="item-wrapper">
                        <ItemWrapper
                          promotion={array[index]}
                          expiredText={expiredText}
                          handlePromotionExpired={this.handlePromotionExpired}
                        />
                      </div>
                    );
                  })}
              </div>
            ) : (
              <Slider {...settings}>
                {promotions &&
                  promotions.map((promotion, index, array) => {
                    return (
                      <div key={promotion.id} className="item-wrapper">
                        <ItemWrapper
                          promotion={array[index]}
                          expiredText={expiredText}
                          handlePromotionExpired={this.handlePromotionExpired}
                        />
                      </div>
                    );
                  })}
              </Slider>
            )}
          </div>
        </div>
      </section>
    );
  }
}
