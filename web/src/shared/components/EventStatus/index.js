import React, { useState, useEffect } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function EventStatus({ status, color, background, paddingLeft, paddingRight }) {
  const [styleObj, setStyleObj] = useState(null);
  useEffect(() => {
    setStyleObj({
      color,
      background,
      paddingLeft,
      paddingRight
    });
  }, [status, color, background, paddingLeft, paddingRight]);
  if (!status) {
    return null;
  }
  return <span style={styleObj}>{status}</span>;
}

export default EventStatus;

EventStatus.propTypes = {
  status: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string
};
