import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TopPics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        this.setState({ width: window.innerWidth })
    }

    render() {
        const topPics = [
            {
                id: "1",
                img: "assets/images/kurios.png",
                description: "",
                category: "musical"
            },
            {
                id: "2",
                img: "assets/images/katya.jpg",
                description: "",
                category: "comedy"
            },
            {
                id: "3",
                img: "assets/images/ballet.jpg",
                description: "",
                category: "dance"
            },
            {
                id: "4",
                img: "assets/images/panthom-of-opera.jpg",
                description: "",
                category: "musical"
            },
            {
                id: "5",
                img: "assets/images/kurios.png",
                description: "",
                category: "comedy"
            },
            {
                id: "6",
                img: "assets/images/ballet.jpg",
                description: "",
                category: "dance"
            },
            {
                id: "7",
                img: "assets/images/kurios.png",
                description: "",
                category: "musical"
            },
            {
                id: "8",
                img: "assets/images/katya.jpg",
                description: "",
                category: "comedy"
            },
            {
                id: "9",
                img: "assets/images/ballet.jpg",
                description: "",
                category: "dance"
            },
            {
                id: "10",
                img: "assets/images/panthom-of-opera.jpg",
                description: "",
                category: "musical"
            },

        ];

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: false
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

        return (
            < section className="top-picks" >
                <div className="container-fluid">
                    <h2>Top Picks For You</h2>
                    {
                        this.state.width <= 480
                            ? <div className="row">
                                <div className="col-xs-12">
                                    {
                                        topPics.map((elem, i) => {
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
                                    topPics.map((pic, index) => {
                                        return (
                                            <div className="grid-container" key={pic.id}>
                                                <div className="item" >
                                                    <div className="item-wrapper">
                                                        <div className="item-desc">
                                                            <span className="video-icon"><img src="assets/images/video-icon.svg" /></span>
                                                            <div className="item-img">
                                                                <img src={pic.img} className="img-fluid item-image" alt="kurios" />
                                                            </div>
                                                            <span className={`category ${pic.category} top-picks-category`}>{pic.category}</span>
                                                            <div className={`item-overlay ${pic.category}-overlay`}>
                                                                <div className="overlay-wrapper">
                                                                    <h3>Kurios Cabinet of Curiosities</h3>
                                                                    <span>Fri, 19 Apr- Sun, 19 May 2019</span>
                                                                    <p>Under the big top Bayfront Avenue, beside Marina Bay
                                                                       Sands
                                                                    </p>
                                                                    <p>Cirque du Soleil comes to Singapore with its most
                                                                       acclaimed touring show, KURIOS – Cabinet of Curiosities.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3>Kurios Cabinet of Curiosities</h3>
                                                        <a href="/" className="item-title-overlay"><span>BUY NOW </span><img
                                                            src="assets/images/next-arrow.svg" className="img-fluid" alt="buy-now" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                    }
                </div>
            </section >
        );
    }
}

export default TopPics;