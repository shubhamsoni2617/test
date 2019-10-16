import React, { useState, useEffect } from 'react';
import AdvertisementService from '../../../../shared/services/AdvertisementService';
import Constants from '../../../../shared/constants';
import Image from '../../../../shared/components/Image';
import './style.scss';

const MostViewed = () => {
  const [adv, setAdv] = useState(null);
  useEffect(() => {
    fetchMostViewedService();
  }, []);
  const fetchMostViewedService = () => {
    const params = {
      client: Constants.CLIENT
    };
    AdvertisementService.getGiftCardService(params)
      .then(res => {
        console.log(res.data.data);
        setAdv(res.data.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="">
      {adv && (
        <a href={adv.navigation_link}>
          <Image src={adv.full_image} className="img-fluid" />
        </a>
      )}
    </div>
  );
};

export default MostViewed;
