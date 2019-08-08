import React, { useRef } from 'react';
import './style.scss';
import closeAd from '../../../assets/images/close-ad.svg';

const Advertisement = (props) => {
    const refValue = useRef();
    const handleClose=()=>{
       refValue.current.classList.remove("hide-ad");
    }

    return (
        
        <div className="top-ads hide-ad" ref={refValue}>
            <div className="container-fluid">
            <div className="ads-image">
                <img src="assets/images/header-banner.png" alt="advertisment-image" className="img-fluid" />
            </div>
            <button
                type="button"
                className="ads-close"
                aria-label="Close"
                onClick={() =>handleClose()}
            >
                <img src={closeAd} className="img-fluid" alt="close" />
            </button>
            </div>
        </div>
    );
}

export default Advertisement;