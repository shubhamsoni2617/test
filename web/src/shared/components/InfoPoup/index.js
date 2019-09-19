import React from 'react';
import PropTypes from 'prop-types';

const InfoPopup = ({ content }) => {
  return <div className="info-popover">{content}</div>;
};

export default InfoPopup;

InfoPopup.propTypes = {
  content: PropTypes.string
};
