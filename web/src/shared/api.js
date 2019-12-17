import axios from 'axios';
import Constants from './constants';
import Utilities from './utilities';
const testIp = '192.168.10.197';
const instance = axios.create({
  baseURL: Constants.BASE_URL,
  headers: {
    device_id: Utilities.getDeviceID(),
    email: localStorage.getItem('email')
  }
});
export default instance;
