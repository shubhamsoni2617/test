import React, { Component } from "react";
import { BrowserHistory } from "react-router-dom";
import Filters from "../../shared/components/Filters";
import SortBy from "../../shared/components/SortBy";
import Card from "../../shared/components/Card";
import EventsService from "../../shared/services/EventsService";
import AttractionsService from "../../shared/services/AttractionsService";
import HomeService from "../../shared/services/HomeService";
import Image from "../../shared/components/Image";
import DownArrowBlue from "../../assets/images/down-arrow-blue.svg";
import noEvent from "../../assets/images/no-event.svg";
import Breadcrub from "../../scenes/App/Breadcrumb";
import ListView from "../../assets/images/list-view.svg";
import GridView from "../../assets/images/grid-view.svg";
import loaderImage from "../../assets/images/loader.svg";
import AttractionBreadcrumbImage from "../../assets/images/attractionbanner.png";
import moment from "moment";
import ShimmerEffect from "../../shared/components/ShimmerEffect";
import LoadMoreOnScroll from "../../shared/components/LoadMoreOnScroll";
import "./style.scss";

export default class Attractions extends Component {
  constructor(props) {
    super(props);

    this.initialLimit = { client: 1, first: 0, limit: 9, sort_type: "title", sort_order: 'ASC', search:'' };
    this.state = {
      shimmer: true,
      attractionCategories: [],
      filteredSearch: [],
      filteredCategory: [],
      filteredSortType: "title",
      filteredSortOrder: "ASC",
      eventsData: [],
      attractionsData: [],
      first: 0,
      limit: 9,
      viewType: "grid",
      viewTypeClass: "events-section",
      totalRecords: 0,
      loader: false,
      queryParams: {},
      count:0
    };

    this.breadCrumbData = {
      page_banner: AttractionBreadcrumbImage,
      page: "Attractions",
      count: 0,
      breadcrumb_slug: [
        { path: "/", title: "Home" },
        { path: "/attraction", title: "Attractions" }
      ]
    };

    this.tabsSort = {
      isSortBy: true,
      defaultSortType: 'A to Z',
      sortList: [
        {
          sortType: "title",
          sortOrder: "ASC",
          sortTitle: "A to Z",
          sortTag: "Attractions - A to Z"
        },
        {
          sortType: "title",
          sortOrder: "DESC",
          sortTitle: "Z to A",
          sortTag: "Attractions - Z to A"
        }
      ]
    };
  }

  componentDidMount() {
    this.getAttractionsCategory();
    this.loadAttractions(this.initialLimit);
  }

  resetFilters = () => {
    this.setState(
      {
        filteredCategory: [],
        filteredSearch: '',
        filteredSortType: "title",
        filteredSortOrder: "ASC",
        isdataAvailable: false,
        eventsData: [],
        attractionsData: [],
        totalRecords: 0
      },
      () => {
        this.loadAttractions(this.initialLimit);
      }
    );
  };

  getAttractionsCategory = () => {
    AttractionsService.getAttractionsCategory()
      .then(res => {
        this.setState({ attractionCategories: res.data.data, count: this.calculateTotalAttractions(res.data.data) });
      })
      .catch(err => {
        console.log(err);
      });
  }

  loadAttractions = (params, isLoadMore) => {
    // this.setState({shimmer: true});
    AttractionsService.getData(params)
      .then(res => {
        if (!isLoadMore) this.setState({ attractionsData: [] });
        const attractionsData = [...this.state.attractionsData, ...res.data.data];
        const isdataAvailable = attractionsData.length ? false : true;
        this.setState({
          loader: false,
          attractionsData: attractionsData,
          shimmer: false,
          totalRecords: res.data.total_records,
          isdataAvailable: isdataAvailable
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadMoreAttractions = () => {
    let params = this.setFilterParams();
    params.first = this.state.first + 9;
    this.loadAttractions(params, true);
    this.setState({ first: params.first, limit: params.limit, shimmer: true });
  };

  // handleListGridView = getViewType => {
  //   let viewTypeClass = [...this.state.viewTypeClass];
  //   if (getViewType == "grid") {
  //     viewTypeClass = "events-section";
  //   } else {
  //     viewTypeClass = "events-section list-view";
  //   }
  //   this.setState({ viewTypeClass: viewTypeClass, viewType: getViewType });
  // };

  setFilterParams = () => {
    let params = {
      client: 1,
      first: "",
      limit: this.state.limit,
      category: "",
      search: "",
      sort_type: "",
      sort_order: ""
    };

    params.category = this.state.filteredCategory.toString();
    params.search = this.state.filteredSearch;
    params.sort_order = this.state.filteredSortOrder;
    params.sort_type = this.state.filteredSortType;
    params.first = this.initialLimit.first;
    params.limit = this.initialLimit.limit;

    return params;
  };

  handleFilters = (searchType, searchValue, isChecked) => {
    let filteredSearch = this.state.filteredSearch;
    let filteredCategory = [...this.state.filteredCategory];
    let filteredSortType = this.state.filteredSortType;
    let filteredSortOrder = this.state.filteredSortOrder;

    if (searchType == "category" && isChecked == true) {
      filteredCategory.push(searchValue);
    } else if (searchType == "category" && isChecked == false) {
      let index = filteredCategory.indexOf(searchValue);
      if (index > -1) filteredCategory.splice(index, 1);
    }

    switch (searchType) {
      case "category-check-uncheck": {
        filteredCategory = searchValue;
      }
        break;
      case "search": {
        filteredSearch = searchValue;
      }
        break;
      case "sort":
      case "title": {
        filteredSortType = searchType;
        filteredSortOrder = searchValue;
      }
        break
    }

    this.setState(
      {
        filteredSearch,
        filteredCategory,
        filteredSortType,
        filteredSortOrder
      },
      () => {
        this.setState({ totalRecords: 0, loader: true });
        this.setState({ first: 0, limit: 9 });
        let params = this.setFilterParams();

        setTimeout(() => {
          this.loadAttractions(params, false);
        }, 200);
      }
    );
  };

  redirectToTarget = alias => {
    this.props.history.push(`/events/` + alias);
  };

  calculateTotalAttractions = (data) => {
    let count = data && data.filter((item) => Number(item.attractions))
      .map((item) => +Number(item.attractions))
      .reduce((sum, current) => sum + current);
    return count;
  }


  render() {
    const {
      attractionCategories,
      queryParams,
      loader,
      attractionsData,
      totalRecords,
      isdataAvailable,
      viewType,
      shimmer,
      count
    } = this.state;
    this.breadCrumbData.count = count;


    // const viewTypeActive = viewType == "list" ? "active" : "";
    return (
      <div>
        <Breadcrub breadCrumbData={this.breadCrumbData} />
          <div className="container-fluid">
            <div className="wrapper-events-listing">
              <div className="filters">
                {shimmer && <ShimmerEffect
                  propCls="shm_col-xs-6 col-md-12"
                  height={150}
                  count={1}
                  type="grid"
                />}
                {!shimmer && attractionCategories.length > 0 &&
                  (
                    <Filters
                      queryParams={queryParams}
                      resetFilters={this.resetFilters}
                      handleFilters={this.handleFilters}
                      showCalendar={false}
                      attractionCategories={attractionCategories}
                    />
                  )}
              </div>

              <div className="events-listing">
                <div className="event-listing-sorting">
                  <SortBy
                    sortList={this.tabsSort.sortList}
                    handleFilters={this.handleFilters}
                    defaultSortType={this.tabsSort.defaultSortType}
                  />
                  {/* <ul className="sortby-view">
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
                  </ul> */}
                </div>
                <div className={this.state.viewTypeClass}>
                  {loader && (
                    <img className="filter-loader" src={loaderImage} />
                  )}
                  {attractionsData &&
                    attractionsData.map(attraction => {
                      return (
                        <div onClick={() => this.redirectToTarget(attraction.alias)}>
                          <Card cardData={attraction} />
                        </div>
                      );
                    })}
                </div>
                {attractionsData && <LoadMoreOnScroll
                  loadMore={this.loadMoreAttractions}
                  dataLength={attractionsData.length}
                  totalRecords={totalRecords}
                />}
                {shimmer && (
                  <ShimmerEffect
                    propCls="shm_col-xs-6 col-md-4"
                    height={150}
                    count={3}
                    type="grid"
                  />
                )}
                {attractionsData.length < totalRecords && (
                  <div className="promotion-load-more">
                    <a
                      // onClick={() => this.loadMoreEvents()}
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
