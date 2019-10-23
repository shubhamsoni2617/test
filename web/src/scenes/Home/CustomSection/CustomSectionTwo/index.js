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
              <div className="carousel-dots">
                <a href="/events">
                  More from Royals {' '}
                  <img
                    src="assets/images/right-arrow.svg"
                    className="img-fluid"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
            <div className="royal-items-wrapper">
              <div className="royal-leftsection">
                <a
                  href={
                    customSectionTwo &&
                    customSectionTwo[0] &&
                    customSectionTwo[0].navigation_link
                  }
                  target="_blank"
                >
                  <div>
                    {/* {customSectionTwo && customSectionTwo[0] && (
                    <Image
                      src={customSectionTwo[0].full_image}
                      alt={customSectionTwo[0].alt}
                      type="BigBanner"
                    />
                  )} */}
                    <img src={royal} alt="pride" className="img-fluid" />
                  </div>
                </a>
              </div>
              <div className="royal-rightsection">
                <h3>{customSectionTwo && customSectionTwo[0] && customSectionTwo[0].title}</h3>
                <p>10 Jan 2019</p>
                <div className="royal-items">
                  {customSectionTwo &&
                    customSectionTwo.slice(1, customSectionTwo.length).map((elem, i) => {
                      return (
                        <div key={i} className="item-wrapper">
                          <a className="item-img" href={elem.navigation_link} target="_blank">
                            {/* {elem && elem.full_image && (
                            <Image
                              src={elem.full_image}
                              alt={elem.alt}
                              type="Horizontal"
                            />
                          )} */}
                            <img src={royalSubimg} alt="pride" className="img-fluid" />
                          </a>
                          <div className="royal-item-content">
                            <h3>{elem.title}</h3>
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
