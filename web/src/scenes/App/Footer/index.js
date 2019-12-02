import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import appleImage from '../../../assets/images/apple.svg';
import androidImage from '../../../assets/images/android.png';
import fb from '../../../assets/images/fb.svg';
import fbFill from '../../../assets/images/fb-fill.svg';
import insta from '../../../assets/images/insta-unfill.svg';
import instaFill from '../../../assets/images/insta-fill.svg';
import stixImage from '../../../assets/images/stix.png';
import BackToTop from '../../../shared/components/BackToTop';
import scrollTop from '../../../assets/images/arrow-to-top.svg';
import Utilities from '../../../shared/utilities';
import NewsLetterForm from '../../../shared/components/NewsLetterForm';

const Footer = () => {
  const ourCompanyLinks = [
    { link: 'corporate/about-us', linkName: 'About Us' },
    {
      link: 'corporate/ticket-with-us',
      linkName: 'Sell with Us'
    },
    {
      link: 'corporate/ticketing-technology',
      linkName: 'Ticketing Technology'
    },
    { link: 'corporate/partner-with-us', linkName: 'Partner with Us' },
    { link: 'corporate/careers', linkName: 'Careers' }
  ];

  const helpFulLinks = [
    {
      link: 'where-to-buy-tickets',
      linkName: 'Where to Buy Tickets'
    },
    { link: 'agents', linkName: 'Locate an Agent' },
    { link: 'venues', linkName: 'Locate a Venue' },
    { link: 'explore/articles', linkName: 'Blog' },
    { link: '', linkName: 'Media' }
  ];

  const thirdColLinks = [
    { link: '', linkName: 'My Account' },
    { link: 'gift-vouchers', linkName: 'Gift Vouchers' },
    { link: 'faq/top-questions', linkName: 'FAQ' },
    { link: '', linkName: 'Cancellations/Refunds' },
    { link: 'contact-us', linkName: 'Contact Us' }
  ];
  return (
    <footer id="footer">
      <section className="footer">
        <div className="container-fluid">
          <div className="footer-top">
            <div className="footer-links">
              <h3>Our Company</h3>
              <ul>
                {ourCompanyLinks.map(({ link, linkName }) => {
                  return (
                    <li key={link}>
                      <Link to={`/${link}`}>{linkName}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="footer-links helpful-links">
              <h3>Helpful Links</h3>
              <div className="footer-groups">
                <ul>
                  {helpFulLinks.map(({ link, linkName }) => {
                    return (
                      <li key={link}>
                        <Link to={`/${link}`}>{linkName}</Link>
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {thirdColLinks.map(({ link, linkName }) => {
                    return (
                      <li key={linkName}>
                        <Link to={`/${link}`}>{linkName}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="footer-links">
              <h3>SISTIC on Mobile</h3>
              <div className="download-option">
                <a href="https://itunes.apple.com/sg/app/sistic/id500601166?mt=8">
                  <img src={appleImage} className="ios" alt="" />
                  <span>
                    Available on the
                    <br />
                    <strong>App Store</strong>
                  </span>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.rainmakerlabs.sistic&hl=en">
                  <img src={androidImage} className="android" alt="" />
                  <span>
                    Get it on
                    <br />
                    <strong>Play Store</strong>
                  </span>
                </a>
              </div>
            </div>
            <div className="footer-links stay-connected-wrapper">
              <div className="stay-connect">
                <h3>Stay Connected</h3>
                <NewsLetterForm type="sistic" />
              </div>
              <div className="follow-us">
                <h3>Follow us on</h3>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/SISTICsingapore"
                      target="_blank"
                    >
                      <img src={fb} alt="" />
                      <img className="active" src={fbFill} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sisticsingapore/"
                      target="_blank"
                    >
                      <img src={insta} alt="" />
                      <img className="active" src={instaFill} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyrights">
              <a href="https://sealsplash.geotrust.com/splash?&dn=*.sistic.com.sg">
                <img src={stixImage} alt="" />
              </a>
              <span>Copyright 1998 - 2019. © SISTIC.com Pte Ltd</span>
            </div>
            <ul className="footer-btm-links">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
            <div className="hotline-number">SISTIC Hotline: +65 63485555</div>
          </div>
        </div>
      </section>
      {!Utilities.mobilecheck() && (
        <span className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
          <img src={scrollTop} alt="Scroll to top" />
        </span>
        // <BackToTop scrollStepInPx="50" delayInMs="20" />
      )}
    </footer>
  );
};

export default Footer;
