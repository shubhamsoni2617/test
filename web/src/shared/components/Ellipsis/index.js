import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';
import './style.scss';

function Ellipsis(props) {
  const [allowTooltip, setAllowTooltip] = useState(props.allowTooltip);
  const [styleObj, setStyleObj] = useState(null);
  const element = useRef();

  useEffect(() => {
    if (
      !allowTooltip &&
      ((props.lines === 1 &&
        element.current &&
        element.current.scrollWidth > element.current.offsetWidth + 150) ||
        (props.lines > 1 &&
          element.current &&
          element.current.scrollHeight > element.current.offsetHeight + 2))
    ) {
      // debugger;
      setAllowTooltip(true);
    }
    let styleObjectDefault = {
      overflow: 'hidden',
      LineHeight: `${props.height}px`,
      maxHeight: `${props.height * props.lines}px`,
      minHeight: `${props.height * props.lines}px`,
      width: '91%',
      fontSize: props.size,
      fontWeight: props.weight
    };
    if (
      props.lines !== 1 &&
      element.current &&
      element.current.offsetHeight >= props.height * props.lines
    ) {
      setStyleObj({
        textOverflow: 'ellipsis',
        display: props.lines === 1 ? 'block' : '-webkit-box',
        WebkitLineClamp: `${props.lines}`,
        WebkitBoxOrient: 'vertical',
        ...styleObjectDefault
      });
    } else if (
      element.current &&
      element.current.offsetHeight >= props.height * props.lines
    ) {
      setStyleObj({
        ...styleObjectDefault,
        textOverflow: 'ellipsis',
        display: 'block',
        WebkitLineClamp: `${props.lines}`,
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'nowrap',
        width: '100%'
      });
    } else {
      setStyleObj({
        display: 'block',
        ...styleObjectDefault
      });
    }
  }, [element.current, allowTooltip, props]);

  if (!props.title) {
    return null;
  }

  return (
    <p
      style={styleObj}
      ref={element}
      className={`${
        props.customClass ? props.customClass : 'featured-event-date'
      }`}
    >
      {props.title}
    </p>
  );
}

export default Ellipsis;

Ellipsis.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  lines: PropTypes.number.isRequired,
  size: PropTypes.number,
  weight: PropTypes.string,
  allowTooltip: PropTypes.any
};
