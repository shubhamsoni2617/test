import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class CurrentlyShowing extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        };
        var imgArray = [
            {
                img: "assets/images/atul-khatri.jpg",
            },
            {
                img: "assets/images/kurios.png",
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
            },
            {
                img: "assets/images/atul-khatri.jpg",
            },
            {
                img: "assets/images/kurios.png",
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
            },
            {
                img: "assets/images/atul-khatri.jpg",
            },
            {
                img: "assets/images/kurios.png",
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
            },
            {
                img: "assets/images/atul-khatri.jpg",
            },
            {
                img: "assets/images/atul-khatri.jpg",
            },
            {
                img: "assets/images/kurios.png",
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
            },
            {
                img: "assets/images/atul-khatri.jpg",
            },
            {
                img: "assets/images/kurios.png",
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
            },
            {
                img: "assets/images/atul-khatri.jpg",
            },
            {
                img: "assets/images/kurios.png",
            },
            {
                img: "assets/images/panthom-of-opera.jpg",
            },
            {
                img: "assets/images/atul-khatri.jpg",
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
                                    alt="arrow" /></a>
                                <div className="st-dots-group">
                                    <span className="active"><a href="/"></a></span>
                                    <span><a href="/"></a></span>
                                    <span><a href="/"></a></span>
                                </div>
                            </div>
                        </div>


                        <Slider {...settings}>
                            {
                                imgArray.map((elem) => {
                                    return (
                                        <div className="grid-container">
                                            <div className="item">
                                                <div className="st-item-wrapper">
                                                    <div className="st-currently-showing-img">
                                                        <div className="st-item-img">
                                                            <img src={elem.img} className="img-fluid" alt="Kurios" />
                                                        </div>
                                                    </div>
                                                    <span className="st-category st-musical">Musical</span>
                                                    <p className="st-currently-showing-date">Sun, 21 Jul 2019</p>
                                                    <p className="st-item-title">KURIOS – Cabinet of Curiosities</p>
                                                    <p className="st-currently-showing-place">Marina Bay Sands Singapore</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </Slider>
                    </div>
                </section>
            </div>
        );
    }

};

export default CurrentlyShowing;