import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './style.scss';
import Submenu from '../Submenu';

const Header = ({ menuActive, pathName }) => {
  let refValue = useRef();
  const [showMegaMenu, setShowMegaMenu] = useState(false);

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
                <li className="has-submenu">
                  <a>Get Started</a>
                  <ul className="small-header-submenu">
                    <li>
                      <a>Sell tickets with us</a>
                    </li>
                    <li>
                      <a>System Licensing</a>
                    </li>
                    <li>
                      <a>Be our partner</a>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    menuActive && pathName === 'about-us' ? 'active-link' : ''
                  }
                >
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <a>Media</a>
                </li>
                <li>
                  <a>Advertise</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
                <li
                  className={
                    menuActive && pathName === 'contact-us' ? 'active-link' : ''
                  }
                >
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className="responsive-nav-links"
            ref={node => {
              refValue = node;
            }}
          >
            <div className="nav-close-topbar">
              <div className="site-logo">
                <Link to="/">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <a
                className="responsive-nav-close"
                onClick={() => {
                  handleNavigationClose();
                }}
              ></a>
            </div>
            {/* <ul className="user-details">
              <li className="user-icon">
                <Link to="/">
                  <span></span>
                </Link>
                <span>Login/ Register</span>
              </li>
            </ul> */}
            <ul>
              <li className="has-submenu">
                <a
                  className={`${showMegaMenu ? 'active' : ''}`}
                  onClick={() => handleMouseStatus(!showMegaMenu)}
                >
                  Get Started
                </a>
                <ul className={`submenu ${showMegaMenu ? 'active' : ''}`}>
                  <li className="has-submenu">
                    <Submenu
                      heading="Sell tickets with us"
                      buttonText="Sell tickets with us"
                      data={null}
                      submenuClass=""
                      link=""
                      closeSubmenu={handleNavigationClose}
                      resetFilters={() => { }}
                      clearFilters={() => { }}
                      applyFilters={() => { }}
                    />
                  </li>
                  <li className="has-submenu">
                    <Submenu
                      heading="System Licencing"
                      buttonText="System Licencing"
                      data={null}
                      submenuClass=""
                      link=""
                      closeSubmenu={handleNavigationClose}
                      resetFilters={() => { }}
                      clearFilters={() => { }}
                      applyFilters={() => { }}
                    />
                  </li>
                  <li className="has-submenu">
                    <Submenu
                      heading="Be our partner"
                      buttonText="Be our partner"
                      data={null}
                      submenuClass=""
                      link=""
                      closeSubmenu={handleNavigationClose}
                      resetFilters={() => { }}
                      clearFilters={() => { }}
                      applyFilters={() => { }}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about-us" onClick={() => handleNavigationClose()}>
                  About Us
                </Link>
              </li>
              <li>
                <a>Media</a>
              </li>
              <li>
                <a>Advertise</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <Link to="/contact-us" onClick={() => handleNavigationClose()}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
