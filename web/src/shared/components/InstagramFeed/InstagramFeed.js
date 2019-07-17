import React, { Component } from 'react';
import Slider from "react-slick";

import axios from 'axios';


class InstagramFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=3225660226.f09c095.d66beeb477664e4091320bcfe6e3991a')
            .then((result) => {
                console.log('result',result)
                this.setState({
                    isLoaded: true,
                    items: result.data.data
                });
            }).catch((error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            })
    }

    render() {
        const settings = {
            centerMode: false,
            infinite: true,
            slidesToScroll: 4,
            centerPadding: "60px",
            slidesToShow: 7,
            speed: 500
          };

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section className="sistic-moments">
                    <div className="container-fluid">
                        <h2>#SISTICMoments</h2>
                    </div>
                    <div className="moments-wrapper grid-container">

                    <Slider {...settings}>
                        {items && items.map(item => (
                            <img key={item.id} src={item.images.thumbnail.url} alt="" />
                        ))}
                    </Slider>
                    </div>
                </section>
            );
        }
    }
}


        



export default InstagramFeed;