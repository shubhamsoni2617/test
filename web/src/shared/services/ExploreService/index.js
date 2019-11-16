import API from '../../api';

class ExploreService {
  getExploreArticleList(params) {
    return API.get(`/get-articles-listing`, { params });
  }
  getCategories() {
    return API.get(`get-template-categories`);
  }
  getTags() {
    return API.get(`get-template-tags`);
  }
  getExploreLanding() {
    return API.get(`get-explore-landing`);
  }
}

export default new ExploreService();
