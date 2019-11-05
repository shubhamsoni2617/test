import API from '../../api';

class B2BService {
  getLandingPage() {
    return API.get(`landing-page`);
  }

  getSystemLicensing() {
    return API.get(`system-licensing`);
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
