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
        this.state = {
            filteredGnere: [],
            filterSearch: '',
            filteredPromotions: [],
            filteredVenues: [],
            filteredPriceRange:{},
            filteredDateRange: {},
            eventsData: [],
            genre: [],
            venues: [],
            filterConfig: [],
            first: 1,
            limit: 10,
            viewType: 'events-section'
        };
    }

    componentDidMount() {
        this.loadEvents({first:1,limit:10});
        this.getGenre();
        this.getVenue();
        this.getFilterConfig();
    }

    getFilterConfig = () => {
        EventsService.getFilterConfig()
            .then((res) => {
                this.setState({ filterConfig: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    getGenre = () => {
        HomeService.getGenre()
            .then((res) => {
                let genre = Object.keys(res.data.data).map((key) => {
                    return res.data.data[key];
                })
                this.setState({ genre: genre })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    getVenue = () => {
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

    loadEvents = (params) => {
        // let params = { first: first, limit: limit };
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

    handleListGridView = (type) => {
        debugger
        let viewType = [...this.state.viewType];

        if (type == 'grid') {
            viewType = 'events-section'
        } else {
            viewType = 'events-section list-view'
        }
        this.setState({ viewType });
    }

    handleFilters = (searchType, searchValue, isChecked) => {
        debugger

        let params = {
            'promo_category': '',
            'genre': '',
            'venue': '',
            'search': '',
            'min_price': '',
            'max_price': '',
            'start_date': '',
            'end_date': '',
            'sort_order': '',
            'first': '',
            'list': ''

        }

        let filteredPromotions = [...this.state.filteredPromotions];
        let filteredVenues = [...this.state.filteredVenues];
        let filterSearch = [...this.state.filterSearch];
        let filteredGnere = [...this.state.filteredGnere];
        let filteredPriceRange = {...this.state.filteredPriceRange};
        let filteredDateRange = {...this.state.filteredDateRange};
        

        if (searchType == 'promotions' && isChecked == true) {
            filteredPromotions.push(searchValue);
        } else if (searchType == 'promotions' && isChecked == false) {
            let index = filteredPromotions.indexOf(searchValue);
            if (index > -1) filteredPromotions.splice(index, 1);
        } else if (searchType == 'venue' && isChecked == true) {
            filteredVenues.push(searchValue);
        } else if (searchType == 'venue' && isChecked == false) {
            let index = filteredVenues.indexOf(searchValue);
            if (index > -1) filteredVenues.splice(index, 1);
        } else if (searchType == 'genre' && isChecked == true) {
            filteredGnere.push(searchValue);
        } else if (searchType == 'genre' && isChecked == false) {
            let index = filteredGnere.indexOf(searchValue);
            if (index > -1) filteredGnere.splice(index, 1);
        }
        if (searchType == 'search') {
            filterSearch = params.filterSearch = searchValue;
        }

        switch(searchType){
            case 'price-range' : {
                filteredPriceRange = searchValue;
            }
            break;
            case 'date-range' : {
                filteredDateRange = searchValue;
            }
            break
        }
        if (searchType == 'sort') {

        }

        

        this.setState({ filteredPromotions, filteredVenues, filterSearch, filteredGnere, filteredPriceRange, filteredDateRange }, () => {
            // console.log('this.state.filteredPromotions', this.state.filteredPromotions)
            // console.log('this.state.filteredVenues', this.state.filteredVenues)
            // console.log('this.state.filterSearch', this.state.filterSearch)
            params.search = this.state.filterSearch;
            params.min_price = this.state.filteredPriceRange.min;
            params.max_price = this.state.filteredPriceRange.max;
            params.start_date = this.state.filteredDateRange.from;
            params.end_date = this.state.filteredDateRange.to;
            this.loadEvents(params);
        })
    }

    render() {
        const { genre, venues, filterConfig, eventsData } = this.state;
        return (
            <section className="promotions-wrapper">
                <div className="container-fluid">
                    <div className="wrapper-events-listing">
                        {genre.length > 0 && venues.length > 0 && filterConfig.price_config && filterConfig.promotion_categories &&
                            <Filters handleFilters={this.handleFilters} genreData={genre} venueData={venues} filterConfig={filterConfig} />
                        }
                        <div className="events-listing">
                            <SortBy handleListGridView={this.handleListGridView} handleFilters={this.handleFilters} />
                            <div className={this.state.viewType}>
                                {eventsData && eventsData.map((event) => {
                                    return <Card eventsData={event} />
                                })}
                            </div>
                            {eventsData && eventsData.length > 10 &&
                                <div class="promotion-load-more">
                                    <a onClick={() => this.loadMoreEvents()} class="btn-link load-more-btn" target="">
                                        <span>Load More</span>
                                        <img src={DownArrowBlue} />
                                    </a>
                                </div>
                            }
                            {eventsData && eventsData.length == 0 &&
                                <div>No Events Available</div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}