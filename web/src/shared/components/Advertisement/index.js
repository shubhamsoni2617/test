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
        const text = "Awesome Benefit Only Via SISTIC";
        const img = "assets/images/pretty-girls.jpg";
        const off = "Max. 15% Off";
        if (advertismentDisplay) {
            return (
                <div className="container">
                    <div className="advertisment-container">
                        <div className="inline">
                            <img className="advertisment-image" src={img} alt="" />
                        </div>
                        <div className="inline">{text}</div>
                        <div className="inline">{off}</div>
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