import React, { useState, useEffect } from 'react';
import SearchCategory from './SearchCategory';
import Card from './Card';
import './style.scss';
import SearchService from '../../../shared/services/SearchService';
import Constants from '../../../shared/constants';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import DownArrowBlue from '../../../assets/images/down-arrow-blue.svg';
import searchApi from './SearchApi';
import SearchAdvertisement from './SearchAdvertisement';
import SearchNotFound from './SearchNotFound';
import Utilities from '../../../shared/utilities';
import usePrevious from '../../../shared/hooks/usePrevious';
// import { UserInputHandler } from '../HomePageSearch/AutoComplete/index';
const Search = props => {
  const [searchCategories, setSearchCategories] = useState(null);
  const [allResultCount, setAllResultCount] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [defaultCategoryId, setDefaultCategoryId] = useState('all');
  const [allSearchResults, setAllSearchResults] = useState(null);
  const [constant, setConstant] = useState(6);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const searchKeyword = decodeURI(props.location.search.split('=')[1]);
  const prevSearchKeyword = usePrevious(searchKeyword);
  const prevDefaultCategoryId = usePrevious(defaultCategoryId);

  useEffect(() => {
    return () => {
      console.log(document.getElementsByClassName('search-inputtype'));
      document
        .getElementsByClassName('search-inputtype')[0]
        .classList.add('hide-text');
    };
  }, []);
  useEffect(() => {
    setDefaultCategoryId('all');
    fetchSearchCategoriesService();
  }, [searchKeyword]);
  useEffect(() => {
    if (!loadMore) {
      setAllSearchResults(null);
    }
    const params = {
      client: Constants.CLIENT,
      limit: constant,
      first: 0,
      search: searchKeyword
    };
    if (prevSearchKeyword !== searchKeyword) {
      params.limit = 6;
      setConstant(6);
    }
    if (
      prevSearchKeyword !== searchKeyword ||
      loadMore ||
      prevDefaultCategoryId !== defaultCategoryId
    ) {
      searchApi(
        params,
        defaultCategoryId,
        setAllSearchResults,
        setLoadMore,
        setError
      );
    }
  }, [defaultCategoryId, searchKeyword, constant]);

  const fetchSearchCategoriesService = () => {
    setSearchCategories(null);
    setAllResultCount('');
    const params = {
      client: Constants.CLIENT,
      search: searchKeyword
    };
    SearchService.getSearchCategories(params)
      .then(res => {
        setSearchCategories(res.data.data);
        setTotalResults(res.data.data.find(obj => obj.type === 'all').total);
        setAllResultCount(res.data.data.find(obj => obj.type === 'all').total);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleActiveCategory = id => {
    setDefaultCategoryId(id);
    setConstant(6);
    setTotalResults(searchCategories.find(obj => obj.type === id).total);
  };

  const handleShimmerEffect = () => {
    return Utilities.mobileAndTabletcheck() ? (
      <ShimmerEffect
        height={150}
        count={4}
        type="LIST"
        propCls="shm_col-xs-2 col-md-5"
      />
    ) : (
      <ShimmerEffect
        height={10}
        count={4}
        type="LIST"
        propCls="shm_col-xs-1 col-md-12"
      />
    );
  };

  const searchResultHandler = searchResults => {
    return searchResults
      ? searchResults.map(cardData => {
          return (
            <div key={cardData.id}>
              <Card cardData={cardData} {...props} />
            </div>
          );
        })
      : handleShimmerEffect();
  };
  return (
    <div className="searchbar-page-wrapper container-fluid">
      {!error ? (
        <div className="container">
          <SearchAdvertisement />
          <h2>
            {allResultCount} results found for "<strong>{searchKeyword}</strong>
            "
          </h2>
          <SearchCategory
            searchCategories={searchCategories}
            defaultCategoryId={defaultCategoryId}
            handleActiveCategory={handleActiveCategory}
          />
          <div className="wrapper-events-listing">
            <div className="events-listing">
              <div className="events-section list-view">
                {searchResultHandler(allSearchResults)}
              </div>
              {loadMore && handleShimmerEffect()}
              {totalResults - constant > 0 && (
                <div className="promotion-load-more">
                  <button
                    onClick={() => {
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
        </div>
      ) : (
        <SearchNotFound />
      )}
    </div>
  );
};

export default Search;
