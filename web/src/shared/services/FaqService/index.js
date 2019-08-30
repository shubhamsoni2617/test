import API from "../../api";

class FaqService {
  getFaqService(params) {
    return API.get(`contact-us/faq`, { params });
  }
}

export default new FaqService();
