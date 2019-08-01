import React, { Component } from 'react'
import Filters from '../../shared/components/Filters';
import SortBy from '../../shared/components/SortBy';
import Card from '../../shared/components/Card';
import EventsService from '../../shared/services/EventsService';
import HomeService from '../../shared/services/HomeService';
import './style.scss';
import DownArrowBlue from '../../assets/images/down-arrow-blue.svg';

export default class Events extends Component {
    
    constructor(props) {
        super(props);
        this.state = { filteredPromotions: [], filteredVenues: [], eventsData: [], genre: [], venues: [], filterConfig: [], first: 1, limit: 10 };
    }

    componentDidMount() {
        this.loadEvents();
        this.getGenre();
        this.getVenue();
        this.getFilterConfig();
    }

    getFilterConfig() {
        EventsService.getFilterConfig()
            .then((res) => {
                this.setState({ filterConfig: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getGenre() {
        HomeService.getGenre()
            .then((res) => {
                this.setState({ genre: res.data.data })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    getVenue() {
        const first = 1;
        const limit = 10;
        const search = '';
        HomeService.getVenues(first, limit, search)
            .then((res) => {
                this.setState({ venues: res.data.data })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    loadEvents(first = 1, limit = 2) {
        let params = { first: first, limit: limit };
        EventsService.getData(params)
            .then((res) => {
                this.setState({ eventsData: res.data.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    loadMoreEvents = () => {
        const first = this.state.first + 10;
        const limit = this.state.limit + 10;
        this.loadEvents(first, limit);
        this.setState({ first: first, limit: limit })
    }


    handleFilters = (type, value, isChecked) => {
        debugger
        let filteredPromotions = [...this.state.filteredPromotions];
        let filteredVenues = [...this.state.filteredVenues];
        if (type == 'promotions' && isChecked) {
            filteredPromotions.push(value);
        } else {
            let index = filteredPromotions.indexOf(value);
            if (index > -1) filteredPromotions.splice(index, 1);
        }
        if (type == 'venue' && isChecked) {
            filteredVenues.push(value);
        } else {
            let index = filteredVenues.indexOf(value);
            if (index > -1) filteredVenues.splice(index, 1);
        }
        this.setState({filteredPromotions, filteredVenues},()=>{
            console.log('this.state.filteredPromotions',this.state.filteredPromotions)
            console.log('this.state.filteredVenues',this.state.filteredVenues)
        })
    }

    render() {
        const { genre, venues, filterConfig } = this.state;
        return (
            <section className="promotions-wrapper">
                <div className="container-fluid">
                    <div className="wrapper-events-listing">
                        <Filters handleFilters={this.handleFilters} genreData={genre} venueData={venues} filterConfig={filterConfig} />
                        <div className="events-listing">
                            <SortBy />
                            <div className="events-section">
                                {this.state.eventsData && this.state.eventsData.map((event) => {
                                    return <Card eventsData={event} />
                                })}
                            </div>
                            <div class="promotion-load-more">
                                <a onClick={() => this.loadMoreEvents()} class="btn-link load-more-btn" target="">
                                    <span>Load More</span>
                                    <img src={DownArrowBlue} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}