import API from "../../api";

class TermsAndPrivacyService {
  getTermsAndPrivacyService(params) {
    return API.get(`cms-page`, { params });
  }
}

export default new TermsAndPrivacyService();
