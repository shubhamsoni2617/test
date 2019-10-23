import React from 'react';
import magic from '../../../../assets/images/cap.png'
import defaultImage from '../../../../assets/images/404.png'

const SearchNotFound=()=>{
    return     <div className="searchnotfound">
    <div className="pagenotfound-wrapper">
        <div className="container">
            <div className="pagenotfound-banner">
                <div className="pagenotfound-desc">
                    <span className="image-404">
                    <img src={defaultImage} alt="404" className="img-fluid" />
                    </span>
                    <h3>Opps! Page Not Found</h3>
                    <p>You can also visit</p>
                    <a href="/attractions">Go to attractions</a>
                    <a href="/events">Go to Events</a>
                    <a href="/promotions">Go to Promotions</a>
                    <a href="/explore">Go to Explore</a>

                </div>
                {/* <div className="pagenotfound-image">
                    <span>
                    <img src={magic} alt="" className="img-fluid" />
                    </span>
                </div> */}
            </div>
        </div>
    </div>
    </div>
}


export default SearchNotFound