import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import logo from '../../../assets/images/logo.png';
import './style.scss';
import MegaMenu from '../../../shared/components/MegaMenu';
import DropDown from '../../../shared/components/DropDown';
import HomePageSearch from '../../Home/HomePageSearch';
import MiniCart from '../../Home/MiniCart';
import HomeService from '../../../shared/services/HomeService';
import { ReactComponent as ManLogo } from '../../../assets/images/man.svg';
import AndroidLogo from '../../../assets/images/android.png';
import { ReactComponent as AppleLogo } from '../../../assets/images/apple.svg';
import fb from '../../../assets/images/fb.svg';
import insta from '../../../assets/images/insta-unfill.svg';
const TopNav = (props) => {
  let refValue = useRef();
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [headerClass, setHeaderClass] = useState(false);
  const [byVenueEvent, setByVenueEvent] = useState([]);
  const [byGenreEvent, setByGenreEvent] = useState([]);
  const [showElementsInHeader, setShowElementsInHeader] = useState(4);

  const miniCartData = [
    { id: "1", img: "assets/images/explore.png" },
    { id: "2", img: "assets/images/explore.png" },
    { id: "3", img: "assets/images/explore.png" }
  ];

  useEffect(() => {
    const first = 0;
    const limit = 2;
    const search = "";
    HomeService.getVenues(first, limit, search)
      .then((res) => {
        setByVenueEvent(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      });

    HomeService.getGenre()
      .then((res) => {
        var result = Object.keys(res.data.data).map((key) => {
          return res.data.data[key];
        });
        setByGenreEvent(result);
      })
      .catch((err) => {
        console.log(err)
      });

      if(props.history.location.pathname) processPath(props.history.location);

      const unlisten = props.history.listen((location) => {
        processPath(location);
      });
      return () => {
        unlisten();
      };

  }, []);

  const processPath = (location) => {
    if(location.pathname){
      let pathArr = location.pathname.split('/');
      if(pathArr.length && pathArr[1] == 'events'){
        setMenuActive(true);

        //For event header class
        if(location.search === ''){
          setHeaderClass(true);
        }else{
          setHeaderClass(false);
        }
      }else{
        setMenuActive(false);
        setHeaderClass(false);
      }
    }
  }
  const handleNavigationOpen = () => {
    refValue.classList.add("active");
  }

  const handleNavigationClose = () => {
    refValue.classList.remove("active");
  }

  const handleMouseStatus = (status) => {
    if (status === true) {
      setTimeout(() => setShowMegaMenu(status), 0);
      document.body.classList.add('body-overlay');
    }
    if (status === false) {
      setTimeout(() => setShowMegaMenu(status), 0);
      document.body.classList.remove('body-overlay');
    }
  }

  return (
    <header className={`header ${headerClass ? 'header-light' : ''}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="top-header">
            <div className="top-header-left">
              <div className="hamburger-icon" onClick={() => { handleNavigationOpen() }}><span></span></div>
              <div className="site-logo">
                <Link to="/"><img src={logo} className="img-fluid" alt="Logo" /></Link>
              </div>
              <HomePageSearch />
            </div>
            <div className="top-header-right">
              <ul>
                <li className="user-icon"><ManLogo className="img-fluid" /><span></span></li>
                <MiniCart data={miniCartData} />
                <li className="ticket-withus"><a>Ticket With Us</a></li>
              </ul>
            </div>
          </div>
          <nav className="bottom-header">
            <div className="bottom-header-left">
              <ul>
                <li className={`has-submenu ${menuActive ? 'active' : ''}`} onMouseEnter={() => handleMouseStatus(true)} onMouseLeave={() => handleMouseStatus(false)}>
                  <a>Events</a>
                  <CSSTransitionGroup
                    transitionName="mega"
                    transitionEnter={true}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {showMegaMenu && <MegaMenu handleMouseStatus={handleMouseStatus} byGenreEvent={byGenreEvent} byVenueEvent={byVenueEvent} />}
                  </CSSTransitionGroup>
                </li>
                <li><a>Attractions</a></li>
                <li><Link to="/promotions">Promotions</Link></li>
                <li><a>Explore</a></li>
              </ul>
            </div>
            <div className="bottom-header-right">
              <ul>
                {byGenreEvent && byGenreEvent.slice(0, showElementsInHeader).map((event, index) => {
                  return (
                    <li key={event.id}><Link to={`/events?c=${event.id}`}>{event.name}</Link></li>
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
          <div className="responsive-nav-links" ref={(node) => { refValue = node }}>
            <a className="responsive-nav-close" onClick={() => { handleNavigationClose() }}>X</a>
            <ul className="user-details">
              <li className="user-icon"><Link to="/">
                <ManLogo className="img-fluid" />
                <span></span></Link><span>Hello William</span></li>
              <li><a>Ticket With Us</a></li>
            </ul>
            <ul>
              <li className="has-submenu">
                <Link to="/">Events</Link>
                <ul className="submenu">
                  <li className="has-submenu"><Link to="/">Geners</Link></li>
                  <li className="has-submenu"><Link to="/">calender</Link></li>
                </ul>
              </li>
              <li><Link to="/">Attractions</Link></li>
              <li><Link to="/">Promotions</Link></li>
              <li><Link to="/">Explore</Link></li>
            </ul>
            <ul>
              <li><Link to="/">My Account</Link></li>
              <li><Link to="/">My cart</Link></li>
            </ul>
            <ul>
              <li className="has-submenu"><Link to="/">Our Company</Link></li>
              <li className="has-submenu"><Link to="/">Helpful Links</Link></li>
              <li className="has-submenu"><Link to="/">For Business</Link></li>
              <li className="has-submenu"><Link to="/">Stay Connected</Link></li>
            </ul>
            <ul>
              <li className="social-links">
                <span>Follow us on</span>
                <ul className="social">
                  <li>
                    <Link to="/"><img src={fb} alt="" /></Link>
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
                      Available on the<br />
                      <strong>App Store</strong>
                    </span>
                  </Link>
                  <Link to="/">
                    <img src={AndroidLogo} className="android" alt="" />
                    <span>
                      Get it on<br />
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
}

export default TopNav;
