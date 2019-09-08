import React, { Component } from "react";
import Filters from "../../shared/components/Filters";
import SortBy from "../../shared/components/SortBy";
import Card from "../../shared/components/Card";
import EventsService from "../../shared/services/EventsService";
import HomeService from "../../shared/services/HomeService";
import DownArrowBlue from "../../assets/images/down-arrow-blue.svg";
import noEvent from "../../assets/images/no-event.svg";
import Breadcrub from "../../scenes/App/Breadcrumb";
import ListView from "../../assets/images/list-view.svg";
import GridView from "../../assets/images/grid-view.svg";
import loaderImage from "../../assets/images/loader.svg";
import EventBreadcrumbImage from "../../assets/images/events.png";
import EventBreadcrumbImageBlur from "../../assets/images/events-blur.png";
import ShimmerEffect from "../../shared/components/ShimmerEffect";
import "./style.scss";

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
      page_banner_blur: EventBreadcrumbImageBlur,
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
          sortTitle: "Events - A to Z",
          sortTag: "Events - A to Z"
        },
        {
          sortType: "title",
          sortOrder: "DESC",
          sortTitle: "Events - Z to A",
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
          sortType: "venue",
          sortOrder: "ASC",
          sortTitle: "Venue - A to Z",
          sortTag: "Venue - A to Z"
        },
        {
          sortType: "venue",
          sortOrder: "DESC",
          sortTitle: "Venue - Z to A",
          sortTag: "Venue - Z to A"
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
    const payload = this.getInitialFilters();
    this.setInitialFilters(payload);
    this.loadEvents(payload);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.search &&
      this.props.location.search != prevProps.location.search
    ) {
      this.setState({ shimmer: true });
      const payload = this.getInitialFilters();
      this.setInitialFilters(payload);
      this.loadEvents(payload);
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
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadMoreEvents = () => {
    let params = this.getFilters();
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

  getInitialFilters = (reset=false) => {
    const query = new URLSearchParams(this.props.location.search);
    let genreId = query.get("c") ? query.get("c") : "";
    let venueId = query.get("v") ? query.get("v") : "";
    let dateRange = query.get("s") ? query.get("s") : "";
    if (dateRange != "") {
      dateRange = dateRange.split("--");
      dateRange = { from: dateRange[0], to: dateRange[1] };
    }
    const payload = {
      first: 0,
      limit: 9,
      genre: reset ? '' : genreId,
      venue: reset ? '' : venueId,
      start_date: reset ? '' : dateRange.from,
      end_date: reset ? '' : dateRange.to
    };
    return payload;
  };

  setInitialFilters({ genre, venue, start_date, end_date }) {
    const dateRange =  {from: start_date || "", to: end_date || "" };
    this.setState({
      queryParams: { genreId: genre, venueId: venue, dateRange: dateRange },
      filteredGnere: genre ? [genre] : [],
      filteredVenues: venue ? [venue] : [],
      filteredDateRange: dateRange
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

  handleFilters = (searchType) => {
    this.setState(
      {
        first: 0,
        limit: 9,
        totalRecords: 0,
        loader: true,
        ...searchType
      },
      () => {
        setTimeout(() => {
          this.loadEvents(this.getFilters(), false);
        }, 200);
      }
    );
  };

  resetFilters = () => {
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
        const payload = this.getInitialFilters(true);
        this.setInitialFilters(payload);
        this.loadEvents(payload);
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
      shimmerFilter,
      filteredSearch,
      filteredPriceRange,
      filteredGnere,
      filteredPromotions,
      filteredVenues,
      filteredTags,
      filteredDateRange
    } = this.state;
    const viewTypeActive = viewType == "list" ? "active" : "";
    return (
      <div>
        <Breadcrub breadCrumbData={this.breadCrumbData} />
        <section className="promotions-wrapper">
          <div className="container-fluid">
            <div className="wrapper-events-listing">
              <div className="filters">
                {shimmerFilter && (
                  <ShimmerEffect
                    propCls="shm_col-xs-6 col-md-12"
                    height={150}
                    count={1}
                    type="LIST"
                  />
                )}
                {!shimmerFilter &&
                  genre.length > 0 &&
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
                      filteredSearch={filteredSearch}
                      filteredPriceRange={filteredPriceRange}
                      filteredGnere={filteredGnere}
                      filteredPromotions={filteredPromotions}
                      filteredVenues={filteredVenues}
                      filteredTags={filteredTags}
                      filteredDateRange={filteredDateRange}
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
                      <a title="Grid View">
                        <img
                          onClick={() => this.handleListGridView("grid")}
                          src={GridView}
                          alt="Grid"
                        />
                      </a>
                    </li>
                    <li className={viewType == "list" ? "active" : ""}>
                      <a title="List View">
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
                        <div
                          key={event.id}
                          onClick={() => this.redirectToTarget(event.alias)}
                        >
                          <Card eventsData={event} />
                        </div>
                      );
                    })}
                </div>
                {shimmer && (
                  <ShimmerEffect
                    propCls="shm_col-xs-6 col-md-4"
                    height={150}
                    count={3}
                    type="LIST"
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
        </section>
      </div>
    );
  }
}
