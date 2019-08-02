import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlide from '../CarouselSlide';
import Constants from '../../constants';



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

const Carousel = (props) => {

    const [width, setWidth] = useState(window.innerWidth);
    const { imgArray, arrows,slidesToShow, slidesToScroll } = props;

    const settings = {
        arrows: arrows,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        initialSlide: 0,
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

    return (
        <>
            {
                width <= Constants.MOBILE_BREAK_POINT
                    ?
                    <div className="row">
                        <div className="grid-container">
                            {
                                imgArray.map((elem, i) => {
                                    return (
                                        <CarouselSlide elem={elem} key={elem.id} />
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
                                    <CarouselSlide elem={elem} key={elem.id} />
                                );
                            })
                        }
                    </Slider>
            }
        </>
    );

}
export default Carousel;