import React, { Component } from 'react';
import './style.scss';

class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advertismentDisplay: true
        };

    }
    render() {
        const { advertismentDisplay } = this.state;

        const advertisement = [
            { text: "Awesome Benefit Only Via SISTIC", img: "assets/images/pretty-girls.jpg", off: "Max. 15% Off" }
        ];

        if (advertismentDisplay) {
            return (
                <div className="container">
                    <div className="advertisment-container">
                        <div className="inline">
                            <img className="advertisment-image" src={advertisement[0].img} alt="" />
                        </div>
                        <div className="inline">{advertisement[0].text}</div>
                        <div className="inline">{advertisement[0].off}</div>
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={() => this.setState({ advertismentDisplay: false })}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            );
        }

        return (null);
    }
}

export default Advertisement;