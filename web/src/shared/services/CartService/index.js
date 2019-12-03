import axios from 'axios';
import jsonp from 'jsonp';
const Axios = axios.create({
  baseURL: 'https://ticketing.stixcloudtest.com/sistic/patron/checkcart/portal'
});

console.log('test');
class CartService {
  getCardData() {
    return jsonp(
      'https://ticketing.stixcloudtest.com/sistic/patron/checkcart/portal',
      null,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(data);
        }
      }
    );
  }
}

export default new CartService();
