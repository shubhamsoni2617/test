import React, { Component } from 'react'
import logo from '../../../assets/images/logo.png';
import './style.scss';
import MegaMenu from '../../../shared/components/MegaMenu';
import DropDown from '../../../shared/components/DropDown';
import HomePageSearch from '../../Home/HomePageSearch';
import MiniCart from '../../Home/MiniCart';
import NewsTicker from '../../Home/NewsTicker';
import Advertisement from '../../../shared/components/Advertisement';


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

        const miniCart = [
            { id: "1", img: "assets/images/explore.png" },
            { id: "2", img: "assets/images/explore.png" },
            { id: "3", img: "assets/images/explore.png" },
            { id: "4", img: "assets/images/explore.png" },
            { id: "5", img: "assets/images/explore.png" },

        ];

        return (
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <Advertisement />
                        <div className="top-header">
                            <div className="top-header-left">
                                <div className="hamburger-icon"><span></span></div>
                                <div className="site-logo">
                                    <img src={logo} className="img-fluid" alt="Logo" />
                                </div>
                                <HomePageSearch />
                            </div>
                            <div className="top-header-right">
                                <ul>
                                    <li className="user-icon"><a href="/"><img src="assets/images/man.svg"
                                        className="img-fluid" alt="profile" /><span></span></a></li>
                                    <li className="cart-icon">
                                        <a href="/"><img src="assets/images/cart.svg" className="img-fluid"
                                            alt="cart" /><span>{miniCart.length}</span></a>
                                        <MiniCart miniCart={miniCart} />
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
                                        <MegaMenu byGenreEvent={byGenreEvent} />
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
                                        <DropDown
                                            showElementsInHeader={showElementsInHeader}
                                            byGenreEvent={byGenreEvent}
                                        />

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
                        <NewsTicker />
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