import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../../assets/images/close-ad.svg';
import './style.scss';

const Cookies = (props) => {

    const [cookie, setcookie] = useState(false);

    const handleAccept = () => {
        // const cookies = new Cookies();
        // cookies.set('cookieKey', 'CookieValue', { path: '/' });
        // cookies.get('cookieKey')
        setcookie(true);
        console.log("cookies set");
    }

    const handleDecline = () => {
        setcookie(true)
    }

    return (
        <div className={cookie ? "hide" : "cookies"}>
            <div className="container">
                <div className="heading">
                    <h3>Cookie Policy</h3>
                    <div className="cookie-actions">
                        <Link to="/" className="accept-btn" onClick={handleAccept}>Accept</Link>
                        <Link to="/" className="hide-cookie" onClick={handleDecline}><img src={closeIcon} alt="" /></Link>
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