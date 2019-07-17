import React, { Component } from 'react';
import Carousel from '../../../shared/components/Carousel';

class whatsNew extends Component {
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
            <section className="st-whats-new">
                <div className="container-fluid">
                    <div className="st-section-top-wrapper">
                        <h3 className="st-section-title">What's New</h3>
                        <div className="st-carousel-dots">
                            <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                alt="arrow" /></a>
                            <div className="st-dots-group">
                                <span className="active"><a href="/"></a></span>
                                <span><a href="/"></a></span>
                                <span><a href="/"></a></span>
                            </div>
                        </div>
                    </div>
                    <Carousel imgArray={imgArray} />
                </div>
            </section>
        );
    }
}

export default whatsNew;