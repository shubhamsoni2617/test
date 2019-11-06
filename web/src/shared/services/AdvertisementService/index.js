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
    return API.get(`adv/search-autosuggest`, { params });
  }
  getSearchListService(params) {
    return API.get(`adv/search-list`, { params });
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

  getCustomizeSectionThree(params) {
    return API.get(`adv/customize-section-three`, { params });
  }
  getFindAnEventAds(params) {
    return API.get(`adv/find-an-event`, { params });
  }
}

export default new AdvertisementService();
