import React from 'react'
import { Link } from 'react-router-dom';
import scrollTop from '../../../assets/images/arrow-to-top.svg';
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
                           <Link>About Us</Link>
                        </li>
                        <li>
                           <Link>Sell with Us</Link>
                        </li>
                        <li>
                           <Link>Ticketing Technology</Link>
                        </li>
                        <li>
                           <Link>partner with Us</Link>
                        </li>
                        <li>
                           <Link>Careers</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="footer-links helpful-links">
                     <h3>Helpful Links</h3>
                     <div className="footer-groups">
                        <ul>
                           <li>
                              <Link>Where to Buy Tickets</Link>
                           </li>
                           <li>
                              <Link>Locate an Agent</Link>
                           </li>
                           <li>
                              <Link>Locate a Venue</Link>
                           </li>
                           <li>
                              <Link>Blog</Link>
                           </li>
                           <li>
                              <Link>Media</Link>
                           </li>
                        </ul>
                        <ul>
                           <li>
                              <Link>My Account</Link>
                           </li>
                           <li>
                              <Link>Gift Vouchers</Link>
                           </li>
                           <li>
                              <Link>FAQ</Link>
                           </li>
                           <li>
                              <Link>Cancellations/Refunds</Link>
                           </li>
                           <li>
                              <Link>Contact Us</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="footer-links">
                     <h3>SISTIC on Mobile</h3>
                     <div className="download-option">
                        <Link>
                           <img src="assets/images/apple.svg" className="ios" alt="" />
                           <span>
                              Available on the<br />
                              <strong>App Store</strong>
                           </span>
                        </Link>
                        <Link>
                           <img src="assets/images/android.png" className="android" alt="" />
                           <span>
                              Get it on<br />
                              <strong>Play Store</strong>
                           </span>
                        </Link>
                     </div>
                  </div>
                  <div className="footer-links stay-connected-wrapper">
                     <div className="stay-connect">
                        <h3>Stay Connected</h3>
                        <div className="input-group">
                           <input type="text" className="form-control" placeholder="Enter Your email"
                              aria-label="Username" aria-describedby="basic-addon1" />
                           <div className="input-group-prepend">
                              <Link className="input-group-text" id="basic-addon1"><img src={sendImage}
                                 className="img-fluid" alt="send" /></Link>
                           </div>
                        </div>
                     </div>
                     <div className="follow-us">
                        <h3>Follow us on</h3>
                        <ul className="social">
                           <li>
                              <a href="https://www.facebook.com/SISTICsingapore" target="_blank">
                                 <img src="assets/images/fb.svg" alt="" />
                              </a>
                           </li>
                           <li>
                              <Link>
                                 <img src="assets/images/insta-unfill.svg" alt="" />
                              </Link>
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
                        <Link>Privacy Policy</Link>
                     </li>
                     <li>
                        <Link>Terms & Conditions</Link>
                     </li>
                  </ul>
                  <div className="hotline-number">
                     SISTIC Hotline: +65 63485555
                 </div>
               </div>
            </div>
         </section>
         <BackToTop scrollStepInPx="50" delayInMs="0" />
      </footer>
   )
}

export default Footer;
