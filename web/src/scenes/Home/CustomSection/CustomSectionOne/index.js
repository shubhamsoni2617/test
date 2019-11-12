import React from 'react';
import './style.scss';
import FeaturedEvents from '../../../../shared/components/FeaturedEvents';

const CustomSectionOne = ({ api, cssClassName }) => {
  return (
    <FeaturedEvents
      heading="Featured Events"
      api={api}
      cssClassName={cssClassName}
    />
  );
};

export default CustomSectionOne;
