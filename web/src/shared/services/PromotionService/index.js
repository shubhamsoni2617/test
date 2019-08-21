import API from "../../../shared/api";

class PromotionService {

  getPromotionCategories(params) {
    return API.get(`promotion-categories`,{params})
  }

  getPromotionList(params) {
    return API.get(`promotions`,{params})
  }

  getPromotionDetail(params) {
    return API.get(`promotion-detail`,{params})
  }

}

export default new PromotionService();
