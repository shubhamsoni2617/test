import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {

    var { imgArray } = props;

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        appendDots: (dots) => {
            return (
                <ul style={{ margin: "0px" }}> {dots} </ul>
            );
        },
        customPaging: (i) => {
            return (
                <div className="st-dots-group">
                    <span className="active"><a href="/"></a></span>
                </div>
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
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
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {
                imgArray.map((elem, i) => {
                    return (
                        <div className="grid-container" key={i}>
                            <div className="item">
                                <div className="st-item-wrapper">
                                    <div className="st-currently-showing-img">
                                        <div className="st-item-img">
                                            <img src={elem.img} className="img-fluid" alt="Kurios" />
                                        </div>
                                    </div>
                                    <span className={elem.genre === "Musical" ? "st-category st-musical" : "st-category st-comedy"}>{elem.genre}</span>
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
    );
}
export default Carousel;