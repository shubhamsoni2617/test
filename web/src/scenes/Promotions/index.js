import React, { Component, Fragment } from 'react';
import Tabs from '../../shared/components/Tabs';
import './style.scss';
import PromotionService from '../../shared/services/PromotionService';
import Constants from '../../shared/constants';
import Breadcrumb from '../App/Breadcrumb';
import PageBanner from '../../assets/images/promotions-banner.png';
import Utilities from '../../shared/utilities';
import SortBy from '../../shared/components/SortBy';
import sortbyIcon from '../../assets/images/events/sortby.svg';

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTabId: null,
      tabsArray: [],
      sortBy: 'ASC',
      first: 0,
      totalRecords: 0,
      listingArray: [],
      promotionDetail: '',
      promotionTab: 0,
      tabDetailId: '',
      count: 0,
      sortByFlag: false,
      sortApply: false,
      sortFilters: null,

      filteredSortOrder: 'date',
      localsortBy: 'ASC'
    };
    this.tabsSort = {
      isSortBy: true,
      sortList: [
        {
          sortType: '',
          sortOrder: 'ASC',
          sortTitle: 'Promotion Date - Earliest to Latest',
          sortTag: 'Promotion Date - Earliest to Latest'
        },
        {
          sortType: '',
          sortOrder: 'DESC',
          sortTitle: 'Promotion Date - Latest to Earliest',
          sortTag: 'Promotion Date - Latest to Earliest'
        }
        // {
        //   sortType: '',
        //   sortOrder: 'date',
        //   sortTitle: 'Date',
        //   sortTag: 'Date'
        // }
      ]
    };
    this.breadCrumbData = {
      page_banner: PageBanner,
      page_banner_blur: PageBanner,
      page: 'Promotions',
      count: '0',
      breadcrumb_slug: [
        { path: '/', title: 'Home' },
        { path: '/promotions', title: 'Promotions' }
      ]
    };
  }

  componentWillMount() {
    const defaultTabId = this.props.match.params.promoId;
    const id = this.props.location.pathname.split('/')[3];
    // const url = window.location.href;
    // const allParams = url.split('/')[4];
    // if (allParams) {
    //   const getParams = allParams.split('-');
    //   const id = getParams[0];
    //   const defaultTabId = getParams[1];
    //   const alias = getParams[2] + "/" + id;
    //   if (id && defaultTabId && alias) {
    //     this.setState({ defaultTabId: defaultTabId });
    //   }
    // }
    if (defaultTabId && id) {
      this.setState({ defaultTabId: defaultTabId });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchPromotionCategoriesData();
    // this.fetchPromotionListingData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { defaultTabId, sortBy, first, listingArray } = this.state;
    if (
      prevState.defaultTabId !== defaultTabId ||
      prevState.sortBy !== sortBy ||
      prevState.first !== first
    ) {
      if (
        prevState.defaultTabId !== defaultTabId ||
        prevState.sortBy !== sortBy
      ) {
        this.setState({ listingArray: [] });
        setTimeout(() => {
          this.setState({
            listingArray: [],
            first: 0
          });
        }, 1000);
      }

      const params = {
        client: Constants.CLIENT,
        category: defaultTabId,
        first: first,
        limit: Constants.LIMIT,
        sort_type: 'title',
        sort_order: sortBy
      };

      PromotionService.getPromotionList(params).then(res => {
        if (res.data && res.data.data) {
          const listing = res.data.data;
          this.setState({ listingArray: [] });
          setTimeout(() => {
            this.setState({
              totalRecords: res.data.total_records,
              listingArray:
                prevState.first !== first
                  ? [...listingArray, ...listing]
                  : listing
              // prevProps === defaultTabId ? [...listingArray, ...res.data.data[0]] : res.data.data[0]
            });
          }, 1000);
        }
      });
    }
  }

  fetchPromotionCategoriesData = () => {
    const params = {
      client: Constants.CLIENT
    };
    PromotionService.getPromotionCategories(params)
      .then(res => {
        const category = res.data.data;
        const defaultTabId = category[0].id;
        this.setState({
          tabsArray: category,
          defaultTabId: defaultTabId,
          count: category[0].promotions
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchPromotionListingData = () => {
    const { defaultTabId, sortBy, first } = this.state;
    const params = {
      client: Constants.CLIENT,
      category: defaultTabId || 1,
      first: first,
      limit: Constants.LIMIT,
      sort_type: 'title',
      sort_order: sortBy
    };

    PromotionService.getPromotionList(params).then(res => {
      if (res.data && res.data.data) {
        const listing = res.data.data;
        this.setState({
          totalRecords: res.data.total_records,
          listingArray: listing
          // prevProps === defaultTabId ? [...listingArray, ...res.data.data[0]] : res.data.data[0]
        });
      }
    });
  };

  fetchPromotionDetailData = (alias, id, defaultTabId, promotionTab) => {
    const params = {
      client: Constants.CLIENT,
      alias: alias
    };
    PromotionService.getPromotionDetail(params)
      .then(res => {
        if (res.data.data.length > 0 && res.data.data[0]) {
          console.log(res.data, 'data');
          this.setState({
            promotionDetail: res.data.data[0],
            promotionTab: 1,
            tabDetailId: id
          });
        } else {
          this.setState({
            promotionDetail: '',
            promotionTab: 0
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    let shareUrl = window.location.origin + `/promotions/${defaultTabId}/${id}`;
    // let randomString = Math.random().toString(36).substring(7);
    window.history.pushState('string', 'Title', shareUrl);
  };

  handleActiveTab = data => {
    this.setState({
      defaultTabId: data,
      promotionTab: 0
    });
  };

  handleLoadMore = data => {
    this.setState({ first: data });
  };

  handleFilters = obj => {
    // this.handleSortFilters(obj);

    if (!Utilities.mobilecheck()) {
      this.setState({
        sortBy: obj.filteredSortOrder,
        promotionTab: 0
      });
    } else {
      this.setState({
        localsortBy: obj.localfilteredSortOrder,
        promotionTab: 0
      });
    }
  };

  handlePromotionDetailTab = data => {
    this.setState({ promotionTab: data });
  };

  toggleSortBy = () => {
    document.body.classList.toggle('fixed-body');
    this.setState({
      sortByFlag: !this.state.sortByFlag,
      localsortBy: this.state.sortBy
    });
  };

  handleSortFilters = sortFilters => {
    this.setState({
      sortFilters
    });
  };

  handleSortApply = () => {
    this.setState({
      sortByFlag: !this.state.sortByFlag,
      sortBy: this.state.localsortBy,
      promotionTab: 0
    });
    document.body.classList.toggle('fixed-body');
  };

  clearSortFilters = () => {
    let sortFilters = { ...this.state.sortFilters };
    sortFilters.filteredSortOrder = 'date';
    this.setState({
      // filteredSortOrder: '',
      localsortBy: '',
      sortFilters
    });
  };

  render() {
    this.breadCrumbData.count = this.state.count;
    return (
      <div className="promotions-full-wrapper">
        <Breadcrumb breadCrumbData={this.breadCrumbData} />
        <section className="promotions-wrapper">
          <div className="container-fluid">
            <div className="container">
              {this.state.listingArray && (
                <Fragment>
                  {' '}
                  <Tabs
                    state={this.state}
                    tabsSort={this.tabsSort}
                    handleSortBy={this.handleSortBy}
                    handleLoadMore={this.handleLoadMore}
                    handleActiveTab={this.handleActiveTab}
                    handleFilters={this.handleFilters}
                    limit={Constants.LIMIT}
                    fetchPromotionDetailData={this.fetchPromotionDetailData}
                    handlePromotionDetailTab={this.handlePromotionDetailTab}
                  />
                  {Utilities.mobilecheck() && (
                    <>
                      <div className="wrapper-events-listing">
                        <div
                          className={`events-listing ${
                            this.state.sortByFlag ? 'open' : ''
                          }`}
                        >
                          <div className="event-listing-sorting">
                            <SortBy
                              defaultSortType="Promotion Date - Earliest to Latest"
                              handleFilters={this.handleFilters}
                              sortList={this.tabsSort.sortList}
                              sortByFlag={this.state.sortByFlag}
                              promotion
                              filteredSortType="title"
                              filteredSortOrder={
                                Utilities.mobilecheck()
                                  ? this.state.localsortBy
                                  : this.state.sortBy
                              }
                              clearSortFilters={this.clearSortFilters}
                            >
                              <div className="fixed-buttons hide-inner">
                                <a
                                  onClick={() => {
                                    this.toggleSortBy();
                                  }}
                                  className="close"
                                >
                                  Close
                                </a>

                                <a
                                  onClick={() => {
                                    this.handleSortApply();
                                  }}
                                  className="apply"
                                >
                                  Apply
                                </a>
                              </div>
                            </SortBy>
                          </div>
                        </div>
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
                      </div>
                    </>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
