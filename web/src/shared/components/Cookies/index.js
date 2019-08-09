import React, { useState, useRef, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import { Link } from 'react-router-dom';
import closeIcon from '../../../assets/images/close-ad.svg';
import './style.scss';
import Utilities from '../../utilities';

const Cookies = (props) => {

    const [showConsent, setShowConsent] = useState(sessionStorage.getItem('showConsent') ? JSON.parse(sessionStorage.getItem('showConsent')) : true)
    const [elheight, setElHeight] = useState(0);
    const el = useRef();
    const [propsAnimation, set, stop] = useSpring(() => ({bottom: -1000}))

    set({bottom: showConsent ? 0 : -elheight})
    stop()

    useEffect(
      () => {
        if(el && el.current){
         setElHeight(el.current.clientHeight);
        }
      },
      [elheight]
    );

    let handleAccept = () => {
       Utilities.setCookie('SisticConsent', 'Yes', 15);
       setShowConsent(false);
    }

    let handleDecline = () => {
      sessionStorage.setItem('showConsent' ,false);
      setShowConsent(false);
    }
    console.log(Utilities.getCookie('SisticConsent'))
    if(Utilities.getCookie('SisticConsent') || !showConsent){
      return null;
    }

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
