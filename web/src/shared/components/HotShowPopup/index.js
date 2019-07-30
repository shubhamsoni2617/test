import React, { Component } from 'react';
import './style.scss';
import HomeService from '../../services/HomeService';
import nextarrow from '../../../assets/images/next-arrow.svg';
import ReactPlayer from 'react-player';

export default class HotShowPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupData: [],
            error: false,
            showPopup: sessionStorage.getItem('showPopup') ? JSON.parse(sessionStorage.getItem('showPopup')) : true,
        }
    }

    componentDidMount() {
        HomeService.getHotShowPopupData()
            .then((res) => {
                console.log("response", res);
                this.setState({
                    popupData: res.data.data,
                })
            })
            .catch((err) => {
                this.setState({
                    error: true
                })
                console.log(err)
            })
    }

    closePopup = () => {
        this.setState({
            showPopup: false
        })
        sessionStorage.setItem('showPopup', false);
    }

    render() {
        const { error, popupData, showPopup } = this.state;
        let eventCount = popupData && popupData.length;
        console.log("hot show popup===", eventCount, showPopup)
        if (!showPopup || error) {
            return null;
        }
        return (
            <div className="hotshow container">
                <div className="hotshow-topbar">
                    <div className="hotshow-topbar-left">
                        <span>We are anticipating very high demand for the following show(s).</span>
                    </div>
                    <div className="hotshow-topbar-right">
                        <span>Continue to SISTIC <img src={nextarrow} alt="" onClick={this.closePopup} /></span>
                    </div>
                </div>

                <div className="hotshow-wrapper">
                    {eventCount == 2 && popupData &&
                        popupData.map((objData, index) => {
                            return <div className="hotshow-block" key={index}>

                                <div className="hotshowimg">
                                    {
                                        objData.type && objData.type.id == 2
                                            ? <ReactPlayer url={objData.video_url} controls={true} />
                                            : <img src={objData.thumb_image} alt="" className="img-fluid" />
                                    }
                                </div>

                                <div className="hotshow-content">
                                    {objData.description &&
                                        <div dangerouslySetInnerHTML={{ __html: objData.description }}></div>
                                    }
                                    <a href={objData.buttons.b_url} target="_blank">{objData.buttons.b_name}</a>
                                </div>
                            </div>
                        })
                    }
                    {eventCount == 1 && popupData &&
                        popupData.map((objData, index) => {
                            return <div className="hotshow-block hotshow-block-fullwidth" key={index}>

                                <div className="hotshowimg">
                                    {
                                        objData.type && objData.type.id == 2
                                            ? <ReactPlayer url={objData.video_url} controls />
                                            : <img src={objData.full_image} alt="" className="img-fluid" />
                                    }
                                </div>
                                <div className="hotshow-content">
                                    {objData.description &&
                                        <div dangerouslySetInnerHTML={{ __html: objData.description }}></div>
                                    }
                                    {objData.buttons && objData.buttons.b_name &&
                                        <a href={objData.buttons.b_url} target="_blank">{objData.buttons.b_name}</a>
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );

    }
}
