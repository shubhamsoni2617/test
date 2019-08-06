import React, { Component } from 'react';
import { BrowserHistory } from 'react-router-dom';
import Filters from '../../shared/components/Filters';
import SortBy from '../../shared/components/SortBy';
import Card from '../../shared/components/Card';
import EventsService from '../../shared/services/EventsService';
import HomeService from '../../shared/services/HomeService';
import DownArrowBlue from '../../assets/images/down-arrow-blue.svg';
import Breadcrub from '../../scenes/App/Breadcrumb';
import './style.scss';

export default class Events extends Component {

    constructor(props) {
        super(props);

        this.initialLimit = { first: 0, limit: 10, sort_type: 'date' };
        this.state = {
            filteredGnere: [], filteredSearch: [], filteredPromotions: [], filteredVenues: [], filteredTags: [],
            filteredPriceRange: {}, filteredDateRange: {}, filteredSortType: 'date', filteredSortOrder: '',
            eventsData: [], genre: [], venues: [], filterConfig: [], first: 0, limit: 10, viewType: 'events-section', totalRecords: 0
        };

        this.breadCrumbData = {
            'page_banner': 'assets/images/promotions-banner.png',
            'page': 'Events',
            'count': '24',
            'breadcrumb_slug': [{ 'path': '/', 'title': 'Home' }, { 'path': '/events', 'title': 'Events' }]
        };

    }

    componentDidMount() {
        this.loadEvents({ first: 0, limit: 10 });
        this.getGenre();
        this.getVenue();
        this.getFilterConfig();
    }

    resetFilters = () => {
        this.setState({
            filteredGnere: [],
            filteredSearch: [],
            filteredPromotions: [],
            filteredVenues: [],
            filteredTags: [],
            filteredPriceRange: {},
            filteredDateRange: {},
            filteredSortType: 'date',
            filteredSortOrder: '',
            eventsData: []
        }, () => {
            this.loadEvents(this.initialLimit);
        })
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
        const limit = 100;
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
        EventsService.getData(params)
            .then((res) => {
                const eventData = [...this.state.eventsData, ...res.data.data];
                this.setState({ eventsData: eventData, totalRecords: res.data.total_records })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    loadMoreEvents = () => {
        let params = this.setFilterParams();
        params.first = this.state.first + 10;
        this.loadEvents(params);
        this.setState({ first: params.first, limit: params.limit })
    }

    handleListGridView = (type) => {
        let viewType = [...this.state.viewType];
        if (type == 'grid') {
            viewType = 'events-section'
        } else {
            viewType = 'events-section list-view'
        }
        this.setState({ viewType });
    }

    setFilterParams = () => {
        let params = {
            'first': '', 'limit': this.state.limit, 'promo_category': '', 'genre': '', 'venue': '', 'tags': '', 'search': '', 'min_price': '',
            'max_price': '', 'start_date': '', 'end_date': '', 'sort_type': '', 'sort_order': ''
        }
        params.promo_category = this.state.filteredPromotions.toString();
        params.genre = this.state.filteredGnere.toString();
        params.venue = this.state.filteredVenues.toString();
        params.tags = this.state.filteredTags.toString();
        params.search = this.state.filteredSearch;
        params.min_price = this.state.filteredPriceRange.min;
        params.max_price = this.state.filteredPriceRange.max;
        params.start_date = this.state.filteredDateRange.from;
        params.end_date = this.state.filteredDateRange.to;
        params.sort_order = this.state.filteredSortOrder;
        params.sort_type = this.state.filteredSortType;
        params.first = this.initialLimit.first;
        params.limit = this.initialLimit.limit;

        return params;
    }

    handleFilters = (searchType, searchValue, isChecked) => {


        let filteredPromotions = [...this.state.filteredPromotions];
        let filteredVenues = [...this.state.filteredVenues];
        let filteredTags = [...this.state.filteredTags];
        let filteredSearch = [...this.state.filteredSearch];
        let filteredGnere = [...this.state.filteredGnere];
        let filteredPriceRange = { ...this.state.filteredPriceRange };
        let filteredDateRange = { ...this.state.filteredDateRange };
        let filteredSortType = this.state.filteredSortType;
        let filteredSortOrder = this.state.filteredSortOrder;

        if (searchType == 'promotions' && isChecked == true) {
            filteredPromotions.push(searchValue);
        } else if (searchType == 'promotions' && isChecked == false) {
            let index = filteredPromotions.indexOf(searchValue);
            if (index > -1) filteredPromotions.splice(index, 1);
        } else if (searchType == 'venues' && isChecked == true) {
            filteredVenues.push(searchValue);
        } else if (searchType == 'venues' && isChecked == false) {
            let index = filteredVenues.indexOf(searchValue);
            if (index > -1) filteredVenues.splice(index, 1);
        } else if (searchType == 'genre' && isChecked == true) {
            filteredGnere.push(searchValue);
        } else if (searchType == 'genre' && isChecked == false) {
            let index = filteredGnere.indexOf(searchValue);
            if (index > -1) filteredGnere.splice(index, 1);
        } else if (searchType == 'tags' && isChecked == true) {
            filteredTags.push(searchValue);
        } else if (searchType == 'tags' && isChecked == false) {
            let index = filteredTags.indexOf(searchValue);
            if (index > -1) filteredTags.splice(index, 1);
        }
        if (searchType == 'search') {
            filteredSearch = searchValue;
        }

        switch (searchType) {
            case 'promotions-check-uncheck': {
                filteredPromotions = searchValue;
            }
                break;
            case 'genre-check-uncheck': {
                filteredGnere = searchValue;
            }
                break
            case 'venues-check-uncheck': {
                filteredVenues = searchValue;
            }
                break;
            case 'tags-check-uncheck': {
                filteredTags = searchValue;
            }
                break;
            case 'price-range': {
                filteredPriceRange = searchValue;
            }
                break;
            case 'date-range': {
                filteredDateRange = searchValue;
            }
                break;
            case 'sort':
            case 'price':
            case 'date': {
                filteredSortType = (searchType == 'sort') ? '' : searchType;
                filteredSortOrder = searchValue;
            }
        }

        this.setState({
            filteredPromotions,
            filteredVenues,
            filteredTags,
            filteredSearch,
            filteredGnere,
            filteredPriceRange,
            filteredDateRange,
            filteredSortType,
            filteredSortOrder
        }, () => {
            this.setState({ eventsData: [] })
            this.setState({ first: 0, limit: 10 });
            let params = this.setFilterParams()
            this.loadEvents(params);
        })
    }

    redirectToTarget = (alias) => {
        debugger
        this.props.history.push(`events/`+alias)
    }

    render() {
        const { genre, venues, filterConfig, eventsData, totalRecords, limit } = this.state;
        return (
            <div>
                <Breadcrub breadCrumbData={this.breadCrumbData} />
                <section className="promotions-wrapper">
                    <div className="container-fluid">
                        <div className="wrapper-events-listing">
                            {genre.length > 0 && venues.length > 0 && filterConfig.price_config && filterConfig.promotion_categories &&
                                <Filters resetFilters={this.resetFilters} handleFilters={this.handleFilters} genreData={genre} venueData={venues} filterConfig={filterConfig} />
                            }
                            <div className="events-listing">
                                <SortBy handleListGridView={this.handleListGridView} handleFilters={this.handleFilters} />
                                <div  className={this.state.viewType}>
                                    {eventsData && eventsData.map((event) => {
                                        return <div onClick={() => this.redirectToTarget(event.alias)}>
                                            <Card  eventsData={event} />
                                        </div>
                                    })}
                                </div>
                                {eventsData.length < totalRecords &&
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
            </div>
        )
    }
}