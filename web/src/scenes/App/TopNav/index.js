import React, { Component } from 'react'
import logo from '../../../assets/images/logo.png';
import './style.scss' 

export default class TopNav extends Component {

  render() {
    
    return (    
        <header className="header">
            <div className="container-fluid">
               <div className="row">
                  <div className="top-header">
                     <div className="top-header-left">
                        <div className="hamburger-icon"><span></span></div>
                        <div className="site-logo">
                            <img src={logo} className="img-fluid" alt="Logo" />
                        </div>
                        <div className="header-search">
                           <form>
                              <input type="text" placeholder="Search experiences..." className="form-control" />
                              <button type="submit" className="search-btn">
                                <img src="assets/images/search.svg" className="img-fluid" alt="search-icon" />
                                <img src="assets/images/search-blue.svg" className="img-fluid active" alt="search-icon"/>
                              </button>
                              <div className="searched-wrapper">
                                 <div className="header-search-fixed">
                                    <div className="back-arrow">
                                       <img src="assets/images/prev-arrow-white.svg" className="" alt="" />
                                    </div>
                                    <div className="header-search">
                                       <input type="text" placeholder="Search experiences..." className="form-control"/>
                                       <button type="submit" className="search-btn">
                                        <img src="assets/images/search.svg" className="img-fluid" alt="search-icon" />
                                        <img src="assets/images/search-blue.svg" className="img-fluid active" alt="search-icon" />
                                       </button>
                                    </div>
                                 </div>
                                 <div className="recently-search">
                                    <h3>Recently Searched</h3>
                                    <ul>
                                       <li className="active">
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> Music</span>
                                          <a href="/" className="search-listing-close-btn"><img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                       <li>
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> pretty</span>
                                          <a href="/" className="search-listing-close-btn"><img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                       <li>
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> dance india</span>
                                          <a href="/" className="search-listing-close-btn"><img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                       <li>
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> vivaratna</span>
                                          <a href="/" className="search-listing-close-btn"><img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                       <li>
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> kurio</span>
                                          <a href="/" className="search-listing-close-btn"><img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                       <li>
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> balle</span>
                                          <a href="/" className="search-listing-close-btn"><img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                       <li>
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> katy</span>
                                          <a href="/" className="search-listing-close-btn"><img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                       <li>
                                          <span><img src="assets/images/recent-search-icon.svg" alt="" /> phant</span>
                                          <a href="/" className="search-listing-close-btn">
                                              <img src="assets/images/close-blue-color.svg" alt="" /></a>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="most-viewed">
                                    <h3>Most Viewed</h3>
                                    <ul>
                                       <li>
                                          <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt=""/>
                                          <span className="category musical">Musical</span>
                                          <h4>KURIOS – Cabinet of Curiosities</h4>
                                       </li>
                                       <li>
                                          <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt=""/>
                                          <span className="category dance">Dance</span>
                                          <h4>Ballet Under The Stars</h4>
                                       </li>
                                       <li>
                                          <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt=""/>
                                          <span className="category musical">Musical</span>
                                          <h4>The Phantom of The Opera</h4>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="searched-filter">
                                    <ul>
                                       <li>
                                          <h4>The Phantom Of The Opera</h4>
                                          <a href="/" className="search-link musical category">Musical</a>
                                       </li>
                                       <li>
                                          <h4>Phantogram</h4>
                                          <a href="/" className="search-link musical category">Musical</a>
                                       </li>
                                       <li>
                                          <h4>Phangs lorem ipsum sit dolor amet</h4>
                                          <a href="/" className="search-link">FAQ</a>
                                       </li>
                                       <li>
                                          <h4>Phantom Personality</h4>
                                          <a href="/" className="search-link">Quiz</a>
                                       </li>
                                       <li>
                                          <h4>There Was a Phantom</h4>
                                          <a href="/" className="search-link">Article</a>
                                       </li>
                                       <li>
                                          <h4>Phantom offer</h4>
                                          <a href="/" className="search-link">Offers</a>
                                       </li>
                                       <li><a href="/" className="all-results-search">See all results from<strong>Ph</strong></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div className="top-header-right">
                        <ul>
                           <li className="user-icon"><a href="/"><img src="assets/images/man.svg"
                              className="img-fluid" alt="profile" /><span></span></a></li>
                           <li className="cart-icon">
                              <a href="/"><img src="assets/images/cart.svg" className="img-fluid"
                                 alt="cart" /><span>5</span></a>
                              <div className="my-cart-popup">
                                 <div className="my-cart-wrapper">
                                    <div className="cart-head">
                                       <h3>My Cart (5)</h3>
                                       <a href="/" className="cart-close">X</a>
                                    </div>
                                    <div className="cart-body">
                                       <ul>
                                          <li>
                                             <div className="product-img">
                                                <img src="assets/images/explore.png" className="img-fluid"
                                                   alt="cart" />
                                             </div>
                                             <div className="product-details">
                                                <span className="product-date-time">Fri, 19 Apr- Sun, 19 May 2019</span>
                                                <h4 className="product-name">The Phantom Of The Opera</h4>
                                                <p className="product-desc">Sands Theatre, Marina Bay Sands</p>
                                                <span className="product-price">S$ 250 (Qty: 1)</span>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="product-img">
                                                <img src="assets/images/explore.png" className="img-fluid"
                                                   alt="cart" />
                                             </div>
                                             <div className="product-details">
                                                <span className="product-date-time">Fri, 19 Apr- Sun, 19 May 2019</span>
                                                <h4 className="product-name">The Phantom Of The Opera</h4>
                                                <p className="product-desc">Sands Theatre, Marina Bay Sands</p>
                                                <span className="product-price">S$ 500 (Qty: 2)</span>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="product-img">
                                                <img src="assets/images/explore.png" className="img-fluid"
                                                   alt="cart" />
                                             </div>
                                             <div className="product-details">
                                                <span className="product-date-time">Fri, 19 Apr- Sun, 19 May 2019</span>
                                                <h4 className="product-name">The Phantom Of The Opera</h4>
                                                <p className="product-desc">Sands Theatre, Marina Bay Sands</p>
                                                <span className="product-price">S$ 250 (Qty: 1)</span>
                                             </div>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="cart-footer">
                                       <div className="cart-timer">
                                          <span className="timer-label">Time left</span>
                                          <span className="timer-time">14:59</span>
                                       </div>
                                       <div className="cart-checkout-btn">
                                          <button>Go to Cart</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="ticket-withus"><a href="/">Ticket With Us</a></li>
                        </ul>
                     </div>
                  </div>
                  <nav className="bottom-header">
                     <div className="bottom-header-left">
                        <ul>
                           <li className="has-submenu">
                              <a href="/">Events</a>
                              <div className="submenu">
                                 <h5 className="submenu-title">Find an Event</h5>
                                 <div className="submenu-wrapper">
                                    <div className="event-category">
                                       <p className="submenu-subtitle"><img src="assets/images/event.svg" className=""
                                          alt="" /> By Genre</p>
                                       <ul>
                                          <li><a href="/">Comedy</a></li>
                                          <li><a href="/">Lifestyle</a></li>
                                          <li><a href="/">Concert</a></li>
                                          <li><a href="/">MICE</a></li>
                                          <li><a href="/">Dance</a></li>
                                          <li><a href="/">Musical</a></li>
                                          <li><a href="/">Family</a></li>
                                          <li><a href="/">Orchestra</a></li>
                                          <li><a href="/">Merchandise</a></li>
                                          <li><a href="/">Seminar</a></li>
                                          <li><a href="/">Movies</a></li>
                                          <li><a href="/">Sports</a></li>
                                          <li><a href="/">Food</a></li>
                                          <li><a href="/">Theatre</a></li>
                                       </ul>
                                    </div>
                                    <div className="calender">
                                       <ul>
                                          <li className="month submenu-subtitle"><img src="assets/images/cal.svg"
                                             className="" alt="" /> By Date</li>
                                          <li className="cal-month-name">
                                             <span>May</span>
                                             <span className="prev-month"><img src="assets/images/right-arrow.svg" alt="" className="" /></span>
                                             <span className="next-month"><img src="assets/images/right-arrow.svg" alt="" className="" /></span>
                                          </li>
                                       </ul>
                                       <div className="month-cal">
                                          <div className="calendar-date">
                                             <div className="calendar-day">S</div>
                                             <div className="calendar-day">M</div>
                                             <div className="calendar-day">T</div>
                                             <div className="calendar-day">W</div>
                                             <div className="calendar-day">T</div>
                                             <div className="calendar-day">F</div>
                                             <div className="calendar-day">S</div>
                                             <div className="calendar-prev-number calendar-number">27</div>
                                             <div className="calendar-prev-number calendar-number">28</div>
                                             <div className="calendar-prev-number calendar-number">29</div>
                                             <div className="calendar-prev-number calendar-number">30</div>
                                             <div className="calendar-number">1</div>
                                             <div className="calendar-number">2</div>
                                             <div className="calendar-number">3</div>
                                             <div className="calendar-number">4</div>
                                             <div className="calendar-number">5</div>
                                             <div className="calendar-number">6</div>
                                             <div className="calendar-number">7</div>
                                             <div className="calendar-number">8</div>
                                             <div className="calendar-number">9</div>
                                             <div className="calendar-number">10</div>
                                             <div className="calendar-number">11</div>
                                             <div className="calendar-number">12</div>
                                             <div className="calendar-number">13</div>
                                             <div className="calendar-number">14</div>
                                             <div className="calendar-number">15</div>
                                             <div className="calendar-number">16</div>
                                             <div className="calendar-number">17</div>
                                             <div className="calendar-number">18</div>
                                             <div className="calendar-number">19</div>
                                             <div className="calendar-number">20</div>
                                             <div className="calendar-number">21</div>
                                             <div className="calendar-number">22</div>
                                             <div className="calendar-number">23</div>
                                             <div className="calendar-number">24</div>
                                             <div className="calendar-number">25</div>
                                             <div className="calendar-number calendar-number-current">26</div>
                                             <div className="calendar-number">27</div>
                                             <div className="calendar-number">28</div>
                                             <div className="calendar-number">29</div>
                                             <div className="calendar-number">30</div>
                                             <div className="calendar-number">31</div>
                                          </div>
                                       </div>
                                       <div className="calender-action">
                                          <form>
                                             <div className="form-group">
                                                <label>From</label>
                                                <input type="text" className="form-control" placeholder="06 May 2019" />
                                             </div>
                                             <div className="form-group">
                                                <label>To</label>
                                                <input type="text" className="form-control" placeholder="15 May 2019" />
                                             </div>
                                             <div className="calender-action-btn">
                                                <a href="/" className="cal-cancel-btn">
                                                <img src="assets/images/cross-grey.svg" className="" alt="" />
                                                <img src="assets/images/cross-white.svg" alt="" className="active" />
                                                </a>
                                                <a href="/" className="cal-apply-btn active">
                                                <img src="assets/images/tick-grey.svg" className="" alt="" />
                                                <img src="assets/images/tick-white.svg" className="active" alt="" />
                                                </a>
                                             </div>
                                          </form>
                                       </div>
                                    </div>
                                    <div className="events-listing">
                                       <ul>
                                          <li>
                                             <h5 className="submenu-subtitle"><img src="assets/images/location.svg" className="" alt="" /> By Venue</h5>
                                          </li>
                                          <li className="seeall-veneus">
                                             <a className="seeall-btn" href="/">See All Venues <img src="assets/images/right-arrow.svg" alt="" className="" /></a>
                                          </li>
                                       </ul>
                                       <ul className="events-list">
                                          <li>Esplanade Concert Hall</li>
                                          <li>Resorts World™ Sentosa Theatre, Resorts World Sentosa</li>
                                          <li>Sands Theatre at Marina Bay Sands</li>
                                          <li>The Star Theatre, The Star Performing Arts Centre</li>
                                          <li>Shine Auditorium</li>
                                       </ul>
                                    </div>
                                    <div className="featured-event">
                                       <ul>
                                          <li>
                                             <h5 className="submenu-subtitle">Featured Events</h5>
                                          </li>
                                       </ul>
                                       <ul>
                                          <li>
                                             <img src="assets/images/pretty-girls.jpg" className="img-fluid"
                                                alt="" />
                                             <div className="featured-date-category">
                                                <span className="date">Sun, 26 May 2019</span>
                                                <span className="category theatre">Theatre</span>
                                             </div>
                                             <span className="featured-event-title">This Is What Happens To
                                             Pretty Girls </span>
                                          </li>
                                          <li>
                                             <img src="assets/images/pretty-girls.jpg" className="img-fluid"
                                                alt="" />
                                             <div className="featured-date-category">
                                                <span className="date">Sun, 26 May 2019</span>
                                                <span className="category theatre">Theatre</span>
                                             </div>
                                             <span className="featured-event-title">This Is What Happens To
                                             Pretty Girls </span>
                                          </li>
                                          <li>
                                             <img src="assets/images/hetty-keos.jpg" className="img-fluid"
                                                alt="" />
                                             <div className="featured-date-category">
                                                <span className="date">Sun, 26 May 2019</span>
                                                <span className="category dance">Dance</span>
                                             </div>
                                             <span className="featured-event-title">Hetty Koes Endang
                                             (Indonesia)</span>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="see-all-evevts">
                                    <a href="/" className="seeall-btn">See All Events 
                                    <img src="assets/images/right-arrow.svg" alt="" className=""/></a>
                                 </div>
                              </div>
                           </li>
                           <li><a href="/">Attractions</a></li>
                           <li><a href="/">Promotions</a></li>
                           <li><a href="/">Explore</a></li>
                        </ul>
                     </div>
                     <div className="bottom-header-right">
                        <ul>
                           <li><a href="/">Concert</a></li>
                           <li><a href="/">Musical</a></li>
                           <li><a href="/">Theatre</a></li>
                           <li><a href="/">Comedy</a></li>
                           <li><a href="/">More<span className="dropdown-icon">
                               <img
                              src="assets/images/bottom-arrow.svg" className="img-fluid"
                              alt="arrow" /></span></a></li>
                        </ul>
                     </div>
                  </nav>
                  <div className="responsive-nav-links">
                     <a href="/" className="responsive-nav-close">X</a>
                     <ul className="user-details">
                        <li className="user-icon"><a href="/">
                            <img src="assets/images/man.svg"
                           className="img-fluid" alt="profile"/>
                               <span></span></a><span>Hello William</span></li>
                        <li><a href="/">Ticket With Us</a></li>
                     </ul>
                     <ul>
                        <li className="has-submenu">
                           <a href="/">Events</a>
                           <ul className="submenu">
                              <li className="has-submenu"><a href="/">Geners</a></li>
                              <li className="has-submenu"><a href="/">calender</a></li>
                           </ul>
                        </li>
                        <li><a href="/">Attractions</a></li>
                        <li><a href="/">Promotions</a></li>
                        <li><a href="/">Explore</a></li>
                     </ul>
                     <ul>
                        <li><a href="/">My Account</a></li>
                        <li><a href="/">My cart</a></li>
                     </ul>
                     <ul>
                        <li className="has-submenu"><a href="/">Our Company</a></li>
                        <li className="has-submenu"><a href="/">Helpful Links</a></li>
                        <li className="has-submenu"><a href="/">For Business</a></li>
                        <li className="has-submenu"><a href="/">Stay Connected</a></li>
                     </ul>
                     <ul>
                        <li className="social-links">
                           <span>Follow us on</span>
                           <ul className="social">
                              <li>
                                 <a href="/"><img src="assets/images/fb.svg" className="" alt="" /></a>
                              </li>
                              <li>
                                 <img src="assets/images/insta-unfill.svg" className="" alt="" />
                              </li>
                           </ul>
                        </li>
                        <li className="sistic-on-mobile">
                           <span>Sistic on Mobile</span>
                           <div className="download-option">
                              <a href="/">
                                <img src="assets/images/apple.svg" className="ios" alt="" />
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
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </header>    
    )
  }
}