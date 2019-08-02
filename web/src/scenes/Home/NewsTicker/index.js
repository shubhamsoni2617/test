import React, { useState, useEffect } from 'react';
import closeNews from '../../../assets/images/close-ad.svg';
import './style.scss';
import HomeService from '../../../shared/services/HomeService';

const NewsTicker = (props) => {
    
    const [newsTicker, setNewsTicker] = useState([]);
    const [status, setStatus] = useState("open");

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

    return (
        <div className={status === "open" && window.location.pathname === "/" ? "ticker-wrap" : "hide"}>
            <div className="ticker-container">
                <div className="ticker">
                    {newsTicker.map((content, index) => {
                        return (
                            <div key={content.title} dangerouslySetInnerHTML={{ __html: content.description }}></div>
                        );
                    })
                    }
                </div>
            </div>
            <span className="close-ticker" onClick={() => setStatus("close")}><img src={closeNews} alt="Close" /></span>
        </div>
    );
}

export default NewsTicker;