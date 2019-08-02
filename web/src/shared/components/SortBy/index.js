import React, { Component } from 'react'
import './style.scss';

export default class SortBy extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
  } 

  render() {
    return (
            <div className="sortby">
                <div className="sortby-filter">
                    <div className="filter-topbar">
                        <span className="sortby-text">Sort by:</span>
                        <span className="active-filter">Date</span>
                    </div>
                    <ul>
                        <li>Events - A to Z</li>
                        <li>Events - Z to A</li>
                        <li>Price Low to High</li>
                        <li>Price High to Low</li>
                        <li className="active">Date</li>
                    </ul>
                </div>
                <ul className="sortby-view">
                    <li className="active">
                        <a href="/"><img src="assets/images/grid-view.svg" alt="Grid" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="assets/images/list-view.svg" alt="List" /></a>
                    </li>
                </ul>
            </div>
        )
    }
}