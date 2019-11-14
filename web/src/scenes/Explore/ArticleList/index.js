import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import DownArrowBlue from '../../../assets/images/down-arrow-blue.svg';
import Breadcrumb from '../../../scenes/App/Breadcrumb';
import loaderImage from '../../../assets/images/loader.svg';
import filterIcon from '../../../assets/images/events/filter.svg';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import Utilities from '../../../shared/utilities';
import './style.scss';
import ExploreService from '../../../shared/services/ExploreService';
import Filter from './Filter';
import { useCustomWidth } from '../../../shared/components/CustomHooks';
import useStickyPanel from '../../../shared/hooks/useStickyPanel';
import BreadCrumbData from './breadCrumbData';
import selectOrClearAll from './selectOrClearAll';
import fetchFilterData from './fetchFilterData';
const ArticleList = props => {
  const [width] = useCustomWidth();
  let stickyObj = {
    sticky: { top: 153 },
    pixelBuffer: 153,
    distanceFromTop: 153
  };
  const [scrollContainerRef, styleObj] = useStickyPanel(stickyObj);

  const [articleList, setArticleList] = useState([]);
  const [constant, setConstant] = useState(
    Utilities.mobileAndTabletcheck() ? 6 : 6
  );
  const [loadMore, setLoadMore] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [first, setFirst] = useState(0);
  const [showFilter, setShowFilters] = useState('');
  const [filteredTags, setFilteredTags] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  const [showTags, setShowTags] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [filteredTagsForMobile, setFilteredTagsForMobile] = useState([]);
  const [
    filteredCategoriesForMobile,
    setFilteredCategoriessForMobile
  ] = useState([]);

  let mobileCheck =
    (showTags && width <= 767) || (showCategories && width <= 767);
  useEffect(() => {
    fetchFilterData(setCategories, ExploreService.getCategories);
    fetchFilterData(setTags, ExploreService.getTags);
  }, []);

  useEffect(() => {
    getArticleList();
  }, [constant, filteredTags.toString(), filteredCategories.toString()]);

  const getArticleList = () => {
    let articleListData = [...articleList];
    const params = {
      first: first,
      client: 1,
      limit: constant,
      category: filteredCategories.toString(),
      tags: filteredTags.toString()
    };
    if (!loadMore) {
      params.first = 0;
      params.limit = 6;
      setFirst(0);
      setConstant(6);
      articleListData = [];
      setArticleList([]);
      setTotalResults(0);
    }
    setTimeout(() => {
      ExploreService.getExploreArticleList(params)
        .then(res => {
          console.log(res.data.data);
          setArticleList([...articleListData, ...res.data.data]);
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
    if (filterTitle === 'Tags') {
      let tagsToSearch = [...filteredTags];
      const tagsUpdated = [...tags];
      let index = tagsUpdated.findIndex(tag => tag.id === selected);
      tagsUpdated[index].isChecked = isChecked;
      setTags(tagsUpdated);

      if (isChecked) {
        tagsToSearch.push(selected);
        setFilteredTagsForMobile(tagsToSearch);
        if (!mobileCheck) {
          setFilteredTags(tagsToSearch);
        }
      } else {
        let i = tagsToSearch.indexOf(selected);
        tagsToSearch.splice(i, 1);
        setFilteredTagsForMobile(tagsToSearch);
        if (!mobileCheck) {
          setFilteredTags(tagsToSearch);
        }
      }
    }
    if (filterTitle === 'Categories') {
      let categoriesToSearch = [...filteredCategories];
      const categoriesUpdated = [...categories];
      let index = categoriesUpdated.findIndex(tag => tag.id === selected);
      categoriesUpdated[index].isChecked = isChecked;
      setCategories(categoriesUpdated);
      if (isChecked) {
        categoriesToSearch.push(selected);
        setFilteredCategoriessForMobile(categoriesToSearch);
        if (!mobileCheck) {
          setFilteredCategories(categoriesToSearch);
        }
      } else {
        let i = categoriesToSearch.indexOf(selected);
        categoriesToSearch.splice(i, 1);
        setFilteredCategoriessForMobile(categoriesToSearch);
        if (!mobileCheck) {
          setFilteredCategories(categoriesToSearch);
        }
      }
    }
  };

  const closeFilters = () => {
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
    return showComponent || width > 767 ? (
      data && data.length ? (
        <Filter
          dataToFilter={data}
          handleFilters={handleFilters}
          filterTitle={title}
          selectOrClearAllHandler={selectOrClearAllHandler}
          showHeader={mobileCheck}
          closeFilters={closeFilters}
        />
      ) : (
          <ShimmerEffect
            propCls="shm_col-xs-6 col-md-12"
            height={65}
            count={1}
            type="TILE"
          />
        )
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
                    {width > 767 && (
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
            <div className="events-listing">
              <div className="events-section">
                <CardList articleList={articleList} />
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
              {totalResults - constant > 0 && (
                <div className="promotion-load-more">
                  <button
                    onClick={() => {
                      setFirst(constant);
                      setConstant(totalResults);
                      setLoadMore(true);
                    }}
                    className="btn-link load-more-btn"
                    target=""
                  >
                    <span>Load More ({totalResults - constant})</span>
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
