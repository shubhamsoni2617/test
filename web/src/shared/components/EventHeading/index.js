import React, { useState, useEffect ,useRef } from 'react';
import './style.scss';

function EventHeading(props) {
  const [styleObj, setStyleObj] = useState(null);
  const element = useRef();
  useEffect(() => {
    if(element.current.offsetHeight > 54){
      setStyleObj({
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'display': '-webkit-box',
        'line-height': `${props.height}px`,
        'max-height': `${props.height * props.lines}px`,
        'min-height': 'unset',
        '-webkit-line-clamp': `${props.lines}`,
        '-webkit-box-orient': 'vertical',
        'margin-bottom': '15px',
        'width': '91%',
        'float': 'left'
      });
    }
  }, [element.current]);
  if(!props.title){
    return null;
  }
  return (
    <h3 style={styleObj} ref={element}>{props.title}</h3>
  );
};

export default EventHeading;
