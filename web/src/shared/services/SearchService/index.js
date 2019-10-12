import API from '../../../shared/api';

class SearchService {
  getSearchCategories(params) {
    return API.get(`get-search-count-results`, { params });
  }
  getSearchSuggestions(params) {
    return API.get(`get-search-suggestions`, { params });
  }
  getAllSearchResults(params) {
    return API.get(`search-results`, { params });
  }

  getEventsSearchResults(params) {
    return API.get(`get-events-search-results`, { params });
  }

  getAttractionsSearchResults(params) {
    return API.get(`get-attractions-search-results`, { params });
  }
  getPromotionSearchResults(params) {
    return API.get(`get-events-search-results`, { params });
  }
  getFaqSearchResults(params) {
    return API.get(`get-faq-search-results`, { params });
  }
  getExploreSearchResults(params) {
    return API.get(`get-faq-search-results`, { params });
  }
}

export default new SearchService();
