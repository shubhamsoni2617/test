import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import './style.scss';
import MegaMenu from '../../../shared/components/MegaMenu';
import DropDown from '../../../shared/components/DropDown';
import HomeService from '../../../shared/services/HomeService';
import { ReactComponent as ManLogo } from '../../../assets/images/man.svg';
import AndroidLogo from '../../../assets/images/android.png';
import logo from '../../../assets/images/logo.png';
import { ReactComponent as AppleLogo } from '../../../assets/images/apple.svg';
import fb from '../../../assets/images/fb.svg';
import insta from '../../../assets/images/insta-unfill.svg';
const Header = props => {
    let refValue = useRef();
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [pathName, setPathName] = useState('events');
    const [headerClass, setHeaderClass] = useState(false);
    const [byVenueEvent, setByVenueEvent] = useState([]);
    const [byGenreEvent, setByGenreEvent] = useState([]);
    const [showElementsInHeader, setShowElementsInHeader] = useState(4);

    useEffect(() => {
        const first = 0;
        const limit = 5;
        const search = '';
        HomeService.getHomepageVenues(first, limit, search)
            .then(res => {
                setByVenueEvent(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });

        HomeService.getGenre()
            .then(res => {
                var result = Object.keys(res.data.data).map(key => {
                    return res.data.data[key];
                });
                setByGenreEvent(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleNavigationOpen = () => {
        refValue.classList.add('active');
    };

    const handleNavigationClose = () => {
        refValue.classList.remove('active');
    };

    const handleMouseStatus = status => {
        if (status === true) {
            setTimeout(() => setShowMegaMenu(status), 0);
            document.body.classList.add('body-overlay');
        }
        if (status === false) {
            setTimeout(() => setShowMegaMenu(status), 0);
            document.body.classList.remove('body-overlay');
        }
    };
    return (
        <header className="small-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="top-header">
                        <div className="top-header-left">
                            <div
                                className="hamburger-icon"
                                onClick={() => {
                                    handleNavigationOpen();
                                }}
                            >
                                <span></span>
                            </div>
                            <div className="site-logo">
                                <Link to="/">
                                    <img src={logo} className="img-fluid" alt="Logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <nav className="bottom-header">
                        <div className="bottom-header-left">
                            <ul>
                                <li
                                    className={`has-submenu ${
                                        menuActive && pathName === 'events' ? 'active' : ''
                                        }`}
                                    onMouseEnter={() => handleMouseStatus(true)}
                                    onMouseLeave={() => handleMouseStatus(false)}
                                >
                                    <a>Events</a>
                                    <CSSTransitionGroup
                                        transitionName="mega"
                                        transitionEnter={true}
                                        transitionEnterTimeout={300}
                                        transitionLeaveTimeout={300}
                                    >
                                        {showMegaMenu && (
                                            <MegaMenu
                                                handleMouseStatus={handleMouseStatus}
                                                byGenreEvent={byGenreEvent}
                                                byVenueEvent={byVenueEvent}
                                            />
                                        )}
                                    </CSSTransitionGroup>
                                </li>
                                <li
                                    className={
                                        menuActive && pathName === 'attractions' ? 'active' : ''
                                    }
                                >
                                    <Link to="/attractions">Attractions</Link>
                                </li>
                                <li
                                    className={
                                        menuActive && pathName === 'promotions' ? 'active' : ''
                                    }
                                >
                                    <Link to="/promotions">Promotions</Link>
                                </li>
                                <li>
                                    <a>Explore</a>
                                </li>
                                {byGenreEvent &&
                                    byGenreEvent
                                        .slice(0, showElementsInHeader)
                                        .map((event, index) => {
                                            return (
                                                <li key={event.id}>
                                                    <Link to={`/events?c=${event.id}`}>{event.name}</Link>
                                                </li>
                                            );
                                        })}
                                <DropDown
                                    showElementsInHeader={showElementsInHeader}
                                    byGenreEvent={byGenreEvent}
                                />
                            </ul>
                        </div>
                    </nav>

                    <div
                        className="responsive-nav-links"
                        ref={node => {
                            refValue = node;
                        }}
                    >
                        <a
                            className="responsive-nav-close"
                            onClick={() => {
                                handleNavigationClose();
                            }}
                        >
                            X
            </a>
                        <ul className="user-details">
                            <li className="user-icon">
                                <Link to="/">
                                    <ManLogo className="img-fluid" />
                                    <span></span>
                                </Link>
                                <span>Hello William</span>
                            </li>
                            <li>
                                <a>Ticket With Us</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="has-submenu">
                                <Link to="/">Events</Link>
                                <ul className="submenu">
                                    <li className="has-submenu">
                                        <Link to="/">Geners</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/">calender</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/">Attractions</Link>
                            </li>
                            <li>
                                <Link to="/">Promotions</Link>
                            </li>
                            <li>
                                <Link to="/">Explore</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/">My Account</Link>
                            </li>
                            <li>
                                <Link to="/">My cart</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="has-submenu">
                                <Link to="/">Our Company</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/">Helpful Links</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/">For Business</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/">Stay Connected</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="social-links">
                                <span>Follow us on</span>
                                <ul className="social">
                                    <li>
                                        <Link to="/">
                                            <img src={fb} alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <img src={insta} alt="" />
                                    </li>
                                </ul>
                            </li>
                            <li className="sistic-on-mobile">
                                <span>Sistic on Mobile</span>
                                <div className="download-option">
                                    <Link to="/">
                                        <AppleLogo className="ios" />
                                        <span>
                                            Available on the
                      <br />
                                            <strong>App Store</strong>
                                        </span>
                                    </Link>
                                    <Link to="/">
                                        <img src={AndroidLogo} className="android" alt="" />
                                        <span>
                                            Get it on
                      <br />
                                            <strong>Play Store</strong>
                                        </span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;