import React, { Component } from 'react';
import Filters from '../../../shared/components/Filters';
import Card from './Card';
import EventsService from '../../../shared/services/EventsService';
import HomeService from '../../../shared/services/HomeService';
import DownArrowBlue from '../../../assets/images/down-arrow-blue.svg';
import noEvent from '../../../assets/images/no-event.svg';
import Breadcrub from '../../../scenes/App/Breadcrumb';
import loaderImage from '../../../assets/images/loader.svg';
import EventBreadcrumbImage from '../../../assets/images/events.png';
import EventBreadcrumbImageBlur from '../../../assets/images/events-blur.png';
import filterIcon from '../../../assets/images/events/filter.svg';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import FilterSelected from '../../../shared/components/FilterSelected';
import Utilities from '../../../shared/utilities';
import './style.scss';
import SearchFilter from '../../../shared/components/SearchFilter';
import Constants from '../../../shared/constants';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shimmer: true,
      shimmerFilter: true,
      filteredGnere: [],
      filteredSearch: [],
      filteredPromotions: [],
      filteredVenues: [],
      filteredTags: [],
      filteredPriceRange: {},
      filteredDateRange: {},
      localfilteredGnere: [],
      localfilteredPromotions: [],
      localfilteredVenues: [],
      localfilteredTags: [],
      localfilteredPriceRange: {},
      localfilteredDateRange: {},
      filteredSortType: 'date',
      filteredSortOrder: '',
      localfilteredSortType: 'date',
      localfilteredSortOrder: '',
      eventsData: [],
      genre: [],
      venues: [],
      filterConfig: null,
      first: 0,
      limit: Constants.LIMIT,
      viewType: 'grid',
      viewTypeClass: 'events-section',
      totalRecords: 0,
      loader: false,
      queryParams: {},
      filterFlag: false,
      sortByFlag: false
    };

    this.breadCrumbData = {
      page_banner: EventBreadcrumbImage,
      page_banner_blur: EventBreadcrumbImageBlur,
      page: 'Events',
      count: 0,
      breadcrumb_slug: [
        { path: '/', title: 'Home' },
        { path: '/events', title: 'Events' }
      ]
    };
  }

  componentDidMount() {
    this.getGenre();
    this.getVenue();
    this.getFilterConfig();
    const payload = this.getInitialFilters();
    this.setInitialFilters(payload);
    this.loadEvents(payload);
    window.scrollTo(0, 0);
  }
  eventsData;
  componentDidUpdate(prevProps) {
    if (
      this.props.location.search &&
      this.props.location.search !== prevProps.location.search
    ) {
      this.setState({ shimmer: true });
      const payload = this.getInitialFilters();
      this.setInitialFilters(payload);
      this.loadEvents(payload);
      window.scrollTo(0, 0);
    }
  }

  getFilterConfig = () => {
    EventsService.getFilterConfig()
      .then(res => {
        this.setState({ filterConfig: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getGenre = () => {
    HomeService.getGenre()
      .then(res => {
        let genre = Object.keys(res.data.data).map(key => {
          return res.data.data[key];
        });
        setTimeout(() => {
          this.setState({ shimmerFilter: false, genre: genre });
        }, 1000);
      })
      .catch(error => {
        console.error(error);
      });
  };

  getVenue = () => {
    const first = 0;
    const limit = 100;
    const search = '';
    HomeService.getVenues(first, limit, search)
      .then(res => {
        this.setState({ venues: res.data.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  loadEvents = (params, isLoadMore) => {
    // this.setState({shimmer: true});
    params.client = Constants.CLIENT;
    EventsService.getExploreArticleList(params)
      .then(res => {
        let eventData = [];
        if (isLoadMore) {
          eventData = [...this.state.eventsData, ...res.data.data];
        } else {
          eventData = [...res.data.data];
        }
        const isdataAvailable = eventData.length ? false : true;
        setTimeout(() => {
          this.setState({
            loader: false,
            eventsData: eventData,
            shimmer: false,
            totalRecords: res.data.total_records,
            isdataAvailable: isdataAvailable
          });
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadMoreEvents = () => {
    let params = this.getFilters();
    params.first = this.state.first + Constants.LIMIT;
    this.loadEvents(params, true);
    this.setState({
      first: params.first,
      limit: params.limit,
      shimmer: true
    });
  };

  handleListGridView = getViewType => {
    let viewTypeClass = [...this.state.viewTypeClass];
    if (getViewType === 'grid') {
      viewTypeClass = 'events-section';
    } else {
      viewTypeClass = 'events-section list-view';
    }
    this.setState({
      viewTypeClass: viewTypeClass,
      viewType: getViewType
    });
  };

  getInitialFilters = (reset = false) => {
    const query = new URLSearchParams(this.props.location.search);
    let genreId = query.get('c') ? query.get('c') : '';
    let venueId = query.get('v') ? query.get('v') : '';
    let dateRange = query.get('s') ? query.get('s') : '';
    if (dateRange !== '' || !dateRange) {
      dateRange = dateRange.split('--');
      dateRange = { from: dateRange[0], to: dateRange[1] };
    }
    const payload = {
      first: 0,
      limit: Constants.LIMIT,
      genre: reset ? '' : genreId,
      venue: reset ? '' : venueId,
      start_date: reset ? '' : dateRange.from,
      end_date: reset ? '' : dateRange.to,
      client: 1
    };
    return payload;
  };

  setInitialFilters({ genre, venue, start_date, end_date }) {
    const dateRange = {
      from: start_date || '',
      to: end_date || ''
    };
    this.setState({
      queryParams: {
        genreId: genre,
        venueId: venue,
        dateRange: dateRange
      },
      filteredGnere: genre ? [genre] : [],
      filteredVenues: venue ? [venue] : [],
      filteredDateRange: dateRange,
      localfilteredGnere: genre ? [genre] : [],
      localfilteredVenues: venue ? [venue] : [],
      localfilteredDateRange: dateRange
    });
  }

  getFilters = () => {
    const {
      first,
      limit,
      filteredPromotions,
      filteredGnere,
      filteredVenues,
      filteredTags,
      filteredSearch,
      filteredPriceRange,
      filteredDateRange,
      filteredSortOrder,
      filteredSortType
    } = this.state;

    let params = {
      client: 1,
      first: first,
      limit: limit,
      promo_category: filteredPromotions.toString(),
      genre: filteredGnere.toString(),
      venue: filteredVenues.toString(),
      tags: filteredTags.toString(),
      search: filteredSearch,
      min_price: filteredPriceRange.min,
      max_price: filteredPriceRange.max,
      start_date: filteredDateRange.from,
      end_date: filteredDateRange.to,
      sort_type: filteredSortType,
      sort_order: filteredSortOrder
    };

    return params;
  };

  handleFilters = (searchType, apply) => {
    if (Utilities.mobilecheck) {
      this.setState({
        localfilteredSortType: searchType.filteredSortType,
        localfilteredSortOrder: searchType.filteredSortOrder
      });
    }
    let obj = {
      ...searchType
    };
    if (!Utilities.mobilecheck() || apply) {
      obj = {
        ...searchType,
        first: 0,
        limit: Constants.LIMIT,
        loader: true,
        totalRecords: 0,
        filterFlag: false
      };
    }
    this.setState(obj, () => {
      setTimeout(() => {
        if (!Utilities.mobilecheck() || apply) {
          this.loadEvents(this.getFilters(), false);
        }
      }, 200);
    });
  };

  resetFilters = () => {
    let obj = {};
    if (Utilities.mobilecheck()) {
      obj = {
        localfilteredGnere: [],
        localfilteredSearch: [],
        localfilteredPromotions: [],
        localfilteredVenues: [],
        localfilteredTags: [],
        localfilteredPriceRange: {},
        localfilteredDateRange: {}
      };
    } else {
      obj = {
        filteredGnere: [],
        filteredSearch: [],
        filteredPromotions: [],
        filteredVenues: [],
        filteredTags: [],
        filteredPriceRange: {},
        filteredDateRange: {},
        filteredSortType: 'date',
        filteredSortOrder: '',
        isdataAvailable: false,
        // eventsData: [],
        totalRecords: 0
      };
    }
    this.setState(obj, () => {
      if (!Utilities.mobilecheck()) {
        const payload = this.getInitialFilters(true);
        this.setInitialFilters(payload);
        this.loadEvents(payload);
      }
    });
  };

  redirectToTarget = alias => {
    this.props.history.push(`/events/` + alias);
  };

  toggleFilters = () => {
    this.setState({
      filterFlag: !this.state.filterFlag,
      localfilteredPriceRange: { ...this.state.filteredPriceRange },
      localfilteredDateRange: { ...this.state.filteredDateRange },
      localfilteredGnere: [...this.state.filteredGnere],
      localfilteredPromotions: [...this.state.filteredPromotions],
      localfilteredVenues: [...this.state.filteredVenues],
      localfilteredTags: [...this.state.filteredTags]
    });
    document.body.classList.toggle('fixed-body');
  };

  toggleSortBy = () => {
    this.setState({
      sortByFlag: !this.state.sortByFlag,
      localfilteredSortOrder: this.state.filteredSortOrder,
      localfilteredSortType: this.state.filteredSortType
    });
    document.body.classList.toggle('fixed-body');
  };

  callAPI = () => {
    this.setState(
      {
        first: 0,
        limit: Constants.LIMIT,
        totalRecords: 0,
        loader: true,
        filterFlag: false,
        sortByFlag: false,
        filteredPriceRange: { ...this.state.localfilteredPriceRange },
        filteredDateRange: { ...this.state.localfilteredDateRange },
        filteredGnere: [...this.state.localfilteredGnere],
        filteredPromotions: [...this.state.localfilteredPromotions],
        filteredVenues: [...this.state.localfilteredVenues],
        filteredTags: [...this.state.localfilteredTags],
        filteredSortOrder: this.state.localfilteredSortOrder,
        filteredSortType: this.state.localfilteredSortType
      },
      () => {
        setTimeout(() => {
          this.loadEvents(this.getFilters(), false);
        }, 200);
      }
    );
    document.body.classList.toggle('fixed-body');
  };

  clearSortFilters = () => {
    this.setState({
      localfilteredSortOrder: '',
      localfilteredSortType: ''
    });
  };

  render() {
    const {
      queryParams,
      loader,
      genre,
      venues,
      filterConfig,
      eventsData,
      totalRecords,
      isdataAvailable,
      viewType,
      shimmer,
      shimmerFilter,
      filteredSearch,
      filteredPriceRange,
      filteredGnere,
      filteredPromotions,
      filteredVenues,
      filteredTags,
      filteredDateRange,
      localfilteredPriceRange,
      localfilteredGnere,
      localfilteredPromotions,
      localfilteredVenues,
      localfilteredTags,
      localfilteredDateRange,
      filterFlag
    } = this.state;
    return (
      <div className="events-page-wrapper">
        <Breadcrub breadCrumbData={this.breadCrumbData} />
        <section className="">
          <div className="container-fluid">
            <div className="wrapper-events-listing">
              <div className={`filters ${this.state.filterFlag ? 'open' : ''}`}>
                {shimmerFilter && (
                  <ShimmerEffect
                    propCls="shm_col-xs-6 col-md-12"
                    height={150}
                    count={1}
                    type="FILTER"
                  />
                )}

                {!shimmerFilter &&
                  genre.length > 0 &&
                  venues.length > 0 &&
                  filterConfig &&
                  filterConfig.price_config &&
                  filterConfig.promotion_categories && (
                    <Filters
                      queryParams={queryParams}
                      resetFilters={this.resetFilters}
                      handleFilters={this.handleFilters}
                      genreData={genre}
                      venueData={venues}
                      filterConfig={filterConfig}
                      filteredSearch={filteredSearch}
                      filteredPriceRange={
                        Utilities.mobilecheck()
                          ? localfilteredPriceRange
                          : filteredPriceRange
                      }
                      filteredGnere={
                        Utilities.mobilecheck()
                          ? localfilteredGnere
                          : filteredGnere
                      }
                      filteredPromotions={
                        Utilities.mobilecheck()
                          ? localfilteredPromotions
                          : filteredPromotions
                      }
                      filteredVenues={
                        Utilities.mobilecheck()
                          ? localfilteredVenues
                          : filteredVenues
                      }
                      filteredTags={
                        Utilities.mobilecheck()
                          ? localfilteredTags
                          : filteredTags
                      }
                      filteredDateRange={
                        Utilities.mobilecheck()
                          ? localfilteredDateRange
                          : filteredDateRange
                      }
                      filterFlag={filterFlag}
                    >
                      <div className="fixed-buttons">
                        <a
                          onClick={() => {
                            this.toggleFilters();
                          }}
                          className="close"
                        >
                          Close
                        </a>
                        <a onClick={() => this.callAPI()} className="apply">
                          Apply
                        </a>
                      </div>
                    </Filters>
                  )}
              </div>

              <div
                className={`events-listing ${
                  this.state.sortByFlag ? 'open' : ''
                }`}
              >
                <div className="event-listing-sorting">
                  <SearchFilter
                    handleFilters={this.handleFilters}
                    searchText={filteredSearch}
                  />
                  <FilterSelected
                    genreData={genre}
                    venueData={venues}
                    filterConfig={filterConfig}
                    filteredPriceRange={filteredPriceRange}
                    filteredGnere={filteredGnere}
                    filteredPromotions={filteredPromotions}
                    filteredVenues={filteredVenues}
                    filteredTags={filteredTags}
                    filteredDateRange={filteredDateRange}
                    handleFilters={this.handleFilters}
                  />
                </div>
                <div className="event-listing-ads"></div>
                <div className={this.state.viewTypeClass}>
                  {loader && (
                    <img
                      className="filter-loader"
                      alt="filter loader"
                      src={loaderImage}
                    />
                  )}
                  {eventsData &&
                    eventsData.map(event => {
                      return (
                        <div
                          key={event.id}
                          onClick={() => this.redirectToTarget(event.alias)}
                        >
                          <Card cardData={event} />
                        </div>
                      );
                    })}
                </div>
                {shimmer && (
                  <ShimmerEffect
                    propCls={`${
                      Utilities.mobileAndTabletcheck() ? 'shm_col-xs-6' : ''
                    } col-md-4`}
                    height={150}
                    count={Utilities.mobileAndTabletcheck() ? 2 : 3}
                    type="LIST"
                  />
                )}
                {eventsData.length < totalRecords && (
                  <div className="promotion-load-more">
                    <button
                      onClick={() => this.loadMoreEvents()}
                      className="btn-link load-more-btn"
                      target=""
                    >
                      <span>
                        Load More ({totalRecords - eventsData.length})
                      </span>
                      <img src={DownArrowBlue} alt="down arrow blue" />
                    </button>
                  </div>
                )}
                {isdataAvailable && (
                  <div className="no-data">
                    <img src={noEvent} alt="No Event Data" />
                    <p>
                      <strong>No events found</strong>
                    </p>
                    <p>Try again with more general search events</p>
                  </div>
                )}
              </div>
              <div className="fixed-buttons-events">
                <a className="filter" onClick={this.toggleFilters}>
                  filter
                  <img src={filterIcon} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}