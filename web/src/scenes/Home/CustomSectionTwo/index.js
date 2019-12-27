import React, { useState, useEffect } from 'react';
import './style.scss';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Arrow from '../../../assets/images/right-arrow.svg';
import Image from '../../../shared/components/Image';
import Utilities from '../../../shared/utilities';
import { OneBigTwoSmall } from '../../../shared/components/ShimmerEffect/HomeShimmer';
import Ellipsis from '../../../shared/components/Ellipsis';
import EventHeading from '../../../shared/components/EventHeading';

const CustomSectionTwo = ({
  heading,
  customData,
  url,
  isMoreFrom,
  orientation
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (customData && customData.length > 0) {
      setData(customData);
      setLoading(false);
    } else if (customData && !customData.length && !orientation) {
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
          setData(res.data.data);
          setLoading(false);
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
    Utilities.mobilecheck() ? (
      <ShimmerEffect
        height={60}
        count={2}
        type="TILE"
        propCls={`shm_col-xs-2 col-md-2`}
      />
    ) : (
      <OneBigTwoSmall />
    )
  ) : (
    <section className="royal-wrapper">
      <div className="container-fluid custom-container">
        <div className="royal-side-padding">
          <div className="section-top-wrapper">
            <h2>{heading}</h2>
            <div className="carousel-dots">
              {isMoreFrom && (
                <a href={url && url} target="_blank" className="text-right">
                  More from {heading}{' '}
                  <img src={Arrow} className="img-fluid" alt="arrow" />
                </a>
              )}
            </div>
          </div>
          <div className="royal-items-wrapper">
            {!Utilities.mobilecheck() && (
              <a
                href={data && data[0] && data[0].navigation_link}
                target="_blank"
                className="royal-leftsection"
              >
                <div>
                  <Image
                    src={data[0].full_image}
                    alt={data[0].alt_text}
                    className="img-fluid"
                    type="BigBanner"
                  />
                </div>
                {/* {Utilities.mobilecheck() && (
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
              )} */}
              </a>
            )}
            <div className="royal-rightsection">
              {!Utilities.mobilecheck() && (
                <a
                  href={data && data[0] && data[0].navigation_link}
                  target="_blank"
                  className="royal-rightside-textwrapper"
                >
                  <EventHeading
                    title={data && data[0] && data[0].title}
                    lines={2}
                    height={Utilities.mobileAndTabletcheck() ? 26 : 26}
                  />
                  {data && data[0] && data[0].description && (
                    <Ellipsis
                      title={data && data[0] && data[0].description}
                      lines={1}
                      height={Utilities.mobilecheck() ? 25 : 30}
                    />
                  )}
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
                              type="BigBanner"
                            />
                          </div>

                          <div className="royal-item-content">
                            <a>
                              <EventHeading
                                title={elem.title}
                                lines={2}
                                height={
                                  Utilities.mobileAndTabletcheck() ? 20 : 20
                                }
                              />
                            </a>
                            {elem.description && (
                              <Ellipsis
                                title={elem.description}
                                lines={1}
                                height={Utilities.mobilecheck() ? 15 : 18}
                              />
                            )}
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
