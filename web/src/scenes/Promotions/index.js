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
      defaultTabId:null,
      tabsArray: [],
      sortBy: "ASC",
      first: 0,
      totalRecords: 0,
      listingArray: [],
      promotionDetail: "",
      promotionTab: 0,
      tabDetailId: "",
      count: 0
    };
    this.tabsSort = {
      isSortBy: true,
      sortList: [
        {
          sortType: '',
          sortOrder: 'ASC',
          sortTitle: 'Promotions - A to Z',
          sortTag: 'Promotions - A to Z'
        },
        {
          sortType: '',
          sortOrder: 'DESC',
          sortTitle: 'Promotions - Z to A',
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
      'count': '0',
      'breadcrumb_slug': [{ 'path': '/', 'title': 'Home' }, { 'path': '/promotions', 'title': 'Promotions' }]
    };
  }

  componentWillMount() {
    const defaultTabId = this.props.match.params.promoId;
    const id = this.props.location.pathname.split("/")[3];
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
    if(defaultTabId && id){
      this.setState({ defaultTabId: defaultTabId });
    }
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
            const listing = res.data.data;
            this.setState({
              totalRecords: res.data.total_records,
              listingArray: prevState.first !== first ? [...listingArray, ...listing] : listing
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
        const category = res.data.data;
        const defaultTabId=category[0].id;
        this.setState({
          tabsArray: category,
          defaultTabId:defaultTabId,
          count: this.calculateSum(category)
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  calculateSum = (data) => {
    let count = data && data.filter((item) => Number(item.promotions))
      .map((item) => +Number(item.promotions))
      .reduce((sum, current) => sum + current);
    return count;
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
          const listing = res.data.data;
          this.setState({
            totalRecords: res.data.total_records,
            listingArray: listing
            // prevProps === defaultTabId ? [...listingArray, ...res.data.data[0]] : res.data.data[0]
          });
        }
      })
  }


  getPosition = (element) => {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }
    console.log(yPosition, "yPosition")

    return { x: xPosition, y: yPosition };
  }


  fetchPromotionDetailData = (alias, id, defaultTabId, promotionTab) => {

    // var element = document.getElementsByClassName("promotion-events-row");
    // for (var i = 0; i < element.length; i++) {
    //   // console.log(element.item(i),"class");
    //   this.getPosition(element.item(i))
    // }
    // console.log(element, "element")
    const params = {
      client: Constants.CLIENT,
      alias: alias
    };
    PromotionService.getPromotionDetail(params)
      .then((res) => {
        if (res.data.data.length > 0 && res.data.data[0]) {
          console.log(res.data,"data")
          this.setState({
            promotionDetail: res.data.data[0],
            promotionTab: 1,
            tabDetailId: id
          })
        } else {
          this.setState({
            promotionDetail: "",
            promotionTab: 0
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    let shareUrl = window.location.origin + `/promotions/${defaultTabId}/${id}`;
    // let randomString = Math.random().toString(36).substring(7);
    window.history.pushState("string", "Title", shareUrl);
  }

  handleActiveTab = (data) => {
    this.setState({
      defaultTabId: data,
      promotionTab: 0
    });
  }

  handleLoadMore = (data) => {
    this.setState({ first: data })
  }

  handleFilters = (obj) => {
    this.setState({
      sortBy: obj.filteredSortOrder,
      promotionTab: 0
    })
  }

  handlePromotionDetailTab = (data) => {
    this.setState({ promotionTab: data })
  }

  render() {
    this.breadCrumbData.count = this.state.count;
    return (
      <div className="promotions-full-wrapper">
        <Breadcrumb breadCrumbData={this.breadCrumbData} />
        <section className="promotions-wrapper">
          <div className="container-fluid">
            <div className="container">
              {this.state.listingArray &&
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
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}
