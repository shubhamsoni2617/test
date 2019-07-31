import React, { useState, useEffect } from 'react';
import closeNews from '../../../assets/images/close-ad.svg';
import './style.scss';
import HomeService from '../../../shared/services/HomeService';


const NewsTicker = (props) => {

    const [newsTicker, setNewsTicker] = useState([]);
    const [ticker, setTicker] = useState(true);

    useEffect(() => {
        HomeService.getNewsTicker()
            .then((res) => {
                setNewsTicker(res.data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            {
                ticker
                    ?
                    <div className="ticker-wrap" >
                        <div className="ticker-container">
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
                        <span className="close-ticker" onClick={() => setTicker(false)}><img src={closeNews} alt="Close" /></span>
                    </div>
                    :
                    null
            }

        </>
    );
}

export default NewsTicker;