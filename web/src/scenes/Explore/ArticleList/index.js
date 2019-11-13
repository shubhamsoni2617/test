import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import EventsService from '../../../shared/services/EventsService';
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
  const [tags, setTags] = useState([
    { id: '121', name: 'Adventure', isChecked: false },
    { id: '124', name: 'Singapore', isChecked: false }
  ]);
  const [categories, setCategories] = useState([
    {
      events_count: '2',
      id: '1',
      name: 'Comedy',
      isChecked: false
    },
    {
      events_count: '3',
      id: '2',
      name: 'Lifestyle/Leisure',
      isChecked: false
    }
  ]);

  const [showTags, setShowTags] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  let mobileCheck =
    (showTags && width <= 767) || (showCategories && width <= 767);
  useEffect(() => {
    getArticleList();
  }, [constant]);

  const getArticleList = () => {
    const params = {
      first: first,
      client: 1,
      limit: constant
    };
    setTimeout(() => {
      ExploreService.getExploreArticleList(params)
        .then(res => {
          console.log(res.data.data);
          setArticleList([...articleList, ...res.data.data]);
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
        setFilteredTags(tagsToSearch);
      } else {
        let i = tagsToSearch.indexOf(selected);
        tagsToSearch.splice(i, 1);
        setFilteredTags(tagsToSearch);
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
        setFilteredCategories(categoriesToSearch);
      } else {
        let i = categoriesToSearch.indexOf(selected);
        categoriesToSearch.splice(i, 1);
        setFilteredCategories(categoriesToSearch);
      }
    }
  };
  // console.log(filteredTags);
  // console.log(filteredCategories);

  const closeFilters = () => {
    setShowTags(false);
    setShowCategories(false);
  };

  const filterComponent = (data, title, showComponent) => {
    return showComponent || width > 767 ? (
      <Filter
        dataToFilter={data}
        handleFilters={handleFilters}
        filterTitle={title}
        selectOrClearAllHandler={selectOrClearAllHandler}
        showHeader={mobileCheck}
        closeFilters={closeFilters}
      />
    ) : null;
  };

  return (
    <div className="events-page-wrapper">
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
                      <>
                        <h3>Filters</h3>
                        <span
                          onClick={() => {
                            selectOrClearAllHandler(false, 'Tags');
                            selectOrClearAllHandler(false, 'Categories');
                          }}
                        >
                          Clear All
                        </span>
                      </>
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
