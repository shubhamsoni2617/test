import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../../../assets/images/logo.png';

const Header = props => {
  const [menuActive, setMenuActive] = useState(false);
  const [pathName, setPathName] = useState('events');
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
                <li
                  className={
                    menuActive && pathName === 'attractions' ? 'active' : ''
                  }
                >
                  <Link to="/attractions">Get Started</Link>
                </li>
                <li
                  className={
                    menuActive && pathName === 'promotions' ? 'active' : ''
                  }
                >
                  <Link to="/promotions">About Us</Link>
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
                  <a>Contact Us</a>
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
