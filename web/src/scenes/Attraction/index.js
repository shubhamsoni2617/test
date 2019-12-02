import React, { Component } from 'react';
import Filters from '../../shared/components/Filters';
import SortBy from '../../shared/components/SortBy';
import Card from '../../shared/components/Card';
import AttractionsService from '../../shared/services/AttractionsService';
import noEvent from '../../assets/images/no-event.svg';
import Breadcrub from '../../scenes/App/Breadcrumb';
import loaderImage from '../../assets/images/loader.svg';
import AttractionBreadcrumbImage from '../../assets/images/attractionbanner.png';
import ShimmerEffect from '../../shared/components/ShimmerEffect';
// import LoadMoreButton from "../../shared/components/LoadMoreButton";
import DownArrowBlue from '../../assets/images/down-arrow-blue.svg';
import './style.scss';
import filterIcon from '../../assets/images/events/filter.svg';
import sortbyIcon from '../../assets/images/events/sortby.svg';
import Utilities from '../../shared/utilities';
import SearchFilter from '../../shared/components/SearchFilter';
import Constants from '../../shared/constants';
import FilterSelected from '../../shared/components/FilterSelected';
export default class Attractions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shimmer: true,
      shimmerFilter: true,
      attractionCategories: [],
      filteredSearch: [],
      filteredCategory: [],
      localfilteredCategory: [],
      filteredSortType: 'title',
      filteredSortOrder: 'ASC',
      localfilteredSortType: 'title',
      localfilteredSortOrder: 'ASC',
      eventsData: [],
      attractionsData: [],
      first: 0,
      limit: Constants.LIMIT,
      viewType: 'grid',
      viewTypeClass: 'events-section',
      totalRecords: 0,
      loader: false,
      queryParams: {},
      count: 0,
      filterFlag: false,
      sortByFlag: false,
      mode: ''
    };

    this.breadCrumbData = {
      page_banner: AttractionBreadcrumbImage,
      page: 'Attractions',
      count: 0,
      breadcrumb_slug: [{ path: '/', title: 'Home' }, { title: 'Attractions' }]
    };

    this.tabsSort = {
      isSortBy: true,
      defaultSortType: 'A to Z',
      sortList: [
        {
          sortType: 'title',
          sortOrder: 'ASC',
          sortTitle: 'A to Z',
          sortTag: 'Attractions - A to Z'
        },
        {
          sortType: 'title',
          sortOrder: 'DESC',
          sortTitle: 'Z to A',
          sortTag: 'Attractions - Z to A'
        }
      ]
    };
  }

  componentDidMount() {
    this.getAttractionsCategory();
    this.loadAttractions(this.getInitialFilters(true));
  }

  resetFilters = () => {
    let obj = {};
    if (Utilities.mobilecheck()) {
      obj = {
        localfilteredCategory: []
      };
    } else {
      obj = {
        filteredCategory: [],
        filteredSearch: '',
        filteredSortType: 'title',
        filteredSortOrder: 'ASC',
        isdataAvailable: false,
        eventsData: [],
        attractionsData: [],
        totalRecords: 0
      };
    }
    this.setState(obj, () => {
      const payload = this.getInitialFilters(true);
      this.setInitialFilters(payload);
      if (!Utilities.mobilecheck()) {
        this.loadAttractions(payload);
      }
    });
  };

  getInitialFilters = (reset = false) => {
    const payload = {
      first: 0,
      limit: Constants.LIMIT,
      sort_type: 'title',
      sort_order: 'ASC',
      client: Constants.CLIENT
    };
    return payload;
  };

  setInitialFilters({ first, limit }) {}

  getAttractionsCategory = () => {
    AttractionsService.getAttractionsCategory()
      .then(res => {
        this.setState({
          attractionCategories: res.data.data,
          count: this.calculateTotalAttractions(res.data.data)
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  loadAttractions = (params, isLoadMore) => {
    // this.setState({shimmer: true});
    AttractionsService.getData(params)
      .then(res => {
        let attractionsData = [];
        if (isLoadMore) {
          attractionsData = [...this.state.attractionsData, ...res.data.data];
        } else {
          attractionsData = [...res.data.data];
        }
        const isdataAvailable = attractionsData.length ? false : true;
        setTimeout(() => {
          this.setState({
            loader: false,
            attractionsData: attractionsData,
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

  loadMoreAttractions = () => {
    let params = this.getFilters();
    params.first = this.state.first + Constants.LIMIT;

    this.loadAttractions(params, true);
    this.setState({
      first: params.first,
      limit: params.limit,
      shimmer: true
    });
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
          this.loadAttractions(this.getFilters(), false);
        }
      }, 200);
    });
  };

  redirectToTarget = alias => {
    this.props.history.push(`/events/` + alias);
  };

  calculateTotalAttractions = data => {
    let count =
      data &&
      data
        .filter(item => Number(item.attractions))
        .map(item => +Number(item.attractions))
        .reduce((sum, current) => sum + current);
    return count;
  };

  toggleFilterSection = () => {
    if (Utilities.mobilecheck()) {
      document.body.classList.toggle('fixed-body');
    }
  };

  toggleFilters = () => {
    this.setState({
      filterFlag: !this.state.filterFlag,
      localfilteredCategory: [...this.state.filteredCategory]
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
        filteredCategory: [...this.state.localfilteredCategory],
        filteredSortOrder: this.state.localfilteredSortOrder,
        filteredSortType: this.state.localfilteredSortType
      },
      () => {
        setTimeout(() => {
          this.loadAttractions(this.getFilters(), false);
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

  changeMode = mode => {
    if (this.state.mode === mode) return;

    if (this.state.mode !== '') {
      window.document.body.classList.remove('fixed-body');
      this.closeFilter();
    }
    this.setState({ mode: mode });
  };

  closeFilter = () => {
    this.setState({
      filterFlag: false,
      sortByFlag: false
    });
  };

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
    this.breadCrumbData.count = totalRecords;

    return (
      <div className="attractions-page-wrapper">
        <Breadcrub breadCrumbData={this.breadCrumbData} />
        <div className="container-fluid">
          <div className="wrapper-events-listing attraction-wrapper-listing">
            <div className={`filters ${this.state.filterFlag ? 'open' : ''}`}>
              {shimmer && (
                <ShimmerEffect
                  propCls="shm_col-xs-6 col-md-12"
                  height={150}
                  count={1}
                  type="FILTER"
                />
              )}
              {!shimmer && attractionCategories.length > 0 && (
                <Filters
                  searchPlaceholder="Search in attractions"
                  queryParams={queryParams}
                  toggleFilterSection={this.toggleFilterSection}
                  resetFilters={this.resetFilters}
                  handleFilters={this.handleFilters}
                  hideCalendar={true}
                  attractionCategories={attractionCategories}
                  filteredSearch={filteredSearch}
                  filteredCategory={filteredCategory}
                  attractions={true}
                  changeMode={this.changeMode}
                >
                  {fixed => (
                    <div
                      className={`fixed-buttons ${fixed ? 'hide-inner' : ''}`}
                    >
                      <a
                        onClick={() => {
                          this.toggleFilterSection();
                          this.toggleFilters();
                        }}
                        className="close"
                      >
                        Close
                      </a>
                      <a
                        onClick={() => {
                          this.toggleFilterSection();
                          this.callAPI();
                        }}
                        className="apply"
                      >
                        Apply
                      </a>
                    </div>
                  )}
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
                  type="ATTRACTIONS"
                  attractionCategories={attractionCategories}
                  filteredCategory={filteredCategory}
                  handleFilters={this.handleFilters}
                />
                <SortBy
                  sortList={this.tabsSort.sortList}
                  handleFilters={this.handleFilters}
                  defaultSortType={this.tabsSort.defaultSortType}
                  sortByFlag={this.state.sortByFlag}
                  filteredSortType={
                    Utilities.mobilecheck()
                      ? this.state.localfilteredSortType
                      : this.state.filteredSortType
                  }
                  filteredSortOrder={
                    Utilities.mobilecheck()
                      ? this.state.localfilteredSortOrder
                      : this.state.filteredSortOrder
                  }
                  clearSortFilters={this.clearSortFilters}
                >
                  <div className="fixed-buttons hide-inner">
                    <a
                      onClick={() => {
                        this.toggleFilterSection();
                        this.toggleSortBy();
                      }}
                      className="close"
                    >
                      Close
                    </a>

                    <a
                      onClick={() => {
                        this.toggleFilterSection();
                        this.callAPI();
                      }}
                      className="apply"
                    >
                      Apply
                    </a>
                  </div>
                </SortBy>
              </div>
              <div className={this.state.viewTypeClass}>
                {loader && <img className="filter-loader" src={loaderImage} />}
                {attractionsData &&
                  attractionsData.map((attraction, i) => {
                    // onClick={() => this.redirectToTarget(attraction.event_alias)}
                    return (
                      <div key={i}>
                        <Card
                          cardData={attraction}
                          redirectTo={this.redirectToTarget}
                          cardClass={{
                            cardBlock: 'event-block attraction-block',
                            cardButton: 'btn buy-btn attaction-buy'
                          }}
                        />
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

              {/* {attractionsData.length < totalRecords && (<LoadMoreButton
                dataLength={attractionsData.length}
                totalRecords={totalRecords}
                loadMore={this.loadMoreAttractions}
              />)} */}
              {attractionsData.length < totalRecords && (
                <div className="promotion-load-more">
                  <button
                    onClick={() => this.loadMoreAttractions()}
                    className="btn-link load-more-btn"
                    target=""
                  >
                    <span>
                      Load More ({totalRecords - attractionsData.length})
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
              <a
                className="sortby"
                onClick={() => {
                  this.toggleSortBy();
                }}
              >
                sort by
                <img src={sortbyIcon} alt="icon" />
              </a>
              <a className="filter" onClick={this.toggleFilters}>
                filter
                <img src={filterIcon} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
