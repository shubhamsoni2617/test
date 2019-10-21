import React, { Fragment } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';

const CustomSectioTwo = ({ customSectionTwo, loading }) => {
  return !customSectionTwo.length ? (
    <ShimmerEffect
      propCls={`shm_col-xs-6 col-md-6`}
      height={300}
      count={2}
      type="TILE"
    />
  ) : (
      <section className="Royals">
        <div className="container-fluid">
          <div className="container row w">
            <div className="col-lg-6">
              <h1>
                {customSectionTwo && customSectionTwo[0] && customSectionTwo[0].title}
              </h1>
              <a
                href={
                  customSectionTwo &&
                  customSectionTwo[0] &&
                  customSectionTwo[0].navigation_link
                }
                target="_blank"
              >
                <div style={{ margin: '20px' }}>
                  {customSectionTwo && customSectionTwo[0] && (
                    <Image
                      src={customSectionTwo[0].full_image}
                      alt={customSectionTwo[0].alt}
                      type="BigBanner"
                    />
                  )}
                </div>
              </a>
            </div>
            <div className="col-lg-6">
              {customSectionTwo &&
                customSectionTwo.slice(1, customSectionTwo.length).map((elem, i) => {
                  return (
                    <div key={i}>
                      <h3>{elem.title}</h3>
                      <a href={elem.navigation_link} target="_blank">
                        <div style={{ margin: '20px' }}>
                          {elem && elem.full_image && (
                            <Image
                              src={elem.full_image}
                              alt={elem.alt}
                              type="Horizontal"
                            />
                          )}
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
};

export default CustomSectioTwo;
