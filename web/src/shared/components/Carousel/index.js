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
                <div className="dots-group">
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
                                <div className="item-wrapper">
                                    <div className="currently-showing-img">
                                        <div className="item-img">
                                            <img src={elem.img} className="img-fluid" alt="Kurios" />
                                        </div>
                                    </div>
                                    <span className={elem.genre === "Musical" ? "category musical" : "category comedy"}>{elem.genre}</span>
                                    <p>Thu, 2 May 2019</p>
                                    <h3>Atul Khatri - Live in Singapore</h3>
                                    <p>Sota Concert Hall</p>
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