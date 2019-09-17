import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Image from '../../components/Image';
import Utilities from '../../utilities';
import EventHeading from '../EventHeading';
import EventStatus from '../EventStatus';
import ModalPopup from '../../components/Modal';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      popUpContent: null
    };
  }

  showPopUp = (status, content) => {
    this.setState({ showPopUp: status, popUpContent: content });
  };

  render() {
    let { cardData, redirectTo, cardClass } = this.props;
    let category;
    if (cardData && cardData.hasOwnProperty('primary_genre')) {
      category = cardData.primary_genre;
    } else if (cardData && cardData.hasOwnProperty('category')) {
      category = cardData.category.name;
    }
    return (
      <div className={this.props.cardClass.cardBlock}>
        {this.props.cardData && this.props.cardData.is_featured == '1' && (
          <span className="featured-tag">Featured</span>
        )}
        <div className="event-img">
          <Image src={cardData.thumb_image} />
        </div>
        <div className="event-details">
          <div className="event-detail-prime">
            <span className={`category ${category && category.toLowerCase()}`}>
              {category}
            </span>
            <div className="item-title">
              <EventHeading title={cardData.title} lines={2} height={20} />
            </div>
            {cardData.synopsis && (
              <React.Fragment>
                <span
                  dangerouslySetInnerHTML={{
                    __html: Utilities.showLimitedChars(cardData.synopsis, 55)
                  }}
                ></span>
                {cardData.synopsis.length > 55 && (
                  <span
                    className="attraction-show-more"
                    onClick={() => this.showPopUp(true, cardData.synopsis)}
                  >
                    Show More
                  </span>
                )}

                {this.state.showPopUp && (
                  <ModalPopup
                    showModal={true}
                    content={this.state.popUpContent}
                    title="Synopsis"
                    handleClose={() => this.showPopUp(false, null)}
                    htmlContent={true}
                  />
                )}
              </React.Fragment>
            )}
            <p className="event-date">{cardData.event_date}</p>
            <p className="event-place">{cardData.venue_name}</p>
          </div>
          <div className="price-event">
            <div className="price">
              <EventStatus
                status={cardData.event_status}
                color={cardData.event_status_text_color}
                background={cardData.event_status_background_color}
                paddingLeft={'2px'}
                paddingRight={'2px'}
              />
              <p>{cardData.price ? cardData.price : ' '}</p>
            </div>
            <button
              type="button"
              onClick={() => redirectTo(cardData.alias)}
              className={cardClass.cardButton}
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardData: PropTypes.object.isRequired
};
