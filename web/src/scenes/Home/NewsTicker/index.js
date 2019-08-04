import React, { useState, useEffect } from 'react';
import closeNews from '../../../assets/images/close-ad.svg';
import './style.scss';
import HomeService from '../../../shared/services/HomeService';

const NewsTicker = (props) => {

    const [newsTicker, setNewsTicker] = useState([]);
    const [status, setStatus] = useState("open");
    const [des, setDes] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const params = {
            client: 1
        };
        HomeService.getNewsTicker(params)
            .then((res) => {
                setNewsTicker(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const handleOnclick = (des) => {
        setDes(des);
        setShow(true)
    }

    return (
        <div className={status === "open" && window.location.pathname === "/" ? "ticker-wrap" : "hide"}>
            <div className="ticker-container">
                <div className="ticker">
                    {newsTicker.map((content, index) => {
                        let string = content.description
                        let stringLength = 180;
                        let trimmedString = string.substring(0, stringLength);
                        return (
                            <div
                                key={content.title}
                                dangerouslySetInnerHTML={{ __html: trimmedString }}
                                onClick={() => { handleOnclick(content.description) }}
                            ></div>
                        );
                    })
                    }
                </div>
            </div>
            <span className="close-ticker" onClick={() => setStatus("close")}><img src={closeNews} alt="Close" /></span>
            <div style={{ display: show ? "block" : "none" }}>
                <div className="popup-overlay"></div>
                <div className="model-content">
                    <span onClick={() => { setShow(false) }}>X</span>
                    <div dangerouslySetInnerHTML={{ __html: des }}></div>
                </div>
            </div>
        </div>
    );
}

export default NewsTicker;