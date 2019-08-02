import React, { Component } from 'react'
import Tab from '../Tab';
import './style.scss';

export default class Tabs extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
    
  } 

  render() {
    return (
        <div>
            <div className="promotions-nav">
                <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                    <li><a href="/" className="nav-item nav-link active">SISTIC Specials (7)</a></li>
                    <li><a href="/" className="nav-item nav-link">Events (4)</a></li>
                    <li><a href="/" className="nav-item nav-link">Attractions (3)</a></li>
                    <li><a href="/" className="nav-item nav-link">Partners (2)</a></li>
                    <li><a href="/" className="nav-item nav-link">View All (16)</a></li>
                </ul>
            </div>
            <Tab />
        </div>
    )
  }
}