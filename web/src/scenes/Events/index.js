import React, { Component } from 'react'
import Filters from '../../shared/components/Filters';
import SortBy from '../../shared/components/SortBy';
import Card from '../../shared/components/Card';
import EventsService from '../../shared/services/EventsService';
import './style.scss';

export default class Events extends Component {
  
  constructor(props){
    super(props);
    this.state = {eventsData: [], first:1, limit:10 };
    this.loadMoreEvents = this.loadMoreEvents.bind(this);
  }

  componentDidMount () {
    this.loadEvents();
  }

  loadEvents(first =1, limit = 10){
    let params = {first: first, limit:limit};
    EventsService.getData(params)
    .then((res) => {
        this.setState({ eventsData: res.data.data })
    })
    .catch((err) => {
        console.log(err)
    })
  }

  loadMoreEvents(){
    const first=this.state.first+10;
    const limit=this.state.limit+10;
    this.loadEvents(first, limit);
    this.setState({ first: first, limit :limit})
  }

  render() {
    console.log(this.state)
    return (
        <section className="promotions-wrapper">
            <div className="container-fluid">
                <div className="wrapper-events-listing">
                    <Filters />
                    <div className="events-listing">
                        <SortBy />
                        <div className="events-section">
                            {this.state.eventsData && this.state.eventsData.map((event) => {
                                return <Card eventsData={event} />
                            })}
                            
                        </div>
                        <div class="promotion-load-more">
                           <a onClick={this.loadMoreEvents} class="btn-link load-more-btn" target="">
                               <span>Load More</span>
                               <img src="assets/images/down-arrow-blue.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}