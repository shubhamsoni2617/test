import React, { Component } from 'react'
import logo from '../../../assets/images/logo.png';
import './style.scss';
import MegaMenu from '../../../shared/components/MegaMenu';
import DropDown from '../../../shared/components/DropDown';
import HomePageSearch from '../../Home/HomePageSearch';
import MiniCart from '../../Home/MiniCart';
import NewsTicker from '../../Home/NewsTicker';
import Advertisement from '../../../shared/components/Advertisement';
import HomeService from '../../../shared/services/HomeService';
import { ReactComponent as ManLogo } from '../../../assets/images/man.svg';
import AndroidLogo from '../../../assets/images/android.png';
import { ReactComponent as AppleLogo } from '../../../assets/images/apple.svg';

export default class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            byGenreEvent: [],
            showElementsInHeader: 4,
        };
    }

    componentDidMount() {
        HomeService.getGenre()
            .then((res) => {
                var result = Object.keys(res.data.data).map((key) => {
                    return res.data.data[key];
                });
                this.setState({ byGenreEvent: result })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {

        const { byGenreEvent, showElementsInHeader } = this.state;

        const miniCartData = [
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
                                    <li className="user-icon"><a href="/"><ManLogo className="img-fluid" /><span></span></a></li>
                                    <MiniCart data={miniCartData} />
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
                                    {byGenreEvent && byGenreEvent.slice(0, showElementsInHeader).map((event, index) => {
                                            return (
                                                <li key={event.id}><a href="/">{event.name}</a></li>
                                            );
                                        })
                                    }
                                    <DropDown
                                        showElementsInHeader={showElementsInHeader}
                                        byGenreEvent={byGenreEvent}
                                    />
                                </ul>
                            </div>
                        </nav>
                        <div className="responsive-nav-links">
                            <a href="/" className="responsive-nav-close">X</a>
                            <ul className="user-details">
                                <li className="user-icon"><a href="/">
                                <ManLogo className="img-fluid" />
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
                                            <AppleLogo className="ios" />
                                            <span>
                                                Available on the<br />
                                                <strong>App Store</strong>
                                            </span>
                                        </a>
                                        <a href="/">
                                            <img src={AndroidLogo} className="android" alt="" />
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
                <NewsTicker />
            </header>
        );
    }
}