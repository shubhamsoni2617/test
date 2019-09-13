import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Calender from '../Calender';
import thumbnailImg1 from '../../../assets/images/pretty-girls.jpg';
import thumbnailImg2 from '../../../assets/images/hetty-keos.jpg';
import locationImage from '../../../assets/images/location.svg';
import eventGenere from '../../../assets/images/event.svg';
import eventCalender from '../../../assets/images/cal.svg';
import rightArrowImage from '../../../assets/images/right-arrow.svg';
import seeAllEvent from '../../../assets/images/right-arrow.svg';

const MegaMenu = props => {
  const featuredEvents = [
    {
      id: '1',
      img: thumbnailImg1,
      day: 'Sun, 26 May 2019',
      genre: 'Theatre',
      text: 'This Is What Happens To Pretty Girls'
    },
    {
      id: '2',
      img: thumbnailImg1,
      day: 'Sun, 26 May 2019',
      genre: 'Theatre',
      text: 'This Is What Happens To Pretty Girls'
    },
    {
      id: '3',
      img: thumbnailImg2,
      day: 'Sun, 26 May 2019',
      genre: 'Dance',
      text: 'Hetty Koes Endang (Indonesia)'
    }
  ];

  const { byGenreEvent } = props;

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
              <a
                href="/"
                onClick={e => e.preventDefault()}
                className="seeall-btn"
              >
                See All Venues <img src={rightArrowImage} alt="" />
              </a>
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
            {featuredEvents.map(event => {
              return (
                <li key={event.id}>
                  <div className="featured-event-img">
                    <img src={event.img} className="img-fluid" alt="" />
                  </div>
                  <div className="featured-date-category">
                    <span className="date">{event.day}</span>
                    <span
                      className={
                        event.genre === 'Theatre'
                          ? 'category theatre'
                          : 'category Dance'
                      }
                    >
                      {event.genre}
                    </span>
                  </div>
                  <span className="featured-event-title">{event.text}</span>
                </li>
              );
            })}
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
