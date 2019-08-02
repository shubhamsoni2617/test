import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './style.scss';
import Constants from '../../../shared/constants';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const FeaturedEvents = (props) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return (() => {
            window.removeEventListener('resize', handleWindowResize)
        });
    }, [])

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }
    const featuredEvents = [
        {
            id: "1",
            img: "assets/images/explore.png",

        },
        {
            id: "2",
            img: "assets/images/pretty-girls.jpg",

        },
        {
            id: "3",
            img: "assets/images/dance-theature.jpg",

        },
        {
            id: "4",
            img: "assets/images/hetty-keos.jpg",

        },
        {
            id: "5",
            img: "assets/images/aladdin.jpg",

        },
        {
            id: "6",
            img: "assets/images/voice-legends.jpg",

        },
        {
            id: "7",
            img: "assets/images/pride-passion.jpg",

        },
        {
            id: "8",
            img: "assets/images/hetty-keos.jpg",

        },
        {
            id: "9",
            img: "assets/images/aladdin.jpg",

        },
        {
            id: "10",
            img: "assets/images/voice-legends.jpg",

        },

        {
            id: "11",
            img: "assets/images/explore.png",

        },
        {
            id: "12",
            img: "assets/images/pretty-girls.jpg",

        },
        {
            id: "13",
            img: "assets/images/dance-theature.jpg",

        },
        {
            id: "14",
            img: "assets/images/hetty-keos.jpg",

        },
        {
            id: "15",
            img: "assets/images/aladdin.jpg",

        },
        {
            id: "16",
            img: "assets/images/voice-legends.jpg",

        },
        {
            id: "17",
            img: "assets/images/pride-passion.jpg",

        },
        {
            id: "18",
            img: "assets/images/hetty-keos.jpg",

        },
        {
            id: "19",
            img: "assets/images/aladdin.jpg",

        },
        {
            id: "20",
            img: "assets/images/voice-legends.jpg",

        },
        {
            id: "21",
            img: "assets/images/explore.png",

        },
        {
            id: "22",
            img: "assets/images/pretty-girls.jpg",

        },
        {
            id: "23",
            img: "assets/images/dance-theature.jpg",

        },
        {
            id: "24",
            img: "assets/images/hetty-keos.jpg",

        },
        {
            id: "25",
            img: "assets/images/aladdin.jpg",

        },
        {
            id: "26",
            img: "assets/images/voice-legends.jpg",

        },
        {
            id: "27",
            img: "assets/images/pride-passion.jpg",

        },
        {
            id: "28",
            img: "assets/images/hetty-keos.jpg",

        },
        {
            id: "29",
            img: "assets/images/aladdin.jpg",

        },
        {
            id: "30",
            img: "assets/images/voice-legends.jpg",

        },
    ];
    const settings = {
        className: "center",
        dots: true,
        centerMode: false,
        infinite: false,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => {
            return (
                <ul style={{ margin: "0px" }}> {dots} </ul>
            );
        },
        customPaging: (i) => {
            return (
                <div className="dots-group">
                    <span><a href="/"></a></span>
                </div>
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesPerRow: 3,
                    infinite: false,
                    dots: true
                }
            }
        ]
    };
    return (
        <section className="featured-events">
            <div className="container-fluid">
                <div className="section-top-wrapper">
                    <h2>Featured Events</h2>
                    <div className="carousel-dots">
                        <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                            alt="arrow" /></a>
                    </div>
                </div>
                {
                    width <= Constants.MOBILE_BREAK_POINT
                        ?
                        <div style={{ width: "30em", overflowX: "auto", whiteSpace: "nowrap" }}>
                            {
                                featuredEvents.map((event, i) => {
                                    return (
                                        <div className="grid-container" key={event.id}>
                                            <div className="item">
                                                <div className="item-wrapper">
                                                    <div className="featured-item-img">
                                                        <div className="item-img">
                                                            <img src={event.img} className="img-fluid" alt="explore" />
                                                        </div>
                                                        <span className="category">Dance</span>
                                                    </div>
                                                    <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                                                    <p>Fri, 3 May 2019</p>
                                                    <p>Esplanade Concert Hall</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        :
                        <Slider {...settings}>
                            {
                                featuredEvents.map((event, index) => {
                                    return (
                                        <div className="grid-container" key={event.id}>
                                            <div className="item">
                                                <div className="item-wrapper">
                                                    <div className="featured-item-img">
                                                        <div className="item-img">
                                                            <img src={event.img} className="img-fluid" alt="explore" />
                                                        </div>
                                                        <span className="category">Dance</span>
                                                    </div>
                                                    <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                                                    <p>Fri, 3 May 2019</p>
                                                    <p>Esplanade Concert Hall</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </Slider>
                }
            </div>
        </section >
    );
}

export default FeaturedEvents;