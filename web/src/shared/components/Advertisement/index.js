import React, { useState } from 'react';
import './style.scss';
import closeAd from '../../../assets/images/close-ad.svg';
const Advertisement = (props) => {

    const [advertismentDisplay, setAdvertismentDisplay] = useState(true);

    return (
        
        <div className="top-ads">
            <div className={advertismentDisplay ? "container-fluid" : "hide"}>
            <div className="ads-image">
                <img src="assets/images/header-banner.png" alt="advertisment-image" className="img-fluid" />
            </div>
            <button
                type="button"
                className="ads-close"
                aria-label="Close"
                onClick={() => setAdvertismentDisplay(false)}
            >
                <img src={closeAd} className="img-fluid" alt="close" />
            </button>
            </div>
        </div>
    );
}

export default Advertisement;