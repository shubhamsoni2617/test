import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './style.scss';
import Constants from '../../../shared/constants';
import Utilities from '../../../shared/utilities';
import { CSSTransitionGroup } from 'react-transition-group';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Image from '../../../shared/components/Image';

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
                type="Tile"
              />
            </div>
            {/* <span
              className={`category ${event &&
                event.primary_genere &&
                event.primary_genere.toLowerCase()}`}
            >
              {event.primary_genere}
            </span> */}
            <span
              className={`category ${event &&
                event.primary_genere &&
                event.primary_genere.toLowerCase()}`}
            >
              {event.primary_genere}
            </span>
          </div>
          {event && event.title && <h3>
            {Utilities.showLimitedChars(event && event.title, Utilities.mobilecheck() ? 20 : 30)}
          </h3>}
          {event && event.event_date && <p>{event.event_date}</p>}
          {event && event.venue_name && <p>{event.venue_name}</p>}
        </div>
      </div>
    </a>
  );
};

const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
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
    if (!callAPI && window.pageYOffset >= element.current.offsetTop - 100) {
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
          setTimeout(() => {
            setFeaturedEvents(res.data.data);
            setLoading(false);
          }, 2000);
        }
      })
      .catch(err => {
        if (err && err.response) {
          setServerErr('Something went wrong...');
        }
      });
  };

  const settings = {
    className: 'center',
    dots: true,
    centerMode: false,
    infinite: false,
    slidesToShow: 1,
    speed: 1500,
    rows: 2,
    slidesPerRow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => {
      return <ul style={{ margin: '0px' }}> {dots} </ul>;
    },
    customPaging: i => {
      return (
        <div className="dots-group">
          <span>
            <a href="/" onClick={e => e.preventDefault()}>
              {i}
            </a>
          </span>
        </div>
      );
    }
  };
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
          <div className="carousel-dots">
            <a href="/events">
              See all{' '}
              <img
                src="assets/images/right-arrow.svg"
                className="img-fluid"
                alt="arrow"
              />
            </a>
          </div>
        </div>
        <CSSTransitionGroup
          transitionName="shimmer-carousel"
          transitionEnter={true}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {loading ? (
            <ShimmerEffect
              propCls={`shm_col-xs-6 col-md-6`}
              height={150}
              count={2}
              type="TILE"
            />
          ) : Utilities.mobilecheck() ? (
            <div
              style={{ width: '30em', overflowX: 'auto', whiteSpace: 'nowrap' }}
            >
              <div className="grid-container">
                {featuredEvents &&
                  featuredEvents.map((event, i) => {
                    event.venue_name = Utilities.showLimitedChars(
                      event.venue_name,
                      20
                    );
                    return <Item event={event} key={i} />;
                  })}
              </div>
            </div>
          ) : (
                <Slider {...settings}>
                  {featuredEvents &&
                    featuredEvents.map((event, index) => {
                      return (
                        <div className="grid-container" key={index}>
                          <Item event={event} />
                        </div>
                      );
                    })}
                </Slider>
              )}
        </CSSTransitionGroup>
      </div>
    </section>
  );
};

export default FeaturedEvents;
