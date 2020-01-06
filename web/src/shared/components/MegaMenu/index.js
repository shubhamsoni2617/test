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
import Ellipsis from '../Ellipsis';
import Utilities from '../../utilities';

const MegaMenu = props => {
  const { byGenreEvent, featuredEvents, submenuRef } = props;

  return (
    <div className="submenu" ref={submenuRef}>
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
            <Calender
              handleEnter={props.handleMouseStatus}
              submenuRef={submenuRef}
            />
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
                  submenuRef.current.style.display = 'none';
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
          <ul className="featured-header-title">
            <li>
              <h5 className="submenu-subtitle">Featured Events</h5>
            </li>
          </ul>
          <ul>
            {featuredEvents &&
              featuredEvents.length &&
              featuredEvents.map(event => {
                return (
                  <li>
                    <Link
                      to={`events/${event.navigation_link}` || ''}
                      key={event.id}
                    >
                      <div className="featured-event-img">
                        <Image src={event.full_image} className="img-fluid" />
                      </div>
                      <div className="featured-date-category">
                        <Ellipsis
                          title={event.event_date}
                          lines={2}
                          height={Utilities.mobilecheck() ? 15 : 18}
                          allowTooltip={false}
                          customClass="date"
                        />
                        <span
                          className={
                            event.primary_genere === 'Theatre'
                              ? 'category theatre'
                              : `category ${event.primary_genere.toLowerCase()}`
                          }
                        >
                          {event.primary_genere}
                        </span>
                      </div>
                      <Ellipsis
                        title={event.title}
                        lines={2}
                        height={Utilities.mobilecheck() ? 15 : 18}
                        allowTooltip={false}
                        customClass="featured-event-title"
                      />
                    </Link>
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
        <Link
          to="/events"
          onClick={() => {
            submenuRef.current.style.display = 'none';
          }}
          className="seeall-btn"
        >
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
