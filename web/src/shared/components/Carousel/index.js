import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const settings = {
        arrows: arrows,
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
            }
        ]
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    var { imgArray, arrows } = props;

    return (
        <>
            {
                width <= 480
                    ?
                    <div className="row">
                        <div className="grid-container">
                            {
                                imgArray.map((elem, i) => {
                                    return (
                                        <img src={elem.img} key={i} className="img-fluid" alt="Kurios" />
                                    );
                                })
                            }
                        </div>
                    </div>
                    :
                    <Slider {...settings}>
                        {
                            imgArray.map((elem, i) => {
                                return (
                                    <div className="grid-container" key={i}>
                                        <div className="item">
                                            <div className="item-wrapper">
                                                <div className="currently-showing-img">
                                                    <div className="item-img">
                                                        <img src={elem.thumb_image} className="img-fluid" alt="Kurios" />
                                                    </div>
                                                </div>
                                                <span className={elem.genre === "Musical" ? "category musical" : "category comedy"}>{elem.genre}</span>
                                                <p>{elem.event_date}</p>
                                                <h3>{elem.title}</h3>
                                                <p>{elem.venue_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
            }
        </>
    );

}
export default Carousel;