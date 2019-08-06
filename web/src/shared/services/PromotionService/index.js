import API from "../../../shared/api";

class PromotionService {

  getPromotionCategories(params) {
    return API.get(`promotion-categories`,{params})
  }

  getPromotionList(params) {
    return API.get(`promotions`,{params})
  }

}

export default new PromotionService();
