import React from 'react';
import Agent from '../Agent';

const Venue = (props) => {
  return (
    <div>
      <Agent
        venue={true}
        text="Find a Venue"
      />
    </div>
  );
};

export default Venue;
