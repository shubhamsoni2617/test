import API from '../../api';

class ExploreService {
  getExploreArticleList(params) {
    return API.get(`/get-articles-listing`, { params });
  }
  getTemplateTwo() {
    return API.get(`/get-template-2?id=8277`);
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
