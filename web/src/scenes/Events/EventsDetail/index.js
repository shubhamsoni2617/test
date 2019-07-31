import React, { Component } from 'react';
import AccordionSection from '../../../shared/components/AccordionSection';
import EventCarousel from '../../../shared/components/EventCarousel';
import ArticleSection from '../../../shared/components/ArticleSection';
import SimilarPicksSection from '../../../shared/components/SimilarPicksSection';


import './style.scss';

export default class EventsDetail extends Component {
  
  constructor(props){
    super(props);
    this.children = [{
        'data' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        'heading': 'Price Details'
    }];
  }

  componentDidMount () {
    
  } 

  render() {
    return (
        <div className="event-detail-wrapper">
            <section className="event-detail-banner">
                <div className="banner-carousel">
                    <EventCarousel />
                </div>
                <div className="event-detail">
                    <div className="tickets-demo-img">
                        <img src="assets/images/kurios-joker.jpg" alt="joker" className="img-fluid" />
                    </div>
                    <div className="tickets-desc">
                        <div className="breadcrumb-share">
                            <ul className="breadcrumb">
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Musicals</a></li>
                            </ul>
                        </div>
                        <ul className="zoner-group">
                            <li className="active"><a href="/">Musical</a></li>
                            <li><a href="/">12+ Years</a></li>
                            <li><a href="/">Family</a></li>
                        </ul>
                    <h2>Cirque Du Soleil – KURIOS Cabinet of Curiosities</h2>
                    <span className="share">
                        <img src="assets/images/share-icon.svg" className="" alt="" />
                    </span>
    
                    <div className="ticket-date-price">
                        <ul className="date-address">
                            <li className="event-date">
                                <img src="assets/images/event-calender.svg" alt="cal-icon"/>
                                <span>Fri, 19 Apr- Sun, 19 May 2019</span>
                            </li>
                            <li className="event-address">
                                <img className="location-icon" src="../../assets/images/location-blue.svg" alt="location"/>
                                <img className="sticky-location-icon" src="assets/images/location-grey.svg" alt="location"/>
                                <span>Sands Theatre, Marina Bay Sands</span>
                            </li>
                        </ul>
                        <div className="price">
                            <label>Price</label>
                            <span>S$45 - S$380</span>
                        </div>
                    </div>
                    </div>
                    <div className="tickets-button">
                    <div className="buy-tickets-btn">
                        <button>Buy Tickets</button>
                    </div>
                    <div className="shows-over">
                        <div className="shows-over-icon">   
                            <img src="assets/images/face.svg" alt="" />   
                        </div>
                        <div className="shows-over-desc">
                            <h4>Shows over!</h4>
                            <p>This event has ended and no longer available for booking.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div className="shows-over-banner">
                <div className="shows-over">
                    <div className="shows-over-icon">   
                    <img src="assets/images/face.svg" alt="" />   
                    </div>
                    <div className="shows-over-desc">
                    <h4>Show's over!</h4>
                    <p>This event is no longer available for booking. But we have something which you might like</p>
                    </div>
                </div>
            </div>
            <section className="event-detail-section">               
                <div className="event-detail-panel">
                    <AccordionSection />
               </div>
                <div className="event-detail-sidebar">
                    <a href="" className="seat-map"><img src="assets/images/seatmap.svg" /> Seat Map</a>
                    <AccordionSection  children={this.children} />
                   
                </div>
            </section>
            <section className="event-zoner-group">
              <div className="container-fluid">
                  <ul>
                      <li><a href="/">Entertainment</a></li>
                      <li><a href="/">Family</a></li>
                      <li><a href="/">Fun</a></li>
                  </ul>
              </div>
          </section>
            <ArticleSection />
            <SimilarPicksSection />
      </div>
    );  
    }
}

