import React, { useState, useEffect } from 'react';
import './style.scss';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';

const CustomSectionTwo = ({ heading }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
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
          </div>
          <div className="royal-items-wrapper">
            <div className="royal-leftsection">
              <div>
                {data && data[0] && (
                  <img
                    src={data[0].full_image}
                    alt={data[0].alt_text}
                    className="img-fluid"
                  />
                )}
                {/* <img src={royal} alt="pride" className="img-fluid" /> */}
              </div>
            </div>
            <div className="royal-rightsection">
              <div className="royal-rightside-textwrapper">
                <a
                  href={data && data[0] && data[0].navigation_link}
                  target="_blank"
                >
                  <h3>{data && data[0] && data[0].title}</h3>
                </a>
                <p>10 Jan 2019</p>
              </div>
              <div className="royal-items">
                {data &&
                  data.slice(1, data.length).map((elem, i) => {
                    return (
                      <div key={i} className="item-wrapper">
                        {elem && elem.full_image && (
                          <div className="item-img">
                            <img
                              src={elem.full_image}
                              alt={elem.alt_text}
                              className="img-fluid"
                            />
                          </div>
                        )}
                        {/* <img
                            src={royalSubimg}
                            alt="pride"
                            className="img-fluid"
                          /> */}
                        <div className="royal-item-content">
                          <h3>
                            <a
                              className="item-img"
                              href={elem.navigation_link}
                              target="_blank"
                            >
                              {elem.title}
                            </a>
                          </h3>
                          <p>24 May 2019</p>
                        </div>
                      </div>
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
