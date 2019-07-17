import React, { Component } from 'react';
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log('items', items)
            return (
                <section className="st-sistic-moments">
                    <div className="container-fluid">
                        <h3 className="st-section-title">#SISTICMoments</h3>
                    </div>
                    <div className="st-moments-wrapper grid-container">
                        {items && items.map(item => (
                            <img src={item.images.thumbnail.url} alt="" />
                        ))}

                    </div>
                </section>
            );
        }
    }
}

export default InstagramFeed;