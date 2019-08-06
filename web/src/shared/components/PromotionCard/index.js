import React, { useState,useEffect } from 'react'
import './style.scss';
import Carousel from '../../../shared/components/Carousel';

const PromotionCard = (props) => {

  const { data, handleShow } = props;
  const data1 = [
    {
      id: 1,
      thumb_image: "",
      title: "",
      venue_name: "",
      primary_genre: "",
      event_date: ""
    }
  ];

  const [show, setShow] = useState(false);

  useEffect(() => {

  }, [])
  
  return (
    <li className="promotion-block">
      <div className="promotions-listing-wrapper" onClick={() => handleShow(data.id)}>
        <div className="promotion-image">
          <img src={data.featured_image} className="img-fluid" alt="" />
        </div>
        <div className="promotion-desc">
          <span className="promotion-category">{data.title}</span>
          <span className="share">
            <img src="assets/images/share-icon.svg" alt="" />
          </span>
          <h3>{data.short_description}</h3>
          <div className="promotion-btn-wrapper">
            <button>
              <span>Buy</span>
              <img src="assets/images/next-arrow-white.svg" alt="" />
            </button>
            <div className="promotion-timer">
              <span className="timer-tagline">{data.custom_label_text} Promotion ends in:</span>
              <ul>
                <li className="timer-watch">
                  <img src="assets/images/stopwatch-grey.svg" className="img-fluid" alt="watch" />
                </li>
                <li className="timer-days">
                  <span>70</span>
                  <span className="timer-label">Days</span>
                </li>
                <li className="timer-hours">
                  <span>11</span>
                  <span className="timer-label">Hrs</span>
                </li>
                <li className="timer-minutes">
                  <span>29</span>
                  <span className="timer-label">Mins</span>
                </li>
                <li className="timer-seconds">
                  <span>58</span>
                  <span className="timer-label">Sec</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="promotion-dropdown-height"></div>
      <div className={show ? "show" : "promotion-tab-dropdown"} >
        <a className="promotion-tab-close-btn" onClick={() => this.setState({ show: false })}>
          <img src="assets/images/close-blue.svg" alt="" />
        </a>
        <span className="top-dropdown-bar"></span>
        <div className="promotion-tab-dropdown-content">
          <p>Book tickets with Mastercard and enjoy 20% off! This promotion is only applicable for tickets purchased each day to visit Headrock VR from 17 December 2018 to 31 July 2019.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet cursus lacus. Nullam elementum, dolor eu ullamcorper sodales, libero eros vehicula urna, vel egestas diam erat et neque. Donec vitae ante et nulla porta imperdiet. Aliquam maximus sem eget mi venenatis venenatis. In tortor urna, placerat ac augue eget, aliquet cursus odio. Nulla justo urna, bibendum sed nunc et, elementum eleifend erat. Sed eleifend orci ut volutpat ullamcorper. Duis pulvinar, libero ac posuere ultrices, quam tortor commodo turpis, quis suscipit risus odio ac justo. Mauris purus odio, sodales id volutpat sit amet, pharetra id felis. Pellentesque tempus a sapien eget finibus.</p>
          <img src="assets/images/banner-image2.png" className="img-fluid" alt="" />
          <p>Donec id sem et arcu fermentum pretium quis in metus. Ut dapibus sem ac iaculis pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada feugiat odio in consequat. Sed non nisl tortor. Pellentesque luctus magna sollicitudin nulla accumsan, at molestie elit cursus. Phasellus et est justo. Vivamus nec risus bibendum, iaculis arcu a, tempus augue. Cras sollicitudin elit at vehicula pulvinar. In hac habitasse platea dictumst. Mauris facilisis risus et lorem dignissim placerat.</p>
          {/*  Related Events */}
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
                </div> */}

              {/* <div className="carousel-navigation">
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
              <Carousel imgArray={data1} arrows={true} slidesToShow={6} slidesToScroll={6} />
            </div>
          </section>
        </div>
      </div>
    </li>
  )
}

export default PromotionCard;
