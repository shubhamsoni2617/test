import React, { Component } from 'react';
import './style.css';

export default class HotShowPopup extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { showPopup, eventCount } = this.props;
        console.log("hot show popup===")
        if (!showPopup) {
            return null;
        }
        return (
            <div className="hotshow">
                <span>Continue to SISTIC</span>
                <span>Close</span>
                {eventCount == 1 &&
                    <div>
                        <div className="innerblock">
                            <div className="hotshowimg">
                                <img src=""></img>
                            </div>
                            <div className="content">
                                <h2> </h2>
                                <div> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
                                <button>Hurry! Buy Tickets Now.</button>
                            </div>
                        </div>
                    </div>
                }
                {eventCount == 2 &&
                    <div>
                        <div className="innerblock">
                            <div className="hotshowimg">
                                <img src=""></img>
                            </div>
                            <div className="content">
                                <h2> </h2>
                                <div> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
                                <button>Hurry! Buy Tickets Now.</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
