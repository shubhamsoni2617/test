import API from '../../api';

class EventsService {
  getData(params) {
    return API.get(`/events`, { params: params });
  }
  getExploreArticleList(params) {
    return API.get(`/get-articles-listing`, { params: params });
  }
  getEventDetails(params) {
    return API.get(`/event-detail`, { params: params });
  }
  getFilterConfig() {
    return API.get(`/configurations/search`);
  }

  getSimilarEvents(params) {
    return API.get(`/similar-events`, { params: params });
  }
}

export default new EventsService();
