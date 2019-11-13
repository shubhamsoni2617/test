import API from '../../api';

class ExploreService {
  getExploreArticleList(params) {
    return API.get(`/get-articles-listing`, { params: params });
  }
}

export default new ExploreService();
