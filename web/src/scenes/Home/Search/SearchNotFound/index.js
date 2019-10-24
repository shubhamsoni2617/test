import React from 'react';
import noEvent from '../../../../assets/images/no-event.svg';
import defaultImage from '../../../../assets/images/404.png';
import './style.scss';

const SearchNotFound = () => {
    return <div className="searchnotfound">
        <div className="container">
            <div className="no-data">
                <img src={noEvent} alt="no-event" className="img-fluid" />
                <p><strong>Opps! Page Not Found</strong></p>
                <p>You can also visit</p>
                <ul className="no-result-search-listing">
                    <li><a href="/attractions">Go to attractions</a></li>
                    <li><a href="/events">Go to Events</a></li>
                    <li><a href="/promotions">Go to Promotions</a></li>
                    <li><a href="/explore">Go to Explore</a></li>
                </ul>
            </div>
            {/* <div className="pagenotfound-image">
                <span>
                <img src={magic} alt="" className="img-fluid" />
                </span>
            </div> */}
        </div>
    </div>
}

export default SearchNotFound