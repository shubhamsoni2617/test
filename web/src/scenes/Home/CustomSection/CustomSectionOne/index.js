import React from 'react';
import './style.scss';
import FeaturedEvents from '../../FeaturedEvents';

const CustomSectionOne = ({ api, cssClassName }) => {
  return <FeaturedEvents api={api} cssClassName={cssClassName} />;
};

export default CustomSectionOne;
