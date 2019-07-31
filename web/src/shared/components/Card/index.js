import React, { Component } from 'react'
import './style.scss';

export default class Card extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
      console.log('props',this.props)
  } 

  render() {
    return (
        <div className="event-block">
            <div className="event-img">
                <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios"/>
            </div>
            <div className="event-details">
                <div className="event-detail-prime">
                    <span className="category musical">{this.props.eventsData.primary_genre}</span>
                    <h3 className="item-title">{this.props.eventsData.title}
                    </h3>
                    <p className="event-date">{this.props.eventsData.event_date}</p>
                    <p className="event-place">{this.props.eventsData.venue_name}</p>
                </div>
                <div className="price-event">
                    <div className="price">
                        <span>Selling Fast</span>
                        <p>{this.props.eventsData.price}</p>
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