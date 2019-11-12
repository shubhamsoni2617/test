import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Tooltip(props) {
  let styleObj = { bottom: props.height };
  if (props.top) {
    styleObj = { top: props.height, bottom: 'unset' };
  }
  return (
    <div className={`title ${props.class || ''}`}>
      <div className="info-popover" style={styleObj}>
        {props.title}
      </div>
      {props.children}
    </div>
  );
}

export default Tooltip;

Tooltip.propTypes = {
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
