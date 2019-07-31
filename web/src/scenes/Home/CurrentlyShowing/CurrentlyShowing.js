import React, { useState, useEffect } from 'react';
import Carousel from '../../../shared/components/Carousel';
import HomeService from '../../../shared/services/HomeService';


const CurrentlyShowing = (props) => {

    const [currentlyShowing, setCurrentlyShowing] = useState([]);

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
                console.log(err)
            })
    }, [])

    return (
        <div>
            {/* currently showing section start  */}
            <section className="currently-showing">
                <div className="container-fluid">
                    <div className="section-top-wrapper">
                        <h2>Currently Showing</h2>
                        <div className="carousel-dots">
                            <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                alt="arrow" />&nbsp;</a>
                        </div>
                    </div>
                    <Carousel imgArray={currentlyShowing} arrows={true} />
                </div>
            </section>
        </div>
    );
};

export default CurrentlyShowing;