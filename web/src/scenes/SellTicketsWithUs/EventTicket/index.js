import React from 'react';
import './style.scss';
import eventIcon1 from '../../../../src/assets/images/Years-icon.svg';
import eventIcon2 from '../../../../src/assets/images/tickets-icon.svg';
import eventIcon3 from '../../../../src/assets/images/Partners-icon.svg';
import eventIcon4 from '../../../../src/assets/images/events-icon.svg';

const EventTicket = ({ events, partnership, tickets, year }) => {
  return (
    <section className="event-list-wrapper">
      <div className="container">
        <div className="event-list">
          <div className="event-list-icon">
            <img src={eventIcon1} alt="Years-icon" />
            <div className="year-content">
              <span>{year}</span>
              <p>Years Ticketing</p>
            </div>
          </div>
          <div className="event-list-icon">
            <img src={eventIcon2} alt="tickets-icon" />
            <div className="year-content">
              <span>{tickets}</span>
              <p>Tickets</p>
            </div>
          </div>
          <div className="event-list-icon">
            <img src={eventIcon3} alt="Partners-icon" />
            <div className="year-content">
              <span>{partnership}</span>
              <p>
                Partnerships with promotors,
              <br /> venues & attractions
            </p>
            </div>
          </div>
          <div className="event-list-icon">
            <img src={eventIcon4} alt="Events-icon" />
            <div className="year-content">
              <span>{events}</span>
              <p>Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTicket;
