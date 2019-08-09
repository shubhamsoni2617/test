import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

class TrendingNow extends Component {
    render() {
        const trendingNow = [
            {
                id: "1",
                img: "assets/images/kurios.png",

            },
            {
                id: "2",
                img: "assets/images/trending-now.jpg",

            },
            {
                id: "3",
                img: "assets/images/hetty-keos.jpg",

            },
            {
                id: "4",
                img: "assets/images/trending-now.jpg",

            },
            {
                id: "5",
                img: "assets/images/hetty-keos.jpg",

            },
            {
                id: "6",
                img: "assets/images/voice-legends.jpg",

            },
            {
                id: "7",
                img: "assets/images/hetty-keos.jpg",

            },
            {
                id: "8",
                img: "assets/images/aladdin.jpg",

            },
            {
                id: "9",
                img: "assets/images/voice-legends.jpg",

            },
        ];
        return (
            <section className="trending-now">
                <div className="container-fluid">
                    <h2>Trending Now</h2>
                    <div className="grid-container">
                        <div className="item">
                            <div className="item-wrapper">
                                <span className="category">Dance</span>
                                <div className="trending-now-image">
                                    <div className="item-img">
                                        <img src={trendingNow[0].img} className="img-fluid" alt="kurios" />
                                    </div>
                                    <div className="video-icon">
                                        <img src="assets/images/video-icon.svg" className="img-fluid" alt="video-icon" />
                                    </div>
                                </div>
                                <h3>Kurios Cabinet of Curiosities</h3>
                                <p>Thu, 2 May 2019</p>
                                <p>Esplanade Concert Hall</p>
                            </div>
                        </div>

                        {
                            trendingNow.slice(1, trendingNow.length).map((now, index) => {
                                return (
                                    <div key={index} className="item">
                                        <div className="item-wrapper">
                                            <span className="category">Dance</span>
                                            <div className="trending-now-image">
                                                <div className="item-img">
                                                    <img src={now.img} className="img-fluid" alt="trending-now" />
                                                </div>
                                            </div>
                                            <h3>Singapore Dance Theatre- Season Pass…</h3>
                                            <p>Thu, 2 May 2019</p>
                                            <p>Various Venues</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default TrendingNow;
