import React, { useState, useEffect } from 'react';
import './style.scss';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Arrow from '../../../assets/images/right-arrow.svg';
import Image from '../../../shared/components/Image';

const CustomSectionTwo = ({ heading, customData, isMoreFrom }) => {
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
        <div className="royal-side-padding">
          <div className="section-top-wrapper">
            <h2>{heading}</h2>
            {isMoreFrom && (
              <a href="/articles" target="_blank" className="text-right">
                More from {heading}{' '}
                <img src={Arrow} className="img-fluid" alt="arrow" />
              </a>
            )}
          </div>
          <div className="royal-items-wrapper">
            <a
              href={data && data[0] && data[0].navigation_link}
              target="_blank"
              className="royal-leftsection"
            >
              <div>
                {data && data[0] && (
                  <Image
                    src={data[0].full_image}
                    alt={data[0].alt_text}
                    className="img-fluid"
                    type="BigBanner"
                  />
                )}
              </div>
            </a>
            <div className="royal-rightsection">
              <a
                href={data && data[0] && data[0].navigation_link}
                target="_blank"
                className="royal-rightside-textwrapper"
              >
                <a>
                  <h3>{data && data[0] && data[0].title}</h3>
                </a>
                <p>{data && data[0] && data[0].section_date}</p>
              </a>
              <div className="royal-items">
                {data &&
                  data.slice(1, data.length).map((elem, i) => {
                    return (
                      <a
                        className="item-img"
                        href={elem.navigation_link}
                        target="_blank"
                        key={i}
                        className="item-wrapper"
                      >
                        {elem && elem.full_image && (
                          <div className="item-img">
                            <Image
                              src={elem.full_image}
                              alt={elem.alt_text}
                              className="img-fluid"
                              type="Small"
                            />
                          </div>
                        )}
                        <div className="royal-item-content">
                          <h3>
                            <a>{elem.title}</a>
                          </h3>
                          <p>{elem.section_date}</p>
                        </div>
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSectionTwo;
