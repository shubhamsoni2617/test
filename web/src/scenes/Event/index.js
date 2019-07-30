import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import HomeService from "../../shared/services/HomeService";
import './style.css';
export default class Event extends Component {
  
  constructor(props){
    super(props);
    let detail
    if (typeof window == "undefined") {
      detail = props.staticContext.data
    } else {
      detail = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    }

    this.state = {
      detail,
    }
    
  }

  componentDidMount () {
    if (!this.state.detail) {
      HomeService.getData().then((response)=>{
        this.setState({
          detail: response.data
        })
      });
    }
  } 

  render() {
    
    return (
      <div>
        <Helmet title="My Title" />
        {this.state.detail && this.state.detail.total_count && <p>Events List Web testing {this.state.detail.total_count}</p>}
        <Link className="link" to="/">Home Page 4</Link>
      </div>
    )
  }
}