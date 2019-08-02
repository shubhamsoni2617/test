import React from 'react';
import closeIcon from '../../../assets/images/close-ad.svg';
import './style.scss';

const Cookies = (props) => {
    // const { showElementsInHeader, byGenreEvent } = props;
    return (
       <div className="cookies">
          <div className="container">
            <div className="heading">
                <h3>Cookie Policy</h3>
                <div className="cookie-actions">
                    <a href="/" className="accept-btn">Accept</a>
                    <a href="/" className="hide-cookie"><img src={closeIcon} alt="" /></a>
                </div>
            </div>
            <div className="cookie-detail">
                <p>We use cookies on this site to enhance your user experience.</p>
                <p>For a complete overview of all cookies used, please see your personal settings.</p>
            </div>   
          </div>
       </div>
    );
}

export default Cookies;