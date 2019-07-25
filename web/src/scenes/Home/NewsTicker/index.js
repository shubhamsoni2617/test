import React, { Component } from 'react';
import './style.scss';
import HomeService from '../../../shared/services/HomeService';


class NewsTicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsTicker: []
        };
    }

    componentDidMount() {
        HomeService.getNewsTicker()
        .then((res) => {
            this.setState({ newsTicker: res.data.data })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {

        const { newsTicker } = this.state;

        return (
            <div className="ticker-wrap" onClick={() => this.setState({ ticker: false })}>
                <div className="ticker">
                    {
                        newsTicker.map((content, index) => {
                            return (
                                <div key={content.title} className="ticker__item" dangerouslySetInnerHTML={{ __html: content.description }}></div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default NewsTicker;