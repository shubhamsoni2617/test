import React from 'react';
import './style.css';

const DropDown = (props) => {
    const { showElementsInHeader, byGenreEvent } = props;
    return (
        <div className="dropdown">
            <button className="dropbtn">
                More
                        <span className="dropdown-icon">
                    <img
                        src="assets/images/bottom-arrow.svg"
                        className="img-fluid"
                        alt="arrow"
                    />
                </span>
            </button>
            <div className="dropdown-content">
                {
                    byGenreEvent.slice(showElementsInHeader, byGenreEvent.length).map((event, index) => {
                        return (
                            <a href="/" key={event.id}> {event.name}</a>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DropDown;