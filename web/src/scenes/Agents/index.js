import React, { Component } from 'react';
import Agent from '../../shared/components/AgentVenue';

export default class Agents extends Component {
  render() {
    return <Agent {...this.props} />;
  }
}
