import React, { useState, Suspense } from 'react'
import './style.scss';
import Carousel from '../../../shared/components/Carousel';
import Timer from '../Timer';
import SocialShare from '../../../shared/components/SocialShare';

const PromotionCard = (props) => {

  const { data, fetchPromotionDetailData, handlePromotionDetailTab } = props;
  const { promotionDetail, promotionTab, tabDetailId } = props.state;
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

  const [socialShare, setSocialShare] = useState(false)

  const handleSocialShare = () => {
    setSocialShare(!socialShare)
  }

  return (
    <li className="promotion-block">
      <div className="promotions-listing-wrapper" onClick={() => fetchPromotionDetailData(data.alias, data.id)}>
        <div className="promotion-image">
          <img src={data.featured_image} className="img-fluid" alt="" />
        </div>
        <div className="promotion-desc">
          <span className="promotion-category" style={{ color:`#${data.featured_label_color}`}}>{data.featured_label_text}</span>
          <span className="share" onClick={handleSocialShare} >
            {socialShare ? "X" : <img src="assets/images/share-icon.svg" alt="" />}
            <span style={{ display: socialShare ? "block" : "none" }}><SocialShare /></span>
          </span>
          <h3>{data.title}</h3>
          <div className="promotion-btn-wrapper">
            <a href={data.buttons.length > 0 && data.buttons[0].url ? data.buttons[0].url : undefined}>
              <button style={{ color: data.buttons.length > 0 ?`#${data.buttons[0].color}`: "" }}>
                <span>{data.buttons.length > 0 && data.buttons[0].text}</span>
                <img src="assets/images/next-arrow-white.svg" alt="" />
              </button>
            </a>
            {data.show_timer === "1" ?
              <div className="promotion-timer">
                <span className="timer-tagline">{data.custom_label_text} Promotion ends in:</span>
                <ul>
                  <li className="timer-watch">
                    <img src="assets/images/stopwatch-grey.svg" className="img-fluid" alt="watch" />
                  </li>
                  <Timer endDate={data.publish_end_date} />
                </ul>
              </div>
              :
              null
            }
          </div>
        </div>
      </div>
      <div className="promotion-dropdown-height"></div>
      <div className={promotionTab === "open" && tabDetailId === data.id ? "show" : "promotion-tab-dropdown"} >
        <a className="promotion-tab-close-btn" onClick={() => handlePromotionDetailTab("close")}>
          <img src="assets/images/close-blue.svg" alt="" />
        </a>
        <span className="top-dropdown-bar"></span>
        <div className="promotion-tab-dropdown-content">
          {/* <p>{short_description}</p> */}
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <img src={featured_image} className="img-fluid" alt="" />
          {/* <p>Donec id sem et arcu fermentum pretium quis in metus. Ut dapibus sem ac iaculis pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada feugiat odio in consequat. Sed non nisl tortor. Pellentesque luctus magna sollicitudin nulla accumsan, at molestie elit cursus. Phasellus et est justo. Vivamus nec risus bibendum, iaculis arcu a, tempus augue. Cras sollicitudin elit at vehicula pulvinar. In hac habitasse platea dictumst. Mauris facilisis risus et lorem dignissim placerat.</p> */}
          {/* Related Events */}
          <section className="related-event">
            <div className="container-fluid">
              <div className="section-top-wrapper">
                <h2>Related Events</h2>
                <div className="carousel-dots">
                  <a >See all <img src="assets/images/right-arrow.svg" alt="arrow" /></a>
                  <div className="dots-group">
                    <span className="active"><a ></a></span>
                    <span><a ></a></span>
                    <span><a ></a></span>
                  </div>
                </div>
              </div>
              {/* <div className="grid-container">
                <div className="item">
                  <div className="item-wrapper">
                    <div className="currently-showing-img">
                      <div className="item-img">
                        <img src="assets/images/atul-khatri.jpg" className="img-fluid" alt="atul-khatri" />
                      </div>
                    </div>
                    <span className="category comedy">Comedy</span>
                    <p>Thu, 2 May 2019</p>
                    <h3>Atul Khatri - Live in Singapore</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="item-wrapper">
                    <div className="currently-showing-img">
                      <div className="item-img">
                        <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios" />
                      </div>
                    </div>
                    <span className="category musical">Musical</span>
                    <p>Sun, 21 Jul 2019</p>
                    <h3>KURIOS – Cabinet of Curiosities</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="item-wrapper">
                    <div className="currently-showing-img">
                      <div className="item-img">
                        <img src="assets/images/panthom-of-opera.jpg" className="img-fluid" alt="panthom-of-opera" />
                      </div>
                    </div>
                    <span className="category musical">Musical</span>
                    <p>Thu, 2 May 2019</p>
                    <h3>Atul Khatri - Live in Singapore</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="item-wrapper">
                    <div className="currently-showing-img">
                      <div className="item-img">
                        <img src="assets/images/atul-khatri.jpg" className="img-fluid" alt="atul-khatri" />
                      </div>
                    </div>
                    <span className="category comedy">Comedy</span>
                    <p>Sun, 21 Jul 2019</p>
                    <h3>KURIOS – Cabinet of Curiosities</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="item-wrapper">
                    <div className="currently-showing-img">
                      <div className="item-img">
                        <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios" />
                      </div>
                    </div>
                    <span className="category musical">Musical</span>
                    <p>Sat, 8 Jun 2019</p>
                    <h3>The Phantom of Opera</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="item-wrapper">
                    <div className="currently-showing-img">
                      <div className="item-img">
                        <img src="assets/images/panthom-of-opera.jpg" className="img-fluid" alt="panthom-of-opera" />
                      </div>
                    </div>
                    <span className="category musical">Musical</span>
                    <p>Sat, 8 Jun 2019</p>
                    <h3>The Phantom of Opera</h3>
                  </div>
                </div>
              </div>

              <div className="carousel-navigation">
                <div className="left-navigation">
                  <a href="/">
                    <img src="assets/images/left-arrow-blue.svg" alt="left-navigation" />
                  </a>
                </div>
                <div className="right-navigation">
                  <a href="/">
                    <img src="assets/images/right-arrow-blue.svg" alt="right-navigation" />
                  </a>
                </div>
              </div> */}
              <Carousel imgArray={events} arrows={true} slidesToShow={6} slidesToScroll={6} />
            </div>
          </section>
        </div>
      </div>
    </li>
  )
}

export default PromotionCard;
