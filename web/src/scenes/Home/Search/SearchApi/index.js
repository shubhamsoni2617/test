import SearchService from '../../../../shared/services/SearchService';

export default function searchApi(
  params,
  defaultCategoryId,
  setAllSearchResults,
  setLoadMore
) {
  switch (defaultCategoryId) {
    case 'all':
      setTimeout(() => {
        setAllSearchResults(data);
        setLoadMore(false);
      }, 500);
      break;

    case 'event':
      setTimeout(() => {
        SearchService.getEventsSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
            console.log(res.data.data);
            setLoadMore(false);
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
            setLoadMore(false);
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
            setLoadMore(false);
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
            setLoadMore(false);
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
            setLoadMore(false);
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
}

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
    image:
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
    image:
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

    image:
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
    image: '',

    code: null
  }
];
