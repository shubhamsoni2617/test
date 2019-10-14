import { useEffect, useState } from 'react';

function useOrientation() {
  const [orientation, setOrientation] = useState('');
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > window.innerHeight) {
        setOrientation('landscape');
      } else {
        setOrientation('landscape');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [orientation];
}

export default useOrientation;
