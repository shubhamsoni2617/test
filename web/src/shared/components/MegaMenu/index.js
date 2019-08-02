import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calender from '../Calender';
import HomeService from '../../services/HomeService';

class MegaMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            byVenueEvent: [],
            show: false
        };
    }


    componentDidMount() {
        const first = 0;
        const limit = 2;
        const search = "abigo";

        HomeService.getVenues(first, limit, search)
            .then((res) => {
                this.setState({ byVenueEvent: res.data.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleMouseEnter = () => {
        this.setState({ show: true })
    }

    handleEnter = (data) => {
        this.setState({ show: data })
    }

    render() {
        const { byVenueEvent, show } = this.state;

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

        return (
            <li className="has-submenu">
                <Link onMouseEnter={this.handleMouseEnter}>Events</Link>
                <div className="submenu" style={{ display: show ? "block" : "none" }}>
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
                                            <li key={event.id}><Link to={`/events/search?id=${event.id}`}>{event.name}</Link></li>
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
                                <Calender handleEnter={this.handleEnter} />
                            </div>
                        </div>
                        <div className="events-listing">
                            <ul>
                                <li>
                                    <h5 className="submenu-subtitle"><img src="assets/images/location.svg" className="" alt="" /> By Venue</h5>
                                </li>
                                <li className="seeall-veneus">
                                    <a className="seeall-btn" >See All Venues <img src="assets/images/right-arrow.svg" alt="" className="" /></a>
                                </li>
                            </ul>
                            <ul className="events-list">
                                {
                                    byVenueEvent && byVenueEvent.map((event, index) => {
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
                        <a href="/events" className="seeall-btn">See All Events
                        <img src="assets/images/right-arrow.svg" alt="" className="" /></a>
                    </div>
                </div>
            </li>
        );
    }
}

export default MegaMenu;