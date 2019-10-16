import API from '../../api';

class AdvertisementService {
  getMostViewedService(params) {
    return API.get(`adv/featured-event`, { params });
  }

  getGiftCardService(params) {
    return API.get(`adv/side-panel`, { params });
  }
}

export default new AdvertisementService();
