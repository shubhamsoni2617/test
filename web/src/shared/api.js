import axios from 'axios';
import Constants from './constants';
import uuid from 'uuid';
const testIp = '192.168.10.197';
const instance = axios.create({
  baseURL: Constants.BASE_URL,
  headers: {
    device_id: JSON.stringify(new Date().getTime() + uuid() + testIp),
    email: localStorage.getItem('email') || null
  }
});
export default instance;
