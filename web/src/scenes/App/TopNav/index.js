import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import moment from 'moment';
import './style.scss';
import MegaMenu from '../../../shared/components/MegaMenu';
import DropDown from '../../../shared/components/DropDown';
import HomePageSearch from '../../Home/HomePageSearch';
import MiniCart from '../../Home/MiniCart';
import HomeService from '../../../shared/services/HomeService';
import { ReactComponent as ManLogo } from '../../../assets/images/man.svg';
import AndroidLogo from '../../../assets/images/android.png';
import logo from '../../../assets/images/logo.png';
import { ReactComponent as AppleLogo } from '../../../assets/images/apple.svg';
import fb from '../../../assets/images/fb.svg';
import insta from '../../../assets/images/insta-unfill.svg';
import Calender from '../../../shared/components/Calender';
import DateRangeFilter from '../../../shared/components/DateRangeFilter';
import Submenu from '../../../shared/components/Submenu';
import Header from '../../../shared/components/Header';
import sendImage from '../../../assets/images/send.svg';

const TopNav = props => {
  let refValue = useRef();
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [pathName, setPathName] = useState('events');
  const [headerClass, setHeaderClass] = useState(false);
  const [byVenueEvent, setByVenueEvent] = useState([]);
  const [byGenreEvent, setByGenreEvent] = useState([]);
  const [showElementsInHeader, setShowElementsInHeader] = useState(4);
  const [changeHeader, setChangeHeader] = useState(false);
  const [headerClassScroll, setHeaderClassScroll] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  const miniCartData = [
    { id: '1', img: 'assets/images/explore.png' },
    { id: '2', img: 'assets/images/explore.png' },
    { id: '3', img: 'assets/images/explore.png' }
  ];

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

  const processPath = location => {
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
          pathArr[1] === 'attractions')
      ) {
        setPathName(pathArr[1]);
        setMenuActive(true);
      } else if (
        pathArr[1] === 'contact-us' ||
        pathArr[1] === 'about-us' ||
        pathArr[1] === 'careers' ||
        pathArr[1] === 'system-licensing' ||
        pathArr[1] === 'advertise'
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
    document.body.classList.add('body-overlay');
  };

  const handleNavigationClose = () => {
    refValue.classList.remove('active');
    document.body.classList.remove('body-overlay');
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

  const handleFilters = data => {
    setShowMegaMenu(false);
    handleNavigationClose();
    setTimeout(() => {
      props.history.push(
        `/events/search?s=${moment(data.from).format('YYYY-MM-DD')}--${moment(
          data.to
        ).format('YYYY-MM-DD')}`
      );
    }, 100);
  };

  return changeHeader ? (
    <Header menuActive={menuActive} pathName={pathName} />
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
              <HomePageSearch {...props} />
            </div>
            <div className="top-header-right">
              <ul>
                <li className="user-icon">
                  <ManLogo className="img-fluid" />
                  <span></span>
                </li>
                <MiniCart data={miniCartData} />
                <li className="ticket-withus">
                  <a>Ticket With Us</a>
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
                <Link to="/">
                  <ManLogo className="img-fluid" />
                  <span></span>
                </Link>
                <span>Login/ Register</span>
              </li>
              <li className="ticket-withus">
                <a>Ticket With Us</a>
              </li>
            </ul>
            <ul>
              <li className="has-submenu">
                <a
                  className={`${showMegaMenu ? 'active' : ''}`}
                  onClick={() => handleMouseStatus(!showMegaMenu)}
                >
                  Events
                </a>
                <ul className={`submenu ${showMegaMenu ? 'active' : ''}`}>
                  <li className="has-submenu">
                    <Submenu
                      heading="Genre"
                      buttonText="By Genre"
                      data={byGenreEvent}
                      submenuClass="genre submenu-wrap"
                      link="/events/search?c="
                      closeSubmenu={handleNavigationClose}
                      resetFilters={() => {}}
                      clearFilters={() => {}}
                      applyFilters={() => {}}
                    />
                  </li>
                  <li className="has-submenu">
                    <Submenu
                      heading="Calendar"
                      buttonText="By Date"
                      submenuClass="calendar submenu-wrap"
                      closeSubmenu={handleNavigationClose}
                      resetFilters={() => {}}
                      clearFilters={() => {}}
                      applyFilters={() => {}}
                    >
                      <DateRangeFilter
                        filteredDateRange={{ from: '', to: '' }}
                        handleFilters={handleFilters}
                        autoSubmit={false}
                        filterFlag={false}
                      />
                    </Submenu>
                  </li>
                  <li className="has-submenu">
                    <Submenu
                      heading="Venue"
                      buttonText="By Venue"
                      data={byVenueEvent}
                      submenuClass="venue submenu-wrap"
                      link="/events/search?v="
                      closeSubmenu={handleNavigationClose}
                      resetFilters={() => {}}
                      clearFilters={() => {}}
                      applyFilters={() => {}}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/attractions" onClick={() => handleNavigationClose()}>
                  Attractions
                </Link>
              </li>
              <li>
                <Link to="/promotions" onClick={() => handleNavigationClose()}>
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/">Explore</Link>
              </li>
            </ul>
            <ul>
              <li className="has-submenu">
                <Submenu
                  buttonText="My Account"
                  backButtonRequired={false}
                  resetFilters={() => {}}
                  clearFilters={() => {}}
                  applyFilters={() => {}}
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
                </Submenu>
              </li>
              <li className="has-submenu mycart">
                <Submenu
                  heading="My cart"
                  buttonText="My cart"
                  data={byGenreEvent}
                  submenuClass="submenu-wrap"
                  resetFilters={() => {}}
                  clearFilters={() => {}}
                  applyFilters={() => {}}
                />
              </li>
            </ul>
            <ul>
              <li className="has-submenu">
                {/* <Link to="/">Our Company</Link> */}
                <Submenu
                  buttonText="Our Company"
                  backButtonRequired={false}
                  resetFilters={() => {}}
                  clearFilters={() => {}}
                  applyFilters={() => {}}
                >
                  <ul className="submenu">
                    <li className="has-submenu">
                      <Link to="/">About Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/">Sell with Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/">Ticketing Technology</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/apipartners">Partner with Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/">Careers</Link>
                    </li>
                  </ul>
                </Submenu>
              </li>
              <li className="has-submenu">
                <Submenu
                  buttonText="Helpful Links"
                  backButtonRequired={false}
                  resetFilters={() => {}}
                  clearFilters={() => {}}
                  applyFilters={() => {}}
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
                      <Link to="/">Blog</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/">Media</Link>
                    </li>
                  </ul>
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
  );
};

export default TopNav;
