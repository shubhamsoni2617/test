import React from 'react';
import FeaturedEvents from '../FeaturedEvents';
import AdvertisementService from '../../../shared/services/AdvertisementService';

const CustomFeatureEvents = () => {
  return <FeaturedEvents api={AdvertisementService.getFeaturedEvents} />;
};

export default CustomFeatureEvents;
