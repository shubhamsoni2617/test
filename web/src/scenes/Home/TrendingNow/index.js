import React, { useState, useEffect, Fragment } from 'react';
import './style.scss';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Constants from '../../../shared/constants';
import Image from '../../../shared/components/Image';
import { CSSTransition } from 'react-transition-group';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import videoImage from '../../../assets/images/video-icon.svg';
import { OneBigEightSmall } from '../../../shared/components/ShimmerEffect/HomeShimmer';
import Ellipsis from '../../../shared/components/Ellipsis';
import EventHeading from '../../../shared/components/EventHeading';

const TrendingNow = ({ heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
            setData(res.data.data);
          }, 2000);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  if (!loading && data && data.length === 0) {
    return null;
  }

  if (error) return null;

  return (
    <section className="trending-now">
      <div className="container-fluid">
        <h2>{heading}</h2>

        {/* <CSSTransitionGroup
          transitionName="shimmer-carousel"
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        > */}
        {loading ? (
          <OneBigEightSmall />
        ) : (
          <div className="grid-container">
            <div className="item">
              <div className="item-wrapper">
                <span className="category dance">Dance</span>
                <div className="trending-now-image">
                  <div className="item-img">
                    {data && data[0] && (
                      <Image
                        src={data[0].vertical_image}
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
                {/* <h3>
                  {Utilities.showLimitedChars(
                    data && data[0] && data[0].title,
                    Utilities.mobilecheck() ? 25 : 50
                  )}
                </h3> */}
                <EventHeading
                  title={data && data[0] && data[0].title}
                  lines={2}
                  height={Utilities.mobileAndTabletcheck() ? 16 : 20}
                />
                {/* <p>{data && data[0] && data[0].event_date}</p> */}
                <Ellipsis
                  title={data && data[0] && data[0].event_date}
                  lines={2}
                  height={Utilities.mobilecheck() ? 20 : 18}
                  // size={13}
                  allowTooltip={true}
                />
                {/* <p>
                  {Utilities.showLimitedChars(
                    data && data[0] && data[0].venue_name,
                    Utilities.mobilecheck() ? 25 : 50
                  )}
                </p> */}
                <Ellipsis
                  title={data && data[0] && data[0].venue_name}
                  lines={1}
                  height={Utilities.mobilecheck() ? 20 : 18}
                  allowTooltip={false}
                />
              </div>
            </div>

            {data &&
              data.slice(1, data.length).map((now, index) => {
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
                          {now && (
                            <Image
                              src={now.horizontal_image}
                              className="img-fluid"
                              alt="trending-now"
                              type="Vertical"
                            />
                          )}
                        </div>
                      </div>
                      {/* <h3>
                        {Utilities.showLimitedChars(
                          now && now.title,
                          Utilities.mobilecheck() ? 25 : 40
                        )}
                      </h3> */}
                      <EventHeading
                        title={now && now.title}
                        lines={2}
                        height={Utilities.mobileAndTabletcheck() ? 16 : 20}
                      />
                      {/* <p>{now && now.event_date}</p> */}
                      <Ellipsis
                        title={now && now.event_date}
                        lines={2}
                        height={Utilities.mobilecheck() ? 15 : 18}
                        // size={13}
                        allowTooltip={true}
                      />
                      {/* <p>
                        {Utilities.showLimitedChars(
                          now && now.venue_name,
                          Utilities.mobilecheck() ? 25 : 40
                        )}
                      </p> */}
                      <Ellipsis
                        title={now && now.venue_name}
                        lines={1}
                        height={Utilities.mobilecheck() ? 15 : 18}
                        allowTooltip={false}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {/* </CSSTransitionGroup> */}
      </div>
    </section>
  );
};

export default TrendingNow;
