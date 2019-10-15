import React, { useState, useEffect } from 'react';
import SearchCategory from './SearchCategory';
import Card from './Card';
import './style.scss';
import SearchService from '../../../shared/services/SearchService';
import Constants from '../../../shared/constants';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import DownArrowBlue from '../../../assets/images/down-arrow-blue.svg';
import searchApi from './SearchApi';
const Search = props => {
  const [loadContent, setLoadContent] = useState(4);
  const [searchCategories, setSearchCategories] = useState(null);
  const [allResultCount, setAllResultCount] = useState('...');
  const [totalResults, setTotalResults] = useState('0');
  const [defaultCategoryId, setDefaultCategoryId] = useState('all');
  const [allSearchResults, setAllSearchResults] = useState([]);
  const [loadSearchResults, setLoadSearchResults] = useState([]);
  const [load, setLoad] = useState(false);
  const [constant, setConstant] = useState(6);

  const [loadMore, setLoadMore] = useState(false);
  console.log(totalResults);
  useEffect(() => {
    fetchSearchCategoriesService();
  }, []);
  useEffect(() => {
    setAllSearchResults([]);
    const params = {
      client: Constants.CLIENT,
      limit: constant,
      first: 0,
      search: props.location.search.split('=')[1]
    };
    fetchSearchResultsService(params);
  }, [defaultCategoryId, props.location.search]);

  useEffect(() => {
    const params = {
      client: Constants.CLIENT,
      search: props.location.search.split('=')[1],
      limit: constant,
      first: 0
    };
    if (constant !== 6) {
      fetchSearchResultsService(params);
    }
  }, [constant]);

  const fetchSearchCategoriesService = () => {
    const params = {
      client: Constants.CLIENT,
      search: props.location.search.split('=')[1]
    };
    SearchService.getSearchCategories(params)
      .then(res => {
        setSearchCategories(res.data);
        setTotalResults(res.data.find(obj => obj.type === 'all').total);
        setAllResultCount(res.data.find(obj => obj.type === 'all').total);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchSearchResultsService = params => {
    searchApi(params, defaultCategoryId, setAllSearchResults, setLoadMore);
  };

  const handleActiveCategory = id => {
    setDefaultCategoryId(id);
    setConstant(6);
    setLoadContent(4);
    setTotalResults(searchCategories.find(obj => obj.type === id).total);
  };

  const searchResultHandler = searchResults => {
    return searchResults.length ? (
      searchResults.map(cardData => {
        return (
          <div key={cardData.id}>
            <Card cardData={cardData} />
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
  return (
    <div className="searchbar-page-wrapper container-fluid">
      <div className="container">
        <h2>
          {allResultCount} results found for "
          <strong>{props.location.search.split('=')[1]}</strong>"
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
                    setLoadContent(0);
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
    </div>
  );
};

export default Search;
