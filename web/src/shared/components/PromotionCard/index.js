import React, { useState } from 'react';
import './style.scss';
import Carousel from '../../../shared/components/Carousel';
import Timer from '../Timer';
import SocialShare from '../../../shared/components/SocialShare';
import CloseIcon from '../../../assets/images/close-blue.svg';
import ShareIcon from '../../../assets/images/share-icon.svg';
import StopWatch from '../../../assets/images/stopwatch-grey.svg';
import Image from '../Image';
import Utilities from '../../utilities';
import Ellipsis from '../Ellipsis';

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
      <div
        className="promotions-listing-wrapper"
        onClick={() =>
          fetchPromotionDetailData(
            data.alias,
            data.id,
            defaultTabId,
            promotionTab
          )
        }
      >
        <div className="promotion-image">
          <Image src={data.featured_image} type="Promotion" />
        </div>
        <div className="promotion-desc">
          <div className="promotion-category-div">
            <span className="promotion-category-title">{data.category}</span>
            {data && data.custom_label_text ? (
              <span
                className="promotion-category"
                style={{ color: `#${data.custom_label_color}` }}
              >
                {data.custom_label_text}
              </span>
            ) : null}
          </div>
          <span className="share" onClick={handleSocialShare}>
            <img src={ShareIcon} alt="share-icon" />
            <SocialShare
              shareUrl={shareUrl && shareUrl}
              showSocialShare={socialShare}
            />
          </span>
          <Ellipsis
            title={data.title}
            lines={2}
            height={Utilities.mobilecheck() ? 18 : 22}
            size={Utilities.mobilecheck() ? 14 : 18}
            weight={500}
            customClass={'promotion-title'}
            allowTooltip={true}
          />
          <div className="promotion-btn-wrapper">
            <button>
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
          onClick={() => handlePromotionDetailTab(0)}
        >
          <img src={CloseIcon} alt="close-icon" />
        </a>
        <span className="top-dropdown-bar"></span>
        <div className="promotion-tab-dropdown-content">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
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
          {events && events.length > 0 && (
            <section className="related-event">
              <div
                className={
                  events.length > 4
                    ? 'container-fluid arrow-appear'
                    : 'container-fluid'
                }
              >
                <div className="section-top-wrapper">
                  <h2>Related Events</h2>
                </div>
                <Carousel
                  type="Horizontal"
                  imgArray={events}
                  arrows={true}
                  slidesToShow={4}
                  slidesToScroll={4}
                  dots={false}
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
