import React, { Component, lazy, Suspense } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import EventsService from "../../shared/services/EventsService";
import Constants from "../../shared/constants";

import "./style.scss";
import SeatMapImg from "../../assets/images/seatmap.svg";
import SeatMapWhite from "../../assets/images/seatmap-white.svg";
import faceImg from "../../assets/images/face.svg";
import giftCardImage from "../../assets/images/gift-card.png";

import AccordionSection from "../../shared/components/AccordionSection";
import EventCarousel from "../../shared/components/EventCarousel";
import ArticleSection from "../../shared/components/ArticleSection";
import SeatMap from "../../shared/components/SeatMap";
import ModalPopup from "../../shared/components/Modal";
import ShimmerEffect from "../../shared/components/ShimmerEffect";
import StickyHeader from "../../shared/components/StickyHeader";
import Utilities from "../../shared/utilities";
import SimilarPicksSection from "../../shared/components/SimilarPicksSection";

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

function SeatMapDetail({ showSeatMap, seatingPlan, handleClose }) {
  if (!showSeatMap) return null;
  if (!seatingPlan || !seatingPlan.length) return null;
  return (
    <SeatMap
      imgArr={seatingPlan}
      showModal={showSeatMap}
      heading="Seat Map"
      handleClose={handleClose}
    />
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
            if (obj.name) {
              return <li key={idx}>{obj.name}</li>;
            }
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
      <a href={buyPackageUrl} target="_blank" className="buy-package">
        Buy Packages
      </a>
    )
  );
}

export default class EventsDetail extends Component {
  constructor(props) {
    super(props);
    this.elemOffsetTop = 0;
    this.state = {
      code: props.match.params.icc,
      detailData: {},
      error: false,
      showBuyTicket: false,
      showSeatMap: false,
      showSocialShare: false,
      showInfo: false,
      showNotice: true,
      synopsisLang: "",
      similarEventsData: [],
      setHeader: false,
      animation: true,
      shimmer: true,
      getSynopsisData: { languageArr: [], activeLang: "", desc: "" }
    };
  }

  setOffsetTop = elem => {
    if (elem) {
      this.elemOffsetTop = elem.offsetTop;
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const payload = { code: this.state.code, client: Constants.CLIENT };
    this.unlisten = this.props.history.listen(location => {
      let pathArr = location.pathname.split("/");
      if (pathArr.length && pathArr[1] == "events") {
        if (location.search === "" && pathArr[2]) {
          payload.code = pathArr[2];
          this.callAPI(payload);
        }
      }
    });
    this.callAPI(payload);
  }

  callAPI(payload) {
    window.scrollTo(0, 0);
    this.setState({ shimmer: true });
    EventsService.getEventDetails(payload)
      .then(res => {
        this.setState({ detailData: res.data });
        Utilities.preloadImages(res.data.images, "full_image", () => {
          Utilities.preloadImages(res.data.images, "thumb_image", () => {
            setTimeout(() => {
              this.setState({ shimmer: false });
            }, 1000);
          });
        });
      })
      .catch(err => {
        this.setState({
          shimmer: false
        });
        console.log(err);
      });

    EventsService.getSimilarEvents(payload)
      .then(res => {
        this.setState({ similarEventsData: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    this.unlisten();
  }

  handleScroll = () => {
    if (
      !this.state.setHeader &&
      window.pageYOffset >= this.elemOffsetTop + 100
    ) {
      this.setState({
        setHeader: true
      });
    } else if (window.pageYOffset < this.elemOffsetTop) {
      this.setState({
        setHeader: false
      });
    }
  };

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
        document.removeEventListener("click", this.closePopup);
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
          document.addEventListener("click", this.closePopup);
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
          document.addEventListener("click", this.closePopup);
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

  changeLang = lang => {
    this.setState({
      synopsisLang: lang
    });
  };

  handleClose = () => {
    if (this.state.showNotice) {
      this.setState({
        showNotice: false
      });
    }
    if (this.state.showSeatMap) {
      this.setState({
        showSeatMap: false
      });
    }
  };

  componentDidUpdate() {}

  onSynopsisData = (detailData, getSynopsisData) => {
    detailData &&
      detailData.synopsis &&
      detailData.synopsis.forEach((obj, idx) => {
        if (obj.language) {
          getSynopsisData.languageArr.push(obj.language);
        }
        if (this.state.synopsisLang === obj.language) {
          getSynopsisData.desc = obj.description;
          getSynopsisData.activeLang = obj.language;
        } else {
          getSynopsisData.desc = detailData.synopsis[0].description;
          getSynopsisData.activeLang = detailData.synopsis[0].language;
        }
      });
  };

  onShimmerEffect() {
    return (
      <CSSTransitionGroup
        transitionName="shimmer"
        transitionEnter={true}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <ShimmerEffect
          propCls="shm_col-xs-6 col-md-12"
          height={400}
          count={2}
          type="DETAIL"
          detail={true}
        />
      </CSSTransitionGroup>
    );
  }

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
      shimmer
    } = this.state;

    if (error) {
      return null;
    }
    let shareUrl = window.location.href;
    getSynopsisData.languageArr = [];
    let accrodian = ["synopsis", "pricedetail"];
    this.onSynopsisData(detailData, getSynopsisData);
    return (
      <div className="event-detail-wrapper">
        <CSSTransitionGroup
          transitionName="shimmer"
          transitionEnter={true}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {shimmer && (
            <ShimmerEffect
              propCls="shm_col-xs-6 col-md-12"
              height={400}
              count={2}
              type="DETAIL"
              detail={true}
            />
          )}
        </CSSTransitionGroup>

        {detailData && (
          <div className={`main-container ${shimmer ? "shimmer" : ""}`}>
            <ShowOver isShowOver={detailData.is_show_over} />
            {detailData.is_show_over === 0 && (
              <div>
                {detailData.pop_up_message &&
                  detailData.pop_up_message.description &&
                  showNotice && (
                    <ModalPopup
                      showModal={showNotice}
                      content={detailData.pop_up_message.description}
                      title={detailData.pop_up_message.title}
                      handleClose={this.handleClose}
                      htmlContent={true}
                    />
                  )}

                <section className="event-detail-banner">
                  {detailData.images && detailData.images.length > 0 && (
                    <EventCarousel images={detailData.images} />
                  )}
                  <StickyHeader
                    sticky={false}
                    detailData={detailData}
                    showSocialShare={showSocialShare}
                    openNotice={this.openNotice}
                    openSocialShare={this.openSocialShare}
                    shareUrl={shareUrl}
                  />

                  <StickyHeader
                    sticky={true}
                    setHeader={setHeader}
                    detailData={detailData}
                    showSocialShare={showSocialShare}
                    openNotice={this.openNotice}
                    openSocialShare={this.openSocialShare}
                    shareUrl={shareUrl}
                  />
                </section>

                <section
                  className="event-detail-section"
                  ref={this.setOffsetTop}
                >
                  <div className="event-detail-panel">
                    {detailData.synopsis && getSynopsisData.desc && (
                      <AccordionSection
                        title="Synopsis"
                        activeLang={getSynopsisData.activeLang}
                        desc={getSynopsisData.desc}
                        langArr={getSynopsisData.languageArr}
                        changeLang={this.changeLang}
                        preExpanded={accrodian}
                        uuid={`${
                          detailData.is_available_for_booking == 1
                            ? "synopsis"
                            : ""
                        }`}
                      />
                    )}
                    {detailData.tabs &&
                      detailData.tabs.length > 0 &&
                      detailData.tabs.map((obj, idx) => {
                        return (
                          <AccordionSection
                            title={obj.title}
                            desc={obj.description}
                          />
                        );
                      })}
                  </div>
                  <div className="event-detail-sidebar">
                    {detailData.seating_plan &&
                      detailData.seating_plan.length > 0 && (
                        <a
                          onClick={() => this.openSeatMap()}
                          className="seat-map"
                        >
                          <span className="seat-map-img">
                            <img src={SeatMapImg} />
                            <img className="active" src={SeatMapWhite} />
                          </span>
                          <span className="seat-map-text">Seat Map</span>
                        </a>
                      )}
                    <SeatMapDetail
                      showSeatMap={showSeatMap}
                      seatingPlan={detailData.seating_plan}
                      handleClose={this.handleClose}
                    />
                    <BuyPackages
                      isAvailableForBooking={
                        detailData.is_available_for_booking
                      }
                      buyPackageUrl={detailData.buy_package_url}
                    />
                    {detailData.ticket_pricing && (
                      <AccordionSection
                        title="Price Details"
                        infoTag={
                          detailData.hide_booking_fee &&
                          detailData.hide_booking_fee !== "1"
                            ? detailData.hide_booking_fee
                            : null
                        }
                        preExpanded={accrodian}
                        uuid={`${
                          detailData.is_available_for_booking == 1
                            ? "pricedetail"
                            : ""
                        }`}
                        desc={detailData.ticket_pricing}
                        openInfoPopup={this.openInfoPopup}
                        showInfo={showInfo}
                      />
                    )}

                    {detailData.promotions &&
                      detailData.promotions.length > 0 &&
                      detailData.promotions[0].title && (
                        <AccordionSection
                          title="Promotion"
                          children={detailData.promotions}
                        />
                      )}
                  </div>
                </section>
                <EventTags tags={detailData.tags} />
                <ArticleSection flag={true} />
              </div>
            )}
            <SimilarPicksSection data={similarEventsData} />
            <GiftCard flag={detailData.is_show_over === 1 ? true : false} />
            <ArticleSection />
          </div>
        )}
      </div>
    );
  }
}
