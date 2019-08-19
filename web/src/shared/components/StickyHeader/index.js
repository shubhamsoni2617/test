import React, { Component } from "react";
import calendarImg from "../../../assets/images/event-calender.svg";
import locationImg from "../../../assets/images/location-blue.svg";
import locationGray from "../../../assets/images/location-gray.svg";
import faceImg from "../../../assets/images/face.svg";
import shareIcon from "../../../assets/images/share-icon.svg";
import Info from "../../../assets/images/info-sign.svg";
import SocialShare from "../../../shared/components/SocialShare";
import Image from "../../../shared/components/Image";

export default class StickyHeader extends Component {
  render() {
    const { detailData, sticky, showSocialShare, shareUrl, setHeader } = this.props;

    return (
      <div className={`event-detail ${sticky ? 'sticky-topbar' : ''} ${sticky && setHeader ? "animate" : ""}`}>
        {detailData.images && detailData.images.length > 0 &&
          <div className="tickets-demo-img">
            <Image
              src={detailData.images[0].thumb_image}
              alt="joker"
              className="img-fluid"
              type="Horizontal"
            />
          </div>
        }
        <div className="tickets-desc">
          <div className="breadcrumb-share">
            <ul className="breadcrumb">
              <li>Home</li>
              {detailData.genres && detailData.genres.length > 0 &&
                detailData.genres.map((obj, index) => {
                  if (obj.is_primary == 1) {
                    return <li key={index}>{obj.name}</li>
                  }
                })}
            </ul>
          </div>
          {detailData.genres && detailData.genres.length > 0 && (
            <ul className="zoner-group">
              {detailData.genres.map((obj, index) => {
                return (
                  <li
                    className={`${obj.is_primary == 1 ? "active" : ""}`}
                    key={index}
                  >
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          )}
          <h2>{detailData.title}</h2>
          {detailData.pop_up_message.title && <div className="info-tooltip">
            <a className="info" onClick={() => this.props.openNotice()}>
              <img src={Info} alt="Info" />
            </a>
          </div>}
          <div className="share-tooltip">
            <a className="share" onClick={() => this.props.openSocialShare()}>
              <img src={shareIcon} alt="" />
              <SocialShare shareUrl={shareUrl} showSocialShare={showSocialShare} />
            </a>
          </div>
          <div className="ticket-date-price">
            <ul className="date-address">
              {detailData.event_date && (
                <li className="event-date">
                  <img src={calendarImg} alt="cal-icon" />
                  <span>{detailData.event_date}</span>
                </li>
              )}
              {detailData.venue_name && (
                <li className="event-address">
                    <a>
                        <img
                            className="location-gray"
                            src={locationGray}
                            alt="location"
                        />
                        <img
                            className="location-icon"
                            src={locationImg}
                            alt="location"
                        />
                        <span>{detailData.venue_name.name}</span>
                  </a>
                </li>
              )}
            </ul>
            {detailData.price && (
              <div className="price">
                <label>Price</label>
                <span>{detailData.price}</span>
              </div>
            )}
          </div>
        </div>
        <div className="tickets-button">
          {detailData.buy_now_url && (
            <div className="buy-tickets-btn">
              <a href={detailData.buy_now_url} target="_blank">
                Buy Tickets
              </a>
            </div>
          )}
          {detailData.is_available_for_booking === 0 && (
            <div className="shows-over">
              <div className="shows-over-icon">
                <img src={faceImg} alt="" />
              </div>
              <div className="shows-over-desc">
                <h4>Shows over!</h4>
                <p>This event has ended and no longer available for booking.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
