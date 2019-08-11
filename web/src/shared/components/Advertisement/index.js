import React, { useRef, useEffect, useState } from 'react';
import './style.scss';
import closeAd from '../../../assets/images/close-ad.svg';
import headerBanner from '../../../assets/images/header-banner.png';
const Advertisement = (props) => {
    const refValue = useRef();

    const handleClose=()=>{
      refValue.current.flag = false;
       refValue.current.classList.remove("show-add");
    }

    useEffect(() => {
      refValue.current.flag = true;
      if(props.history.location.pathname === '/'){
        refValue.current.classList.add("show-add");
      }
      const unlisten = props.history.listen((location, action) => {
        if(location.pathname !== '/'){
          refValue.current.classList.remove("show-add");
        }else if(refValue.current.flag){
          refValue.current.classList.add("show-add");
        }
      });
      return () => {
        unlisten();
      };
    }, [])

    return (

        <div className="top-ads" ref={refValue}>
            <div className="container-fluid">
            <div className="ads-image">
                <img src={headerBanner} alt="advertisment-image" className="img-fluid" />
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
