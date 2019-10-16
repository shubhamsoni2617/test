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

  getMostViewedService(params) {
    return API.get(`adv/featured-event`, { params });
  }

  getGiftCardService(params) {
    return API.get(`adv/side-panel`, { params });
  }

  getCustomizeSectionOne(params) {
    return API.get(`adv/customize-section-one`, { params });
  }

  getCustomizeSectionTwo(params) {
    return API.get(`adv/customize-section-two`, { params });
  }
}

export default new AdvertisementService();
