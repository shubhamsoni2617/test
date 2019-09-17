import React, { useState } from 'react';
import './style.scss';
import Carousel from '../../../shared/components/Carousel';
import Timer from '../Timer';
import SocialShare from '../../../shared/components/SocialShare';
import CloseIcon from '../../../assets/images/close-blue.svg';
import ShareIcon from '../../../assets/images/share-icon.svg';
import StopWatch from '../../../assets/images/stopwatch-grey.svg';
import Image from '../Image';
import EventHeading from '../EventHeading';

const PromotionCard = props => {
  const { data, fetchPromotionDetailData, handlePromotionDetailTab } = props;
  const {
    promotionDetail,
    promotionTab,
    tabDetailId,
    defaultTabId
  } = props.state;
  const {
    id,
    title,
    alias,
    image,
    buttons,
    custom_label_color,
    custom_label_text,
    description,
    events,
    featured_image,
    featured_label_color,
    is_featured,
    publish_end_date,
    publish_start_date,
    short_description,
    show_timer
  } = promotionDetail;

  const [socialShare, setSocialShare] = useState(false);
  const [expiredText, setExpiredText] = useState('');

  const handleSocialShare = () => {
    setSocialShare(!socialShare);
  };

  const handlePromotionExpired = text => {
    setExpiredText(text);
  };

  let shareUrl =
    window.location.origin + `/promotions/${defaultTabId}/${data.id}`;

  return (
    <div
      className={
        promotionTab === 1 && tabDetailId === data.id
          ? 'promotion-block active'
          : 'promotion-block'
      }
    >
      <div className="promotions-listing-wrapper">
        <div className="promotion-image">
          <Image src={data.featured_image} />
        </div>
        <div className="promotion-desc">
          {data && data.custom_label_text ? (
            <span
              className="promotion-category"
              style={{ color: `#${data.custom_label_color}` }}
            >
              {data.custom_label_text}
            </span>
          ) : null}
          <span className="share" onClick={handleSocialShare}>
            <img src={ShareIcon} alt="share-icon" />
            <SocialShare
              shareUrl={shareUrl && shareUrl}
              showSocialShare={socialShare}
            />
          </span>
          <EventHeading title={data.title} lines={2} height={20} />
          <div className="promotion-btn-wrapper">
            {/* <a href={data.buttons.length > 0 && data.buttons[0].url ? data.buttons[0].url : undefined}>
              <button style={{ color: data.buttons.length > 0 ? `#${data.buttons[0].color}` : "" }}>
                <span>{data.buttons.length > 0 && data.buttons[0].text}</span>
              </button>
            </a> */}
            <button
              onClick={() =>
                fetchPromotionDetailData(
                  data.alias,
                  data.id,
                  defaultTabId,
                  promotionTab
                )
              }
            >
              <span>See More</span>
            </button>
            {data.show_timer === '1' ? (
              <div className="promotion-timer">
                {!expiredText ? (
                  <span className="timer-tagline">
                    {' '}
                    Hurry! Promotion ends in:
                  </span>
                ) : null}
                {!expiredText ? (
                  <ul>
                    <li className="timer-watch">
                      <img src={StopWatch} className="img-fluid" alt="watch" />
                    </li>
                    <Timer
                      endDate={data.publish_end_date}
                      promotionExpired={handlePromotionExpired}
                    />
                  </ul>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="promotion-tab-dropdown" id="">
        <a
          className="promotion-tab-close-btn"
          onClick={() => handlePromotionDetailTab('close')}
        >
          <img src={CloseIcon} alt="close-icon" />
        </a>
        <span className="top-dropdown-bar"></span>
        <div className="promotion-tab-dropdown-content">
          {/* <p>{short_description}</p> */}
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          {/* <img src={featured_image} className="img-fluid" alt="feature-image" /> */}
          {/* <p>Donec id sem et arcu fermentum pretium quis in metus. Ut dapibus sem ac iaculis pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada feugiat odio in consequat. Sed non nisl tortor. Pellentesque luctus magna sollicitudin nulla accumsan, at molestie elit cursus. Phasellus et est justo. Vivamus nec risus bibendum, iaculis arcu a, tempus augue. Cras sollicitudin elit at vehicula pulvinar. In hac habitasse platea dictumst. Mauris facilisis risus et lorem dignissim placerat.</p> */}
          {/* Related Events */}

          {buttons &&
            buttons.length > 0 &&
            buttons.map((e, i) => {
              return (
                <div key={i}>
                  <a href={e && e.url ? e.url : undefined}>
                    <button
                      style={{
                        backgroundColor: e && e.color ? `#${e.color}` : ''
                      }}
                    >
                      <span>{e && e.text ? e.text : ''}</span>
                    </button>
                  </a>
                </div>
              );
            })}
          {events && events.length > 0 &&
            <section className="related-event">
              <div className="container-fluid">
                <div className="section-top-wrapper">
                  <h2>Related Events</h2>
                </div>
                <Carousel
                  imgArray={events}
                  arrows={true}
                  slidesToShow={4}
                  slidesToScroll={4}
                  dots={false}
                />
              </div>
            </section>
          }
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
