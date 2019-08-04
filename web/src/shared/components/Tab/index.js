import React, { Component } from 'react'
import PromotionCard from '../PromotionCard';
import './style.scss';

export default class Tab extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
    
  } 

  render() {
    return (
        <div className="promotion-grid">
            <div className="sortby-filter">
                <div className="filter-topbar">
                    <span className="sortby-text">Sort by:</span>
                    <span className="active-filter">Date</span>
                </div>
                <ul>
                    <li><a href="/">Promotions - A to Z</a></li>
                    <li><a href="/">Promotions - Z to A</a></li>
                    <li className="active"><a href="/">Date</a></li>
                </ul>
            </div>
            <div className="tab-content-wrapper">
                <ul className="promotions-listing">
                    <PromotionCard />
                    <PromotionCard />
                </ul>
            </div>
            <div className="promotion-load-more">
                <a href="/" className="btn-link load-more-btn">
                    <span>Load More (12)</span>
                    <img src="assets/images/down-arrow-blue.svg" alt="down-arrow" />
                </a>
            </div>
        </div>
    )
  }
}