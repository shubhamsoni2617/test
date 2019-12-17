import axios from 'axios';
import Constants from './constants';
import Utilities from './utilities';
const instance = axios.create({
  baseURL: Constants.BASE_URL
});
export default instance;
