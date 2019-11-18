import API from '../../api';

class ExploreService {
  getEx() {
    return API.get('get-explore-landing');
  }
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
}

export default new ExploreService();
