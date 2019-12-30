import React, { useState, useEffect, useRef, Fragment } from 'react';
import Slider from 'react-slick';
import './style.scss';
import Constants from '../../constants';
import Utilities from '../../utilities';
import ShimmerEffect from '../ShimmerEffect';
import Image from '../Image';
import Ellipsis from '../Ellipsis';
import EventHeading from '../EventHeading';
const Item = ({ event }) => {
  return (
    <a href={event && event.navigation_link} target="_blank">
      <div className="item">
        <div className="item-wrapper">
          <div className="featured-item-img">
            <div className="item-img">
              <Image
                src={event && event.full_image}
                className="img-fluid"
                type="Small"
              />
            </div>
            <span
              className={`category ${event &&
                event.primary_genre &&
                event.primary_genre.toLowerCase()}`}
            >
              {event.primary_genre}
            </span>
          </div>
          <EventHeading
            title={event && event.title}
            lines={2}
            height={
              Utilities.mobilecheck()
                ? 18
                : Utilities.mobileAndTabletcheck()
                ? 20
                : 20
            }
          />
          <Ellipsis
            title={event.event_date}
            lines={1}
            height={Utilities.mobilecheck() ? 15 : 18}
            customClass="featured-event-date"
          />
          <Ellipsis
            title={event.venue_name}
            lines={1}
            height={Utilities.mobilecheck() ? 15 : 18}
            allowTooltip={false}
            customClass="venue-name"
          />
        </div>
      </div>
    </a>
  );
};

const FeaturedEvents = props => {
  const { api, heading, cssClassName } = props;
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [serverErr, setServerErr] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedEvents();
  }, []);

  const getFeaturedEvents = () => {
    const params = {
      client: Constants.CLIENT
    };
    api(params)
      .then(res => {
        if (res && res.data) {
          setFeaturedEvents(res.data.data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (err && err.response) {
          setServerErr('Something went wrong...');
        }
      });
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 4
        }
      }
    ]
  };

  if (!loading && featuredEvents && featuredEvents.length === 0) {
    return null;
  }

  let shimmerWebTab = (
    <Fragment>
      <ShimmerEffect
        height={150}
        count={Utilities.mobileAndTabletcheck() ? 4 : 5}
        type="TILE"
        propCls={`shm_col-xs-2 col-md-2`}
      />
      <br />
      <ShimmerEffect
        height={150}
        count={Utilities.mobileAndTabletcheck() ? 4 : 5}
        type="TILE"
        propCls={`shm_col-xs-2 col-md-2`}
      />
    </Fragment>
  );

  return (
    <section
      className={
        cssClassName ? `featured-events ${cssClassName}` : 'featured-events'
      }
    >
      <div className="container-fluid custom-container">
        <div className="section-top-wrapper">
          <h2>{heading}</h2>
          {!props.explore && (
            <div className="carousel-dots">
              {props.seeAll && (
                <a href="/events">
                  See all{' '}
                  <img
                    src="assets/images/right-arrow.svg"
                    className="img-fluid"
                    alt="arrow"
                  />
                </a>
              )}
            </div>
          )}
        </div>
        {loading ? (
          Utilities.mobilecheck() ? (
            <ShimmerEffect
              height={60}
              count={2}
              type="TILE"
              propCls={`shm_col-xs-2 col-md-2`}
            />
          ) : (
            shimmerWebTab
          )
        ) : Utilities.mobilecheck() ? (
          <div
            className="featured-wrapper"
            style={{ width: '30em', overflowX: 'auto', whiteSpace: 'nowrap' }}
          >
            {featuredEvents &&
              featuredEvents.map(event => {
                return <Item event={event} key={event.id} />;
              })}
          </div>
        ) : (
          <Slider {...settings}>
            {featuredEvents &&
              featuredEvents.length > 0 &&
              featuredEvents.map((event, index, array) => {
                return (
                  <div className="grid-container" key={index}>
                    <Item event={array[index]} />
                  </div>
                );
              })}
          </Slider>
        )}
      </div>
    </section>
  );
};
export default FeaturedEvents;
