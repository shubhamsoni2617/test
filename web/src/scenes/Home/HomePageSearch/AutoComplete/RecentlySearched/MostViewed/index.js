import React, { useState, useEffect } from 'react';
import AdvertisementService from '../../../../../../shared/services/AdvertisementService';
import Constants from '../../../../../../shared/constants';
import Image from '../../../../../../shared/components/Image';

const MostViewed = ({ mostViewed }) => {
  // const [mostViewed, setMostViewed] = useState(null);
  // useEffect(() => {
  //   fetchMostViewedService();
  // }, []);
  // const fetchMostViewedService = () => {
  //   const params = {
  //     client: Constants.CLIENT,
  //     limit: 3,
  //     first: 0
  //   };
  //   AdvertisementService.getMostViewedService(params)
  //     .then(res => {
  //       setMostViewed(res.data.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className="most-viewed">
      <h3>Most Viewed</h3>
      <ul className="advertisment-listing">
        {mostViewed &&
          mostViewed.map((elem, index) => {
            return (
              <li key={index}>
                <div className="most-viewed-img">
                  <Image src={elem.full_image} className="img-fluid" />
                </div>
                <span className="category musical">{elem.primary_genre}</span>
                <h4>{elem.title}</h4>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MostViewed;
