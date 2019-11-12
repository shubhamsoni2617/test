import React from 'react';
import SliderBanner from '../SliderBanner';
import './style.scss';
import Image from '../../../assets/images/system-banner.png';
import FeaturedEvents from '../../../shared/components/FeaturedEvents';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Explore from '../../../shared/components/Explore';

const Article = ({ history }) => {
  return (
    <section>
      <SliderBanner />
      <div>
        <img src={Image} />
        Customer satisfaction is a priority at Ingersoll Rand. We are committed
        to better understanding customer perspectives and refining our offerings
        to meet and exceed their expectations for reliability, energy efficiency
        and sustainability. Duis posuere, metus a venenatis ultricies, orci nisl
        elementum turpis, quis placerat odio nunc quis ligula. Fusce sagittis
        sagittis molestie.
      </div>
      <FeaturedEvents
        api={AdvertisementService.getFeaturedEvents}
        heading="Featured in Article"
        explore
      />
      <Explore />
    </section>
  );
};

export default Article;
