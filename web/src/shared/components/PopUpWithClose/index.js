import React from 'react';


const PopUpWithClose = (props) => {
    const {content, handleClose, title } = props;
    return (
        <div>
            <span onClick={()=>handleClose()}>Close</span>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
} 

export default PopUpWithClose;