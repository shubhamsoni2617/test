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
            <section className="whats-new">
                <div className="container-fluid">
                    <div className="section-top-wrapper">
                        <h2 className="section-title">What's New</h2>
                        <div className="carousel-dots">
                            <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                alt="arrow" /></a>
                        </div>
                    </div>
                    <Carousel imgArray={imgArray} />
                </div>
            </section>
        );
    }
}

export default whatsNew;