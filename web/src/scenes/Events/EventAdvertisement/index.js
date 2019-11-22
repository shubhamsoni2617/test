import React, { useState, useEffect } from 'react';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Constants from '../../../shared/constants';
import Image from '../../../shared/components/Image';
import './style.scss';

const EventAdvertisement = ({ shimmer }) => {
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetchMostViewedService();
  }, []);

  useEffect(() => {
    if (!shimmer) {
      setTimeout(() => {
        setFlag(true);
      }, 1000);
    }
  }, [shimmer]);

  const fetchMostViewedService = () => {
    const params = {
      client: Constants.CLIENT,
      first: 0,
      limit: 2
    };
    AdvertisementService.getEventListService(params)
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="event-listing-ads">
      <div className="">
        <ul className="advertisment-listing">
          {data &&
            flag &&
            data.map((elem, index) => {
              return (
                <li key={elem.primary_genere + index}>
                  <div className="most-viewed-img">
                    <a href={elem.navigation_link} target="_blank">
                      <Image
                        src={elem.full_image}
                        type="MediumHorizontal"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default EventAdvertisement;
