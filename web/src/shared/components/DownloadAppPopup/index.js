import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import closeIcon from '../../../assets/images/close-ad.svg';
import './style.scss';
import Utilities from '../../utilities';
import Constants from '../../constants';

const DownloadAppPopup = () => {
  const [elheight, setElHeight] = useState(0);
  const [navigationURL, setNavigationURL] = useState(Utilities.getMobileOperatingSystem() != 'unknown' ?(Utilities.getMobileOperatingSystem() == 'Android' ? Constants.SISTIC_PLAY_STORE_URL : Constants.SISTIC_APP_STORE_URL  ) :'' );
  const el = useRef();
  const [propsAnimation, set, stop] = useSpring(() => ({ bottom: -1000 }));
  useEffect(() => {
    if (!sessionStorage.getItem('appDownloadPopup')) {
      set({ bottom: 0 });
      stop();
    }
    if (el && el.current) {
      setElHeight(el.current.clientHeight);
    }
  }, [elheight]);

  let handleDecline = () => {
    sessionStorage.setItem('appDownloadPopup', true);
    set({ bottom: -elheight });
  };

  let handleClick =() =>{
    sessionStorage.setItem('appDownloadPopup', true);
    set({ bottom: -elheight });
  }
  if ( ! Utilities.mobileAndTabletcheck() || sessionStorage.getItem('appDownloadPopup') || Utilities.getMobileOperatingSystem() == 'unknown') {
    return null;
  }

  return (
    <animated.div className={'cookies'} style={propsAnimation} ref={el}>
      <div className="heading">
        <h3>Download Mobile App</h3>
      </div>
      <div className="cookie-detail">
        <p>Available in the play store</p>
      </div>
      <div className="cookie-actions">
        <a href={navigationURL} className="accept-btn" onClick={handleClick} target="_blank" title="Get App">Get App</a>
      </div>
      <div className="cookie-actions">
        <button className="hide-cookie" onClick={handleDecline}>
          <img src={closeIcon} alt="" />
        </button>
      </div>
    </animated.div>
  );
};

export default DownloadAppPopup;
