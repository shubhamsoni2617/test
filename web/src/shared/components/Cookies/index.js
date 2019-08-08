import React, { useState, useRef, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import { Link } from 'react-router-dom';
import closeIcon from '../../../assets/images/close-ad.svg';
import './style.scss';

const Cookies = (props) => {

    const [cookie, setcookie] = useState(false);
    const [elheight, setElHeight] = useState(0);
    const el = useRef();
    const [propsAnimation, set, stop] = useSpring(() => ({bottom: -1000}))

    set({bottom: cookie ? -elheight : 0})
    stop()

    useEffect(
      () => {
        setElHeight(el.current.clientHeight);
      },
      [elheight]
    );

    const handleAccept = () => setcookie(true);

    const handleDecline = () => setcookie(true);

    return (
      <animated.div className={'cookies'} style={propsAnimation} ref={el}>
          <div className="heading">
              <h3>Cookie Policy</h3>
          </div>
          <div className="cookie-detail">
              <p>We use cookies on this site to enhance your user experience.</p>
              <p>For a complete overview of all cookies used, please see your personal settings.</p>
          </div>
          <div className="cookie-actions">
              <Link to="/" className="accept-btn" onClick={handleAccept}>Accept</Link>
              <Link to="/" className="hide-cookie" onClick={handleDecline}><img src={closeIcon} alt="" /></Link>
          </div>
      </animated.div>
    );
}

export default Cookies;
