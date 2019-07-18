import React, { Component } from 'react'
import logo from '../../../assets/images/logo.png';
import './style.scss';
import FindAnEvent from '../../../shared/components/FindAnEvent';
import { Dropdown } from 'react-bootstrap';


export default class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showElementsInHeader: 4,
        };
    }

    render() {

        const { showElementsInHeader } = this.state;

        const byGenreEvent = [
            { id: "1", name: "Comedy", event_counts: "" },
            { id: "2", name: "Family", event_counts: "" },
            { id: "3", name: "Dance", event_counts: "" },
            { id: "4", name: "LIfestyle", event_counts: "" },
            { id: "5", name: "Musical", event_counts: "" },
            { id: "6", name: "Movie", event_counts: "" },
            { id: "7", name: "Food", event_counts: "" },
            { id: "8", name: "Seminar", event_counts: "" },
            { id: "9", name: "Sports", event_counts: "" },
            { id: "10", name: "Theater", event_counts: "" },
            { id: "11", name: "MICE", event_counts: "" },
            { id: "12", name: "Merchandise", event_counts: "" },
            { id: "13", name: "Concert", event_counts: "" },
            { id: "14", name: "Orchestra", event_counts: "" },
        ];


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
                                            <img src="assets/images/search-blue.svg" className="img-fluid active" alt="search-icon" />
                                        </button>
                                        <div className="searched-wrapper">
                                            <div className="header-search-fixed">
                                                <div className="back-arrow">
                                                    <img src="assets/images/prev-arrow-white.svg" className="" alt="" />
                                                </div>
                                                <div className="header-search">
                                                    <input type="text" placeholder="Search experiences..." className="form-control" />
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
                                                        <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt="" />
                                                        <span className="category musical">Musical</span>
                                                        <h4>KURIOS – Cabinet of Curiosities</h4>
                                                    </li>
                                                    <li>
                                                        <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt="" />
                                                        <span className="category dance">Dance</span>
                                                        <h4>Ballet Under The Stars</h4>
                                                    </li>
                                                    <li>
                                                        <img src="assets/images/kurios-joker.jpg" className="img-fluid" alt="" />
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
                                        <FindAnEvent byGenreEvent={byGenreEvent} />
                                    </li>
                                    <li><a href="/">Attractions</a></li>
                                    <li><a href="/">Promotions</a></li>
                                    <li><a href="/">Explore</a></li>
                                </ul>
                            </div>
                            <div className="bottom-header-right">
                                <ul>
                                    {
                                        byGenreEvent.slice(0, showElementsInHeader).map((event, index) => {
                                            return (
                                                <li key={event.id}><a href="/">{event.name}</a></li>
                                            );
                                        })
                                    }
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                                More
                                                 <span className="dropdown-icon">
                                                    <img
                                                        src="assets/images/bottom-arrow.svg" 
                                                        className="img-fluid"
                                                        alt="arrow"
                                                    />
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {
                                                    byGenreEvent.slice(showElementsInHeader, byGenreEvent.length).map((event, index) => {
                                                        return (
                                                            <Dropdown.Item href="/" key={event.id}> {event.name}</Dropdown.Item>
                                                        );
                                                    })
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {/* <a href="/">More
                                            <span className="dropdown-icon">
                                                <img
                                                    src="assets/images/bottom-arrow.svg" className="img-fluid"
                                                    alt="arrow"
                                                />
                                            </span>
                                        </a> */}
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="responsive-nav-links">
                            <a href="/" className="responsive-nav-close">X</a>
                            <ul className="user-details">
                                <li className="user-icon"><a href="/">
                                    <img src="assets/images/man.svg"
                                        className="img-fluid" alt="profile" />
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
                                                Available on the<br />
                                                <strong>App Store</strong>
                                            </span>
                                        </a>
                                        <a href="/">
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
        );
    }
}