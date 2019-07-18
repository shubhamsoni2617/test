import React, { Component } from 'react'
import './style.scss';

export default class Card extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
    
  } 

  render() {
    return (
        <li className="promotion-block">
            <div className="promotions-listing-wrapper">
                <div className="promotion-image">
                    <img src="assets/images/headrock-2x.png" className="img-fluid" alt="" />
                </div>
                <div className="promotion-desc">
                    <span className="promotion-category">Bank Promotion</span>
                    <span className="share">
                        <img src="assets/images/share-icon.svg" alt="" />
                    </span>
                    <h3>HeadRock VR</h3>
                    <div className="promotion-btn-wrapper">
                        <button>
                            <span>Buy</span>
                            <img src="assets/images/next-arrow-white.svg" alt="" />
                        </button>
                        <div className="promotion-timer">
                            <span className="timer-tagline">Hurry! Promotion ends in:</span>
                            <ul>
                                <li className="timer-watch">
                                    <img src="assets/images/stopwatch-grey.svg" className="img-fluid" alt="watch" />
                                </li>
                                <li className="timer-days">
                                    <span>70</span>
                                    <span className="timer-label">Days</span>
                                </li>
                                <li className="timer-hours">
                                    <span>11</span>
                                    <span className="timer-label">Hrs</span>
                                </li>
                                <li className="timer-minutes">
                                    <span>29</span>
                                    <span className="timer-label">Mins</span>
                                </li>
                                <li className="timer-seconds">
                                    <span>58</span>
                                    <span className="timer-label">Sec</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promotion-dropdown-height"></div>
            <div className="promotion-tab-dropdown">
                <a className="promotion-tab-close-btn" href="/">
                    <img src="assets/images/close-blue.svg" alt=""/>
                </a>
                <span className="top-dropdown-bar"></span>
                <div className="promotion-tab-dropdown-content">
                    <p>Book tickets with Mastercard and enjoy 20% off! This promotion is only applicable for tickets purchased each day to visit Headrock VR from 17 December 2018 to 31 July 2019.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet cursus lacus. Nullam elementum, dolor eu ullamcorper sodales, libero eros vehicula urna, vel egestas diam erat et neque. Donec vitae ante et nulla porta imperdiet. Aliquam maximus sem eget mi venenatis venenatis. In tortor urna, placerat ac augue eget, aliquet cursus odio. Nulla justo urna, bibendum sed nunc et, elementum eleifend erat. Sed eleifend orci ut volutpat ullamcorper. Duis pulvinar, libero ac posuere ultrices, quam tortor commodo turpis, quis suscipit risus odio ac justo. Mauris purus odio, sodales id volutpat sit amet, pharetra id felis. Pellentesque tempus a sapien eget finibus.</p>
                    <img src="assets/images/banner-image2.png" className="img-fluid" alt="" />
                    <p>Donec id sem et arcu fermentum pretium quis in metus. Ut dapibus sem ac iaculis pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada feugiat odio in consequat. Sed non nisl tortor. Pellentesque luctus magna sollicitudin nulla accumsan, at molestie elit cursus. Phasellus et est justo. Vivamus nec risus bibendum, iaculis arcu a, tempus augue. Cras sollicitudin elit at vehicula pulvinar. In hac habitasse platea dictumst. Mauris facilisis risus et lorem dignissim placerat.</p>
                </div>
            </div>
        </li>
    )
  }
}