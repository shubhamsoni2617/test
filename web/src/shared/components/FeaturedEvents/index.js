import React, { useState, useEffect, useRef } from 'react';
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
            height={Utilities.mobileAndTabletcheck() ? 16 : 20}
          />
          {/* {event && event.title && (
            <h3>
              {Utilities.showLimitedChars(
                event && event.title,
                Utilities.mobilecheck() ? 30 : 40
              )}
            </h3>
          )} */}
          <Ellipsis
            title={event.event_date}
            lines={2}
            height={Utilities.mobilecheck() ? 15 : 18}
            // size={13}
            allowTooltip={true}
            customClass="featured-event-date"
          />
          {/* {event && event.event_date && (
            <p className="featured-event-date">{event.event_date}</p>
          )} */}
          <Ellipsis
            title={event.venue_name}
            lines={1}
            height={Utilities.mobilecheck() ? 15 : 18}
            allowTooltip={false}
            customClass="venue-name"
          />
          {/* {event && event.venue_name && (
            <p className="venue-name">
              {Utilities.showLimitedChars(
                event && event.venue_name,
                Utilities.mobilecheck() ? 35 : 50
              )}
            </p>
          )} */}
        </div>
      </div>
    </a>
  );
};

const FeaturedEvents = props => {
  const { api, heading, cssClassName } = props;
  const element = useRef(null);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [serverErr, setServerErr] = useState('');
  const [loading, setLoading] = useState(true);
  const [callAPI, setCallAPI] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);
  useEffect(() => {
    if (callAPI) {
      getFeaturedEvents();
    }
  }, [callAPI]);
  const scrollHandler = () => {
    if (!callAPI) {
      setCallAPI(true);
    }
  };
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
    rows: 1,
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
    <>
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
    </>
  );

  return (
    <section
      className={
        cssClassName ? `featured-events ${cssClassName}` : 'featured-events'
      }
      ref={element}
    >
      <div className="container-fluid">
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
                return <Item event={event} />;
              })}
          </div>
        ) : (
          <Slider {...settings}>
            {featuredEvents &&
              featuredEvents.length > 0 &&
              featuredEvents.map((event, index, array) => {
                if (index % 2 === 0) {
                  if (array[index] && array[index + 1]) {
                    return (
                      <div className="grid-container" key={index}>
                        <Item event={array[index]} />
                        <Item event={array[index + 1]} />
                      </div>
                    );
                  } else if (array[index]) {
                    return (
                      <div className="grid-container" key={index}>
                        <Item event={array[index]} />
                      </div>
                    );
                  }
                }
              })}
          </Slider>
        )}
      </div>
    </section>
  );
};
export default FeaturedEvents;
