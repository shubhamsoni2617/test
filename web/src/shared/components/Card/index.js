import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Image from '../../components/Image';
import EventHeading from '../EventHeading';
import EventStatus from '../EventStatus';

export default class Card extends Component {
  render() {
    return (
      <div className="event-block">
        <div className="event-img">
          <Image src={this.props.eventsData.thumb_image} />
        </div>
        <div className="event-details">
          <div className="event-detail-prime">
            <span
              className={
                'category ' + this.props.eventsData.primary_genre.toLowerCase()
              }
            >
              {this.props.eventsData.primary_genre}
            </span>
            <div className="item-title">
              <EventHeading
                title={this.props.eventsData.title}
                lines={2}
                height={20}
              />
            </div>
            <p className="event-date">{this.props.eventsData.event_date}</p>
            <p className="event-place">{this.props.eventsData.venue_name}</p>
          </div>
          <div className="price-event">
            <div className="price">
              <EventStatus
                status={this.props.eventsData.event_status}
                color={this.props.eventsData.event_status_text_color}
                background={this.props.eventsData.event_status_background_color}
                paddingLeft={'2px'}
                paddingRight={'2px'}
              />
              <p>
                {this.props.eventsData.price
                  ? this.props.eventsData.price
                  : ' '}
              </p>
            </div>
            <button type="button" className="btn buy-btn">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  eventsData: PropTypes.object.isRequired
};
