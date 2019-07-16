import React, { Component } from 'react'
import logo from '../../../assets/images/logo.png';
import './style.scss' 

export default class TopNav extends Component {

  render() {
    
    return (        
        <header className="st-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="st-top-header">
                        <div className="st-top-header-left">
                            <div className="st-hamburger-icon">
                                <span></span>
                            </div>
                            <div className="st-site-logo">
                                <img src={logo} className="img-fluid" alt="Logo" />
                            </div>
                            <div className="st-header-search">
                                <form>
                                    <input type="text" placeholder="Search experiences..." className="form-control" />
                                    <button type="submit" className="st-search-btn">
                                        <img src="assets/images/search.svg" className="img-fluid" alt="search-icon" />
                                        <img src="assets/images/search-blue.svg" className="img-fluid active"
                                            alt="search-icon" />
                                    </button>
                                    <div className="st-searched-wrapper">
                                        <div className="st-header-search-fixed">
                                            <div className="st-back-arrow">
                                                <img src="assets/images/prev-arrow-white.svg" className="" alt="" />
                                            </div>
                                            <div className="st-header-search">
                                                <input type="text" placeholder="Search experiences..."
                                                    className="form-control" />
                                                <button type="submit" className="st-search-btn">
                                                    <img src="assets/images/search.svg" className="img-fluid"
                                                        alt="search-icon" />
                                                    <img src="assets/images/search-blue.svg" className="img-fluid active"
                                                        alt="search-icon" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="st-recently-search">
                                            <h3 className="st-searched-title">Recently Searched</h3>
                                            <ul>
                                                <li className="st-musical">
                                                    <span>SSO Pops: The Music of Star Wars</span>
                                                    <a href="" className="st-close"><img
                                                            src="assets/images/close-adv.svg" /></a>
                                                </li>
                                                <li className="st-musical">
                                                    <span>SSO Pops: The Music of Star Wars</span>
                                                    <a href="" className="st-close"><img
                                                            src="assets/images/close-adv.svg" /></a>
                                                </li>
                                                <li className="st-theatre">
                                                    <span>This Is What Happens To<br />Pretty Girls</span>
                                                    <a href="" className="st-close"><img
                                                            src="assets/images/close-adv.svg" /></a>
                                                </li>
                                                <li className="st-dance">
                                                    <span>Dance India Showcase<br />2019 - VIVARTANA</span>
                                                    <a href="" className="st-close"><img
                                                            src="assets/images/close-adv.svg" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="st-most-viewed">
                                            <h3 className="st-searched-title">Most Viewed</h3>
                                            <ul>
                                                <li>
                                                    <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt="" />
                                                    <span className="st-category st-musical">Musical</span>
                                                    <span className="st-most-view-title">KURIOS – Cabinet of
                                                        Curiosities</span>
                                                </li>
                                                <li>
                                                    <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt="" />
                                                    <span className="st-category st-dance">Dance</span>
                                                    <span className="st-most-view-title">Ballet Under The Stars</span>
                                                </li>
                                                <li>
                                                    <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt="" />
                                                    <span className="st-category st-musical">Musical</span>
                                                    <span className="st-most-view-title">The Phantom of The Opera</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="st-searched-filter">
                                            <ul>
                                                <li>
                                                    <span>The Phantom Of The Opera</span>
                                                    <a href="" className="st-search-link st-musical st-category">Musical</a>
                                                </li>
                                                <li>
                                                    <span>Phantogram</span>
                                                    <a href="" className="st-search-link st-musical st-category">Musical</a>
                                                </li>
                                                <li>
                                                    <span>Phangs lorem ipsum sit dolor amet</span>
                                                    <a href="" className="st-search-link">FAQ</a>
                                                </li>
                                                <li>
                                                    <span>Phantom Personality</span>
                                                    <a href="" className="st-search-link">Quiz</a>
                                                </li>
                                                <li>
                                                    <span>There Was a Phantom</span>
                                                    <a href="" className="st-search-link">Article</a>
                                                </li>
                                                <li>
                                                    <span>Phantom offer</span>
                                                    <a href="" className="st-search-link">Offers</a>
                                                </li>
                                                <li>
                                                    <a href="" className="st-all-results-search">See all results from
                                                        <strong>Ph</strong></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="st-top-header-right">
                            <ul>
                                <li className="st-user-icon"><a href="javascript:void(0);"><img src="assets/images/man.svg"
                                            className="img-fluid" alt="profile" /><span></span></a></li>
                                <li className="st-cart-icon">
                                    <a href="javascript:void(0);"><img src="assets/images/cart.svg" className="img-fluid"
                                            alt="cart" /><span>5</span></a>
                                    <div className="st-my-cart-popup">
                                        <div className="st-my-cart-wrapper">
                                            <div className="st-cart-head">
                                                <h3>My Cart (5)</h3>
                                                <a href="javascript:void(0);" className="st-my-cart-close-icon">X</a>
                                            </div>
                                            <div className="st-cart-body">
                                                <ul>
                                                    <li>
                                                        <div className="st-product-img">
                                                            <img src="assets/images/explore.png" className="img-fluid"
                                                                alt="cart" />
                                                        </div>
                                                        <div className="st-product-details">
                                                            <span className="st-product-date-time">Fri, 19 Apr- Sun, 19 May
                                                                2019</span>
                                                            <span className="st-product-name">The Phantom Of The
                                                                Opera</span>
                                                            <span className="st-product-desc">Sands Theatre, Marina Bay
                                                                Sands</span>
                                                            <span className="st-product-price">S$ 250 (1 Ticket)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="st-product-img">
                                                            <img src="assets/images/explore.png" className="img-fluid"
                                                                alt="cart" />
                                                        </div>
                                                        <div className="st-product-details">
                                                            <span className="st-product-date-time">Fri, 19 Apr- Sun, 19 May
                                                                2019</span>
                                                            <span className="st-product-name">The Phantom Of The
                                                                Opera</span>
                                                            <span className="st-product-desc">Sands Theatre, Marina Bay
                                                                Sands</span>
                                                            <span className="st-product-price">S$ 500 (2 Tickets)</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="st-product-img">
                                                            <img src="assets/images/explore.png" className="img-fluid"
                                                                alt="cart" />
                                                        </div>
                                                        <div className="st-product-details">
                                                            <span className="st-product-date-time">Fri, 19 Apr- Sun, 19 May
                                                                2019</span>
                                                            <span className="st-product-name">The Phantom Of The
                                                                Opera</span>
                                                            <span className="st-product-desc">Sands Theatre, Marina Bay
                                                                Sands</span>
                                                            <span className="st-product-price">S$ 250 (1 Ticket)</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="st-cart-footer">
                                                <div className="st-cart-timer">
                                                    <span className="st-timer-label">Time left</span>
                                                    <span className="st-timer-time">14:59</span>
                                                </div>
                                                <div className="st-cart-checkout-btn">
                                                    <button>Proceed to Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="st-ticket-withus"><a href="javascript:void(0);">Ticket With Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <nav className="st-bottom-header">
                        <div className="st-bottom-header-left">
                            <ul>
                                <li className="st-has-submenu">
                                    <a href="javascript:void(0);">Events</a>
                                    <div className="st-submenu">
                                        <h5 className="st-submenu-title">Find an Event</h5>
                                        <div className="st-submenu-wrapper">
                                            <div className="st-event-category">
                                                <p className="st-submenu-title"><img src="assets/images/event.svg" className=""
                                                        alt="" /> By Genre</p>
                                                <ul>
                                                    <li><a href="">Comedy</a></li>
                                                    <li><a href="">Lifestyle</a></li>
                                                    <li><a href="">Concert</a></li>
                                                    <li><a href="">MICE</a></li>
                                                    <li><a href="">Dance</a></li>
                                                    <li><a href="">Musical</a></li>
                                                    <li><a href="">Family</a></li>
                                                    <li><a href="">Orchestra</a></li>
                                                    <li><a href="">Merchandise</a></li>
                                                    <li><a href="">Seminar</a></li>
                                                    <li><a href="">Movies</a></li>
                                                    <li><a href="">Sports</a></li>
                                                    <li><a href="">Food</a></li>
                                                    <li><a href="">Theatre</a></li>
                                                </ul>
                                            </div>
                                            <div className="st-calender">
                                                <ul>
                                                    <li className="month st-submenu-title"><img src="assets/images/cal.svg"
                                                            className="" alt="" /> May 2019</li>
                                                    <li className="arrow"><span>
                                                            </span> <span>>
                                                        </span></li>
                                                </ul>
                                                <div className="st-month-cal">
                                                    <div className="calendar-date">
                                                        <div className="calendar-day">S</div>
                                                        <div className="calendar-day">M</div>
                                                        <div className="calendar-day">T</div>
                                                        <div className="calendar-day">W</div>
                                                        <div className="calendar-day">T</div>
                                                        <div className="calendar-day">F</div>
                                                        <div className="calendar-day">S</div>
                                                        <div className="calendar-prev_number calendar-number">27</div>
                                                        <div className="calendar-prev_number calendar-number">28</div>
                                                        <div className="calendar-prev_number calendar-number">29</div>
                                                        <div className="calendar-prev_number calendar-number">30</div>
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
                                                <div className="st-calender-action">
                                                    <a href="" className="st-cal-cancel-btn">Cancel</a>
                                                    <a href="" className="st-cal-apply-btn">Apply</a>
                                                </div>
                                            </div>
                                            <div className="st-events-listing">
                                                <h5 className="st-submenu-title"><img src="assets/images/location.svg"
                                                        className="" alt="" /> Event in Venues</h5>
                                                <ul>
                                                    <li>Esplanade Concert Hall</li>
                                                    <li>Resorts World™ Sentosa Theatre, Resorts World Sentosa</li>
                                                    <li>Sands Theatre at Marina Bay Sands</li>
                                                    <li>The Star Theatre, The Star Performing Arts Centre</li>
                                                    <li>Shine Auditorium</li>
                                                </ul>
                                                <a href="javascript:void(0);" className="st-events-see-all-btn">See all <img
                                                        src="assets/images/right-arrow.svg" className="img-fluid"
                                                        alt="arrow" /></a>
                                            </div>
                                            <div className="st-featured-event">
                                                <ul>
                                                    <li>
                                                        <h5 className="st-submenu-title">Featured Events</h5>
                                                    </li>
                                                    <li className="st-featured-see-all"><a href="javascript:void(0);"
                                                            className="st-events-see-all-btn">See all <img
                                                                src="assets/images/right-arrow.svg" className="img-fluid"
                                                                alt="arrow" /></a></li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <img src="assets/images/pretty-girls.jpg" className="img-fluid"
                                                            alt="" />
                                                        <div className="st-featured-date-category">
                                                            <span className="st-date">Sun, 26 May 2019</span>
                                                            <span className="st-category st-theatre">Theatre</span>
                                                        </div>
                                                        <span className="st-featured-event-title">This Is What Happens To
                                                            Pretty Girls </span>
                                                    </li>
                                                    <li>
                                                        <img src="assets/images/pretty-girls.jpg" className="img-fluid"
                                                            alt="" />
                                                        <div className="st-featured-date-category">
                                                            <span className="st-date">Sun, 26 May 2019</span>
                                                            <span className="st-category st-theatre">Theatre</span>
                                                        </div>
                                                        <span className="st-featured-event-title">This Is What Happens To
                                                            Pretty Girls </span>
                                                    </li>
                                                    <li>
                                                        <img src="assets/images/hetty-keos.jpg" className="img-fluid"
                                                            alt="" />
                                                        <div className="st-featured-date-category">
                                                            <span className="st-date">Sun, 26 May 2019</span>
                                                            <span className="st-category st-dance">Dance</span>
                                                        </div>
                                                        <span className="st-featured-event-title">Hetty Koes Endang
                                                            (Indonesia)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="javascript:void(0);">Attractions</a></li>
                                <li><a href="javascript:void(0);">Promotions</a></li>
                                <li><a href="javascript:void(0);">Explore</a></li>
                            </ul>
                        </div>
                        <div className="st-bottom-header-right">
                            <ul>
                                <li><a href="javascript:void(0);">Concert</a></li>
                                <li><a href="javascript:void(0);">Musical</a></li>
                                <li><a href="javascript:void(0);">Theatre</a></li>
                                <li><a href="javascript:void(0);">Comedy</a></li>
                                <li><a href="javascript:void(0);">More<span className="st-dropdown-icon"><img
                                                src="assets/images/bottom-arrow.svg" className="img-fluid"
                                                alt="arrow" /></span></a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="st-responsive-nav-links">
                        <a href="javascript:void(0);" className="st-responsive-nav-close">X</a>
                        <ul className="st-user-details">
                            <li className="st-user-icon"><a href="javascript:void(0);"><img src="assets/images/man.svg"
                                        className="img-fluid" alt="profile" /><span></span></a><span>Hello William</span></li>
                            <li><a href="javascript:void(0);">Ticket With Us</a></li>
                        </ul>
                        <ul>
                            <li className="st-has-submenu"><a href="javascript:void(0);">Events</a>
                                <ul className="st-submenu">
                                    <li className="st-has-submenu"><a href="">Geners</a></li>
                                    <li className="st-has-submenu"><a href="">calender</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0);">Attractions</a></li>
                            <li><a href="javascript:void(0);">Promotions</a></li>
                            <li><a href="javascript:void(0);">Explore</a></li>
                        </ul>
                        <ul>
                            <li><a href="javascript:void(0);">My Account</a></li>
                            <li><a href="javascript:void(0);">My cart</a></li>
                        </ul>
                        <ul>
                            <li className="st-has-submenu"><a href="javascript:void(0);">Our Company</a></li>
                            <li className="st-has-submenu"><a href="javascript:void(0);">Helpful Links</a></li>
                            <li className="st-has-submenu"><a href="javascript:void(0);">For Business</a></li>
                            <li className="st-has-submenu"><a href="javascript:void(0);">Stay Connected</a></li>
                        </ul>
                        <ul>
                            <li className="st-social-links">
                                <span>Follow us on</span>
                                <ul className="st-social">
                                    <li>
                                        <a href=""><img src="assets/images/fb.svg" className="" alt="" /></a>
                                    </li>
                                    <li>
                                        <img src="assets/images/insta-unfill.svg" className="" alt="" />
                                    </li>
                                </ul>
                            </li>
                            <li className="st-sistic-on-mobile">
                                <span>Sistic on Mobile</span>
                                <div className="st-download-option">
                                    <a href="#">
                                        <img src="assets/images/apple.svg" className="ios" alt="" />
                                        <span>
                                            Available on the<br />
                                            <strong>App Store</strong>
                                        </span>
                                    </a>
                                    <a href="#">
                                        <img src="assets/images/android.png" className="android" alt="" />
                                        <span>
                                            Get it on<br />
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