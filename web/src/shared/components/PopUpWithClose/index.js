import React from 'react';
import popupClose from '../../../assets/images/cross.svg';
import './style.scss';

const PopUpWithClose = (props) => {
    const {content, handleClose, title } = props;
    return (
        <div className="modal" id="exampleModal">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg " role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="close" onClick={()=>handleClose()}>
                            <span aria-hidden="true"><img src={popupClose} alt="Close Popup" /></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="notice">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default PopUpWithClose;