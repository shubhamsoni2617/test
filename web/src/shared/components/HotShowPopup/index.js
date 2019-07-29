import React, { Component } from 'react';
import axios from 'axios';
import './style.scss';

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
                <div className="hotshow-topbar">
                    <div className="hotshow-topbar-left">
                        <span>We are anticipating very high demand for the following show(s).</span>
                    </div>
                    <div className="hotshow-topbar-right">
                        <span>Continue to SISTIC <img src={require('../../../assets/images/next-arrow.svg')} alt="" /></span>
                    </div>
                </div>
                {eventCount == 1 &&
                    <div className="hotshow-wrapper">
                        <div className="hotshow-block">
                            <div className="hotshowimg">
                                <img src={require('../../../assets/images/sweeney-tood-hotshow.jpg')} alt="" className="img-fluid" />
                            </div>
                            <div className="hotshow-content">
                                <ul>
                                    <li>
                                        <h3>Sweeney Todd: The Demon Barber of Fleet Street</h3>
                                        <p>Sun, 21 Aug - Sun, 1 Sep 2019</p>
                                        <p>Sands Theatre, Marina Bay Sands</p>
                                    </li>
                                    <li>
                                        <h4>Public Sales Start Date</h4>
                                        <p>Sun, 21 July 2019, 10AM (Singapore GMT+8)</p>
                                    </li>
                                    <li>
                                        <h4>Ticket Prices <span>(excluding $4 booking fee per ticket)</span></h4>
                                        <p>S$328, S$288, S$228, S$ 168, S$128, S$108</p>
                                    </li>
                                </ul>
                                <span className="hotshow-note">* Limited to 8 tickets per transaction</span>
                                <button>Hurry! Buy Tickets Now</button>
                            </div>
                        </div>
                        <div className="hotshow-block">
                            <div className="hotshowimg">
                                <img src={require('../../../assets/images/poster-kurios.jpg')} alt="" className="img-fluid" />
                            </div>
                            <div className="hotshow-content">
                                <ul>
                                    <li>
                                        <h3>Sweeney Todd: The Demon Barber of Fleet Street</h3>
                                        <p>Sun, 21 Aug - Sun, 1 Sep 2019</p>
                                        <p>Sands Theatre, Marina Bay Sands</p>
                                    </li>
                                    <li>
                                        <h4>Public Sales Start Date</h4>
                                        <p>Sun, 21 July 2019, 10AM (Singapore GMT+8)</p>
                                    </li>
                                    <li>
                                        <h4>Ticket Prices <span>(excluding $4 booking fee per ticket)</span></h4>
                                        <p>S$328, S$288, S$228, S$ 168, S$128, S$108</p>
                                    </li>
                                </ul>
                                <span className="hotshow-note">* Limited to 8 tickets per transaction</span>
                                <button>Hurry! Buy Tickets Now</button>
                            </div>
                        </div>
                        <div className="hotshow-block hotshow-block-fullwidth">
                            <div className="hotshowimg">
                                <img src={require('../../../assets/images/poster-kurios.jpg')} alt="" className="img-fluid" />
                            </div>
                            <div className="hotshow-content">
                                <ul>
                                    <li>
                                        <h3>KURIOS – Cabinet of Curiosities</h3>
                                        <p>Sun, 21 Aug - Sun, 1 Sep 2019</p>
                                        <p>Sands Theatre, Marina Bay Sands</p>
                                    </li>
                                    <li>
                                        <h4>Public Sales Start Date</h4>
                                        <p>Sun, 21 July 2019, 10AM (Singapore GMT+8)</p>
                                    </li>
                                    <li>
                                        <h4>Ticket Prices <span>(excluding $4 booking fee per ticket)</span></h4>
                                        <p>S$328, S$288, S$228, S$ 168, S$128, S$108</p>
                                    </li>
                                </ul>
                                <span className="hotshow-note">* Limited to 8 tickets per transaction</span>
                                <button>Hurry! Buy Tickets Now</button>
                            </div>
                        </div>
                    </div>
                }
                {eventCount == 2 &&
                    <div>
                        <div className="hotshow-block">
                            <div className="hotshowimg">
                                <img src="" />
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
