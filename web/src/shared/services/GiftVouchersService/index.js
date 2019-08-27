import API from "../../api";

class GiftVouchersService {
  getGiftVouchers() {
    return API.get(`gift-vouchers`);
  }
}

export default new GiftVouchersService();
