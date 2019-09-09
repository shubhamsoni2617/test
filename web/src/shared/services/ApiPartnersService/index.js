import API from "../../api";

class ApiPartnersService {
  getApiPartnersService(params) {
    return API.get(`api-partners`, { params });
  }
}

export default new ApiPartnersService();
