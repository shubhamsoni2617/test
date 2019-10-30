import { useState, useEffect } from 'react';

export default function useRemovefixedBody(current) {
  useEffect(() => {
    return () => {
      document &&
        document.getElementsByTagName('body')[0].classList.remove('fixed-body');
    };
  }, [current]);
}
