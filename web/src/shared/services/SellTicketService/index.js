import API from '../../api';

class SellTicketService {
  getSellTicketWithUs(params) {
    return API.get(`sell-with-us`, { params });
  }
}

export default new SellTicketService();
