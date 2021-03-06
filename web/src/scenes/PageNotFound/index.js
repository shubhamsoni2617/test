import React from 'react'
import './style.scss';
import defaultImage from '../../assets/images/404.png';
import magic from '../../assets/images/cap.png';
import CarouselConatiner from '../Home/CarouselConatiner';
import HomeService from "../../shared/services/HomeService";

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
                        <span>
                        <img src={magic} alt="" className="img-fluid" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* currently showing section start  */}
        <CarouselConatiner
        title="Currently Showing"
        classStr="currently-showing"
        autoplay={true}
        infinite={true}
        api={HomeService.getCurrentlyShowing} />
    </div>
  )

}

export default PageNotFound;
