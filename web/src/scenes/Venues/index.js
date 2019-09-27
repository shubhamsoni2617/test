import React, { Component } from 'react';
import Agent from '../../shared/components/AgentVenue';

export default class Venues extends Component {
  render() {
    return <Agent {...this.props} venue={true} />;
  }
}
