import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Calender from '../Calender';

const MegaMenu = (props) => {

  const featuredEvents = [
    {
      id: "1",
      img: "assets/images/pretty-girls.jpg",
      day: "Sun, 26 May 2019",
      genre: "Theatre",
      text: "This Is What Happens To Pretty Girls"
    },
    {
      id: "2",
      img: "assets/images/pretty-girls.jpg",
      day: "Sun, 26 May 2019",
      genre: "Theatre",
      text: "This Is What Happens To Pretty Girls"
    },
    {
      id: "3",
      img: "assets/images/hetty-keos.jpg",
      day: "Sun, 26 May 2019",
      genre: "Dance",
      text: "Hetty Koes Endang (Indonesia)"
    },
  ];

  const { byGenreEvent } = props;

  return (
    <div className="submenu">
      <h5 className="submenu-title">Find an Event</h5>
      <div className="submenu-wrapper">
        <div className="event-category">
          <p className="submenu-subtitle">
            <img src="assets/images/event.svg" alt="" />
            By Genre
          </p>
          <ul>
            {
              byGenreEvent && byGenreEvent.map((event, index) => {
                return (
                  <li key={event.id}><Link to={`/events?c=${event.name}`} onClick={() => { { props.handleMouseStatus(false) } }}>{event.name}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="calender">
          <ul>
            <li className="month submenu-subtitle"><img src="assets/images/cal.svg"
              alt="" /> By Date</li>
          </ul>
          <div className="month-cal">
            <Calender handleEnter={props.handleMouseStatus} />
          </div>
        </div>
        <div className="events-listing">
          <ul>
            <li>
              <h5 className="submenu-subtitle"><img src="assets/images/location.svg" alt="" /> By Venue</h5>
            </li>
            <li className="seeall-veneus">
              <a className="seeall-btn" >See All Venues <img src="assets/images/right-arrow.svg" alt="" /></a>
            </li>
          </ul>
          <ul className="events-list">
            {
              props.byVenueEvent && props.byVenueEvent.map((event, index) => {
                return (
                  <li key={event.id}>{event.name}</li>
                );
              })
            }
          </ul>
        </div>
        <div className="featured-event">
          <ul>
            <li>
              <h5 className="submenu-subtitle">Featured Events</h5>
            </li>
          </ul>
          <ul>
            {
              featuredEvents.map((event, index) => {
                return (
                  <li key={event.id}>
                    <div className="featured-event-img">
                      <img src={event.img} className="img-fluid"
                        alt="" />
                    </div>
                    <div className="featured-date-category">
                      <span className="date">{event.day}</span>
                      <span
                        className={event.genre === "Theatre" ? "category theatre" : "category Dance"}
                      >
                        {event.genre}
                      </span>
                    </div>
                    <span className="featured-event-title">{event.text}</span>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
      <div className="see-all-evevts">
        <Link to="/events" className="seeall-btn">See All Events
                        <img src="assets/images/right-arrow.svg" alt="" /></Link>
      </div>
    </div>

  );

}

export default MegaMenu;
