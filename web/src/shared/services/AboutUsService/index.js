import API from '../../../shared/api';

class AboutUsService {
  getAboutUsContent() {
    return API.get(`about-us`);
  }
}

export default new AboutUsService();
