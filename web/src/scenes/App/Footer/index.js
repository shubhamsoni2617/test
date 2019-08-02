import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'

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
                           <Link to="/">About Us</Link>
                        </li>
                        <li>
                           <Link to="/">Sell with Us</Link>
                        </li>
                        <li>
                           <Link to="/">Ticketing Technology</Link>
                        </li>
                        <li>
                           <Link to="/">partner with Us</Link>
                        </li>
                        <li>
                           <Link to="/">Careers</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="footer-links helpful-links">
                     <h3>Helpful Links</h3>
                     <div className="footer-groups">
                        <ul>
                           <li>
                              <Link to="/">Where to Buy Tickets</Link>
                           </li>
                           <li>
                              <Link to="/">Locate an Agent</Link>
                           </li>
                           <li>
                              <Link to="/">Locate a Venue</Link>
                           </li>
                           <li>
                              <Link to="/">Blog</Link>
                           </li>
                           <li>
                              <Link to="/">Media</Link>
                           </li>
                        </ul>
                        <ul>
                           <li>
                              <Link to="/">My Account</Link>
                           </li>
                           <li>
                              <Link to="/">Gift Vouchers</Link>
                           </li>
                           <li>
                              <Link to="/">FAQ</Link>
                           </li>
                           <li>
                              <Link to="/">Cancellations/Refunds</Link>
                           </li>
                           <li>
                              <Link to="/">Contact Us</Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="footer-links">
                     <h3>SISTIC on Mobile</h3>
                     <div className="download-option">
                        <Link to="/">
                           <img src="assets/images/apple.svg" className="ios" alt="" />
                           <span>
                              Available on the<br />
                              <strong>App Store</strong>
                           </span>
                        </Link>
                        <Link to="/">
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
                              <Link className="input-group-text" to="/" id="basic-addon1"><img src="assets/images/send.svg"
                                 className="img-fluid" alt="send" /></Link>
                           </div>
                        </div>
                     </div>
                     <div className="follow-us">
                        <h3>Follow us on</h3>
                        <ul className="social">
                           <li>
                              <Link to="/">
                                 <img src="assets/images/fb.svg" className="" alt="" />
                                 <img src="assets/images/fb-fill.svg" className="active" alt="" />
                              </Link>
                           </li>
                           <li>
                              <Link to="/">
                                 <img src="assets/images/insta-unfill.svg" className="" alt="" />
                                 <img src="assets/images/insta-fill.svg" className="active" alt="" />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="footer-bottom">
                  <div className="copyrights">
                     <img src="assets/images/stix.png" className="" alt="" />
                     <span>Copyright 1998 - 2019. © SISTIC.com Pte Ltd</span>
                  </div>
                  <ul className="footer-btm-links">
                     <li>
                        <Link to="/">Privacy Policy</Link>
                     </li>
                     <li>
                        <Link to="/">Terms & Conditions</Link>
                     </li>
                  </ul>
                  <div className="hotline-number">
                     SISTIC Hotline: +65 63485555
                 </div>
               </div>
            </div>
         </section>
      </footer>
   )
}

export default Footer;