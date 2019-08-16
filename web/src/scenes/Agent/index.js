import React, { Component } from 'react'
import './style.scss';
import CountryRegion from './CountryRegion';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';

export default class Agent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="">
        <CountryRegion />
        <div className="container-fluid row">
          <div className="col-lg-4">
            <SearchAgent />
          </div>
          <div className="col-lg-8">
            <GoogleMap />
          </div>
        </div>
      </section>
    )
  }
}
