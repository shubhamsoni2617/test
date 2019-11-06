import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Calender from '../Calender';
import thumbnailImg1 from '../../../assets/images/pretty-girls.jpg';
import locationImage from '../../../assets/images/location.svg';
import eventGenere from '../../../assets/images/event.svg';
import eventCalender from '../../../assets/images/cal.svg';
import rightArrowImage from '../../../assets/images/right-arrow.svg';
import seeAllEvent from '../../../assets/images/right-arrow.svg';
import Image from '../Image';

const MegaMenu = props => {
  const { byGenreEvent, featuredEvents } = props;

  return (
    <div className="submenu">
      <h5 className="submenu-title">Find an Event</h5>
      <div className="submenu-wrapper">
        <div className="event-category">
          <p className="submenu-subtitle">
            <img src={eventGenere} alt="" />
            By Genre
          </p>
          <ul>
            {byGenreEvent &&
              byGenreEvent.map(event => {
                return (
                  <li key={event.id}>
                    <Link
                      to={`/events/search?c=${event.id}`}
                      onClick={() => {
                        props.handleMouseStatus(false);
                      }}
                    >
                      {event.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="calender">
          <ul>
            <li className="month submenu-subtitle">
              <img src={eventCalender} alt="" /> By Date
            </li>
          </ul>
          <div className="month-cal">
            <Calender handleEnter={props.handleMouseStatus} />
          </div>
        </div>
        <div className="events-listing">
          <ul>
            <li>
              <h5 className="submenu-subtitle">
                <img src={locationImage} alt="" /> By Venue
              </h5>
            </li>
            <li className="seeall-veneus">
              <Link
                onClick={() => {
                  props.handleMouseStatus(false);
                }}
                to="/venues"
                className="seeall-btn"
              >
                See All Venues <img src={rightArrowImage} alt="" />
              </Link>
            </li>
          </ul>
          <ul className="events-list">
            {props.byVenueEvent &&
              props.byVenueEvent.map(event => {
                return (
                  <li key={event.id}>
                    <Link
                      to={`/events/search?v=${event.id}`}
                      onClick={() => {
                        props.handleMouseStatus(false);
                      }}
                    >
                      {event.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="featured-event">
          <ul>
            <li>
              <h5 className="submenu-subtitle">Featured Events</h5>
            </li>
          </ul>
          <ul>
            {featuredEvents &&
              featuredEvents.length > 0 &&
              featuredEvents.map(event => {
                return (
                  <li key={event.id}>
                    <div className="featured-event-img">
                      {/* <Image
                        src={event.full_image}
                        largeImage={event.full_image}
                      /> */}
                      <img
                        src={event.full_image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="featured-date-category">
                      {/* {event.event_date && (
                        <span className="date">{event.event_date}</span>
                      )} */}
                      {event.primary_genere && (
                        <span
                          className={
                            event.primary_genere === 'Theatre'
                              ? 'category theatre'
                              : `category ${event.primary_genere.toLowerCase()}`
                          }
                        >
                          {event.primary_genere}
                        </span>
                      )}
                    </div>
                    <a href={event.navigation_link || ''} target="_blank">
                      <span className="featured-event-title">
                        {event.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            {featuredEvents && featuredEvents.length === 0 && (
              <div>No Featured Events</div>
            )}
          </ul>
        </div>
      </div>
      <div className="see-all-evevts">
        <Link to="/events" className="seeall-btn">
          See All Events
          <img src={seeAllEvent} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default MegaMenu;

MegaMenu.propTypes = {
  byGenreEvent: PropTypes.array.isRequired,
  byVenueEvent: PropTypes.array.isRequired,
  handleMouseStatus: PropTypes.func.isRequired
};
