import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../../Tooltip';

function TitleToolTip(props) {
  const [allowTooltip, setAllowTooltip] = useState(false);
  const [styleObj, setStyleObj] = useState(null);
  const element = useRef();

  useEffect(() => {
    if (
      !allowTooltip &&
      ((props.lines === 1 &&
        element.current &&
        element.current.scrollWidth > element.current.offsetWidth) ||
        (props.lines > 1 &&
          element.current &&
          element.current.scrollHeight > element.current.offsetHeight))
    ) {
      setAllowTooltip(true);
    }
    let styleObjectDefault = {
      overflow: 'hidden',
      LineHeight: `${props.height}px`,
      fontSize: props.size,
      fontWeight: props.weight
      // width: element.current.clientWidth
    };
    if (props.lines === 1) {
      setStyleObj({
        display: 'inline-block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        ...styleObjectDefault
      });
    } else if (
      element.current &&
      element.current.offsetHeight >= props.height * props.lines
    ) {
      setStyleObj({
        textOverflow: 'ellipsis',
        maxHeight: `${props.height * props.lines}px`,
        minHeight: `${props.height * props.lines}px`,
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
      <Tooltip
        title={props.title}
        top={30}
        class={'top'}
        height={props.height * props.lines + 5}
      >
        {props.tag === false && (
          <span style={styleObj} ref={element}>
            {props.title}
          </span>
        )}
        {props.tag !== false && (
          <h3 style={styleObj} ref={element}>
            {props.title}
          </h3>
        )}
      </Tooltip>
    );
  }

  return (
    <>
      {props.tag === false && (
        <span style={styleObj} ref={element}>
          {props.title}
        </span>
      )}
      {props.tag !== false && (
        <h3 style={styleObj} ref={element}>
          {props.title}
        </h3>
      )}
    </>
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
