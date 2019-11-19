import React, { Component, createRef } from 'react';
import Slider from 'react-slick';
import Constants from '../../../shared/constants';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Timer from '../../../shared/components/Timer';
import Image from '../../../shared/components/Image';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import './style.scss';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import promoImg1 from '../../../assets/images/promo-img1.svg';
import promoImg2 from '../../../assets/images/promo-img2.svg';
import promoImg3 from '../../../assets/images/promo-img3.svg';
import promoImg4 from '../../../assets/images/promo-img4.svg';

const ItemWrapper = ({ promotion, expiredText, handlePromotionExpired }) => {
  return (
    <a href="/promotions" target="_blank">
      <div className="promotions-home-item">
        {promotion && (
          <div className="promotions-img">
            <div className="item-img">
              <Image
                src={promotion.featured_image}
                className="img-fluid"
                alt="promotion-img"
                type="Horizontal"
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
        <h3>
          {promotion && Utilities.mobilecheck()
            ? Utilities.showLimitedChars(promotion.title, 15)
            : promotion.title}
        </h3>
      </div>
    </a>
  );
};

export default class PromotionCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotions: [],
      expiredText: '',
      loading: true,
      callAPI: false,
      error: false
    };
    this.element = createRef(null);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler, true);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.callAPI !== this.state.callAPI) {
      if (this.state.callAPI) {
        this.getPromotions();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler, true);
  }

  scrollHandler = () => {
    if (
      !this.state.callAPI &&
      window.pageYOffset >= this.element.offsetTop - 300
    ) {
      this.setState({ callAPI: true });
    }
  };

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
          setTimeout(() => {
            this.setState({ promotions: res.data.data, loading: false });
          }, 2000);
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
          breakpoint: 1140,
          settings: {
            //rows: 2,
            slidesPerRow: 3
          }
        }
      ]
    };
    return (
      <section className="promotions" ref={node => (this.element = node)}>
        <div className="container-fluid">
          <div className="section-top-wrapper">
            <h2>
              {this.props.heading}
              {/* <span className="promotions-animated-img">
                <img
                  src="assets/images/illustration.svg"
                  className="img-fluid"
                  alt="promotions"
                />
              </span> */}
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
              <Link to="/promotions">
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
            {/* <CSSTransitionGroup
              transitionName="shimmer-carousel"
              transitionEnter={true}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            > */}
            {loading ? (
              <ShimmerEffect
                propCls={`shm_col-xs-6 col-md-${
                  Utilities.mobileAndTabletcheck() || Utilities.mobilecheck()
                    ? 6
                    : 2
                }`}
                height={150}
                count={2}
                type="TILE"
              />
            ) : Utilities.mobilecheck() ? (
              <div className="promotions-grid-wrapper">
                {promotions &&
                  promotions.map((promotion, index, array) => {
                    if (index % 2 === 0) {
                      if (array[index] && array[index + 1]) {
                        return (
                          <div key={promotion.id} className="item-wrapper">
                            <ItemWrapper
                              promotion={array[index]}
                              expiredText={expiredText}
                              handlePromotionExpired={
                                this.handlePromotionExpired
                              }
                            />
                            <ItemWrapper
                              promotion={array[index + 1]}
                              expiredText={expiredText}
                              handlePromotionExpired={
                                this.handlePromotionExpired
                              }
                            />
                          </div>
                        );
                      } else if (array[index]) {
                        return (
                          <div key={promotion.id} className="item-wrapper">
                            <ItemWrapper
                              promotion={array[index]}
                              expiredText={expiredText}
                              handlePromotionExpired={
                                this.handlePromotionExpired
                              }
                            />
                          </div>
                        );
                      }
                    }
                  })}
              </div>
            ) : (
              <Slider {...settings}>
                {promotions &&
                  promotions.map((promotion, index) => {
                    return (
                      <div key={promotion.id} className="item-wrapper">
                        <ItemWrapper
                          promotion={promotion}
                          expiredText={expiredText}
                          handlePromotionExpired={this.handlePromotionExpired}
                        />
                      </div>
                    );
                  })}
              </Slider>
            )}
            {/* </CSSTransitionGroup> */}
          </div>
        </div>
      </section>
    );
  }
}
