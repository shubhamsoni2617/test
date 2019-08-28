import API from "../../api";

class GiftVouchersService {
  getGiftVouchers(params) {
    return API.get(`gift-vouchers`, { params });
  }
}

export default new GiftVouchersService();
