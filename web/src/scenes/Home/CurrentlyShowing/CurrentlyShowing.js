import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Carousel from '../../../shared/components/Carousel';
import HomeService from '../../../shared/services/HomeService';
import RightArrow from '../../../assets/images/right-arrow.svg'


const CurrentlyShowing = (props) => {

    const [currentlyShowing, setCurrentlyShowing] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const params = {
            client: 1,
            first: 0,
            limit: 10
        };
        HomeService.getCurrentlyShowing(params)
            .then((res) => {
                setCurrentlyShowing(res.data.data)
            })
            .catch((err) => {
                setError(true);
            })
    }, [])
    if(error){
        return null;
    }
    return (
        <div>
            {/* currently showing section start  */}
            <section className="currently-showing">
                <div className="container-fluid">
                    <div className="section-top-wrapper">
                        <h2>Currently Showing</h2>
                        <div className="carousel-dots">
                            <Link to="/events">See all <img src={RightArrow} className="img-fluid"
                                alt="arrow" />&nbsp;</Link>
                        </div>
                    </div>
                    <Carousel imgArray={currentlyShowing} arrows={true} slidesToShow={6} slidesToScroll={6} />
                </div>
            </section>
        </div>
    );
};

export default CurrentlyShowing;