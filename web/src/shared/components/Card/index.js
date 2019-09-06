import React, { Component } from 'react'
import './style.scss';
import Image from '../../components/Image';
import Utilities from '../../utilities';
import EventHeading from '../EventHeading';

export default class Card extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let { cardData } = this.props;
        let category;
        if (cardData && cardData.hasOwnProperty('primary_genre')) {
            category = cardData.primary_genre;
        } else if (cardData && cardData.hasOwnProperty('category')) {
            category = cardData.category.name;
        }
        return (
            <div className={this.props.cardClass.cardBlock}>
                {this.props.cardData && this.props.cardData.is_featured == '1' && <span className="featured-tag">Featured</span>}
                <div className="event-img">
                    <Image src={this.props.cardData.thumb_image} />
                </div>
                <div className="event-details">
                    <div className="event-detail-prime">
                        <span className={`category ${category.toLowerCase()}`}>
                            {category}
                        </span>
                        <div className="item-title">
                        <EventHeading title={this.props.cardData.title} lines={2} height={20} />
                        </div>
                        {this.props.cardData.synopsis && <span dangerouslySetInnerHTML={{__html:Utilities.showLimitedChars(this.props.cardData.synopsis, 70)}}></span>}
                        <p className="event-date">{this.props.cardData.event_date}</p>
                        <p className="event-place">{this.props.cardData.venue_name}</p>
                    </div>
                    <div className="price-event">
                        <div className="price">
                            <span>{this.props.cardData.event_status}</span>
                            <p>{(this.props.cardData.price) ? this.props.cardData.price : ' '}</p>
                        </div>
                        <button type="button" className={this.props.cardClass.cardButton}>
                            Buy Tickets
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
