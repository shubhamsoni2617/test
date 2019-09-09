import API from "../../api";

class FaqService {
  getFaqCategoriesService(params) {
    return API.get(`faq-categories`, { params });
  }

  getFaqContentService(params) {
    return API.get(`faq`, { params });
  }
}

export default new FaqService();
