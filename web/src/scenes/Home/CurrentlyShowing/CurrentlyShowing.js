import React, { Component } from 'react';
import Carousel from '../../../shared/components/Carousel';


class CurrentlyShowing extends Component {
    render() {
        var imgArray = [
            {
                img: "assets/images/atul-khatri.jpg",
                genre:"Musical"
            },
            {
                img: "assets/images/kurios.png",
                genre:"Comedy"
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
                genre:"Musical"
            },
            {
                img: "assets/images/atul-khatri.jpg",
                genre:"Comedy"
            },
            {
                img: "assets/images/kurios.png",
                genre:"Musical"
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
                genre:"Comedy"
            },
            {
                img: "assets/images/atul-khatri.jpg",
                genre:"Comedy"
            },
            {
                img: "assets/images/kurios.png",
                genre:"Musical"
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
                genre:"Comedy"
            },
            {
                img: "assets/images/atul-khatri.jpg",
                genre:"Musical"
            },
            {
                img: "assets/images/atul-khatri.jpg",
                genre:"Comedy"
            },
            {
                img: "assets/images/kurios.png",
                genre:"Musical"
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
                genre:"Comedy"
            },
            {
                img: "assets/images/atul-khatri.jpg",
                genre:"Comedy"
            },
            {
                img: "assets/images/kurios.png",
                genre:"Musical"
            },
           
        ];

        return (
            <div>
                {/* currently showing section start  */}
                <section className="st-currently-showing">
                    <div className="container-fluid">
                        <div className="st-section-top-wrapper">
                            <h3 className="st-section-title">Currently Showing</h3>
                            <div className="st-carousel-dots">
                                <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                    alt="arrow" />&nbsp;</a>
                                <div className="st-dots-group">
                                    <span className="active"><a href="/">&nbsp;</a></span>
                                    <span><a href="/">&nbsp;</a></span>
                                    <span><a href="/">&nbsp;</a></span>
                                </div>
                            </div>
                        </div>
                        <Carousel imgArray={imgArray} />
                    </div>
                </section>
            </div>
        );
    }

};

export default CurrentlyShowing;