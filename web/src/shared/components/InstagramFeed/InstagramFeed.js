import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import Constant from '../../constants';

class InstagramFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            feeds: []
        };
    }

    componentDidMount() {
        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='+ Constant.INSTAGRAM_ACCESS_TOKEN)
        .then((result) => {
            this.setState({
                isLoaded: true,
                feeds: result.data.data
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

        const { error, isLoaded, feeds } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="instafeeds-loading">Loading...</div>;
        } else {
            return (
                <section className="sistic-moments">
                    <div className="container-fluid">
                        <h2>#SISTICMoments</h2>
                    </div>
                    <Slider {...settings}>
                        {feeds && feeds.map(feed => (
                            <img key={feed.id} src={feed.images.thumbnail.url} alt="" />
                        ))}
                    </Slider>
                </section>
            );
        }
    }
}

export default InstagramFeed;
