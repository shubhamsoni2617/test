import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import calendarImg from '../../../assets/images/event-calender.svg';
import locationImg from '../../../assets/images/location-blue.svg';
import locationGray from '../../../assets/images/location-gray.svg';
import faceImg from '../../../assets/images/face.svg';
import shareIcon from '../../../assets/images/share-icon.svg';
import Info from '../../../assets/images/info-sign.svg';
import SocialShare from '../../../shared/components/SocialShare';
import Image from '../../../shared/components/Image';

function EventDateTime({ show, showBlock, data }) {
  if (!show) return null;
  if (!data || !data.length) return null;

  data = [...data, ...data, ...data, ...data];
  return (
    <div className="event-dates-time-block">
      <button className="close-button" onClick={() => showBlock(false)}>
        X
      </button>
      <div className="block-header">
        <img src={calendarImg} alt="cal-icon" />
        <h3>Event dates & Time</h3>
      </div>
      <div className="tickets-desc">
        <ul className="date-address">
          {data.map(date => {
            return (
              <li className="event-date">
                <span>{date}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function StickyHeader(props) {
  const [showEventDateBlock, setEventDateBlock] = useState(false);
  const {
    detailData,
    sticky,
    showSocialShare,
    shareUrl,
    setHeader,
    seatMapButton,
    buyPackages
  } = props;

  return (
    <div
      className={`event-detail ${sticky ? 'sticky-topbar' : ''} ${
        sticky && setHeader ? 'animate' : ''
      }`}
    >
      {detailData.images && detailData.images.length > 0 && (
        <div className="tickets-demo-img">
          <Image
            src={detailData.images[0].thumb_image}
            alt="joker"
            className="img-fluid"
            type="Horizontal"
          />
        </div>
      )}
      <EventDateTime
        show={showEventDateBlock}
        showBlock={setEventDateBlock}
        data={detailData.event_date_details}
      />
      <div className="tickets-desc">
        {detailData.genres && detailData.genres.length > 0 && (
          <ul className="zoner-group">
            {detailData.genres.map((obj, index) => {
              return (
                <li
                  className={`${obj.is_primary === 1 ? 'active' : ''}`}
                  key={index}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        )}
        <h2>
          {detailData.title}
          {detailData.pop_up_message.title && (
            <div className="info-tooltip">
              <span className="info" onClick={() => this.props.openNotice()}>
                <img src={Info} alt="Info" />
              </span>
            </div>
          )}
          <div className="share-tooltip">
            <span
              className="share"
              onClick={() => this.props.openSocialShare()}
            >
              <img src={shareIcon} alt="" />
              <SocialShare
                shareUrl={shareUrl}
                showSocialShare={showSocialShare}
              />
            </span>
          </div>
        </h2>
        <div className="ticket-date-price">
          <ul className="date-address">
            {detailData.event_date && (
              <li className="event-date">
                <img src={calendarImg} alt="cal-icon" />
                <div>
                  <span>{detailData.event_date}</span>
                  <button
                    className="link"
                    onClick={() => setEventDateBlock(true)}
                  >
                    View all Dates & Time
                  </button>
                </div>
              </li>
            )}
            {detailData.venue_name && (
              <li className="event-address">
                <img
                  className="location-gray"
                  src={locationGray}
                  alt="location"
                />
                <div>
                  <span>
                    <Link to={`/venues?id=${detailData.venue_name.id}`}>
                      {detailData.venue_name.name}
                    </Link>
                  </span>
                  <Link to="/venues">View all Venues</Link>
                </div>
              </li>
            )}
            <li className="event-date">{seatMapButton}</li>
            {detailData.price && (
              <li className="event-date">
                <img src={calendarImg} alt="cal-icon" />
                <span>{detailData.price}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="tickets-button">
        {detailData.buy_now_url && detailData.is_available_for_booking === 1 && (
          <div className="buy-tickets-btn">
            <a
              href={detailData.buy_now_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Tickets
            </a>
          </div>
        )}
        {buyPackages}
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
export default StickyHeader;
StickyHeader.propTypes = {
  detailData: PropTypes.object.isRequired,
  shareUrl: PropTypes.string.isRequired,
  showSocialShare: PropTypes.bool.isRequired,
  sticky: PropTypes.bool.isRequired
};
