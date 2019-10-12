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
  let totalResults = 4;
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

  const [searchCategories, setSearchCategories] = useState([
    { id: '1', name: 'All', count: '1' },
    { id: '2', name: 'Events', count: '2' },
    { id: '3', name: 'Attractions', count: '3' },
    { id: '4', name: 'Promotions', count: '4' },
    { id: '5', name: 'Explore', count: '5' },
    { id: '6', name: 'Faq', count: '6' }
  ]);

  const [defaultCategoryId, setDefaultCategoryId] = useState('1');
  const [allSearchResults, setAllSearchResults] = useState([]);
  const [loadSearchResults, setLoadSearchResults] = useState(false);

  const [loadMore, setLoadMore] = useState(null);
  useEffect(() => {
    fetchSearchResultsService();
  }, [defaultCategoryId, loadMore]);

  const fetchSearchResultsService = () => {
    const params = {
      client: Constants.CLIENT,
      limit: 6,
      search: props.location.search.split('=')[1]
    };
    // SearchService.getAllSearchResults(params)
    //   .then(res => {
    //     setAllSearchResults(res.data.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    let allSearchResultsLength = 0;
    if (allSearchResults) {
      console.log(allSearchResults);
      allSearchResultsLength = allSearchResults.length;
    }
    if (!loadMore) {
      setAllSearchResults([]);
    } else {
      setLoadSearchResults(true);
    }

    switch (defaultCategoryId) {
      case '1':
        setTimeout(() => {
          if (loadMore) {
            setAllSearchResults([...allSearchResults, ...data.slice(2, 4)]);
            setLoadSearchResults(false);
          } else {
            setAllSearchResults([...data.slice(0, 2)]);
          }
        }, 500);
        break;

      case '2':
        setTimeout(() => {
          setAllSearchResults(data);
        }, 500);
        break;
      case '3':
        setTimeout(() => {
          setAllSearchResults(data);
        }, 500);
        break;

      case '4':
        setTimeout(() => {
          setAllSearchResults(data);
        }, 500);
        break;
      case '5':
        setTimeout(() => {
          setAllSearchResults(data);
        }, 500);
        break;
      case '6':
        setTimeout(() => {
          setAllSearchResults(data);
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

      <div className="wrapper-events-listing">
        <div className="events-listing">
          <div className="events-section list-view">
            {searchResultHandler(allSearchResults)}
            {loadSearchResults && (
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
              <span>Load More (2)</span>
              <img src={DownArrowBlue} alt="down arrow blue" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
