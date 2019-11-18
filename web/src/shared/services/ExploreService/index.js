import API from '../../api';

class ExploreService {
  getExploreArticleList(params) {
    return API.get(`/get-articles-listing`, { params });
  }
  getTemplateTwo(params) {
    return API.get(`/get-template-2`, { params });
  }
  getArticle(params) {
    return API.get(`get-template-1`, { params });
  }
  getCategories() {
    return API.get(`get-template-categories`);
  }
  getTags() {
    return API.get(`get-template-tags`);
  }
}

export default new ExploreService();
