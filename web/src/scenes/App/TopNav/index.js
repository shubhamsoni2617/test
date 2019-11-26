import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import moment from 'moment';
import './style.scss';
import MegaMenu from '../../../shared/components/MegaMenu';
import DropDown from '../../../shared/components/DropDown';
import HomePageSearch from '../../Home/HomePageSearch';
import MiniCart from '../../Home/MiniCart';
import HomeService from '../../../shared/services/HomeService';
import MainLogo from '../../../assets/images/man.svg';
import AndroidLogo from '../../../assets/images/android.png';
import logo from '../../../assets/images/logo.png';
import AppleLogo from '../../../assets/images/apple.svg';
import fb from '../../../assets/images/fb.svg';
import insta from '../../../assets/images/insta-unfill.svg';
import searchImage from '../../../assets/images/search.svg';
import Calender from '../../../shared/components/Calender';
import DateRangeFilter from '../../../shared/components/DateRangeFilter';
import { Submenu, SubmenuWrap } from '../../../shared/components/Submenu';
import Header from '../../../shared/components/Header';
import sendImage from '../../../assets/images/send.svg';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Constants from '../../../shared/constants';

function List({ data, type, menueStatus, setMenuStatus, closeSubmenu, link }) {
  if (!data || !data.length) return null;

  return (
    <ul className={`submenu  ${menueStatus ? 'active' : ''}`}>
      {data.map(event => {
        return (
          <li key={event.id}>
            <Link
              to={`${link}${event.id}`}
              onClick={() => {
                setMenuStatus(false);
                closeSubmenu(false);
              }}
            >
              {event.name}
            </Link>
          </li>
        );
      })}
      <Link
        to={type == 'Events' ? '/events' : '/venues'}
        onClick={() => {
          setMenuStatus(false);
          closeSubmenu(false);
        }}
        className="text-center see-all-sidebar"
      >
        See All {type}
      </Link>
    </ul>
  );
}

const TopNav = props => {
  let refValue = useRef();
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [flag, setFlag] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [megaMenuAnimating, setMegaMenuAnimating] = useState(false);
  const [pathName, setPathName] = useState('events');
  const [headerClass, setHeaderClass] = useState(false);
  const [byVenueEvent, setByVenueEvent] = useState(
    props.response && props.response.venuesData
      ? props.response.venuesData.data
      : []
  );
  const [byGenreEvent, setByGenreEvent] = useState(
    props.response && props.response.genreData
      ? props.response.genreData.data
      : []
  );
  const [showElementsInHeader] = useState(4);
  const [changeHeader, setChangeHeader] = useState(false);
  const [headerClassScroll, setHeaderClassScroll] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [mostViewed, setMostViewed] = useState(null);
  const [featuredEvents, setFeaturedEvents] = useState(
    props.response && props.response.findAnEventAddsData
      ? props.response.findAnEventAddsData.data
      : []
  );
  const miniCartData = [
    { id: '1', img: 'assets/images/explore.png' },
    { id: '2', img: 'assets/images/explore.png' },
    { id: '3', img: 'assets/images/explore.png' }
  ];

  useEffect(() => {
    fetchMostViewedService();
    if (window.__INITIAL_DATA__ && window.__INITIAL_DATA__.venuesData) {
      setByVenueEvent(window.__INITIAL_DATA__.venuesData.data);
    } else {
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
    }
    if (window.__INITIAL_DATA__ && window.__INITIAL_DATA__.genreData) {
      setByGenreEvent(window.__INITIAL_DATA__.genreData.data);
    } else {
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
    }
    if (
      window.__INITIAL_DATA__ &&
      window.__INITIAL_DATA__.findAnEventAddsData
    ) {
      setFeaturedEvents(window.__INITIAL_DATA__.findAnEventAddsData.data);
    } else {
      AdvertisementService.getFindAnEventAds({
        client: Constants.CLIENT,
        limit: 2,
        first: 0
      })
        .then(res => {
          if (res && res.data) {
            setFeaturedEvents(res.data.data);
          }
        })
        .catch(err => {
          if (err && err.response) {
            console.log(err.response);
          }
        });
    }

    if (props.history.location.pathname) processPath(props.history.location);

    const unlisten = props.history.listen(location => {
      processPath(location);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      unlisten();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (props.history.location.pathname === '/') {
      if (window.pageYOffset !== 0) {
        setHeaderClassScroll(true);
      }
      if (window.pageYOffset === 0) {
        setHeaderClassScroll(false);
      }
    }
  };

  const fetchMostViewedService = () => {
    const params = {
      client: Constants.CLIENT,
      limit: 3,
      first: 0
    };
    AdvertisementService.getMostViewedService(params)
      .then(res => {
        setMostViewed(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const processPath = location => {
    setTimeout(() => {
      document.body.classList.remove('fixed-body');
    }, 100);

    if (location.pathname) {
      let pathArr = location.pathname.split('/');
      if (pathArr.length) {
        if (
          (pathArr[1] === 'events' && location.pathname.length > 8) ||
          pathArr[1] === 'agents' ||
          pathArr[1] === 'venues'
        ) {
          setStickyHeader(false);
        } else {
          setStickyHeader(true);
        }
      }
      if (
        pathArr.length &&
        (pathArr[1] === 'events' ||
          pathArr[1] === 'promotions' ||
          pathArr[1] === 'attraction' ||
          pathArr[1] === 'explore')
      ) {
        setPathName(pathArr[1]);
        setMenuActive(true);
      } else if (
        pathArr[1] === 'contact-us' ||
        pathArr[1] === 'about-us' ||
        pathArr[1] === 'career' ||
        pathArr[1] === 'system-licensing' ||
        pathArr[1] === 'advertise' ||
        pathArr[1] === 'sell-event-tickets' ||
        pathArr[1] === 'b2b' ||
        pathArr[1] === 'apipartners'
      ) {
        setChangeHeader(true);
        setPathName(pathArr[1]);
        setMenuActive(true);
      } else {
        setMenuActive(false);
        setChangeHeader(false);
      }
      //For event header class
      if (location.pathname === '/') {
        setHeaderClass(true);
      } else {
        setHeaderClass(false);
      }
    }
  };
  const handleNavigationOpen = () => {
    refValue.classList.add('active');
    document.body.classList.add('body-overlay', 'fixed-body');
  };

  const handleNavigationClose = () => {
    refValue.classList.remove('active');
    document.body.classList.remove('body-overlay', 'fixed-body');
  };

  const handleMouseStatus = status => {
    refValue.flag = status;
    if (megaMenuAnimating || status === showMegaMenu) return;

    setTimeout(() => {
      if (refValue && refValue.flag === showMegaMenu) return;
      setMegaMenuAnimating(true);
      if (status === true) {
        document.body.classList.add('body-overlay');
      }
      if (status === false) {
        document.body.classList.remove('body-overlay');
      }
      setShowMegaMenu(status);
      setTimeout(() => {
        setMegaMenuAnimating(false);
      }, 500);
    }, 600);
  };

  const handleMouseStatusMobile = status => {
    if (status === true) {
      setTimeout(() => setShowMegaMenu(status), 0);
      // document.body.classList.add('body-overlay');
    }
    if (status === false) {
      setTimeout(() => setShowMegaMenu(status), 0);
      // document.body.classList.remove('body-overlay');
    }
  };

  const handleFilters = data => {
    setShowMegaMenu(false);
    handleNavigationClose();
    setTimeout(() => {
      props.history.push(
        `/events/search?s=${moment(data.localfilteredDateRange.from).format(
          'YYYY-MM-DD'
        )}--${moment(data.localfilteredDateRange.to).format('YYYY-MM-DD')}`
      );
    }, 100);
  };

  return changeHeader ? (
    <Header
      menuActive={menuActive}
      pathName={pathName}
      history={props.history}
    />
  ) : (
      <header
        className={`header ${headerClass ? 'homepage' : ''}
      ${headerClassScroll ? `hompage-header-scroll` : ``}
      ${stickyHeader ? `sticky-header` : ``}`}
      >
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
                <HomePageSearch history={props.history} mostViewed={mostViewed} />
              </div>
              <div className="top-header-right">
                <ul>
                  <li className="search-icon">
                    <a href="">
                      <img src={searchImage} className="img-fluid" alt="search" />
                    </a>
                    <span></span>
                  </li>
                  <li className="user-icon">
                    <a href="https://ticketing.sistic.com.sg/sistic/patron/management">
                      <img src={MainLogo} className="img-fluid" alt="send" />
                    </a>
                    <span></span>
                  </li>
                  <MiniCart data={miniCartData} />
                  <li className="ticket-withus">
                    <Link to="/sell-event-tickets">Ticket With Us</Link>
                  </li>
                </ul>
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
                    <CSSTransition
                      in={showMegaMenu}
                      timeout={1000}
                      classNames="mega"
                    >
                      <MegaMenu
                        handleMouseStatus={handleMouseStatus}
                        byGenreEvent={byGenreEvent}
                        byVenueEvent={byVenueEvent}
                        featuredEvents={featuredEvents}
                      />
                    </CSSTransition>
                  </li>
                  <li
                    className={
                      menuActive && pathName === 'attraction' ? 'active' : ''
                    }
                  >
                    <Link to="/attraction">Attractions</Link>
                  </li>
                  <li
                    className={
                      menuActive && pathName === 'promotions' ? 'active' : ''
                    }
                  >
                    <Link to="/promotions">Promotions</Link>
                  </li>
                  <li
                    className={
                      menuActive && pathName === 'explore' ? 'active' : ''
                    }
                  >
                    <Link to="/explore">Explore</Link>
                  </li>
                </ul>
              </div>
              <div className="bottom-header-right">
                <ul>
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
              ></a>
              <ul className="user-details">
                <li className="user-icon">
                  <a href="https://ticketing.sistic.com.sg/sistic/patron/management">
                    <img src={MainLogo} className="img-fluid" alt="send" />
                    <span></span>
                  </a>
                  <span>Login/ Register</span>
                </li>
                <li className="ticket-withus">
                  <Link to="/sell-event-tickets">Ticket With Us</Link>
                </li>
              </ul>
              <ul>
                <li className="has-submenu">
                  <a
                    className={`${showMegaMenu ? 'active' : ''}`}
                    onClick={() => handleMouseStatusMobile(!showMegaMenu)}
                  >
                    Events
                </a>
                  <ul className={`submenu ${showMegaMenu ? 'active' : ''}`}>
                    <li className="has-submenu">
                      <Submenu>
                        {(menueStatus, setMenuStatus) => (
                          <>
                            <button
                              className={`backbutton ${
                                menueStatus ? 'active' : ''
                                }`}
                              type="button"
                              onClick={() => setMenuStatus(!menueStatus)}
                            >
                              By Genre
                          </button>
                            <SubmenuWrap
                              heading="Genre"
                              submenuClass="genre submenu-wrap"
                              menueStatus={menueStatus}
                              setMenuStatus={setMenuStatus}
                            >
                              <List
                                data={byGenreEvent}
                                type="Events"
                                menueStatus={menueStatus}
                                setMenuStatus={setMenuStatus}
                                closeSubmenu={handleNavigationClose}
                                link="/events/search?c="
                              />
                            </SubmenuWrap>
                          </>
                        )}
                      </Submenu>
                    </li>
                    <li className="has-submenu">
                      <Submenu>
                        {(menueStatus, setMenuStatus) => (
                          <>
                            <button
                              className={`backbutton ${
                                menueStatus ? 'active' : ''
                                }`}
                              type="button"
                              onClick={() => setMenuStatus(!menueStatus)}
                            >
                              By Date
                          </button>
                            <SubmenuWrap
                              heading="Calendar"
                              submenuClass="calendar submenu-wrap"
                              menueStatus={menueStatus}
                              setMenuStatus={setMenuStatus}
                            >
                              <DateRangeFilter
                                filteredDateRange={{ from: '', to: '' }}
                                handleFilters={data => {
                                  handleFilters(data);
                                  setMenuStatus();
                                }}
                                autoSubmit={false}
                                filterFlag={false}
                              />
                            </SubmenuWrap>
                          </>
                        )}
                      </Submenu>
                    </li>
                    <li className="has-submenu">
                      <Submenu>
                        {(menueStatus, setMenuStatus) => (
                          <>
                            <button
                              className={`backbutton ${
                                menueStatus ? 'active' : ''
                                }`}
                              type="button"
                              onClick={() => setMenuStatus(!menueStatus)}
                            >
                              By Venue
                          </button>
                            <SubmenuWrap
                              heading="Venue"
                              submenuClass="venue submenu-wrap"
                              menueStatus={menueStatus}
                              setMenuStatus={setMenuStatus}
                            >
                              <List
                                data={byVenueEvent}
                                type="Venues"
                                menueStatus={menueStatus}
                                setMenuStatus={setMenuStatus}
                                closeSubmenu={handleNavigationClose}
                                link="/events/search?v="
                              />
                            </SubmenuWrap>
                          </>
                        )}
                      </Submenu>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/attraction" onClick={() => handleNavigationClose()}>
                    Attractions
                </Link>
                </li>
                <li>
                  <Link to="/promotions" onClick={() => handleNavigationClose()}>
                    Promotions
                </Link>
                </li>
                <li>
                  <Link to="/explore" onClick={() => handleNavigationClose()}>
                    Explore
                </Link>
                </li>
              </ul>
              <ul>
                <li className="has-submenu">
                  <Submenu>
                    {(menueStatus, setMenuStatus) => (
                      <>
                        <button
                          className={`backbutton ${menueStatus ? 'active' : ''}`}
                          type="button"
                          onClick={() => setMenuStatus(!menueStatus)}
                        >
                          My Account
                      </button>
                        <SubmenuWrap
                          menueStatus={menueStatus}
                          setMenuStatus={setMenuStatus}
                        >
                          <ul className="submenu">
                            <li className="has-submenu">
                              <Link to="/">Subscription</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/">Booking History</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/">Logout</Link>
                            </li>
                          </ul>
                        </SubmenuWrap>
                      </>
                    )}
                  </Submenu>
                </li>
                <li className="has-submenu mycart">
                  <Submenu>
                    {(menueStatus, setMenuStatus) => (
                      <>
                        <button
                          className={`backbutton ${menueStatus ? 'active' : ''}`}
                          type="button"
                          onClick={() => setMenuStatus(!menueStatus)}
                        >
                          My cart
                      </button>
                        <SubmenuWrap
                          menueStatus={menueStatus}
                          setMenuStatus={setMenuStatus}
                        >
                          <ul className="submenu">
                            <li className="has-submenu">
                              <Link to="/">Subscription</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/">Booking History</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/">Logout</Link>
                            </li>
                          </ul>
                        </SubmenuWrap>
                      </>
                    )}
                  </Submenu>
                </li>
              </ul>
              <ul>
                <li className="has-submenu">
                  <Submenu>
                    {(menueStatus, setMenuStatus) => (
                      <>
                        <button
                          className={`backbutton ${menueStatus ? 'active' : ''}`}
                          type="button"
                          onClick={() => setMenuStatus(!menueStatus)}
                        >
                          Our Company
                      </button>
                        <SubmenuWrap
                          menueStatus={menueStatus}
                          setMenuStatus={setMenuStatus}
                        >
                          <ul className="submenu">
                            <li className="has-submenu">
                              <Link to="/about-us">About Us</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/sell-event-tickets">Sell with Us</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/system-licensing">
                                Ticketing Technology
                            </Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/apipartners">Partner with Us</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/career">Careers</Link>
                            </li>
                          </ul>
                        </SubmenuWrap>
                      </>
                    )}
                  </Submenu>
                </li>
                <li className="has-submenu">
                  <Submenu>
                    {(menueStatus, setMenuStatus) => (
                      <>
                        <button
                          className={`backbutton ${menueStatus ? 'active' : ''}`}
                          type="button"
                          onClick={() => setMenuStatus(!menueStatus)}
                        >
                          Helpful Links
                      </button>
                        <SubmenuWrap
                          menueStatus={menueStatus}
                          setMenuStatus={setMenuStatus}
                        >
                          <ul className="submenu">
                            <li className="has-submenu">
                              <Link to="/where-to-buy-tickets">
                                Where to Buy Tickets
                            </Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/agents">Locate an Agent</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/venues">Locate a Venue</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/articles">Blog</Link>
                            </li>
                            <li className="has-submenu">
                              <Link to="/events">Media</Link>
                            </li>
                          </ul>
                        </SubmenuWrap>
                      </>
                    )}
                  </Submenu>
                </li>
                <li className="business">
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className="stay-connect">
                  <Link to={''}>Stay Connected</Link>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your email"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                    <div className="input-group-prepend">
                      <a className="input-group-text" id="basic-addon1">
                        <img src={sendImage} className="img-fluid" alt="send" />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="has-submenu business">
                  <Link to="/">For Business</Link>
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
                    <Link to="https://itunes.apple.com/sg/app/sistic/id500601166?mt=8">
                      <img src={AppleLogo} className="ios" alt="send" />
                      <span>
                        Available
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
    );
};

export default TopNav;
