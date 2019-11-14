import React, { useState, useEffect } from 'react';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';

const GiftCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const params = {
      client: Constants.CLIENT,
      limit: 1,
      first: 0,
      sort_order: 'DESC'
    };
    AdvertisementService.getSidePanelBetweenTopPicksFeaturedEvents(params)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setData(res.data.data);
            setLoading(false);
          }, 2000);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  };
  if (!loading && data && data.length === 0) {
    return null;
  }
  return (
    <>
      {data.map(elem => {
        return (
          <div className="adds-container" key={elem.title}>
            <a
              href={elem && elem.navigation_link}
              className="giftcard-anchor"
              target="_blank"
              key={elem.title}
            >
              <img
                src={elem && elem.full_image}
                className="img-fluid"
                alt={elem && elem.alt_text}
                title={elem && elem.title}
              />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default GiftCard;
