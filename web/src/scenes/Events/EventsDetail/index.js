import React, { Component } from 'react';
import AccordionSection from '../../../shared/components/AccordionSection';
import EventCarousel from '../../../shared/components/EventCarousel';
import ArticleSection from '../../../shared/components/ArticleSection';
import SimilarPicksSection from '../../../shared/components/SimilarPicksSection';
import './style.scss';
import EventsService from '../../../shared/services/EventsService';
import Constants from '../../../shared/constants';
import calendarImg from '../../../assets/images/event-calender.svg';
import locationImg from '../../../assets/images/location-blue.svg';
import locationImgGrey from '../../../assets/images/location-grey.svg';
import SeatMapImg from '../../../assets/images/seatmap.svg';
import SeatMapWhite from '../../../assets/images/seatmap-white.svg';
import faceImg from '../../../assets/images/face.svg';
import shareIcon from '../../../assets/images/share-icon.svg';
import Info from '../../../assets/images/info-sign.svg';
import SeatMap from '../../../shared/components/SeatMap';
import SocialShare from '../../../shared/components/SocialShare';
import InfoPopup from '../../../shared/components/InfoPoup';
import PopUpWithClose from '../../../shared/components/PopUpWithClose';
import Image from '../../../shared/components/Image';
import ModalPopup from '../../../shared/components/Modal';


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
      synopsisLang: '',
      similarEventsData: [],
      setHeader: false,
      getSynopsisData: { languageArr: [], activeLang: '', desc: '' }
    }
    this.children = [{
      'data': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      'heading': 'Price Details'
    }];
  }

  setOffsetTop = (elem) => {
    this.elemOffsetTop = elem.offsetTop
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const payload = { code: this.state.code, client: Constants.CLIENT }
    EventsService.getEventDetails(payload)
      .then((res) => {
        this.setState({ detailData: res.data })
      })
      .catch((err) => {
        this.setState({
          error: true
        })
        console.log(err)
      })

    EventsService.getSimilarEvents(payload)
      .then((res) => {
        this.setState({ similarEventsData: res.data.data })
      })
      .catch((err) => {
        console.log(err)
      })


  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log(window.pageYOffset, this.elemOffsetTop, "handlescrolllllllllllllllllll");
    if (!this.state.setHeader && window.pageYOffset >= this.elemOffsetTop) {
      this.setState({
        setHeader: true
      }, () => {
        console.log(this.state.setHeader, "setheader")
      })
    }
    if (this.state.setHeader && window.pageYOffset <= this.elemOffsetTop) {
      this.setState({
        setHeader: false
      }, () => {
        console.log(this.state.setHeader, "setheader")
      })
    }
  }

  openBuyTicketPopup = () => {
    let flag;
    if (this.state.showBuyTicket) {
      flag = false
    }
    else {
      flag = true
    }
    this.setState({
      showBuyTicket: flag
    })
  }

  openSeatMap = () => {
    if (!this.state.showSeatMap) {
      this.setState({
        showSeatMap: true
      })
    }

  }

  closePopup = () => {
    this.setState({
      showSocialShare: false,
      showInfo: false,
    }, () => {
      document.removeEventListener('click', this.closePopup);
    });
  }

  openSocialShare = () => {
    if (!this.state.showSocialShare) {
      this.setState({
        showSocialShare: true
      }, () => {
        document.addEventListener('click', this.closePopup);
      })
    }

  }

  openInfoPopup = (event) => {
    event.stopPropagation()
    if (!this.state.showInfo) {
      this.setState({
        showInfo: true
      }, () => {
        document.addEventListener('click', this.closePopup);
      })
    }
  }

  openNotice = () => {
    if (!this.state.showNotice) {
      this.setState({
        showNotice: true
      })
    }
  }

  changeLang = (lang) => {
    this.setState({
      synopsisLang: lang
    })
  }

  handleClose = () => {
    if (this.state.showNotice) {
      this.setState({
        showNotice: false
      })
    }
    if (this.state.showSeatMap) {
      this.setState({
        showSeatMap: false
      })
    }
  }

  componentDidUpdate() {

  }

  render() {
    const { detailData, showBuyTicket, getSynopsisData, showSeatMap, similarEventsData,
      showSocialShare, error, showInfo, showNotice, setHeader } = this.state;

    if (error) {
      return null;
    }
    let shareUrl = window.location.href;
    getSynopsisData.languageArr = [];
    let accrodian = ['synopsis', 'pricedetail'];
    detailData && detailData.synopsis && detailData.synopsis.forEach((obj, idx) => {
      if (obj.language) {
        getSynopsisData.languageArr.push(obj.language)
      }
      if (this.state.synopsisLang == obj.language) {
        getSynopsisData.desc = obj.description;
        getSynopsisData.activeLang = obj.language;
      } else {
        getSynopsisData.desc = detailData.synopsis[0].description;
        getSynopsisData.activeLang = detailData.synopsis[0].language;
      }

    })
    return (
      <div className="event-detail-wrapper">
        {detailData &&
          <div>
            {detailData.is_available_for_booking == 0 &&
              <div className="shows-over-banner">
                <div className="shows-over">
                  <div className="shows-over-icon">
                    <img src={faceImg} alt="" />
                  </div>
                  <div className="shows-over-desc">
                    <h4>Show's over!</h4>
                    <p>This event is no longer available for booking. But we have something which you might like</p>
                  </div>
                </div>
              </div>
            }
            {detailData.is_available_for_booking == 1 &&
              <div>
                {/* {detailData.pop_up_message && showNotice && <PopUpWithClose content={detailData.pop_up_message.description} title={detailData.pop_up_message.title} handleClose={this.handleClose} />} */}
                {detailData.pop_up_message && showNotice && <ModalPopup showModal={showNotice} content={detailData.pop_up_message.description} title={detailData.pop_up_message.title} handleClose={this.handleClose} htmlContent={true}/>}

                <section className="event-detail-banner">
                  {detailData.images && detailData.images.length > 0 &&
                    <EventCarousel images={detailData.images} />
                  }
                  <div className={`event-detail ${setHeader ? 'sticky-topbar' : ''}`}>
                    <div className="tickets-demo-img">
                      <Image src={detailData.images[0].thumb_image} alt="joker" className="img-fluid" type='Horizontal' />
                    </div>
                    <div className="tickets-desc">
                      <div className="breadcrumb-share">
                        <ul className="breadcrumb">
                          <li>Home</li>
                          {detailData.genres && detailData.genres.map((obj, index) => {
                            if (obj.is_primary == 1) {
                              return <li key={index}>{obj.name}</li>
                            }
                          })}
                        </ul>
                      </div>
                      {detailData.genres && detailData.genres.length > 0 &&
                        <ul className="zoner-group">
                          {detailData.genres.map((obj, index) => {
                            return <li className={`${obj.is_primary == 1 ? 'active' : ''}`} key={index}>{obj.name}</li>
                          })}
                        </ul>
                      }
                      <h2>{detailData.title}</h2>
                      <a className="info" onClick={() => this.openNotice()}>
                        <img src={shareIcon} className="" alt="" />
                      </a>
                      <a className="share" onClick={() => this.openSocialShare()}>
                        <img src={shareIcon} className="" alt="" />
                      </a>
                      {showSocialShare && <SocialShare shareUrl={shareUrl} />}
                      <div className="ticket-date-price">
                        <ul className="date-address">
                          {detailData.event_date &&
                            <li className="event-date">
                              <img src={calendarImg} alt="cal-icon" />
                              <span>{detailData.event_date}</span>
                            </li>
                          }
                          {detailData.venue_name &&
                            <li className="event-address">
                              <img className="location-icon" src={locationImg} alt="location" />
                              <span>{detailData.venue_name.name}</span>
                            </li>
                          }
                        </ul>
                        {detailData.price &&
                          <div className="price">
                            <label>Price</label>
                            <span>{detailData.price}</span>
                          </div>
                        }
                      </div>
                    </div>
                    <div className="tickets-button">
                      {
                        detailData.buy_now_url ?
                          <div className="buy-tickets-btn">
                            <a href={detailData.buy_now_url} target="_blank">Buy Tickets</a>
                          </div>
                          :
                          <div className="shows-over">
                            <div className="shows-over-icon">
                              <img src={faceImg} alt="" />
                            </div>
                            <div className="shows-over-desc">
                              <h4>Shows over!</h4>
                              <p>This event has ended and no longer available for booking.</p>
                            </div>
                          </div>
                      }
                    </div>
                  </div>
                </section>

                <section className="event-detail-section" ref={this.setOffsetTop}>
                  <div className="event-detail-panel">
                    {detailData.synopsis && getSynopsisData.desc &&
                      <AccordionSection title='Synopsis'
                        activeLang={getSynopsisData.activeLang}
                        desc={getSynopsisData.desc}
                        langArr={getSynopsisData.languageArr}
                        changeLang={this.changeLang}
                        preExpanded={accrodian}
                        uuid='synopsis'
                      />
                    }
                    {
                      detailData.tabs && detailData.tabs.length > 0 &&
                      detailData.tabs.map((obj, idx) => {
                        return <AccordionSection title={obj.title} desc={obj.description} />
                      })
                    }

                </div>
                <div className="event-detail-sidebar">
                  <a onClick={() => this.openSeatMap()} className="seat-map"><img src={SeatMapImg} /><img className="active" src={SeatMapWhite} /> Seat Map</a>
                  {showSeatMap && detailData.seating_plan && detailData.seating_plan.length > 0 &&
                    <SeatMap imgArr={detailData.seating_plan} heading='Seat Map' handleClose={this.handleClose} />
                  }
                  {
                    detailData.buy_package_url &&
                    <a href={detailData.buy_package_url} target="_blank" className="buy-package">Buy Packages</a>
                  }
                  {
                    detailData.ticket_pricing &&
                    <AccordionSection title='Price Details' infoTag={true} preExpanded={accrodian}
                      uuid='pricedetail'
                      desc={detailData.ticket_pricing} openInfoPopup={this.openInfoPopup} showInfo={showInfo}
                    />

                    }

                    {
                      detailData.promotions &&
                      detailData.promotions.length > 0 &&
                      <AccordionSection title='Promotion'
                        children={detailData.promotions}
                      />
                    }

                  </div>
                </section>
                {detailData.tags && detailData.tags.length > 0 &&
                  <section className="event-zoner-group">
                    <div className="container-fluid">
                      <ul>
                        {detailData.tags.map((obj, idx) => {
                          if (obj.name) {
                            return <li>{obj.name}</li>
                          }
                        })}
                      </ul>
                    </div>
                  </section>
                }
              </div>
            }
            <ArticleSection />
            {similarEventsData && similarEventsData.length > 0 &&
              <SimilarPicksSection data={similarEventsData} />
            }
          </div>
        }
      </div>
    );
  }
}

