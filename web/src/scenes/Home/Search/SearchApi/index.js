import SearchService from '../../../../shared/services/SearchService';

export default function searchApi(
  params,
  defaultCategoryId,
  setAllSearchResults,
  setLoadMore,
  setError
) {
  switch (defaultCategoryId) {
    case 'all':
      setTimeout(() => {
        SearchService.getAllSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
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
      break;

    case 'event':
      setTimeout(() => {
        SearchService.getEventsSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
            console.log(res.data.data);
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
      break;
    case 'promotion':
      setTimeout(() => {
        SearchService.getPromotionSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
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
      break;

    case 'attraction':
      setTimeout(() => {
        SearchService.getAttractionsSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
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
      break;
    case 'faq':
      setTimeout(() => {
        SearchService.getFaqSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
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
      break;
    case 'explore':
      setTimeout(() => {
        SearchService.getFaqSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
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
      break;
    default:
      setTimeout(() => {
        SearchService.getAllSearchResults(params)
          .then(res => {
            setAllSearchResults(res.data.data);
            console.log(res.data.data);
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
}
