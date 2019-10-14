import API from '../../../shared/api';

class AdvertisementService {
  getLeaderboardImage(params) {
    return API.get(`adv/leader-board`, { params });
  }

  getSidePanelBetweenTopPicksFeaturedEvents(params) {
    return API.get(`adv/side-panel`, { params });
  }

  getFeaturedEvents(params) {
    return API.get(`adv/featured-event`, { params });
  }
}

export default new AdvertisementService();
