import React, { useState, useEffect } from 'react';
import './style.scss';
import HomeService from '../../services/HomeService';
import nextarrow from '../../../assets/images/next-arrow-white.svg';
import ReactPlayer from 'react-player';

const HotShowPopup = () => {

    const [popupData, setPopupData] = useState([]);
    const [error, setError] = useState(false);
    // const [showPopup, setFlag] = useState(sessionStorage.getItem('showPopup') ? JSON.parse(sessionStorage.getItem('showPopup')) : true)
    const [showPopup, setFlag] = useState(true);

    useEffect(() => {
        HomeService.getHotShowPopupData()
            .then((res) => {
                setPopupData(res.data.data)
            })
            .catch((err) => {
                setError(true)
            })
    },[])

    const closePopup = () => {
        setFlag(false);
        // sessionStorage.setItem('showPopup', false);
    }

    let body = document.body;
    let eventCount = popupData && popupData.length;
    if (!showPopup || error) {
        body.classList.remove("hotshowpopup-overlay");
        return null;
    }
    body.classList.add("hotshowpopup-overlay");
    let getButtonStyle = (styleObj, index) => { 
        let t = '';

        if(styleObj.b_color || styleObj.b_font_color){

            return t + (".hotshow_buttons"+index+" {background-color : "+styleObj.b_color+",color : "+styleObj.b_font_color+"}");
        }
    }

    return (
        <div className="hotshow-popup">
            <div className="hotshow-overlay"></div>
            <div className="hotshow container">
                <div className="hotshow-topbar">
                    <div className="hotshow-topbar-left">
                        <span>We are anticipating very high demand for the following show(s).</span>
                    </div>
                    <div className="hotshow-topbar-right">
                        <span onClick={() => closePopup()}>Continue to SISTIC <img src={nextarrow} alt="" /></span>
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
                                    {objData.buttons && 
                                        <div>
                                            <style dangerouslySetInnerHTML={{ __html:getButtonStyle(objData.buttons, index)}}></style>
                                            <a className="hotshow_buttons" href={objData.buttons.b_url} target="_blank">{objData.buttons.b_name}</a>
                                        </div>
                                    }
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
        </div>
    );
}
export default HotShowPopup;