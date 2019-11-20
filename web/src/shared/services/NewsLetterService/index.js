import API from '../../../shared/api';

class NewsLetterService {
  newsLetterFormSubmission(data) {
    return API.post(`newsletter`, data);
  }
}

export default new NewsLetterService();
