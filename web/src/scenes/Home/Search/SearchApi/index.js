import SearchService from '../../../../shared/services/SearchService';

export default function searchApi(
  params,
  defaultCategoryId,
  setAllSearchResults,
  setLoadMore,
  setError,
  allSearchResults,
  loadMore
) {
  let apiToCall = '';
  switch (defaultCategoryId.toLowerCase()) {
    case 'all':
      apiToCall = SearchService.getAllSearchResults;
      break;
    case 'events':
      apiToCall = SearchService.getEventsSearchResults;
      break;
    case 'promotions':
    case 'promotion':
      apiToCall = SearchService.getPromotionSearchResults;
      break;
    case 'attractions':
    case 'attraction':
      apiToCall = SearchService.getAttractionsSearchResults;
      break;
    case 'faq':
      apiToCall = SearchService.getFaqSearchResults;
      break;
    case 'explore':
      apiToCall = SearchService.getFaqSearchResults;
      break;
    default:
      apiToCall = SearchService.getAllSearchResults;
  }

  setTimeout(() => {
    apiToCall(params)
      .then(res => {
        if (loadMore) {
          setAllSearchResults([...allSearchResults, ...res.data.data]);
        } else {
          setAllSearchResults(res.data.data);
        }
        setLoadMore(false);
        if (!res.data.data || !res.data.data.length) {
          setError(true);
        } else {
          setError(false);
        }
      })
      .catch(err => {
        setError(true);
        console.log(err);
      });
  }, 500);
}
