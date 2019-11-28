import React, { useState, useEffect } from 'react';
import './style.scss';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Arrow from '../../../assets/images/right-arrow.svg';
import Image from '../../../shared/components/Image';
import Utilities from '../../../shared/utilities';

const CustomSectionTwo = ({ heading, customData, isMoreFrom, id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (customData && customData.length > 0) {
      setData(customData);
      setLoading(false);
    } else if (customData && !customData.length) {
      getData();
    }
  }, [customData]);
  const getData = () => {
    const params = {
      client: Constants.CLIENT,
      limit: 3,
      first: 0
    };
    AdvertisementService.getCustomizeSectionTwo(params)
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
  return loading ? (
    <ShimmerEffect
      propCls={`shm_col-xs-6 col-md-6`}
      height={300}
      count={2}
      type="TILE"
    />
  ) : (
      <section className="royal-wrapper">
        <div className="container-fluid">
          <div className="section-top-wrapper">
            <h2>{heading}</h2>
            {isMoreFrom && (
              <div className="carousel-dots">
                <a
                  href={`/explore/articles?c=${id}`}
                  target="_blank"
                  className="text-right"
                >
                  More from {heading}{' '}
                  <img src={Arrow} className="img-fluid" alt="arrow" />
                </a>
              </div>
            )}
          </div>
          <div className="royal-items-wrapper">
            {!Utilities.mobilecheck() && (
              <a
                href={data && data[0] && data[0].navigation_link}
                target="_blank"
                className="royal-leftsection"
              >
                <h3>{data && data[0] && data[0].title}</h3>
                <p>{data && data[0] && data[0].event_date}</p>
              </a>
            )}
            <div className="royal-items">
              {data &&
                data
                  .slice(Utilities.mobilecheck() ? 0 : 1, data.length)
                  .map((elem, i) => {
                    return (
                      <a
                        className="item-img"
                        href={elem.navigation_link}
                        target="_blank"
                        key={i}
                        className="item-wrapper"
                      >
                        <div className="item-img">
                          <Image
                            src={elem.full_image}
                            alt={elem.alt_text}
                            className="img-fluid"
                            type="Smaller"
                          />
                        </div>

                        <div className="royal-item-content">
                          <h3>{elem.title}</h3>
                          <p>{elem.event_date}</p>
                        </div>
                      </a>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>
    );
};

export default CustomSectionTwo;
