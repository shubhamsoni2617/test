import React from 'react';
import './style.scss';

const DropDown = (props) => {
    const { showElementsInHeader, byGenreEvent } = props;
    return (
        <li className="dropdown">
            <a className="dropbtn" href="/">More
                <span class="dropdown-icon"><img src="assets/images/bottom-arrow.svg" class="img-fluid"
                    alt="arrow" />
                </span>
            </a>
            <ul className="dropdown-content">
                {
                    byGenreEvent && byGenreEvent.slice(showElementsInHeader, byGenreEvent.length).map((event, index) => {
                        return (
                            <li key={event.id}>
                                <a href="/"> {event.name}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </li>
    );
}

export default DropDown;