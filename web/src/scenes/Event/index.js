import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import './style.css'

export default class Event extends Component {
  render() {
    
    return (
      <div>
        <Helmet title="My Title" />
        <p>Events List Web testingg</p>
        <Link to="/home">Home Page</Link>
      </div>
    )
  }
}