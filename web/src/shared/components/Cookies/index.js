import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import closeIcon from '../../../assets/images/close-ad.svg';
import './style.scss';
import Utilities from '../../utilities';

const Cookies = () => {
  const [elheight, setElHeight] = useState(0);
  const el = useRef();
  const [propsAnimation, set, stop] = useSpring(() => ({ bottom: -1000 }));

  useEffect(() => {
    if (!Utilities.getCookie('SisticConsent')) {
      set({ bottom: 0 });
      stop();
    }

    if (el && el.current) {
      setElHeight(el.current.clientHeight);
    }
  }, [elheight]);

  let handleAccept = () => {
    Utilities.setCookie('SisticConsent', 'Yes', 15);
    set({ bottom: -elheight });
  };

  let handleDecline = () => {
    set({ bottom: -elheight });
  };
  if (Utilities.getCookie('SisticConsent')) {
    return null;
  }

  return (
    <animated.div className={'cookies'} style={propsAnimation} ref={el}>
      <div className="heading">
        <h3>Cookie Policy</h3>
      </div>
      <div className="cookie-detail">
        <p>We use cookies on this site to enhance your user experience.</p>
        <p>
          For a complete overview of all cookies used, please see your personal
          settings.
        </p>
      </div>
      <div className="cookie-actions">
        <Link to="/" className="accept-btn" onClick={handleAccept}>
          Accept
        </Link>
        <Link to="/" className="hide-cookie" onClick={handleDecline}>
          <img src={closeIcon} alt="" />
        </Link>
      </div>
    </animated.div>
  );
};

export default Cookies;
