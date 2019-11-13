import API from '../../api';

class TermsAndPrivacyService {
  getTermsAndPrivacyService() {
    return API.get(`cms-page`);
  }
}

export default new TermsAndPrivacyService();
