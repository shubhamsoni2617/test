import API from '../../api';

class ExploreService {
  getExploreArticleList(params) {
    return API.get(`/get-articles-listing`, { params });
  }
  getTemplateTwo() {
    return API.get(`/get-template-2`);
  }
}

export default new ExploreService();
