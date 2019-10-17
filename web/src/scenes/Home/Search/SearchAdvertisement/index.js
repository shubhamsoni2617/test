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
        setAdv(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <ul className="advertisment-listing">
        {adv &&
          adv.map((elem, index) => {
            return (
              <li key={elem.primary_genere + index}>
                <div className="most-viewed-img">
                  <Image src={elem.full_image} className="img-fluid" />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MostViewed;
