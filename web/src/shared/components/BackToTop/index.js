import React, { useState, useEffect } from 'react';
import topArrow from '../../../assets/images/arrow-to-top.svg';
import Utilities from '../../utilities';
const BackToTop = () => {
  const [yOffset, setYOffset] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;
    setYOffset(scrolled);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    !Utilities.mobilecheck() &&
    yOffset && (
      <span className="scroll-top" onClick={() => scrollTop()}>
        <img src={topArrow} alt="Scroll to top" />
      </span>
    )
  );
};
export default BackToTop;
