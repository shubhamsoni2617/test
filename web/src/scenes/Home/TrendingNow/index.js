import React, { useState, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Constants from '../../../shared/constants';
import Image from '../../../shared/components/Image';
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
          setLoading(false);
          setData(res.data.data);
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
      <div className="container-fluid custom-container">
        <h2>{heading}</h2>
        {loading ? (
          <OneBigEightSmall />
        ) : (
            <div className="grid-container">
              <Link to={`/events/${data[0] && data[0].alias}`} className="item">
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
                  <EventHeading
                    title={data && data[0] && data[0].title}
                    lines={2}
                    height={Utilities.mobilecheck() ? 18 : Utilities.mobileAndTabletcheck() ? 20 : 20}
                  />
                  <Ellipsis
                    title={data && data[0] && data[0].event_date}
                    lines={1}
                    height={Utilities.mobilecheck() ? 20 : 18}
                    // size={13}
                    allowTooltip={true}
                  />
                  <Ellipsis
                    title={data && data[0] && data[0].venue_name}
                    lines={1}
                    height={Utilities.mobilecheck() ? 20 : 18}
                    allowTooltip={false}
                  />
                </div>
              </Link>

              {data &&
                data.slice(1, data.length).map((now, index) => {
                  return (
                    <Link
                      to={`/events/${now.alias}`}
                      key={index}
                      className="item"
                    >
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
                                type="MediumVertical"
                              />
                            )}
                          </div>
                        </div>
                        <EventHeading
                          title={now && now.title}
                          lines={2}
                          // height={Utilities.mobileAndTabletcheck() ? 20 : 20}
                          height={Utilities.mobilecheck() ? 18 : Utilities.mobileAndTabletcheck() ? 20 : 20}
                        />
                        <Ellipsis
                          title={now && now.event_date}
                          lines={1}
                          height={Utilities.mobilecheck() ? 17 : 18}
                          // size={13}
                          allowTooltip={true}
                        />
                        <Ellipsis
                          title={now && now.venue_name}
                          lines={1}
                          height={Utilities.mobilecheck() ? 17 : 18}
                          allowTooltip={false}
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          )}
      </div>
    </section>
  );
};

export default TrendingNow;
