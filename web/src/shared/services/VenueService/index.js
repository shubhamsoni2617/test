import API from '../../../shared/api';

class VenueService {
  getVenues(params) {
    return API.get(`venues-list`, { params });
  }

  getVenuesCountryNRegion() {
    return API.get(`venue-countries-regions`);
  }

  getVenueSpecificEvents(params) {
    return API.get(`venue-specific-events`, { params });
  }
}

export default new VenueService();
