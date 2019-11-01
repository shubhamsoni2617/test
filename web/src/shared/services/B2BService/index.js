import API from '../../api';

class B2BService {
  getLandingPage(params) {
    return API.get(`b2b-pages/landing-page`, { params });
  }

  getSystemLicensing(params) {
    return API.get(`system-licensing`, { params });
  }

  getAdvertiseWithUs(params) {
    return API.get(`advertise-with-us`, { params });
  }

  getsellWithUs(params) {
    return API.get(`sell-with-us`, { params });
  }

  formSubmission(data) {
    return API.post(`add-seller`, data);
  }
}

export default new B2BService();
