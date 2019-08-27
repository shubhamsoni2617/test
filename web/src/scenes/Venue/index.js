import React, { Fragment } from 'react';
import Agent from '../Agent';

const Venue = (props) => {
  return (
    <Fragment>
      <Agent
        venue={true}
        countrySearchTitle="Find a Venue"
        venueSearchTitle="Venues in Singapore"
        zoom={12}
      />
    </Fragment>
  );
};

export default Venue;
