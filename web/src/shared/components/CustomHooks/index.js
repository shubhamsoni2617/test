import { useState, useEffect } from 'react';
import ContactUsService from '../../services/ContactUsService';

const useCustomWidth = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    handleWidth();
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  });
  const handleWidth = () => {
    setWidth(window.innerWidth);
  };
  return [width];
};

const useCustomContactDetail = () => {
  const [contactDetail, setContactDetail] = useState({});

  useEffect(() => {
    ContactUsService.getContactDetail()
      .then(res => {
        if (res && res.data) {
          setContactDetail(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return [contactDetail];
};

export { useCustomWidth, useCustomContactDetail };
