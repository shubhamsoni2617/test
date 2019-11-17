import API from '../../../shared/api';

class HomeService {
  getMetadata(url) {
    return API.get(`/get-metatags?url=${url}`);
  }
  getData() {
    return API.get(
      `search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`
    );
  }

  getNewsTicker(params) {
    return API.get(`news`, { params });
  }

  getGenre() {
    return API.get(`genres`);
  }

  getVenues(first, limit, search) {
    return API.get(`venues?first=${first}&limit=${limit}&search=${search}`);
  }

  getHomepageVenues(first, limit, search) {
    return API.get(
      `menu-venues?first=${first}&limit=${limit}&search=${search}`
    );
  }

  getHotShowPopupData() {
    return API.get(`hot-show-page`);
  }

  getNewRelease(params) {
    return API.get(`homepage/new-release`, { params });
  }

  getCurrentlyShowing(params) {
    return API.get(`homepage/this-week`, { params });
  }

  getPromotions(params) {
    return API.get(`homepage/promotions`, { params });
  }

  getTopPics(params) {
    return API.get(`homepage/top-picks`, { params });
  }

  getTrandingNow(params) {
    return API.get(`homepage/trending-now`, { params });
  }

  getItemsOrder(params) {
    return API.get(`general-home-settings`, { params });
  }
}

export default new HomeService();
