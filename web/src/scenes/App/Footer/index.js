import React, { Component } from 'react'
import './style.scss'

export default class Footer extends Component {

  render() {
    
    return (   
        <footer>
        <section className="footer">
           <div className="container-fluid">
              <div className="footer-top">
                 <div className="footer-links">
                    <h3>Our Company</h3>
                    <ul>
                       <li>
                          <a href="/">About Us</a>
                       </li>
                       <li>
                          <a href="/">Sell with Us</a>
                       </li>
                       <li>
                          <a href="/">Ticketing Technology</a>
                       </li>
                       <li>
                          <a href="/">partner with Us</a>
                       </li>
                       <li>
                          <a href="/">Careers</a>
                       </li>
                    </ul>
                 </div>
                 <div className="footer-links helpful-links">
                    <h3>Helpful Links</h3>
                    <div className="footer-groups">
                       <ul>
                          <li>
                             <a href="/">Where to Buy Tickets</a>
                          </li>
                          <li>
                             <a href="/">Locate an Agent</a>
                          </li>
                          <li>
                             <a href="/">Locate a Venue</a>
                          </li>
                          <li>
                             <a href="/">Blog</a>
                          </li>
                          <li>
                             <a href="/">Media</a>
                          </li>
                       </ul>
                       <ul>
                          <li>
                             <a href="/">My Account</a>
                          </li>
                          <li>
                             <a href="/">Gift Vouchers</a>
                          </li>
                          <li>
                             <a href="/">FAQ</a>
                          </li>
                          <li>
                             <a href="/">Cancellations/Refunds</a>
                          </li>
                          <li>
                             <a href="/">Contact Us</a>
                          </li>
                       </ul>
                    </div>
                 </div>
                 <div className="footer-links">
                    <h3>SISTIC on Mobile</h3>
                    <div className="download-option">
                       <a href="/">
                       <img src="assets/images/apple.svg" className="ios" alt=""/>
                       <span>
                       Available on the<br/>
                       <strong>App Store</strong>
                       </span>
                       </a>
                       <a href="/">
                       <img src="assets/images/android.png" className="android" alt=""/>
                       <span>
                       Get it on<br/>
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
                             <a className="input-group-text" href="/" id="basic-addon1"><img src="assets/images/send.svg"
                                className="img-fluid" alt="send" /></a>
                          </div>
                       </div>
                    </div>
                    <div className="follow-us">
                       <h3>Follow us on</h3>
                       <ul className="social">
                          <li>
                             <a href="/">
                             <img src="assets/images/fb.svg" className="" alt=""/>
                             <img src="assets/images/fb-fill.svg" className="active" alt=""/>
                             </a>
                          </li>
                          <li>
                             <a href="/">
                             <img src="assets/images/insta-unfill.svg" className="" alt=""/>
                             <img src="assets/images/insta-fill.svg" className="active" alt=""/>
                             </a>
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
                       <a href="/">Privacy Policy</a>
                    </li>
                    <li>
                       <a href="/">Terms & Conditions</a>
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
}