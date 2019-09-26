import { useEffect, useCallback, useRef, useState } from 'react';
import Utilities from '../utilities';

function useStickyPanel({ sticky, bottom, paddingTop = 0, pixelBuffer = 0 }) {
  const scrollContainerRef = useRef(null);
  const [styleObj, setStyleObj] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      if (Utilities.mobilecheck()) return;
      const containerTop = scrollContainerRef.current.getBoundingClientRect()
        .top;
      const containerHeight = scrollContainerRef.current.getBoundingClientRect()
        .height;
      const sidebarHeight = scrollContainerRef.current.children[0].clientHeight;
      const sidebarWidth = scrollContainerRef.current.children[0].clientWidth;
      const viewportHeight = window.innerHeight;
      let obj = {};

      if (viewportHeight - containerTop - containerHeight > 0) {
        if (scrollContainerRef.current.status === 'translate') return;
        scrollContainerRef.current.status = 'translate';
        let top = 'initial';
        if (scrollContainerRef.current.children.length > 1) {
          // top = -containerTop + pixelBuffer - paddingTop;
          top = 'initial';
        }
        obj = {
          position: 'absolute',
          top: top,
          width: `${sidebarWidth}px`,
          paddingTop,
          bottom
        };
      } else if (
        containerTop - pixelBuffer <= 0 &&
        containerTop - viewportHeight + sidebarHeight <= 0
      ) {
        if (scrollContainerRef.current.status === 'fixed') return;
        scrollContainerRef.current.status = 'fixed';
        if (scrollContainerRef.current.children.length > 1) {
          scrollContainerRef.current.style.paddingTop = `${sidebarHeight}px`;
        }
        obj = {
          position: 'fixed',
          ...sticky,
          width: `${sidebarWidth}px`
        };
      } else {
        if (scrollContainerRef.current.status === 'normal') return;
        scrollContainerRef.current.status = 'normal';
        if (scrollContainerRef.current.children.length > 1) {
          scrollContainerRef.current.style.paddingTop = `unset`;
        }
        obj = {
          position: 'relative'
        };
      }
      setStyleObj(obj);
    };
    if (!Utilities.mobilecheck()) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return [scrollContainerRef, styleObj];
}

export default useStickyPanel;
