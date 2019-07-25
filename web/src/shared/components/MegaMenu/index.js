import React, { Component } from 'react';
import Calender from '../Calender';

class MegaMenu extends Component {

    render() {

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

        const { byGenreEvent } = this.props;
        const byVenueEvent = [
            { id: "1", text: "Esplanade Concert Hall" },
            { id: "2", text: "Resorts World™ Sentosa Theatre, Resorts World Sentosa" },
            { id: "3", text: "Sands Theatre at Marina Bay Sands" },
            { id: "4", text: "The Star Theatre, The Star Performing Arts Centre" },
            { id: "5", text: "Shine Auditorium" },
        ];

        return (
            <div className="submenu">
                <h5 className="submenu-title">Find an Event</h5>
                <div className="submenu-wrapper">
                    <div className="event-category">
                        <p className="submenu-subtitle">
                            <img src="assets/images/event.svg" className="" alt="" />
                            By Genre
                        </p>
                        <ul>
                            {
                                byGenreEvent && byGenreEvent.map((event, index) => {
                                    return (
                                        <li key={event.id}><a href="/">{event.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="calender">
                        <ul>
                            <li className="month submenu-subtitle"><img src="assets/images/cal.svg"
                                className="" alt="" /> By Date</li>
                        </ul>
                        <div className="month-cal">
                            <Calender />
                        </div>
                    </div>
                    <div className="events-listing">
                        <ul>
                            <li>
                                <h5 className="submenu-subtitle"><img src="assets/images/location.svg" className="" alt="" /> By Venue</h5>
                            </li>
                            <li className="seeall-veneus">
                                <a className="seeall-btn" href="/">See All Venues <img src="assets/images/right-arrow.svg" alt="" className="" /></a>
                            </li>
                        </ul>
                        <ul className="events-list">
                            {
                                byVenueEvent.map((event, index) => {
                                    return (
                                        <li key={event.id}>{event.text}</li>
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
                                            <img src={event.img} className="img-fluid"
                                                alt="" />
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
                    <a href="/" className="seeall-btn">See All Events
                        <img src="assets/images/right-arrow.svg" alt="" className="" /></a>
                </div>
            </div>
        );
    }
}

export default MegaMenu;