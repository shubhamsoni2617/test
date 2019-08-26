import React, { Component } from "react";
import { BrowserHistory } from "react-router-dom";
import Filters from "../../shared/components/Filters";
import SortBy from "../../shared/components/SortBy";
import Card from "../../shared/components/Card";
import EventsService from "../../shared/services/EventsService";
import HomeService from "../../shared/services/HomeService";
import Image from "../../shared/components/Image";
import DownArrowBlue from "../../assets/images/down-arrow-blue.svg";
import noEvent from "../../assets/images/no-event.svg";
import Breadcrub from "../../scenes/App/Breadcrumb";
import ListView from "../../assets/images/list-view.svg";
import GridView from "../../assets/images/grid-view.svg";
import loaderImage from "../../assets/images/loader.svg";
import EventBreadcrumbImage from "../../assets/images/events.png";
import moment from "moment";
import ShimmerEffect from "../../shared/components/ShimmerEffect";
import "./style.scss";

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.initialLimit = { client: 1, first: 0, limit: 9, sort_type: "date" };
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
      filteredSortType: "date",
      filteredSortOrder: "",
      eventsData: [],
      genre: [],
      venues: [],
      filterConfig: [],
      first: 0,
      limit: 9,
      viewType: "grid",
      viewTypeClass: "events-section",
      totalRecords: 0,
      loader: false,
      queryParams: {}
    };

    this.breadCrumbData = {
      page_banner: EventBreadcrumbImage,
      page: "Events",
      count: 0,
      breadcrumb_slug: [
        { path: "/", title: "Home" },
        { path: "/events", title: "Events" }
      ]
    };

    this.tabsSort = {
      isSortBy: true,
      sortList: [
        {
          sortType: "title",
          sortOrder: "ASC",
          sortTitle: "A to Z",
          sortTag: "Events - A to Z"
        },
        {
          sortType: "title",
          sortOrder: "DESC",
          sortTitle: "Z to A",
          sortTag: "Events - Z to A"
        },
        {
          sortType: "price",
          sortOrder: "ASC",
          sortTitle: "Price Low to High",
          sortTag: "Price Low to High"
        },
        {
          sortType: "price",
          sortOrder: "DESC",
          sortTitle: "Price High to Low",
          sortTag: "Price High to Low"
        },
        {
          sortType: "date",
          sortOrder: "",
          sortTitle: "Date",
          sortTag: "Date"
        }
      ]
    };
  }

  componentDidMount() {
    this.getGenre();
    this.getVenue();
    this.getFilterConfig();
    this.loadEvents(this.getRoutesParams());
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.search &&
      this.props.location.search != prevProps.location.search
    ) {
      this.setState({shimmer: true});
      this.loadEvents(this.getRoutesParams());
    }
  }

  getRoutesParams = () => {
    const query = new URLSearchParams(this.props.location.search);
    let genreId = query.get("c") ? query.get("c") : "";
    let venueId = query.get("v") ? query.get("v") : "";
    let dateRange = query.get("s") ? query.get("s") : "";
    if (dateRange != "") {
      dateRange = dateRange.split("--");
      dateRange = { from: dateRange[0], to: dateRange[1] };
    }
    this.state.filteredGnere = [];
    this.state.filteredVenues = [];
    if (genreId != "") this.state.filteredGnere.push(genreId);
    if (venueId != "") this.state.filteredVenues.push(venueId);

    this.setState({
      queryParams: { genreId: genreId, venueId: venueId, dateRange: dateRange }
    });

    this.initialLimit.genre = genreId;
    this.initialLimit.venue = venueId;
    this.initialLimit.start_date = dateRange.from;
    this.initialLimit.end_date = dateRange.to;

    return this.initialLimit;
  };

  resetFilters = () => {
    this.initialLimit.search = "";
    this.setState(
      {
        filteredGnere: [],
        filteredSearch: [],
        filteredPromotions: [],
        filteredVenues: [],
        filteredTags: [],
        filteredPriceRange: {},
        filteredDateRange: {},
        filteredSortType: "date",
        filteredSortOrder: "",
        isdataAvailable: false,
        eventsData: [],
        totalRecords: 0
      },
      () => {
        this.loadEvents(this.initialLimit);
      }
    );
  };

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

        this.setState({ shimmerFilter: false, genre: genre });
      })
      .catch(error => {
        console.error(error);
      });
  };

  getVenue = () => {
    const first = 0;
    const limit = 100;
    const search = "";
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
    EventsService.getData(params)
      .then(res => {
        if (!isLoadMore) this.setState({ eventsData: [] });
        const eventData = [...this.state.eventsData, ...res.data.data];
        const isdataAvailable = eventData.length ? false : true;
        setTimeout(() => {
          this.setState({
            loader: false,
            eventsData: eventData,
            shimmer: false,
            totalRecords: res.data.total_records,
            isdataAvailable: isdataAvailable
          });
        }, 10000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadMoreEvents = () => {
    let params = this.setFilterParams();
    params.first = this.state.first + 9;
    this.loadEvents(params, true);
    this.setState({ first: params.first, limit: params.limit, shimmer: true });
  };

  handleListGridView = getViewType => {
    let viewTypeClass = [...this.state.viewTypeClass];
    if (getViewType == "grid") {
      viewTypeClass = "events-section";
    } else {
      viewTypeClass = "events-section list-view";
    }
    this.setState({ viewTypeClass: viewTypeClass, viewType: getViewType });
  };

  setFilterParams = () => {
    let params = {
      client: 1,
      first: "",
      limit: this.state.limit,
      promo_category: "",
      genre: "",
      venue: "",
      tags: "",
      search: "",
      min_price: "",
      max_price: "",
      start_date: "",
      end_date: "",
      sort_type: "",
      sort_order: ""
    };
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
  };

  handleFilters = (searchType, searchValue, isChecked) => {
    let filteredPromotions = [...this.state.filteredPromotions];
    let filteredVenues = [...this.state.filteredVenues];
    let filteredTags = [...this.state.filteredTags];
    let filteredSearch = this.state.filteredSearch;
    let filteredGnere = [...this.state.filteredGnere];
    let filteredPriceRange = { ...this.state.filteredPriceRange };
    let filteredDateRange = { ...this.state.filteredDateRange };
    let filteredSortType = this.state.filteredSortType;
    let filteredSortOrder = this.state.filteredSortOrder;

    if (searchType == "promotions" && isChecked == true) {
      filteredPromotions.push(searchValue);
    } else if (searchType == "promotions" && isChecked == false) {
      let index = filteredPromotions.indexOf(searchValue);
      if (index > -1) filteredPromotions.splice(index, 1);
    } else if (searchType == "venues" && isChecked == true) {
      filteredVenues.push(searchValue);
    } else if (searchType == "venues" && isChecked == false) {
      let index = filteredVenues.indexOf(searchValue);
      if (index > -1) filteredVenues.splice(index, 1);
    } else if (searchType == "genre" && isChecked == true) {
      filteredGnere.push(searchValue);
    } else if (searchType == "genre" && isChecked == false) {
      let index = filteredGnere.indexOf(searchValue);
      if (index > -1) filteredGnere.splice(index, 1);
    } else if (searchType == "tags" && isChecked == true) {
      filteredTags.push(searchValue);
    } else if (searchType == "tags" && isChecked == false) {
      let index = filteredTags.indexOf(searchValue);
      if (index > -1) filteredTags.splice(index, 1);
    }
    if (searchType == "search") {
      filteredSearch = searchValue;
    }

    switch (searchType) {
      case "promotions-check-uncheck":
        {
          filteredPromotions = searchValue;
        }
        break;
      case "genre-check-uncheck":
        {
          filteredGnere = searchValue;
        }
        break;
      case "venues-check-uncheck":
        {
          filteredVenues = searchValue;
        }
        break;
      case "tags-check-uncheck":
        {
          filteredTags = searchValue;
        }
        break;
      case "price-range":
        {
          filteredPriceRange = searchValue;
        }
        break;
      case "date-range":
        {
          filteredDateRange = searchValue;
        }
        break;
      case "sort":
      case "price":
      case "date":
      case "title": {
        filteredSortType = searchType;
        filteredSortOrder = searchValue;
      }
    }

    this.setState(
      {
        filteredPromotions,
        filteredVenues,
        filteredTags,
        filteredSearch,
        filteredGnere,
        filteredPriceRange,
        filteredDateRange,
        filteredSortType,
        filteredSortOrder
      },
      () => {
        this.setState({ totalRecords: 0, loader: true });
        this.setState({ first: 0, limit: 9 });
        let params = this.setFilterParams();

        setTimeout(() => {
          this.loadEvents(params, false);
        }, 200);
      }
    );
  };

  redirectToTarget = alias => {
    this.props.history.push(`/events/` + alias);
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
      shimmerFilter
    } = this.state;
    const viewTypeActive = viewType == "list" ? "active" : "";
    return (
      <div>
        <Breadcrub breadCrumbData={this.breadCrumbData} />
          <div className="container-fluid">
            <div className="wrapper-events-listing">
              <div className="filters">
              {shimmerFilter && <ShimmerEffect
                    propCls="shm_col-xs-6 col-md-12"
                    height={150}
                    count={1}
                    type="grid"
                  />}
              {!shimmerFilter && genre.length > 0 &&
                venues.length > 0 &&
                filterConfig.price_config &&
                filterConfig.promotion_categories && (
                  <Filters
                    queryParams={queryParams}
                    resetFilters={this.resetFilters}
                    handleFilters={this.handleFilters}
                    genreData={genre}
                    venueData={venues}
                    filterConfig={filterConfig}
                    showCalendar={true}

                  />
                )}

              </div>


              <div className="events-listing">
                <div className="event-listing-sorting">
                  <SortBy
                    sortList={this.tabsSort.sortList}
                    handleListGridView={this.handleListGridView}
                    handleFilters={this.handleFilters}
                  />
                  <ul className="sortby-view">
                    <li className={viewType == "grid" ? "active" : ""}>
                      <a>
                        <img
                          onClick={() => this.handleListGridView("grid")}
                          src={GridView}
                          alt="Grid"
                        />
                      </a>
                    </li>
                    <li className={viewType == "list" ? "active" : ""}>
                      <a>
                        <img
                          onClick={() => this.handleListGridView("list")}
                          src={ListView}
                          alt="List"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={this.state.viewTypeClass}>
                  {loader && (
                    <img className="filter-loader" src={loaderImage} />
                  )}
                  {eventsData &&
                    eventsData.map(event => {
                      return (
                        <div onClick={() => this.redirectToTarget(event.alias)}>
                          <Card cardData={event} cardClass={{cardBlock: 'event-block', cardButton: 'btn buy-btn'}}/>
                        </div>
                      );
                    })}
                </div>
                {shimmer && (
                  <ShimmerEffect
                    propCls="shm_col-xs-6 col-md-4"
                    height={150}
                    count={3}
                    type="grid"
                  />
                )}
                {eventsData.length < totalRecords && (
                  <div className="promotion-load-more">
                    <a
                      onClick={() => this.loadMoreEvents()}
                      className="btn-link load-more-btn"
                      target=""
                    >
                      <span>Load More</span>
                      <img src={DownArrowBlue} />
                    </a>
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
            </div>
          </div>
        
      </div>
    );
  }
}
