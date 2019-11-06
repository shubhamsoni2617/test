import React, { Fragment } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import royal from '../../../../assets/images/royal.jpg';
import royalSubimg from '../../../../assets/images/royal-img.png';

const CustomSectioTwo = ({ customSectionTwo, loading }) => {
  return !customSectionTwo.length ? (
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
            <h2>Royals</h2>
          </div>
          <div className="royal-items-wrapper">
            <div className="royal-leftsection">
              <div>
                {customSectionTwo && customSectionTwo[0] && (
                  <img
                    src={customSectionTwo[0].full_image}
                    alt={customSectionTwo[0].alt_text}
                    className="img-fluid"
                  />
                )}
                {/* <img src={royal} alt="pride" className="img-fluid" /> */}
              </div>
            </div>
            <div className="royal-rightsection">
              <div className="royal-rightside-textwrapper">
                <a
                  href={
                    customSectionTwo &&
                    customSectionTwo[0] &&
                    customSectionTwo[0].navigation_link
                  }
                  target="_blank"
                >
                  <h3>
                    {customSectionTwo &&
                      customSectionTwo[0] &&
                      customSectionTwo[0].title}
                  </h3>
                </a>
                <p>10 Jan 2019</p>
              </div>
              <div className="royal-items">
                {customSectionTwo &&
                  customSectionTwo
                    .slice(1, customSectionTwo.length)
                    .map((elem, i) => {
                      return (
                        <div key={i} className="item-wrapper">
                          {elem && elem.full_image && (
                            <img
                              src={elem.full_image}
                              alt={elem.alt_text}
                              className="img-fluid"
                            />
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

export default CustomSectioTwo;
