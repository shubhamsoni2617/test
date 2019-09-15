import React, { Component, Fragment } from 'react';
import Agent from '../../shared/components/Agent';

export default class Venues extends Component {
  render() {
    return (
      <Fragment>
        <Agent
          venue={true}
        />
      </Fragment>
    );
  }
};
