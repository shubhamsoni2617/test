import { useEffect, useCallback, useRef, useState } from 'react';
import Utilities from '../utilities';

function useStickyPanel({
  sticky,
  bottom,
  paddingTop = 0,
  pixelBuffer = 0,
  distanceFromTop = 0
}) {
  const scrollContainerRef = useRef(null);
  const [styleObj, setStyleObj] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      if (Utilities.mobileAndTabletcheck()) return;

      const containerTop = scrollContainerRef.current.getBoundingClientRect()
        .top;

      if (!scrollContainerRef.current.sidebarHeight) {
        scrollContainerRef.current.sidebarHeight =
          scrollContainerRef.current.children[0].clientHeight;
      }
      const containerHeight = scrollContainerRef.current.getBoundingClientRect()
        .height;
      const sidebarWidth = scrollContainerRef.current.children[0].clientWidth;
      const viewportHeight = window.innerHeight;

      let obj = {};

      if (
        containerHeight - 40 > scrollContainerRef.current.sidebarHeight &&
        viewportHeight - containerTop - containerHeight > 0
      ) {
        if (scrollContainerRef.current.status === 'translate') return;
        scrollContainerRef.current.status = 'translate';
        let top = 'initial';
        obj = {
          position: 'absolute',
          top: top,
          width: `${sidebarWidth}px`,
          paddingTop,
          bottom:
            bottom !== undefined
              ? bottom
              : viewportHeight -
                distanceFromTop -
                scrollContainerRef.current.sidebarHeight -
                20
        };
      } else if (
        containerHeight - 40 > scrollContainerRef.current.sidebarHeight &&
        containerTop - pixelBuffer <= 0 &&
        containerTop -
          viewportHeight +
          scrollContainerRef.current.sidebarHeight -
          distanceFromTop <=
          0
      ) {
        if (scrollContainerRef.current.status === 'fixed') return;
        scrollContainerRef.current.status = 'fixed';
        if (
          scrollContainerRef.current.children[0].classList.contains(
            'search-agent-header'
          )
        ) {
          scrollContainerRef.current.style.paddingTop = `${
            scrollContainerRef.current.children[0].getBoundingClientRect()
              .height
          }px`;
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
    if (!Utilities.mobileAndTabletcheck()) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return [scrollContainerRef, styleObj];
}

export default useStickyPanel;
