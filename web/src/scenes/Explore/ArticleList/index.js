import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import CardList from './CardList';
import DownArrowBlue from '../../../assets/images/down-arrow-blue.svg';
import Breadcrumb from '../../../scenes/App/Breadcrumb';
import filterIcon from '../../../assets/images/down_arrow.svg';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Utilities from '../../../shared/utilities';
import ExploreService from '../../../shared/services/ExploreService';
import Filter from './Filter';
import loaderImage from '../../../assets/images/loader-tick3.gif';
import useStickyPanel from '../../../shared/hooks/useStickyPanel';
import BreadCrumbData from './breadCrumbData';
import selectOrClearAll from './selectOrClearAll';
import fetchFilterData from './fetchFilterData';
import handleFilter from './handleFilters';
import Constants from '../../../shared/constants';

const ArticleList = ({ history, location }) => {
  let stickyObj = {
    sticky: { top: 153 },
    pixelBuffer: 153,
    distanceFromTop: 153
  };
  const node = useRef(null);
  let cardInViewConstant =
    window.innerWidth > 1499 ? 4 : window.innerWidth > 850 ? 3 : 2;
  const [scrollContainerRef, styleObj] = useStickyPanel(stickyObj);
  const [articleList, setArticleList] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [first, setFirst] = useState(0);
  const [filteredTags, setFilteredTags] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(
    location.search ? [location.search.split('=')[1]] : []
  );
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showTags, setShowTags] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [filteredTagsForMobile, setFilteredTagsForMobile] = useState([]);
  const [loadWithFilters, setLoadWithFilters] = useState(false);
  const [
    filteredCategoriesForMobile,
    setFilteredCategoriesForMobile
  ] = useState([]);

  let mobileCheck = showTags || showCategories;
  useEffect(() => {
    fetchFilterData(setCategories, ExploreService.getCategories);
    fetchFilterData(setTags, ExploreService.getTags);
    console.log(node);
  }, []);

  useEffect(() => {
    if (articleList.length && location.search) {
      handleFilter(
        false,
        categories,
        setCategories,
        null,
        setFilteredCategoriesForMobile,
        setFilteredCategories,
        mobileCheck,
        location.search.split('=')[1]
      );
    }
  }, [location.search, articleList.length]);

  useEffect(() => {
    getArticleList();
  }, [first, filteredTags.toString(), filteredCategories.toString()]);

  const getArticleList = () => {
    const params = {
      first: first,
      client: 1,
      limit: Constants.LIMIT,
      category: filteredCategories.toString(),
      tags: filteredTags.toString()
    };
    if (!loadMore) {
      setLoadWithFilters(true);
      params.first = 0;
      setFirst(0);
      setTotalResults(0);
    }
    setTimeout(() => {
      ExploreService.getExploreArticleList(params)
        .then(res => {
          if (loadMore) {
            setArticleList([...articleList, ...res.data.data]);
          } else {
            setArticleList(res.data.data);
          }
          setLoadWithFilters(false);
          setTotalResults(res.data.total_records);
          setLoadMore(false);
        })
        .catch(err => {
          setLoadMore(false);
          console.log(err);
        });
    }, 1000);
  };

  const selectOrClearAllHandler = (isChecked, filterTitle) => {
    history.push('/explore/articles');
    if (filterTitle === 'Tags') {
      selectOrClearAll(isChecked, tags, setTags, setFilteredTags);
    }
    if (filterTitle === 'Categories') {
      selectOrClearAll(
        isChecked,
        categories,
        setCategories,
        setFilteredCategories
      );
    }
  };

  const handleFilters = (selected, isChecked, filterTitle) => {
    history.push('/explore/articles');
    if (filterTitle === 'Tags') {
      handleFilter(
        isChecked,
        tags,
        setTags,
        selected,
        setFilteredTagsForMobile,
        setFilteredTags,
        mobileCheck
      );
    }
    if (filterTitle === 'Categories') {
      handleFilter(
        isChecked,
        categories,
        setCategories,
        selected,
        setFilteredCategoriesForMobile,
        setFilteredCategories,
        mobileCheck
      );
    }
  };

  const closeFilters = (filterTitle, action) => {
    if (action === 'back') {
      if (filterTitle === 'Tags') {
        let restoredTags = tags.map(el => {
          return {
            ...el,
            isChecked: filteredTags.indexOf(el.id) === -1 ? false : true
          };
        });
        setTags(restoredTags);
        setFilteredTagsForMobile(filteredTags);
      }
      if (filterTitle === 'Categories') {
        let restoredCategories = categories.map(el => {
          return {
            ...el,
            isChecked: filteredCategories.indexOf(el.id) === -1 ? false : true
          };
        });
        setCategories(restoredCategories);
        setFilteredCategoriesForMobile(filteredCategories);
      }
    }
    setShowTags(false);
    setShowCategories(false);
  };

  const handleFiltersForMobile = filterTitle => {
    if (filterTitle === 'Tags') {
      setFilteredTags(filteredTagsForMobile);
    }
    if (filterTitle === 'Categories') {
      setFilteredCategories(filteredCategoriesForMobile);
    }
  };

  const filterComponent = (data, title, showComponent) => {
    return showComponent || !Utilities.mobilecheck() ? (
      <Filter
        dataToFilter={data}
        handleFilters={handleFilters}
        filterTitle={title}
        selectOrClearAllHandler={selectOrClearAllHandler}
        showHeader={mobileCheck}
        closeFilters={closeFilters}
        handleFiltersForMobile={handleFiltersForMobile}
      />
    ) : null;
  };

  return (
    <div className="events-page-wrapper articlelist-wrapper">
      <Breadcrumb breadCrumbData={BreadCrumbData} />
      <section className="">
        <div className="container-fluid">
          <div className="wrapper-events-listing">
            <div className={`filters ${mobileCheck ? `open` : ``}`}>
              <div className="filter-conatiner">
                <div
                  style={{
                    position: 'relative',
                    display: 'block',
                    height: '100%',
                    zIndex: 2
                  }}
                  ref={scrollContainerRef}
                >
                  <div className="inner" style={styleObj}>
                    {!Utilities.mobilecheck() && (
                      <div className="filter-heading">
                        <h3>FILTERS</h3>
                        <span
                          onClick={() => {
                            selectOrClearAllHandler(false, 'Tags');
                            selectOrClearAllHandler(false, 'Categories');
                          }}
                        >
                          Clear All
                        </span>
                      </div>
                    )}
                    {filterComponent(categories, 'Categories', showCategories)}
                    {filterComponent(tags, 'Tags', showTags)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`events-listing ${
                isNaN(totalResults) ? `article-list-notfound` : ``
              }`}
            >
              <div className="events-section">
                <CardList
                  articleList={articleList}
                  totalRecords={totalResults}
                  history={history}
                  ref={node}
                />
                {loadWithFilters && articleList.length ? (
                  <img
                    className="filter-loader"
                    alt="filter loader"
                    src={loaderImage}
                  />
                ) : null}
                {loadMore && (
                  <ShimmerEffect
                    propCls={`${
                      Utilities.mobileAndTabletcheck() ? 'shm_col-xs-6' : ''
                    } col-md-4`}
                    height={150}
                    count={Utilities.mobileAndTabletcheck() ? 2 : 3}
                    type="LIST"
                  />
                )}
              </div>
              {totalResults - articleList.length > 0 && (
                <div className="promotion-load-more">
                  <button
                    onClick={() => {
                      setFirst(first + Constants.LIMIT);
                      setLoadMore(true);
                      window.scrollTo(
                        0,
                        node.current.clientHeight *
                          (articleList.length / cardInViewConstant).toFixed() -
                          node.current.clientHeight / 2
                      );
                    }}
                    className="btn-link load-more-btn"
                    target=""
                  >
                    <span>Load More ({totalResults - articleList.length})</span>
                    <img src={DownArrowBlue} alt="down arrow blue" />
                  </button>
                </div>
              )}
            </div>
            <div className="fixed-buttons-events">
              <a
                className="sortby"
                onClick={() => {
                  setShowTags(true);
                }}
              >
                Tags
                <img src={filterIcon} alt="icon" />
              </a>
              <a className="filter" onClick={() => setShowCategories(true)}>
                Categories
                <img src={filterIcon} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleList;
