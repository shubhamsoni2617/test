import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Tooltip(props) {
  return (
    <div className="title">
      <div className="info-popover" style={{ bottom: props.height }}>
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
