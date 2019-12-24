import React, { Fragment } from 'react';
import MacBook from '../../../assets/images/macbook.png';
import { Link } from 'react-router-dom';
import Iphone from '../../../assets/images/iphone.png';
import Map from '../../../assets/images/map.png';
import Contact from '../../../assets/images/contact-us.png';
import appleImage from '../../../assets/images/apple.svg';
import androidImage from '../../../assets/images/android.png';

const Content = ({ whereBuyTicketsDetails, apiPartners }) => {
  let contactNumber;
  if (whereBuyTicketsDetails[4].title.length > 0 && whereBuyTicketsDetails) {
    let index = whereBuyTicketsDetails[4].title.match(/\d/).index;
    if (index) {
      let initial = whereBuyTicketsDetails[4].title.slice(0, index);
      let number = whereBuyTicketsDetails[4].title.slice(
        index,
        whereBuyTicketsDetails[4].title.length
      );
      contactNumber = (
        <>
          {initial} <a href={`tel:+${number}`}>{number}</a>
        </>
      );
    }
  }

  return (
    <Fragment>
      <div className="">
        <div className="sistic-singapore-section">
          <div className="container-fluid custom-container">
            <div className="wtbt-desc">
              <div className="wtbt-content">
                <h1 id={whereBuyTicketsDetails[0].title}>
                  {whereBuyTicketsDetails[0].title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: whereBuyTicketsDetails[0].description
                  }}
                />
                <Link className="wtbt-btn" to="/events">
                  Find an Event
                </Link>
              </div>
              <div className="wtbt-image">
                <img src={MacBook} alt="partner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-app-section">
          <div className="container-fluid custom-container">
            <div className="wtbt-desc">
              <div className="wtbt-content">
                <h1 id={whereBuyTicketsDetails[1].title}>
                  {whereBuyTicketsDetails[1].title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: whereBuyTicketsDetails[1].description
                  }}
                />
                <div className="download-option">
                  <a>
                    <img src={appleImage} className="ios" alt="" />
                    <span>
                      Available on the
                      <br />
                      <strong>App Store</strong>
                    </span>
                  </a>
                  <a>
                    <img src={androidImage} className="android" alt="" />
                    <span>
                      Get it on
                      <br />
                      <strong>Play Store</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="wtbt-image">
                <img src={Iphone} alt="partner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="agent-section">
          <div className="container-fluid custom-container">
            <div className="wtbt-desc">
              <div className="wtbt-content">
                <h1 id={whereBuyTicketsDetails[2].title}>
                  {whereBuyTicketsDetails[2].title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: whereBuyTicketsDetails[2].description
                  }}
                />
                <Link className="wtbt-btn" to="/events">
                  Find Agents
                </Link>
              </div>
              <div className="wtbt-image">
                <img src={Map} alt="partner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="api-partners-section">
          <div className="container-fluid custom-container">
            <div className="wtbt-desc">
              <div className="wtbt-image">
                {/* <div className="img-fluid"> */}
                {apiPartners &&
                  apiPartners.map(partner => {
                    return (
                      <a
                        href={partner.url}
                        key={partner.logo}
                        className="api-images"
                      >
                        <img
                          src={partner.logo}
                          key={partner.logo}
                          alt="partner-logo"
                          className="img-fluid"
                        />
                      </a>
                    );
                  })}
                {/* </div> */}
              </div>
              <div className="wtbt-content">
                <h1 id={whereBuyTicketsDetails[3].title}>
                  {whereBuyTicketsDetails[3].title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: whereBuyTicketsDetails[3].description
                  }}
                />
                {/* <Link
                  className="wtbt-btn api-see-all-btn"
                  to="/corporate/partner-with-us"
                >
                  See All Partners
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="hotline-section">
          <div className="container-fluid custom-container">
            <div className="wtbt-desc">
              <div className="wtbt-content">
                <h1 id={whereBuyTicketsDetails[4].title}>
                  {contactNumber
                    ? contactNumber
                    : whereBuyTicketsDetails[4].title}
                </h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: whereBuyTicketsDetails[4].description
                  }}
                />
                <Link className="wtbt-btn" to="/events">
                  Contact Us
                </Link>
              </div>
              <div className="wtbt-image">
                <img src={Contact} alt="partner" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
