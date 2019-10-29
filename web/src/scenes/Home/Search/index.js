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

const Search = props => {
  const [searchCategories, setSearchCategories] = useState(null);
  const [allResultCount, setAllResultCount] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [defaultCategoryId, setDefaultCategoryId] = useState('all');
  const [allSearchResults, setAllSearchResults] = useState(null);
  const [constant, setConstant] = useState(6);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    setDefaultCategoryId('all');
    fetchSearchCategoriesService();
  }, [props.location.search]);
  useEffect(() => {
    setAllSearchResults(null);
    const params = {
      client: Constants.CLIENT,
      limit: constant,
      first: 0,
      search: decodeURI(props.location.search.split('=')[1])
    };
    fetchSearchResultsService(params);
  }, [defaultCategoryId, props.location.search]);

  useEffect(() => {
    const params = {
      client: Constants.CLIENT,
      search: decodeURI(props.location.search.split('=')[1]),
      limit: constant,
      first: 0
    };
    if (constant !== 6) {
      fetchSearchResultsService(params);
    }
  }, [constant]);

  const fetchSearchCategoriesService = () => {
    setSearchCategories(null);
    setAllResultCount('');
    const params = {
      client: Constants.CLIENT,
      search: decodeURI(props.location.search.split('=')[1])
    };
    SearchService.getSearchCategories(params)
      .then(res => {
        console.log(res.data);
        setSearchCategories(res.data.data);
        setTotalResults(res.data.data.find(obj => obj.type === 'all').total);
        setAllResultCount(res.data.data.find(obj => obj.type === 'all').total);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchSearchResultsService = params => {
    searchApi(
      params,
      defaultCategoryId,
      setAllSearchResults,
      setLoadMore,
      setError
    );
  };

  const handleActiveCategory = id => {
    setDefaultCategoryId(id);
    setConstant(6);
    setTotalResults(searchCategories.find(obj => obj.type === id).total);
  };

  const searchResultHandler = searchResults => {
    return searchResults ? (
      searchResults.map(cardData => {
        return (
          <div key={cardData.id}>
            <Card cardData={cardData} {...props} />
          </div>
        );
      })
    ) : (
      <ShimmerEffect
        height={10}
        count={4}
        type="LIST"
        propCls="shm_col-xs-1 col-md-12"
      />
    );
  };
  console.log(allResultCount);
  return (
    <div className="searchbar-page-wrapper container-fluid">
      {!error ? (
        <div className="container">
          <SearchAdvertisement />
          <h2>
            {allResultCount} results found for "
            <strong>{decodeURI(props.location.search.split('=')[1])}</strong>"
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
              {loadMore && (
                <ShimmerEffect
                  height={10}
                  count={4}
                  type="LIST"
                  propCls="shm_col-xs-1 col-md-12"
                />
              )}
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
        // <h2>NO data Found</h2>
        <SearchNotFound />
      )}

      {/* {error && <h2>NO data Found</h2>} */}
    </div>
  );
};

export default Search;
