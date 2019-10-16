import React from 'react';
import './style.scss';
import FeaturedEvents from '../../FeaturedEvents';

const CustomSectionOne = ({ api }) => {
  return <FeaturedEvents api={api} />;
};

export default CustomSectionOne;
