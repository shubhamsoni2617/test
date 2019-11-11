import API from '../../api';

class SellTicketService {
  getSellTicketWithUs(params) {
    return API.get(`sell-with-us`, { params });
  }
  submitSellerForm(data) {
    return API.post(`add-seller`, data);
  }
}

export default new SellTicketService();
