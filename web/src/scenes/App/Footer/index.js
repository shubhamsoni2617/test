import React from 'react'
import { a } from 'react-router-dom';
import './style.scss';
import sendImage from '../../../assets/images/send.svg';
import BackToTop from '../../../shared/components/BackToTop'

const Footer = () => {

   return (
      <footer>
         <section className="footer">
            <div className="container-fluid">
               <div className="footer-top">
                  <div className="footer-links">
                     <h3>Our Company</h3>
                     <ul>
                        <li>
                           <a>About Us</a>
                        </li>
                        <li>
                           <a>Sell with Us</a>
                        </li>
                        <li>
                           <a>Ticketing Technology</a>
                        </li>
                        <li>
                           <a>partner with Us</a>
                        </li>
                        <li>
                           <a>Careers</a>
                        </li>
                     </ul>
                  </div>
                  <div className="footer-links helpful-links">
                     <h3>Helpful as</h3>
                     <div className="footer-groups">
                        <ul>
                           <li>
                              <a>Where to Buy Tickets</a>
                           </li>
                           <li>
                              <a>Locate an Agent</a>
                           </li>
                           <li>
                              <a>Locate a Venue</a>
                           </li>
                           <li>
                              <a>Blog</a>
                           </li>
                           <li>
                              <a>Media</a>
                           </li>
                        </ul>
                        <ul>
                           <li>
                              <a>My Account</a>
                           </li>
                           <li>
                              <a>Gift Vouchers</a>
                           </li>
                           <li>
                              <a>FAQ</a>
                           </li>
                           <li>
                              <a>Cancellations/Refunds</a>
                           </li>
                           <li>
                              <a>Contact Us</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="footer-links">
                     <h3>SISTIC on Mobile</h3>
                     <div className="download-option">
                        <a>
                           <img src="assets/images/apple.svg" className="ios" alt="" />
                           <span>
                              Available on the<br />
                              <strong>App Store</strong>
                           </span>
                        </a>
                        <a>
                           <img src="assets/images/android.png" className="android" alt="" />
                           <span>
                              Get it on<br />
                              <strong>Play Store</strong>
                           </span>
                        </a>
                     </div>
                  </div>
                  <div className="footer-links stay-connected-wrapper">
                     <div className="stay-connect">
                        <h3>Stay Connected</h3>
                        <div className="input-group">
                           <input type="text" className="form-control" placeholder="Enter Your email"
                              aria-label="Username" aria-describedby="basic-addon1" />
                           <div className="input-group-prepend">
                              <a className="input-group-text" id="basic-addon1"><img src={sendImage}
                                 className="img-fluid" alt="send" /></a>
                           </div>
                        </div>
                     </div>
                     <div className="follow-us">
                        <h3>Follow us on</h3>
                        <ul className="social">
                           <li>
                              <a href="https://www.facebook.com/SISTICsingapore" target="_blank">
                                 <img src="assets/images/fb.svg" alt="" />
                                 <img className="active" src="assets/images/fb-fill.svg" alt="" />
                              </a>
                           </li>
                           <li>
                              <a>
                                 <img src="assets/images/insta-unfill.svg" alt="" />
                                 <img className="active" src="assets/images/insta-fill.svg" alt="" />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="footer-bottom">
                  <div className="copyrights">

                     <a href="https://sealsplash.geotrust.com/splash?&dn=*.sistic.com.sg" target="_blank">
                        <img src="assets/images/stix.png" alt="" />
                     </a>
                     <span>Copyright 1998 - 2019. © SISTIC.com Pte Ltd</span>
                  </div>
                  <ul className="footer-btm-links">
                     <li>
                        <a>Privacy Policy</a>
                     </li>
                     <li>
                        <a>Terms & Conditions</a>
                     </li>
                  </ul>
                  <div className="hotline-number">
                     SISTIC Hotline: +65 63485555
                 </div>
               </div>
            </div>
         </section>
         <BackToTop scrollStepInPx="50" delayInMs="20" />
      </footer>
   )
}

export default Footer;
