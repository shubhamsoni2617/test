import React, { useState, useEffect } from 'react';
import SearchCategory from './SearchCategory';
// import Card from '../../../shared/components/Card';
import Card from './Card';
import './style.scss';
import SearchService from '../../../shared/services/SearchService';
import Constants from '../../../shared/constants';
const Search = props => {
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
    { id: '1', name: 'All', count: '' },
    { id: '30', name: 'Events', count: '' },
    { id: '31', name: 'Attractions', count: '' },
    { id: '32', name: 'Promotions', count: '' },
    { id: '33', name: 'Explore', count: '' },
    { id: '35', name: 'Faq', count: '' }
  ]);

  const [allSearchResults, setAllSearchResults] = useState(null);

  useEffect(() => {
    fetchAllSearchResultsService();
  }, []);

  const fetchAllSearchResultsService = () => {
    const params = {
      client: Constants.CLIENT,
      limit: 5,
      search: props.location.search.split('=')[1]
    };
    // SearchService.getAllSearchResults(params)
    //   .then(res => {
    //     setAllSearchResults(res.data.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    setAllSearchResults(data);
  };

  const [defaultCategoryId, setDefaultCategoryId] = useState('1');

  const handleActiveCategory = id => {
    setDefaultCategoryId(id);
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
            <Card cardData={data[0]} />
            <Card cardData={data[1]} />
            <Card cardData={data[2]} />
            <Card cardData={data[3]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

let x = {
  alias: 'Friends of SCO Membe',
  event_date: 'Mon, 01 Jul - Thu, 01 Aug 2019',
  event_status: 'Expiring Soon',
  event_status_background_color: null,
  event_status_text_color: null,
  id: '76',
  price: 'S$260 - S$357',
  primary_genre: 'Comedy',
  thumb_image:
    'http://192.168.10.195:8081/sistic/docroot/sites/default/files/2019-08/h5.png',
  title: 'Celebration In Dance 2019 Presented by Singapore Dance Theatre',
  venue_name: 'South Park'
};
