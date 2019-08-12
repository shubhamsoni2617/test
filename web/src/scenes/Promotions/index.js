import React, { Component } from 'react'
import Tabs from '../../shared/components/Tabs';
import './style.scss';
import PromotionService from '../../shared/services/PromotionService';
import Constants from '../../shared/constants';
import Breadcrumb from '../App/Breadcrumb';
import PageBanner from '../../assets/images/promotions-banner.png';

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultTabId: "30",
      tabsArray: [],
      sortBy: "Date",
      first: 0,
      totalRecords: 0,
      listingArray: [],
      promotionDetail:"",
      promotionTab: "close",
      tabDetailId:"",
      shareUrl:undefined
    };
    this.tabsSort = {
      isSortBy: true,
      sortList: [
        {
          sortType: '',
          sortOrder: 'ASC',
          sortTitle: 'A to Z',
          sortTag: 'Promotions - A to Z'
        },
        {
          sortType: '',
          sortOrder: 'DESC',
          sortTitle: 'Z to A',
          sortTag: 'Promotions - Z to A'
        },
        {
          sortType: '',
          sortOrder: 'date',
          sortTitle: 'Date',
          sortTag: 'Date'
        }
      ]
    };
    this.breadCrumbData = {
      'page_banner': PageBanner,
      'page': 'Promotions',
      'count': '24',
      'breadcrumb_slug': [{ 'path': '/', 'title': 'Home' }, { 'path': '/promotions', 'title': 'Promotions' }]
    };
  }

  componentDidMount() {
    this.fetchPromotionCategoriesData();
    this.fetchPromotionListingData()
  }

  componentDidUpdate(prevProps, prevState) {
    const { defaultTabId, sortBy, first, listingArray } = this.state;
    if (prevState.defaultTabId !== defaultTabId || prevState.sortBy !== sortBy || prevState.first !== first) {
      if (prevState.defaultTabId !== defaultTabId || prevState.sortBy !== sortBy) {
        this.setState({
          listingArray: [],
          first: 0
        })
      }

      const params = {
        client: Constants.CLIENT,
        category: defaultTabId,
        first: first,
        limit: Constants.LIMIT,
        sort_type: "title",
        sort_order: sortBy
      };

      PromotionService.getPromotionList(params)
        .then((res) => {
          if (res.data && res.data.data) {
            console.log("response", res);
            this.setState({
              totalRecords: res.data.total_records,
              listingArray: prevState.first !== first ? [...listingArray, ...res.data.data] : res.data.data
              // prevProps === defaultTabId ? [...listingArray, ...res.data.data[0]] : res.data.data[0]
            });
          }
        })
    }
  }

  fetchPromotionCategoriesData = () => {
    const params = {
      client: Constants.CLIENT
    };
    PromotionService.getPromotionCategories(params)
      .then((res) => {
        this.setState({ tabsArray: res.data.data });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  fetchPromotionListingData = () => {
    const { defaultTabId, sortBy, first } = this.state;
    const params = {
      client: Constants.CLIENT,
      category: defaultTabId,
      first: first,
      limit: Constants.LIMIT,
      sort_type: "title",
      sort_order: sortBy
    };

    PromotionService.getPromotionList(params)
      .then((res) => {
        if (res.data && res.data.data) {
          console.log("response", res);
          this.setState({
            totalRecords: res.data.total_records,
            listingArray: res.data.data
            // prevProps === defaultTabId ? [...listingArray, ...res.data.data[0]] : res.data.data[0]
          });
        }
      })
  }


  fetchPromotionDetailData = (alias,id) => {
    const params = {
      client: Constants.CLIENT,
      alias: alias.split("/")[1]
    };
    PromotionService.getPromotionDetail(params)
      .then((res) => {
        if (res.data.data.length > 0 && res.data.data[0]) {
          this.setState({
            promotionDetail: res.data.data[0],
            promotionTab: "open",
            tabDetailId:id
          })
        } else {
          this.setState({
            promotionDetail:"",
            promotionTab: "close"
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
      let shareUrl=`/promotions/${id}`;
      // let randomString = Math.random().toString(36).substring(7);
      window.history.pushState("string", "Title",shareUrl);
      this.setState({shareUrl:shareUrl})
  }

  handleActiveTab = (data) => {
    this.setState({
      defaultTabId: data,
      promotionTab: "close"
    });
  }

  handleLoadMore = (data) => {
    this.setState({ first: data })
  }

  handleFilters = (sortBy, sortOrder) => {
    this.setState({
      sortBy: sortOrder,
      promotionTab: "close"
    })
  }

  handlePromotionDetailTab = (data) => {
    this.setState({ promotionTab: data })
  }

  render() {
    return (
      <div>
        <Breadcrumb breadCrumbData={this.breadCrumbData} />
        <section className="promotions-wrapper">
          <div className="container-fluid">
            <div className="container">
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
            </div>
          </div>
        </section>
      </div>
    )
  }
}
