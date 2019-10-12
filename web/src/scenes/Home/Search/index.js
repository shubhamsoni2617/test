import React, { useState, useEffect } from 'react';
import SearchCategory from './SearchCategory';
// import Card from '../../../shared/components/Card';
import Card from './Card';
import './style.scss';
import SearchService from '../../../shared/services/SearchService';
import Constants from '../../../shared/constants';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import DownArrowBlue from '../../../assets/images/down-arrow-blue.svg';
const Search = props => {
  // let totalResults = 4;
  const [searchCategories, setSearchCategories] = useState(null);
  const [allResultCount, setAllResultCount] = useState('...');
  const [totalResults, setTotalResults] = useState('...');
  const [defaultCategoryId, setDefaultCategoryId] = useState('all');
  const [allSearchResults, setAllSearchResults] = useState([]);
  const [loadSearchResults, setLoadSearchResults] = useState([]);
  const [load, setLoad] = useState(false);

  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    fetchSearchCategoriesService();
  }, []);
  useEffect(() => {
    fetchSearchResultsService();
  }, [defaultCategoryId, loadMore]);

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

  const fetchSearchResultsService = () => {
    const params = {
      client: Constants.CLIENT,
      limit: 3,
      first: 1,
      search: props.location.search.split('=')[1]
    };
    // setAllSearchResults([]);
    // let allSearchResultsLength = 0;
    // if (allSearchResults) {
    //   console.log(allSearchResults);
    //   allSearchResultsLength = allSearchResults.length;
    // }
    if (!loadMore) {
      setAllSearchResults([]);
    } else {
      setLoad(true);
    }
    //  else {
    // setLoadSearchResults(true);
    // }
    switch (defaultCategoryId) {
      case 'all':
        setTimeout(() => {
          // if (loadMore) {
          //   setAllSearchResults([...allSearchResults, ...data.slice(2, 4)]);
          //   setLoadSearchResults(false);
          //   // setLoadMore(false);
          // } else {

          setAllSearchResults(data);
          // }
          // SearchService.getAllSearchResults(params)
          //   .then(res => {
          //     setAllSearchResults(res.data.data);
          //   })
          //   .catch(err => {
          //     console.log(err);
          //   });
        }, 500);
        break;

      case 'event':
        if (loadMore) {
          params.first = params.limit;
          params.limit =
            searchCategories.find(obj => obj.type === 'event').total -
            params.limit;
          console.log(params);
        }
        setTimeout(() => {
          SearchService.getEventsSearchResults(params)
            .then(res => {
              if (loadMore) {
                setLoadSearchResults(res.data.data);
                params.limit = 3;
                params.first = 1;
              } else {
                setAllSearchResults(res.data.data);
              }
              setTotalResults(
                searchCategories.find(obj => obj.type === 'event').total
              );
              // setLoadMore(false);
              setLoad(false);
            })
            .catch(err => {
              console.log(err);
            });
        }, 500);
        break;
      case 'promotion':
        setTimeout(() => {
          SearchService.getPromotionSearchResults(params)
            .then(res => {
              setAllSearchResults(res.data.data);
              setTotalResults(
                searchCategories.find(obj => obj.type === 'promotion').total
              );
            })
            .catch(err => {
              console.log(err);
            });
        }, 500);
        break;

      case 'attraction':
        setTimeout(() => {
          SearchService.getAttractionsSearchResults(params)
            .then(res => {
              setAllSearchResults(res.data.data);
              setTotalResults(
                searchCategories.find(obj => obj.type === 'attraction').total
              );
            })
            .catch(err => {
              console.log(err);
            });
        }, 500);
        break;
      case 'faq':
        setTimeout(() => {
          SearchService.getFaqSearchResults(params)
            .then(res => {
              setAllSearchResults(res.data.data);
              setTotalResults(
                searchCategories.find(obj => obj.type === 'faq').total
              );
            })
            .catch(err => {
              console.log(err);
            });
        }, 500);
        break;
      case 'explore':
        setTimeout(() => {
          SearchService.getFaqSearchResults(params)
            .then(res => {
              setAllSearchResults(res.data.data);
              setTotalResults(
                searchCategories.find(obj => obj.type === 'faq').total
              );
            })
            .catch(err => {
              console.log(err);
            });
        }, 500);
        break;
      default:
        setTimeout(() => {
          setAllSearchResults(data);
        }, 500);
    }
  };

  const handleActiveCategory = id => {
    setDefaultCategoryId(id);
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
    <>
      <div>
        <SearchCategory
          searchCategories={searchCategories}
          defaultCategoryId={defaultCategoryId}
          handleActiveCategory={handleActiveCategory}
        />
      </div>
      <h2>
        {allResultCount} results found for "
        {props.location.search.split('=')[1]}"
      </h2>
      <div className="wrapper-events-listing">
        <div className="events-listing">
          <div className="events-section list-view">
            {searchResultHandler(allSearchResults)}
            {loadSearchResults.length
              ? searchResultHandler(loadSearchResults)
              : null}
            {load && (
              <ShimmerEffect
                height={10}
                count={4}
                type="LIST"
                propCls="shm_col-xs-1 col-md-12"
              />
            )}
          </div>

          <div className="promotion-load-more">
            <button
              onClick={e => {
                e.preventDefault();
                setLoadMore(true);
              }}
              className="btn-link load-more-btn"
              target=""
            >
              <span>Load More ({totalResults - 3})</span>
              <img src={DownArrowBlue} alt="down arrow blue" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

const data = [
  {
    type: 'promotion',
    title: 'SBI WEALTH VISA SIGNATURE DEBIT CARD OFFER',
    venue: null,
    status: null,
    id: 303,
    alias: '/node/303',
    price: '',
    date: '',
    category: 'Bank',
    thumb_image:
      'http://192.168.10.195:8081/sistic/docroot/sites/default/files/2019-08/PH14.png',
    code: null
  },
  {
    type: 'event',
    title: "Andy Griffiths' The 13-Storey Treehouse: Live on Stage",
    venue: 'Abigo',
    status: 'Expiring Soon',
    id: 60,
    alias: '/node/60',
    price: 'S$150 - S$170',
    date: 'Thu, 01 Aug 2019 - Sat, 31 Aug 2019',
    category: 'Comedy',
    thumb_image:
      'http://192.168.10.195:8081/sistic/docroot/sites/default/files/2019-08/h4.png',

    code: 'andy0919'
  },
  {
    type: 'attraction',
    title: 'Aladdin1',
    venue: null,
    status: null,
    id: 274,
    alias: '/node/274',
    price: '',
    date: '',
    category: 'promotions',

    thumb_image:
      'http://192.168.10.195:8081/sistic/docroot/sites/default/files/2019-08/attdino_0.png',

    code: null
  },
  {
    type: 'faq',
    title: 'What is StarHub & SRT (Singapore Repertory Theatre) Rewards?',
    venue: null,
    status: null,
    id: 383,
    alias: '/node/383',
    price: '',
    date: '',
    category: 'E-Ticket',
    thumb_image: '',

    code: null
  }
];
