import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../Tooltip';

function TitleToolTip(props) {
  const [allowTooltip, setAllowTooltip] = useState(props.allowTooltip);
  const [styleObj, setStyleObj] = useState(null);
  const element = useRef();

  useEffect(() => {
    if (
      !allowTooltip &&
      ((props.lines === 1 &&
        element.current.scrollWidth > element.current.offsetWidth + 150) ||
        (props.lines > 1 &&
          element.current.scrollHeight > element.current.offsetHeight))
    ) {
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
    if (element.current.offsetHeight >= props.height * props.lines) {
      setStyleObj({
        textOverflow: 'ellipsis',
        display:
          props.lines === 1 && !props.eventDetail ? 'block' : '-webkit-box',
        WebkitLineClamp: `${props.lines}`,
        WebkitBoxOrient: 'vertical',
        ...styleObjectDefault
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

  if (allowTooltip) {
    return (
      <Tooltip title={props.title} height={props.height * props.lines + 5}>
        <h3 style={styleObj} ref={element}>
          {props.title}
        </h3>
      </Tooltip>
    );
  }

  return (
    <h3 style={styleObj} ref={element}>
      {props.title}
    </h3>
  );
}

export default TitleToolTip;

TitleToolTip.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  lines: PropTypes.number.isRequired,
  size: PropTypes.number,
  weight: PropTypes.string,
  allowTooltip: PropTypes.any
};