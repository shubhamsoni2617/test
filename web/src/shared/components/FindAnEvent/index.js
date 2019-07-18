import React, { Component } from 'react';

class FindAnEvent extends Component {

    render() {

        const featuredEvents = [
            {
                id:"1",
                img: "assets/images/pretty-girls.jpg",
                day: "Sun, 26 May 2019",
                genre: "Theatre",
                text: "This Is What Happens To Pretty Girls"
            },
            {
                id:"2",
                img: "assets/images/pretty-girls.jpg",
                day: "Sun, 26 May 2019",
                genre: "Theatre",
                text: "This Is What Happens To Pretty Girls"
            },
            {
                id:"3",
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
                                byGenreEvent.map((event, index) => {
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
                            <li className="cal-month-name">
                                <span>May</span>
                                <span className="prev-month"><img src="assets/images/right-arrow.svg" alt="" className="" /></span>
                                <span className="next-month"><img src="assets/images/right-arrow.svg" alt="" className="" /></span>
                            </li>
                        </ul>
                        <div className="month-cal">
                            <div className="calendar-date">
                                <div className="calendar-day">S</div>
                                <div className="calendar-day">M</div>
                                <div className="calendar-day">T</div>
                                <div className="calendar-day">W</div>
                                <div className="calendar-day">T</div>
                                <div className="calendar-day">F</div>
                                <div className="calendar-day">S</div>
                                <div className="calendar-prev-number calendar-number">27</div>
                                <div className="calendar-prev-number calendar-number">28</div>
                                <div className="calendar-prev-number calendar-number">29</div>
                                <div className="calendar-prev-number calendar-number">30</div>
                                <div className="calendar-number">1</div>
                                <div className="calendar-number">2</div>
                                <div className="calendar-number">3</div>
                                <div className="calendar-number">4</div>
                                <div className="calendar-number">5</div>
                                <div className="calendar-number">6</div>
                                <div className="calendar-number">7</div>
                                <div className="calendar-number">8</div>
                                <div className="calendar-number">9</div>
                                <div className="calendar-number">10</div>
                                <div className="calendar-number">11</div>
                                <div className="calendar-number">12</div>
                                <div className="calendar-number">13</div>
                                <div className="calendar-number">14</div>
                                <div className="calendar-number">15</div>
                                <div className="calendar-number">16</div>
                                <div className="calendar-number">17</div>
                                <div className="calendar-number">18</div>
                                <div className="calendar-number">19</div>
                                <div className="calendar-number">20</div>
                                <div className="calendar-number">21</div>
                                <div className="calendar-number">22</div>
                                <div className="calendar-number">23</div>
                                <div className="calendar-number">24</div>
                                <div className="calendar-number">25</div>
                                <div className="calendar-number calendar-number-current">26</div>
                                <div className="calendar-number">27</div>
                                <div className="calendar-number">28</div>
                                <div className="calendar-number">29</div>
                                <div className="calendar-number">30</div>
                                <div className="calendar-number">31</div>
                            </div>
                        </div>
                        <div className="calender-action">
                            <form>
                                <div className="form-group">
                                    <label>From</label>
                                    <input type="text" className="form-control" placeholder="06 May 2019" />
                                </div>
                                <div className="form-group">
                                    <label>To</label>
                                    <input type="text" className="form-control" placeholder="15 May 2019" />
                                </div>
                                <div className="calender-action-btn">
                                    <a href="/" className="cal-cancel-btn">
                                        <img src="assets/images/cross-grey.svg" className="" alt="" />
                                        <img src="assets/images/cross-white.svg" alt="" className="active" />
                                    </a>
                                    <a href="/" className="cal-apply-btn active">
                                        <img src="assets/images/tick-grey.svg" className="" alt="" />
                                        <img src="assets/images/tick-white.svg" className="active" alt="" />
                                    </a>
                                </div>
                            </form>
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

export default FindAnEvent;