import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import closeIcon from '../../../assets/images/close-ad.svg';
import logo from '../../../assets/images/logo.png';
import './style.scss';
import Utilities from '../../utilities';
import Constants from '../../constants';

const DownloadAppPopup = () => {
  const [isItem, setIsItem] = useState(null);
  const [elheight, setElHeight] = useState(0);
  const [display, setDisplay] = useState(null);

  const [navigationURL, setNavigationURL] = useState(null);
  const el = useRef();
  const [propsAnimation, set, stop] = useSpring(() => ({ bottom: -1000 }));
  useEffect(() => {
    if (!isItem) {
      set({ bottom: 0 });
      stop();
    }
    if (el && el.current) {
      setElHeight(el.current.clientHeight);
    }
  }, [elheight]);

  useEffect(() => {
    let isItem = sessionStorage.getItem('appDownloadPopup');
    setIsItem(isItem);
    setDisplay(isItem ? 'none' : 'block');
    setNavigationURL(
      Utilities.getMobileOperatingSystem() != 'unknown'
        ? Utilities.getMobileOperatingSystem() == 'Android'
          ? Constants.SISTIC_PLAY_STORE_URL
          : Constants.SISTIC_APP_STORE_URL
        : ''
    );
  }, []);

  let handleDecline = () => {
    sessionStorage.setItem('appDownloadPopup', true);
    setDisplay('none');
    set({ top: -elheight });
  };

  let handleClick = () => {
    sessionStorage.setItem('appDownloadPopup', true);
    set({ top: -elheight });
  };
  if (
    // !Utilities.mobileAndTabletcheck() ||
    isItem
    // Utilities.getMobileOperatingSystem() == 'unknown'
  ) {
    return null;
  }

  return (
    <animated.div className={'download-mobile'} style={propsAnimation} ref={el}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="cookie-detail">
        <div className="heading">
          <h3>SISTIC</h3>
        </div>
        <p>Available in the play store</p>
        <a
          href={navigationURL}
          className="accept-btn"
          onClick={handleClick}
          target="_blank"
          title="Get App"
        >
          Get App
        </a>
      </div>
      <button className="hide-cookie" onClick={handleDecline}>
        <img src={closeIcon} alt="" />
      </button>
    </animated.div>
  );
};

export default DownloadAppPopup;
