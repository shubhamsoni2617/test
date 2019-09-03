import React, { Component } from 'react'
import './style.scss';
import Image from '../../components/Image';
import Utilities from '../../utilities';
import EventHeading from '../EventHeading';

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
                <Image src={this.props.eventsData.thumb_image} />
            </div>
            <div className="event-details">
                <div className="event-detail-prime">
                    <span className={'category '+ this.props.eventsData.primary_genre.toLowerCase()}>{this.props.eventsData.primary_genre}</span>
                    {/* <h3 className="item-title">{Utilities.showLimitedChars(this.props.eventsData.title, 70)} {}
                    </h3> */}
                    <div className="item-title">
                    <EventHeading title={this.props.eventsData.title} lines={2} height={20} />
                    </div>
                    <p className="event-date">{this.props.eventsData.event_date}</p>
                    <p className="event-place">{this.props.eventsData.venue_name}</p>
                </div>
                <div className="price-event">
                    <div className="price">
                        <span>{this.props.eventsData.event_status}</span>
                        <p>{(this.props.eventsData.price)? this.props.eventsData.price : ' '}</p>
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
