import React, { Component, lazy ,Suspense} from 'react';
import AccordionSection from '../../../shared/components/AccordionSection';
import EventCarousel from '../../../shared/components/EventCarousel';
import ArticleSection from '../../../shared/components/ArticleSection';
import './style.scss';
import EventsService from '../../../shared/services/EventsService';
import Constants from '../../../shared/constants';
import SeatMapImg from '../../../assets/images/seatmap.svg';
import SeatMapWhite from '../../../assets/images/seatmap-white.svg';
import faceImg from '../../../assets/images/face.svg';
import giftCardImage from '../../../assets/images/gift-card.png';
import SeatMap from '../../../shared/components/SeatMap';
import ModalPopup from '../../../shared/components/Modal';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import StickyHeader from "../../../shared/components/StickyHeader";
const SimilarPicksSection =  lazy(()=>import('../../../shared/components/SimilarPicksSection'));


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
      getSynopsisData: { languageArr: [], activeLang: "", desc: "" }
    };
    this.children = [
      {
        data:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        heading: "Price Details"
      }
    ];
  }

  setOffsetTop = elem => {
    if (elem) {
      this.elemOffsetTop = elem.offsetTop;
    }
  };

  componentDidMount() {
    window.scrollTo(0,0)
    window.addEventListener("scroll", this.handleScroll);
    const payload = { code: this.state.code, client: Constants.CLIENT };
    EventsService.getEventDetails(payload)
      .then(res => {
        this.setState({ detailData: res.data });
      })
      .catch(err => {
        this.setState({
          error: true
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
    } = this.state;

    if (error) {
      return null;
    }
    let shareUrl = window.location.href;
    getSynopsisData.languageArr = [];
    let accrodian = ["synopsis", "pricedetail"];
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
    return (
      <div className="event-detail-wrapper">
        {detailData && (
          <div>
            {detailData.is_show_over === 1 && (
              <div className="shows-over-banner">
                <div className="shows-over">
                  <div className="shows-over-icon">
                    <img src={faceImg} alt="" />
                  </div>
                  <div className="shows-over-desc">
                    <h4>Show's over!</h4>
                    <p>
                      This event is no longer available for booking. But we have
                      something which you might like
                    </p>
                  </div>
                </div>
              </div>
            )}
            {detailData.is_show_over === 0 && (
              <div>
                {/* {detailData.pop_up_message && showNotice && <PopUpWithClose content={detailData.pop_up_message.description} title={detailData.pop_up_message.title} handleClose={this.handleClose} />} */}
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
                        preExpanded = {accrodian}
                        uuid= {`${detailData.is_available_for_booking == 1 ? 'synopsis' : ''}`}
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
                    <a onClick={() => this.openSeatMap()} className="seat-map">
                      <span className="seat-map-img">
                        <img src={SeatMapImg} />
                        <img className="active" src={SeatMapWhite} />
                      </span>
                      <span className="seat-map-text">Seat Map</span>
                    </a>
                    {showSeatMap &&
                      detailData.seating_plan &&
                      detailData.seating_plan.length > 0 && (
                        <SeatMap
                          imgArr={detailData.seating_plan}
                          showModal={showSeatMap}
                          heading="Seat Map"
                          handleClose={this.handleClose}
                        />
                      )}
                    {detailData.buy_package_url && (
                      <a
                        href={detailData.buy_package_url}
                        target="_blank"
                        className="buy-package"
                      >
                        Buy Packages
                      </a>
                    )}
                    {detailData.ticket_pricing && (
                      <AccordionSection
                        title="Price Details"
                        infoTag={true}
                        preExpanded= {accrodian}
                        uuid= {`${detailData.is_available_for_booking == 1 ? 'pricedetail' : ''}`}
                        desc={detailData.ticket_pricing}
                        openInfoPopup={this.openInfoPopup}
                        showInfo={showInfo}
                      />
                    )}

                    {detailData.promotions &&
                      detailData.promotions.length > 0 && (
                        <AccordionSection
                          title="Promotion"
                          children={detailData.promotions}
                        />
                      )}
                  </div>
                </section>
                {detailData.tags && detailData.tags.length > 0 && (
                  <section className="event-zoner-group">
                    <div className="container-fluid">
                      <ul>
                        {detailData.tags.map((obj, idx) => {
                          if (obj.name) {
                            return <li>{obj.name}</li>;
                          }
                        })}
                      </ul>
                    </div>
                  </section>
                )}
                <ArticleSection />
              </div>
            )}
            {detailData.is_show_over === 1 &&
             <section className="gift-cart">
             <div className="gift-cart-image">
               <img
                 src={giftCardImage}
                 className="img-fluid"
                 alt="Gift-cart"
               />
             </div>
           </section>}
            {similarEventsData && similarEventsData.length > 0 &&
              <Suspense fallback={<ShimmerEffect  height={150} count={5}  type="grid" propCls='shm_col-xs-5'/>}>
                <SimilarPicksSection data={similarEventsData} />
                </Suspense>
            }
            {detailData.is_show_over === 1 && <ArticleSection />}
          </div>
        )}
      </div>
    );
  }
}
