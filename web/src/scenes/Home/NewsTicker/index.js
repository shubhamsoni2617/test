import React, { Component } from 'react';
import './style.scss';

class NewsTicker extends Component {
    render() {
        const newsTicker = [
            { news: "Rahul Gandhi uses Trump's K-gaffe to launch fresh attack on PM Modi" },
            { news: "Karnataka Crisis LIVE: SC to hear rebel MLAs' plea tomorrow if trust vote doesn't happen today" },
            { news: "Jaishankar clarifies India's stand on Trump’s Kashmir remark" },
            { news: "Ajay Devgn on 8 years of Singham: It's the love of the audience that the film still roars this loud" },
        ];
        return (
            <div className="ticker-wrap" onClick={() => this.setState({ ticker: false })}>
                <div className="ticker">
                    {
                        newsTicker.map((content, index) => {
                            return (
                                <div key={content.news} className="ticker__item">{content.news}</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default NewsTicker;