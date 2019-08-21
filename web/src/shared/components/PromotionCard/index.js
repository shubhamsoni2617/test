import React, { useState } from 'react';
import './style.scss';
import Carousel from '../../../shared/components/Carousel';
import Timer from '../Timer';
import SocialShare from '../../../shared/components/SocialShare';
import CloseIcon from '../../../assets/images/close-blue.svg';
import ShareIcon from '../../../assets/images/share-icon.svg';
import NextArrow from '../../../assets/images/next-arrow-white.svg';
import NextArrowBlue from '../../../assets/images/next-arrow-blue.svg';
import RightArrow from '../../../assets/images/right-arrow.svg';
import StopWatch from '../../../assets/images/stopwatch-grey.svg';

const PromotionCard = (props) => {

  const { data, fetchPromotionDetailData, handlePromotionDetailTab } = props;
  const { promotionDetail, promotionTab, tabDetailId, shareUrl } = props.state;
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
    show_timer,
  } = promotionDetail

  const [socialShare, setSocialShare] = useState(false);
  const [expiredText, setExpiredText,] = useState('');


  const handleSocialShare = () => {
    setSocialShare(!socialShare)
  }

  const handlePromotionExpired = (text) => {
    setExpiredText(text)
  }

  return (
    <div className={promotionTab === "open" && tabDetailId === data.id ? "promotion-block active" : "promotion-block"}>
      <div className="promotions-listing-wrapper">
        <div className="promotion-image">
          <img src={data.featured_image} className="img-fluid" alt="feature-image" />
        </div>
        <div className="promotion-desc">
          <span className="promotion-category" style={{ color: `#${data.featured_label_color}` }}>{data.featured_label_text}</span>
          <span className="share" onClick={handleSocialShare} >
            <img src={ShareIcon} alt="share-icon" />
            <SocialShare shareUrl={shareUrl && shareUrl} showSocialShare={socialShare} />
          </span>
          <h3>{data.title}</h3>
          <div className="promotion-btn-wrapper">
            {/* <a href={data.buttons.length > 0 && data.buttons[0].url ? data.buttons[0].url : undefined}>
              <button style={{ color: data.buttons.length > 0 ? `#${data.buttons[0].color}` : "" }}>
                <span>{data.buttons.length > 0 && data.buttons[0].text}</span>
              </button>
            </a> */}
            <button onClick={() => fetchPromotionDetailData(data.alias, data.id)}><span>See More</span></button>
            {data.show_timer === "1" ?
              <div className="promotion-timer">
                {!expiredText ? <span className="timer-tagline"> Hurry! Promotion ends in:</span> : null}
                <ul>
                  <li className="timer-watch">
                    <img src={StopWatch} className="img-fluid" alt="watch" />
                  </li>
                  <Timer endDate={data.publish_end_date} promotionExpired={handlePromotionExpired} />
                </ul>
              </div>
              :
              null
            }
          </div>
        </div>
      </div>
      <div className="promotion-dropdown-height"></div>
      <div className="promotion-tab-dropdown" >
        <a className="promotion-tab-close-btn" onClick={() => handlePromotionDetailTab("close")}>
          <img src={CloseIcon} alt="close-icon" />
        </a>
        <span className="top-dropdown-bar"></span>
        <div className="promotion-tab-dropdown-content">
          {/* <p>{short_description}</p> */}
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <img src={featured_image} className="img-fluid" alt="feature-image" />
          {/* <p>Donec id sem et arcu fermentum pretium quis in metus. Ut dapibus sem ac iaculis pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada feugiat odio in consequat. Sed non nisl tortor. Pellentesque luctus magna sollicitudin nulla accumsan, at molestie elit cursus. Phasellus et est justo. Vivamus nec risus bibendum, iaculis arcu a, tempus augue. Cras sollicitudin elit at vehicula pulvinar. In hac habitasse platea dictumst. Mauris facilisis risus et lorem dignissim placerat.</p> */}
          {/* Related Events */}
          <div>
            <button style={{ color: buttons && buttons.length > 0 ? `#${buttons[0].color}` : "" }}>
              <a href={buttons && buttons.length > 0 && buttons[0].url ? buttons[0].url : undefined}>
                <span>{buttons && buttons.length > 0 && buttons[0].text}</span>
              </a>
            </button>
          </div>
          <section className="related-event">
            <div className="container-fluid">
              <div className="section-top-wrapper">
                <h2>Related Events</h2>
              </div>
              <Carousel imgArray={events} arrows={true} slidesToShow={6} slidesToScroll={6} dots={false} />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PromotionCard;
