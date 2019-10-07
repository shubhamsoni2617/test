import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './style.scss';

const Header = ({ menuActive, pathName }) => {
  return (
    <header className="small-header">
      <div className="container-fluid">
        <div className="row">
          <div className="top-header">
            <div className="top-header-left">
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
                <li>
                  <a>Get Started</a>
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
        </div>
      </div>
    </header>
  );
};
export default Header;
