import React from 'react'
import './style.scss';
import defaultImage from '../../assets/images/404.png';
import magic from '../../assets/images/cap.png';
import CurrentlyShowing from '../Home/CurrentlyShowing/CurrentlyShowing';


const PageNotFound = (props) => {

  return (
    <div className="pagenotfound">
        <div className="pagenotfound-wrapper">
            <div className="container">
                <div className="pagenotfound-banner">
                    <div className="pagenotfound-desc">
                        <span className="image-404">
                        <img src={defaultImage} alt="404" className="img-fluid" />
                        </span>
                        <h3>Opps! Page Not Found</h3>
                        <p>Don’t worry there are more exciting events waiting for you.</p>
                        <a href="/">Go to homepage</a>
                    </div>
                    <div className="pagenotfound-image">
                        <span className="">
                        <img src={magic} alt="" className="img-fluid" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* currently showing section start  */}
        <CurrentlyShowing />
    </div>
  )

}

export default PageNotFound;