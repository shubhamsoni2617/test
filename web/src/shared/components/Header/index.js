import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './style.scss';

const Header = ({ menuActive, pathName }) => {
  let refValue = useRef();
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleNavigationOpen = () => {
    refValue.classList.add('active');
    document.body.classList.add('body-overlay', 'fixed-body');
  };

  const handleNavigationClose = () => {
    refValue.classList.remove('active');
    document.body.classList.remove('body-overlay', 'fixed-body');
  };

  const handleMouseStatus = status => {
    if (status === true) {
      setTimeout(() => setShowMegaMenu(status), 0);
      // document.body.classList.add('body-overlay');
    }
    if (status === false) {
      setTimeout(() => setShowMegaMenu(status), 0);
      // document.body.classList.remove('body-overlay');
    }
  };

  const topHeaderContent = [
    { link: 'about-us', name: 'About Us' },
    { link: 'apipartners', name: 'Media' },
    { link: 'advertise', name: 'Advertise' },
    { link: 'career', name: 'Careers' },
    { link: 'contact-us', name: 'Contact Us' }
  ];

  const getStartedContent = [
    { link: 'sell-event-tickets', name: 'Sell tickets with us' },
    { link: 'b2b', name: 'B2B' },
    { link: 'system-licensing', name: 'System Licensing' },
    { link: 'apipartners', name: 'Be our partner' }
  ];

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
                    {getStartedContent.map(({ link, name }) => {
                      return (
                        <li key={link}>
                          <Link to={`/${link}`}>{name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                {topHeaderContent.map(({ link, name }) => {
                  return (
                    <li
                      className={
                        menuActive && pathName === link ? 'active-link' : ''
                      }
                      key={link}
                    >
                      <Link to={`/${link}`}>{name}</Link>
                    </li>
                  );
                })}
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
            <ul>
              <li className="has-submenu">
                <a
                  className={`${showMegaMenu ? 'active' : ''}`}
                  onClick={() => handleMouseStatus(!showMegaMenu)}
                >
                  Get Started
                </a>
                <ul className={`submenu ${showMegaMenu ? 'active' : ''}`}>
                  {getStartedContent.map(({ link, name }) => {
                    return (
                      <li key={link}>
                        <Link to={`/${link}`} onClick={handleNavigationClose}>
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              {topHeaderContent.map(({ link, name }) => {
                return (
                  <li key={link}>
                    <Link
                      to={`/${link}`}
                      onClick={() => handleNavigationClose()}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
