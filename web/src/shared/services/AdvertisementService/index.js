import API from '../../api';

class MostViewedService {
  getMostViewedService(params) {
    return API.get(`adv/featured-event`, { params });
  }
}

export default new MostViewedService();
