import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import './style.css'

export default class Home extends Component {

  render() {
    
    return (
      <div>
        <Helmet title="My Title - Test!" />
        <p>Home Web new page test 123</p>
        <Link to="/event">Event Page</Link>
      </div>
    )
  }
}