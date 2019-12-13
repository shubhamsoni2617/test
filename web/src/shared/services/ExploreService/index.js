import API from '../../api';

class ExploreService {
  getExploreArticleList(params) {
    return API.get(`/get-articles-listing`, { params });
  }
  getTemplateTwo(params, pathname) {
    if (pathname.split('/')[1] === 'preview') {
      return API.get(`/preview/get-template-2`, { params });
    }

    return API.get(`/get-template-2`, { params });
  }
  getArticle(params, pathname) {
    if (pathname.split('/')[1] === 'preview') {
      return API.get(`preview/get-template-1`, { params });
    }

    return API.get(`get-template-1`, { params });
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
