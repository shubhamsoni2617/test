import React, { useState, useEffect } from 'react';
import './style.scss';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Constants from '../../../shared/constants';

const TrendingNow = ({}) => {
  useEffect(() => {}, []);
  const getTrandingNow = () => {
    const params = {
      client: Constants.CLIENT
    };
    HomeService.getTrandingNow(params).then(res => {
      if (res && res.data) {
      }
    });
  };
  const trendingNow = [
    {
      id: '1',
      img: 'assets/images/kurios.png',
      category: 'dance'
    },
    {
      id: '2',
      img: 'assets/images/trending-now.jpg',
      category: 'concert'
    },
    {
      id: '3',
      img: 'assets/images/hetty-keos.jpg',
      category: 'concert'
    },
    {
      id: '4',
      img: 'assets/images/trending-now.jpg',
      category: 'comedy'
    },
    {
      id: '5',
      img: 'assets/images/hetty-keos.jpg',
      category: 'theatre'
    },
    {
      id: '6',
      img: 'assets/images/voice-legends.jpg',
      category: 'theatre'
    },
    {
      id: '7',
      img: 'assets/images/hetty-keos.jpg',
      category: 'comedy'
    },
    {
      id: '8',
      img: 'assets/images/aladdin.jpg',
      category: 'concert'
    },
    {
      id: '9',
      img: 'assets/images/voice-legends.jpg',
      category: 'dance'
    }
  ];
  return (
    <section className="trending-now">
      <div className="container-fluid">
        <h2>Trending Now</h2>
        <div className="grid-container">
          <div className="item">
            <div className="item-wrapper">
              <span className="category dance">Dance</span>
              <div className="trending-now-image">
                <div className="item-img">
                  <img
                    src={trendingNow[0].img}
                    className="img-fluid"
                    alt="kurios"
                  />
                </div>
                <div className="video-icon">
                  <img
                    src="assets/images/video-icon.svg"
                    className="img-fluid"
                    alt="video-icon"
                  />
                </div>
              </div>
              <h3>
                {Utilities.showLimitedChars(
                  'Kurios Cabinet of Curiosities',
                  30
                )}
              </h3>
              <p>Thu, 2 May 2019</p>
              <p>{Utilities.showLimitedChars('Esplanade Concert Hall', 15)}</p>
            </div>
          </div>

          {trendingNow.slice(1, trendingNow.length).map((now, index) => {
            return (
              <div key={index} className="item">
                <div className="item-wrapper">
                  <span className={`category ${now.category}`}>
                    {now.category}
                  </span>
                  <div className="trending-now-image">
                    <div className="item-img">
                      <img
                        src={now.img}
                        className="img-fluid"
                        alt="trending-now"
                      />
                    </div>
                  </div>
                  <h3>
                    {Utilities.showLimitedChars(
                      'Singapore Dance Theatre- Season Pass',
                      30
                    )}
                  </h3>
                  <p>Thu, 2 May 2019</p>
                  <p>{Utilities.showLimitedChars('Various Venues', 15)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
