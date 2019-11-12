import React, { useState, useEffect, Fragment } from 'react';
import './style.scss';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Constants from '../../../shared/constants';
import Image from '../../../shared/components/Image';
import { CSSTransitionGroup } from 'react-transition-group';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';

const TrendingNow = ({}) => {
  const [trendingNow, setTrandingNow] = useState([]);
  const [loading, setLoading] = useState(true);

  const [serverErr, setServerErr] = useState('');

  useEffect(() => {
    getTrandingNow();
  }, []);
  const getTrandingNow = () => {
    const params = {
      client: Constants.CLIENT,
      first: 0,
      limit: 9
    };
    HomeService.getTrandingNow(params)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setLoading(false);
            setTrandingNow(res.data.data);
          }, 2000);
        }
      })
      .catch(err => {
        if (err && err.response) {
          setServerErr(err.response.data);
        }
      });
  };

  return (
    <section className="trending-now">
      <div className="container-fluid">
        <h2>Trending Now</h2>

        <CSSTransitionGroup
          transitionName="shimmer-carousel"
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {loading ? (
            <ShimmerEffect
              propCls={`shm_col-xs-6 col-md-2`}
              height={300}
              count={2}
              type="TILE"
            />
          ) : (
            <div className="grid-container">
              <div className="item">
                <div className="item-wrapper">
                  <span className="category dance">Dance</span>
                  <div className="trending-now-image">
                    <div className="item-img">
                      {trendingNow && trendingNow[0] && (
                        <Image
                          src={trendingNow[0].vertical_image}
                          className="img-fluid"
                          alt="kurios"
                          type="Vertical"
                        />
                      )}
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
                      trendingNow && trendingNow[0] && trendingNow[0].title,
                      Utilities.mobilecheck() ? 25 : 50
                    )}
                  </h3>
                  <p>
                    {trendingNow && trendingNow[0] && trendingNow[0].event_date}
                  </p>
                  <p>
                    {Utilities.showLimitedChars(
                      trendingNow &&
                        trendingNow[0] &&
                        trendingNow[0].venue_name,
                      Utilities.mobilecheck() ? 25 : 50
                    )}
                  </p>
                </div>
              </div>

              {trendingNow &&
                trendingNow.slice(1, trendingNow.length).map((now, index) => {
                  return (
                    <div key={index} className="item">
                      <div className="item-wrapper">
                        <span
                          className={`category ${now &&
                            now.primary_genre.toLowerCase()}`}
                        >
                          {now && now.primary_genre}
                        </span>
                        <div className="trending-now-image">
                          <div className="item-img">
                            {now && now.horizontal_image && (
                              <Image
                                src={now && now.horizontal_image}
                                className="img-fluid"
                                alt="trending-now"
                                type="Horizontal"
                              />
                            )}
                          </div>
                        </div>
                        <h3>
                          {Utilities.showLimitedChars(
                            now && now.title,
                            Utilities.mobilecheck() ? 25 : 40
                          )}
                        </h3>
                        <p>{now && now.event_date}</p>
                        <p>
                          {Utilities.showLimitedChars(
                            now && now.venue_name,
                            Utilities.mobilecheck() ? 25 : 40
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </CSSTransitionGroup>
      </div>
    </section>
  );
};

export default TrendingNow;
