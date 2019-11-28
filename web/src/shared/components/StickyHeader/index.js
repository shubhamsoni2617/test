import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import calendarImg from '../../../assets/images/event-calender.svg';
import coinsImg from '../../../assets/images/price.svg';
import locationGray from '../../../assets/images/location-gray.svg';
import closeIcon from '../../../assets/images/cross.svg';
import closeIconWhite from '../../../assets/images/cross-white.svg';
import faceImg from '../../../assets/images/face.svg';
import shareIcon from '../../../assets/images/share-icon.svg';
import Info from '../../../assets/images/info-sign.svg';
import SocialShare from '../../../shared/components/SocialShare';
import ModalPopup from '../../../shared/components/Modal';
import Image from '../../../shared/components/Image';
import Utilities from '../../utilities';
import TitleToolTip from './TitleToolTip';

function Button({ styleObj, url, text }) {
  // if (!text) return null;
  console.log('url', url);
  return (
    <div className="buy-tickets-btn">
      <a style={styleObj} href={url} target="_blank">
        {text}
      </a>
    </div>
  );
}

function BuyTicketsButton({ url, buttons, buttonGroups, setFlag }) {
  if (
    (buttons && buttons.length && buttons[0].text) ||
    (buttonGroups && buttonGroups.length && buttonGroups[0].title)
  ) {
    return <a onClick={() => setFlag(true)}>Buy Tickets</a>;
  }

  if (!url) return null;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      Buy Tickets
    </a>
  );
}

function BuyTicketsButtonPopup({ detailData, flag, setFlag }) {
  console.log('flag', flag);
  if (
    !detailData.buttons &&
    !detailData.buttons.length &&
    !detailData.buttons[0].text &&
    !detailData.buttonGroups &&
    !detailData.buttonGroups.length &&
    !detailData.buttonGroups[0].title &&
    !detailData.buy_now_url
  ) {
    return null;
  }

  return (
    <>
      <div className="buy-tickets-btn">
        <BuyTicketsButton
          buttons={detailData.buttons}
          buttonGroups={detailData.button_groups}
          url={detailData.buy_now_url}
          setFlag={setFlag}
        />
      </div>
      <ModalPopup
        showModal={flag}
        title="Buy Tickets"
        handleClose={() => setFlag(false)}
      >
        <div className="buy-tickets-btn">
          <BuyTicketsButton url={detailData.buy_now_url} />
        </div>
        {detailData.buttons &&
          detailData.buttons.length > 0 &&
          detailData.buttons.map(button => {
            const styleObj = {
              background: button.color,
              fontSize: `${button.font_size}px`,
              color: button.font_color
            };
            return (
              <Button styleObj={styleObj} text={button.text} url={button.url} />
            );
          })}
        {detailData.button_groups &&
          detailData.button_groups.length > 0 &&
          detailData.button_groups.map(buttonGroup => {
            return (
              <div className="button_group">
                <label>{buttonGroup.title}</label>
                {buttonGroup.buttons &&
                  buttonGroup.buttons.length &&
                  buttonGroup.buttons.map(button => {
                    const styleObj = {
                      background: button.color,
                      fontSize: `${button.font_size}px`,
                      color: button.font_color
                    };
                    return (
                      <Button
                        key={button.id}
                        styleObj={styleObj}
                        text={button.text}
                        url={button.url}
                      />
                    );
                  })}
              </div>
            );
          })}
      </ModalPopup>
    </>
  );
}

function ViewAllDateTimeButton({
  data,
  eventDate,
  altEventStartDate,
  eventDateNotes,
  setEventDateBlock
}) {
  // if (!show) return null;
  if (!altEventStartDate && !eventDateNotes) return null;

  return (
    <button className="link" onClick={() => setEventDateBlock(true)}>
      View all Dates & Time
    </button>
  );
}

function EventDateTime({
  show,
  showBlock,
  data,
  eventDate,
  altEventStartDate,
  eventDateNotes,
  setEventDateBlock
}) {
  if (!show) return null;
  // if (!data || !data.length) return null;

  const HtmlDescription = () => {
    return (
      <ul className="date-address">
        {altEventStartDate && (
          <li className="event-date">
            <span
              dangerouslySetInnerHTML={{ __html: altEventStartDate }}
            ></span>
          </li>
        )}
        {eventDateNotes && (
          <li className="event-date">
            <span dangerouslySetInnerHTML={{ __html: eventDateNotes }}></span>
          </li>
        )}
      </ul>
    );
  };

  if (Utilities.mobilecheck()) {
    return (
      <ModalPopup
        showModal={setEventDateBlock}
        title="Event Dates & Time"
        handleClose={() => setEventDateBlock(false)}
      >
        <HtmlDescription />
      </ModalPopup>
    );
  }

  return (
    <div className="event-dates-time-block">
      <button className="close-button" onClick={() => showBlock(false)}>
        <img src={closeIcon} alt="Close Icon" />
      </button>
      <div className="block-header">
        <img src={calendarImg} alt="cal-icon" />
        <h3>Event Dates & Time</h3>
      </div>
      <div className="tickets-desc">
        <Scrollbars>
          <HtmlDescription />
        </Scrollbars>
      </div>
    </div>
  );
}

function StickyHeader(props) {
  const [showEventDateBlock, setEventDateBlock] = useState(false);
  const [venueDetailsPopup, setVenueDetailsPopup] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (props.sticky && props.elemOffsetTop > 100) {
      const handleScroll = () => {
        if (!stickyHeader && window.pageYOffset >= props.elemOffsetTop + 100) {
          setStickyHeader(true);
        } else if (window.pageYOffset < props.elemOffsetTop) {
          setStickyHeader(false);
          setFlag(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [props.elemOffsetTop, props.sticky]);

  const {
    detailData,
    sticky,
    showSocialShare,
    shareUrl,
    seatMapButton,
    buyPackages
  } = props;
  return (
    <div
      className={`event-detail ${sticky ? 'sticky-topbar' : ''} ${
        sticky && stickyHeader ? 'animate' : ''
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
      <div className="tickets-desc">
        {detailData.title && (
          <TitleToolTip
            title={detailData.title}
            lines={props.lines}
            height={Utilities.mobileAndTabletcheck() ? 25 : 30}
            eventDetail
          />
        )}
        {!detailData.title && <h3></h3>}

        {detailData.pop_up_message.title && (
          <div className="info-tooltip">
            <span className="info" onClick={() => props.openNotice()}>
              <img src={Info} alt="Info" />
            </span>
          </div>
        )}
        <div className="share-tooltip">
          <span className="share" onClick={() => props.openSocialShare()}>
            <img src={shareIcon} alt="" />
            <SocialShare
              shareUrl={shareUrl}
              showSocialShare={showSocialShare}
            />
          </span>
        </div>

        <div className="ticket-date-price">
          <ul className="date-address">
            {detailData.event_date && (
              <li className="event-date">
                <img
                  src={calendarImg}
                  height={16}
                  width="16"
                  className="calenderIcon"
                  alt="cal-icon"
                />
                <div>
                  <span>{detailData.event_date}</span>
                </div>
              </li>
            )}
            {detailData.venue_name && detailData.venue_name.name && (
              <li className="event-address">
                <img
                  className="location-gray"
                  style={{ height: 20, width: 19 }}
                  width={19}
                  height={19}
                  src={locationGray}
                  alt="location"
                />
                <div>
                  <Link to={`/venues?id=${detailData.venue_name.id}`}>
                    <TitleToolTip
                      title={detailData.venue_name.name}
                      lines={1}
                      tag={false}
                      height={20}
                      eventDetail
                    />
                  </Link>
                </div>
              </li>
            )}

            {detailData.price && (
              <li className="event-date">
                <img
                  src={coinsImg}
                  className="coin"
                  width={19}
                  height={19}
                  alt="cal-icon"
                />
                <span className="detail">{detailData.price}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="tickets-button">
        {detailData.is_available_for_booking === 1 && (
          <BuyTicketsButtonPopup
            detailData={detailData}
            flag={flag}
            setFlag={setFlag}
          />
        )}
        {buyPackages}
      </div>
      {detailData.is_available_for_booking === 0 && (
        <div className="tickets-button shows-over-tickets">
          <div className="shows-over">
            <div className="shows-over-icon">
              <img src={faceImg} alt="" />
            </div>
            <div className="shows-over-desc">
              <h4>Shows over!</h4>
              <p>This event has ended and no longer available for booking.</p>
            </div>
          </div>
        </div>
      )}
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
