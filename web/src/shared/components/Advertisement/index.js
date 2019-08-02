import React, { useState } from 'react';
import './style.scss';

const Advertisement = (props) => {

    const [advertismentDisplay, setAdvertismentDisplay] = useState(true);

    return (
        <div className={advertismentDisplay ? "container-fluid" : "hide"}>
            <img className="advertisment-image" src="assets/images/header-banner.png" alt="" />
            <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={() => setAdvertismentDisplay(false)}
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Advertisement;