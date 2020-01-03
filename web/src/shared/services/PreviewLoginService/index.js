import API from '../../../shared/api';

class PreviewLoginService {
  getUser(headers) {
    return API.post(`verify-password-page`, headers);
  }
}

export default new PreviewLoginService();
