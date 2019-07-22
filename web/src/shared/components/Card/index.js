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
        <div className="event-block">
            <div className="event-img">
                <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios"/>
            </div>
            <div className="event-details">
                <span className="category musical">Musical</span>
                <h3 className="item-title">Aladdin Lorem ipsum dolor sit consectetur adipiscing elit…
                </h3>
                <p className="event-date">Sun, 21 Jul - Sun, 1 Sep 2019</p>
                <p className="event-place">Sands Theatre, Marina Bay Sands</p>
                <div className="price-event">
                    <div className="price">
                        <span>Selling Fast</span>
                        <p>S$ 208 - S$ 667</p>
                    </div>
                    <button type="button" className="btn buy-btn">
                        Buy Tickets
                    </button>
                </div>
            </div>
    </div>
    )
  }
}