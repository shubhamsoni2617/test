import API from "../../api";

class WhereBuyTickets {
  getWhereBuyTickets(params) {
    return API.get(`where-to-buy-tickets`, { params });
  }
}

export default new WhereBuyTickets();
