import React, { Component, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import EventsService from '../../shared/services/EventsService';
import Constants from '../../shared/constants';

import './style.scss';
import SeatMapImg from '../../assets/images/seat.svg';
import SeatMapWhite from '../../assets/images/seatmap-white.svg';
import faceImg from '../../assets/images/face.svg';
import giftCardImage from '../../assets/images/gift-card.png';

import AccordionSection from '../../shared/components/AccordionSection';
import EventCarousel from '../../shared/components/EventCarousel';
import ArticleSection from '../../shared/components/ArticleSection';
import SeatMap from '../../shared/components/SeatMap';
import ModalPopup from '../../shared/components/Modal';
import ShimmerEffect from '../../shared/components/ShimmerEffect';
import StickyHeader from '../../shared/components/StickyHeader';
import EventInfoBlock from '../../shared/components/EventInfoBlock';

import SimilarPicksSection from '../../shared/components/SimilarPicksSection';
import AdvertisementSection from '../../shared/components/AdvertisementSection';
import HomeService from '../../shared/services/HomeService';
import MetaData from '../../shared/components/MetaData';
import Utilities from '../../shared/utilities';

function ShowOver({ isShowOver }) {
  if (isShowOver !== 1) return null;
  return (
    <div className="shows-over-banner">
      <div className="shows-over">
        <div className="shows-over-icon">
          <img src={faceImg} alt="" />
        </div>
        <div className="shows-over-desc">
          <h4>Show's over!</h4>
          <p>
            This event is no longer available for booking. But we have something
            which you might like
          </p>
        </div>
      </div>
    </div>
  );
}

function SeatMapButton({ seatingPlan }) {
  const [flag, setFlag] = useState(false);
  if (!seatingPlan || !seatingPlan.length) return null;
  return (
    <>
      <a onClick={() => setFlag(true)} className="seat-map">
        <img alt="seat-map" width={20} height={21} src={SeatMapImg} />
        <span className="seat-map-text">Seat Map</span>
      </a>
      {flag && (
        <SeatMap
          imgArr={seatingPlan}
          showModal={flag}
          heading="Seat Map"
          handleClose={() => setFlag(false)}
        />
      )}
    </>
  );
}

function EventNotAvailable() {
  return (
    <div className="event-not-available">
      The event is currently not available.
    </div>
  );
}

function GiftCard({ flag }) {
  if (!flag) return null;
  return (
    <section className="gift-cart">
      <div className="gift-cart-image">
        <img src={giftCardImage} className="img-fluid" alt="Gift-cart" />
      </div>
    </section>
  );
}

function EventTags({ tags }) {
  if (!tags || !tags.length) return null;

  return (
    <section className="event-zoner-group">
      <div className="container-fluid">
        <ul>
          {tags.map((obj, idx) => {
            return <li key={idx}>{obj.name}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

function BuyPackages({ isAvailableForBooking, buyPackageUrl }) {
  return (
    isAvailableForBooking === 1 &&
    buyPackageUrl && (
      <div className="buy-tickets-btn">
        <a
          href={buyPackageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-package"
        >
          Buy Package
        </a>
      </div>
    )
  );
}

export default class EventsDetail extends Component {
  static getPageData(props) {
    let payload = {
      code: '',
      client: Constants.CLIENT
    };
    let pathArr = props.url.split('/');
    if (pathArr.length && pathArr[1] === 'events') {
      if (pathArr[2]) {
        payload.code = pathArr[2];
      }
    }
    return [EventsService.getEventDetails(payload)];
  }
  constructor(props) {
    super(props);
    this.elemOffsetTop = 0;
    this.state = {
      title:
        this.props.staticContext &&
        this.props.staticContext.response &&
        this.props.staticContext.response.metaData &&
        this.props.staticContext.response.metaData.data &&
        this.props.staticContext.response.metaData.data.title
          ? this.props.staticContext.response.metaData.data.title
          : '',
      code: props.match.params.icc,
      detailData: {},
      error: false,
      showBuyTicket: false,
      showSeatMap: false,
      showSocialShare: false,
      showInfo: false,
      showNotice: false,
      synopsisLang: '',
      similarEventsData: [],
      setHeader: false,
      animation: true,
      shimmer: true,
      shareUrl: '',
      getSynopsisData: {
        languageArr: [],
        activeLang: '',
        desc: ''
      },
      synopsis: { language: '', description: '' },
      popupContent: '',
      popupTitle: '',
      elemOffsetTop: 0,
      eventDetailBannerHeight: 0
    };
  }

  setOffsetTop = elem => {
    if (elem) {
      setTimeout(() => {
        this.setState({ elemOffsetTop: elem.offsetTop });
      }, 1000);
      // this.elemOffsetTop = elem.offsetTop;
    }
  };

  componentDidMount() {
    this.setState({ shareUrl: window.location.href });
    // window.addEventListener('scroll', this.handleScroll);
    const payload = {
      code: this.state.code,
      client: Constants.CLIENT
    };
    this.unlisten = this.props.history.listen(location => {
      let pathArr = location.pathname.split('/');
      if (pathArr.length && pathArr[1] === 'events') {
        if (location.search === '' && pathArr[2]) {
          payload.code = pathArr[2];
          this.callAPI(payload);
        }
      }
    });
    if (window.__INITIAL_DATA__ && window.__INITIAL_DATA__.pageData) {
      this.setState({
        detailData: window.__INITIAL_DATA__.pageData,
        shimmer: false
      });
      delete window.__INITIAL_DATA__.pageData;
    } else {
      this.callAPI(payload);
    }
    EventsService.getSimilarEvents(payload)
      .then(res => {
        this.setState({ similarEventsData: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  callAPI(payload) {
    window.scrollTo(0, 0);
    this.setState({ shimmer: true });
    EventsService.getEventDetails(payload)
      .then(res => {
        let newState = { detailData: res.data };
        if (res.data && res.data.synopsis && res.data.synopsis.length > 0) {
          newState = {
            ...newState,
            synopsis: {
              language: res.data.synopsis[0].language,
              description: res.data.synopsis[0].description
            }
          };
        }
        if (
          res &&
          res.data &&
          res.data.pop_up_message &&
          res.data.pop_up_message.description
        ) {
          this.setState(
            {
              showNotice: true,
              popupContent: res.data.pop_up_message.description,
              popupTitle: res.data.pop_up_message.title
            },
            () => {
              setTimeout(() => {
                this.setState(newState);
              }, 1000);
            }
          );
        } else {
          this.setState(newState);
          setTimeout(() => {
            this.setState({ shimmer: false });
          }, 1000);
        }
      })
      .catch(err => {
        this.setState({
          shimmer: false
        });
        console.log(err);
      });
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
    this.unlisten();
  }

  // handleScroll = () => {
  //   if (
  //     !this.state.setHeader &&
  //     window.pageYOffset >= this.elemOffsetTop + 100
  //   ) {
  //     this.setState({
  //       setHeader: true
  //     });
  //   } else if (window.pageYOffset < this.elemOffsetTop) {
  //     this.setState({
  //       setHeader: false
  //     });
  //   }
  // };

  openBuyTicketPopup = () => {
    let flag;
    if (this.state.showBuyTicket) {
      flag = false;
    } else {
      flag = true;
    }
    this.setState({
      showBuyTicket: flag
    });
  };

  openSeatMap = () => {
    if (!this.state.showSeatMap) {
      this.setState({
        showSeatMap: true
      });
    }
  };

  closePopup = () => {
    this.setState(
      {
        showSocialShare: false,
        showInfo: false
      },
      () => {
        document.removeEventListener('click', this.closePopup);
      }
    );
  };

  openSocialShare = () => {
    if (!this.state.showSocialShare) {
      this.setState(
        {
          showSocialShare: true
        },
        () => {
          document.addEventListener('click', this.closePopup);
        }
      );
    }
  };

  openInfoPopup = event => {
    event.stopPropagation();
    if (!this.state.showInfo) {
      this.setState(
        {
          showInfo: true
        },
        () => {
          document.addEventListener('click', this.closePopup);
        }
      );
    }
  };

  openNotice = () => {
    if (!this.state.showNotice) {
      this.setState({
        showNotice: true
      });
    }
  };

  // changeLang = synopsisObject => {
  //   this.setState({
  //     synopsis: {
  //       language: synopsisObject.language,
  //       description: synopsisObject.description
  //     }
  //   });
  // };

  handleClose = () => {
    if (this.state.showNotice) {
      this.setState(
        {
          showNotice: false
        },
        () => {
          // setTimeout(() => {
          this.setState({ shimmer: false });
          // }, 500);
        }
      );
    }
    if (this.state.showSeatMap) {
      this.setState({
        showSeatMap: false
      });
    }
  };

  componentDidUpdate() {}

  render() {
    const {
      detailData,
      getSynopsisData,
      showSeatMap,
      similarEventsData,
      showSocialShare,
      error,
      showInfo,
      showNotice,
      setHeader,
      shimmer,
      shareUrl,
      synopsis,
      code,
      eventDetailBannerHeight
    } = this.state;
    if (error) {
      return null;
    }
    // let shareUrl = window.location.href;
    // getSynopsisData.languageArr = [];
    let accrodian = ['synopsis', 'pricedetail'];
    // this.onSynopsisData(detailData, getSynopsisData);
    console.log('detail');
    return (
      <div className="event-detail-wrapper">
        {this.props.location && (
          <MetaData
            location={this.props.location}
            data={
              this.props.staticContext &&
              this.props.staticContext.response &&
              this.props.staticContext.response.metaData &&
              this.props.staticContext.response.metaData.data
            }
          />
        )}
        <ModalPopup
          showModal={
            detailData.pop_up_message &&
            detailData.pop_up_message.description &&
            showNotice
              ? true
              : showNotice
          }
          content={this.state.popupContent}
          title={this.state.popupTitle}
          handleClose={this.handleClose}
          htmlContent={true}
        />
        <CSSTransition
          // transitionName="shimmer"
          // transitionEnter={true}
          // transitionEnterTimeout={500}
          // transitionLeaveTimeout={500}
          in={shimmer}
          timeout={500}
          classNames="shimmer"
        >
          <ShimmerEffect
            propCls="col-md-12"
            height={400}
            count={2}
            type="DETAIL"
            detail={true}
          />
        </CSSTransition>
        {!shimmer && detailData && (
          <div
            className={`main-container ${
              detailData.is_show_over ? 'show-over' : ''
            } ${shimmer ? 'shimmer' : ''}`}
          >
            <ShowOver isShowOver={detailData.is_show_over} />
            {detailData.is_show_over === 0 && (
              <div>
                {/* {detailData.pop_up_message &&
                  detailData.pop_up_message.description &&
                  showNotice && (
                    <ModalPopup
                      showModal={showNotice}
                      content={detailData.pop_up_message.description}
                      title={detailData.pop_up_message.title}
                      handleClose={this.handleClose}
                      htmlContent={true}
                    />
                  )} */}

                <section
                  className="event-detail-banner"
                  ref={node => {
                    if (!eventDetailBannerHeight && node && node.offsetHeight) {
                      this.setState({
                        eventDetailBannerHeight: node.offsetHeight - 33
                      });
                    }
                  }}
                >
                  <EventCarousel images={detailData.images} />

                  <EventInfoBlock
                    lines={2}
                    sticky={false}
                    detailData={detailData}
                    showSocialShare={showSocialShare}
                    openNotice={this.openNotice}
                    openSocialShare={this.openSocialShare}
                    shareUrl={shareUrl}
                    eventDetailBannerHeight={eventDetailBannerHeight}
                    seatMapButton={
                      detailData.seating_plan &&
                      detailData.seating_plan.length > 0 && (
                        <SeatMapButton seatingPlan={detailData.seating_plan} />
                      )
                    }
                    buyPackages={
                      <BuyPackages
                        isAvailableForBooking={
                          detailData.is_available_for_booking
                        }
                        buyPackageUrl={detailData.buy_package_url}
                      />
                    }
                  />

                  {detailData && detailData.is_available_for_booking === 1 && (
                    <StickyHeader
                      lines={1}
                      sticky={true}
                      elemOffsetTop={this.state.elemOffsetTop}
                      // setHeader={setHeader}
                      detailData={detailData}
                      showSocialShare={showSocialShare}
                      openNotice={this.openNotice}
                      openSocialShare={this.openSocialShare}
                      shareUrl={shareUrl}
                    />
                  )}
                </section>

                <section>
                  <AdvertisementSection
                    data={
                      Utilities.mobilecheck()
                        ? {
                            image: detailData.wallpaper.mobile_image,
                            url: detailData.wallpaper.mobile_url
                          }
                        : {
                            image: detailData.wallpaper.image,
                            url: detailData.wallpaper.url
                          }
                    }
                    current={this.props.current}
                  />
                </section>

                <section
                  className="event-detail-section"
                  ref={this.setOffsetTop}
                >
                  <div className="event-detail-panel">
                    {detailData.synopsis && detailData.synopsis.length > 0 && (
                      <AccordionSection
                        title="Synopsis"
                        activeLang={detailData.synopsis[0].language}
                        desc={detailData.synopsis[0].description}
                        langArr={detailData.synopsis}
                        // changeLang={this.changeLang}
                        noIcon={Utilities.mobileAndTabletcheck() ? false : true}
                        preExpanded={accrodian}
                        dynamicClass="synopsis-accordian"
                        uuid={`${
                          detailData.is_available_for_booking === 1 &&
                          !Utilities.mobileAndTabletcheck()
                            ? 'synopsis'
                            : ''
                        }`}
                      />
                    )}
                    {detailData.tabs &&
                      detailData.tabs.length > 0 &&
                      detailData.tabs.map((obj, idx) => {
                        if (obj.title && obj.description) {
                          return (
                            <AccordionSection
                              key={obj.title}
                              title={obj.title}
                              desc={obj.description}
                              dynamicClass="othertabs-accordian"
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    {detailData.gallery_images_videos &&
                      detailData.gallery_images_videos.length > 0 && (
                        <AccordionSection
                          title="Gallery"
                          gallery={detailData.gallery_images_videos}
                          dynamicClass="othertabs-accordian"
                        />
                      )}
                  </div>
                  <div className="event-detail-sidebar">
                    {detailData.ticket_pricing && (
                      <AccordionSection
                        title="Price Details"
                        infoTag={
                          detailData.hide_booking_fee &&
                          detailData.hide_booking_fee !== '1'
                            ? detailData.hide_booking_fee
                            : null
                        }
                        // preExpanded={accrodian}
                        uuid={`${
                          detailData.is_available_for_booking === 1 &&
                          !Utilities.mobileAndTabletcheck()
                            ? 'pricedetail'
                            : ''
                        }`}
                        desc={detailData.ticket_pricing}
                        openInfoPopup={this.openInfoPopup}
                        showInfo={showInfo}
                        dynamicClass="price-accordian"
                      />
                    )}

                    {detailData.promotions &&
                      detailData.promotions.length > 0 &&
                      detailData.promotions[0].title && (
                        <AccordionSection
                          title="Promotion"
                          children={detailData.promotions}
                          dynamicClass="promotion-accordian"
                        />
                      )}
                    {!Utilities.mobilecheck() && (
                      <AdvertisementSection data={detailData.rectangle_image} />
                    )}
                  </div>
                </section>
                <EventTags tags={detailData.tags} />

                {Utilities.mobilecheck() && (
                  <AdvertisementSection data={detailData.rectangle_image} />
                )}

                <ArticleSection flag={true} code={code} />
              </div>
            )}
            <SimilarPicksSection data={similarEventsData} />
            {detailData.is_show_over === 1 && (
              <>
                <GiftCard flag={true} />
                <ArticleSection flag={true} code={code} />
              </>
            )}

            {detailData && !detailData.id && !detailData.is_show_over && (
              <EventNotAvailable />
            )}
          </div>
        )}
      </div>
    );
  }
}
