import React, { Component } from "react";
import Filters from "../../shared/components/Filters";
import SortBy from "../../shared/components/SortBy";
import Card from "../../shared/components/Card";
import AttractionsService from "../../shared/services/AttractionsService";
import DownArrowBlue from "../../assets/images/down-arrow-blue.svg";
import noEvent from "../../assets/images/no-event.svg";
import Breadcrub from "../../scenes/App/Breadcrumb";
import loaderImage from "../../assets/images/loader.svg";
import AttractionBreadcrumbImage from "../../assets/images/attractionbanner.png";
import ShimmerEffect from "../../shared/components/ShimmerEffect";
import LoadMoreOnScroll from "../../shared/components/LoadMoreOnScroll";
import "./style.scss";

export default class Attractions extends Component {
  constructor(props) {
    super(props);

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
    this.loadAttractions(this.getInitialFilters(true));
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
        const payload = this.getInitialFilters(true);
        this.setInitialFilters(payload);
        this.loadAttractions(payload);
      }
    );
  };

  getInitialFilters = (reset=false) => {
    const payload = {
      first: 0,
      limit: 9,
      sort_type: 'title',
      sort_order:'ASC'
    };
    return payload;
  };

  setInitialFilters({ first, limit }) {
  
  }

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

  getFilters = () => {
    const {
      first,
      limit,
      filteredCategory,
      filteredSearch,
      filteredSortOrder,
      filteredSortType
    } = this.state;

    let params = {
      client: 1,
      first: first,
      limit: limit,
      category: filteredCategory.toString(),
      search: filteredSearch,
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
          this.loadAttractions(this.getFilters(), false);
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
      count,
      filteredCategory,
      filteredSearch
    } = this.state;
    this.breadCrumbData.count = count;

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
                      hideCalendar={true}
                      attractionCategories={attractionCategories}
                      filteredSearch={filteredSearch}
                      filteredCategory={filteredCategory}
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
                </div>
                <div className={this.state.viewTypeClass}>
                  {loader && (
                    <img className="filter-loader" src={loaderImage} />
                  )}
                  {attractionsData &&
                    attractionsData.map(attraction => {
                      return (
                        <div onClick={() => this.redirectToTarget(attraction.event_alias)}>
                          <Card cardData={attraction} cardClass={{cardBlock: 'event-block attraction-block', cardButton: 'btn buy-btn attaction-buy'}} />
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
