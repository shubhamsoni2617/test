import React from 'react';
import './style.scss';

function Tooltip(props) {
  return (
    <div className="title">
        <div className="info-popover" style={{bottom: props.height}}>
          {props.title}
        </div>
        {props.children}
      </div>
  );
};

export default Tooltip;
