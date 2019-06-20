import axios from 'axios';
import { Alert, AsyncStorage } from 'react-native'
import Constants from "./constants";


const instance = axios.create({
    baseURL: Constants.BASE_URL
});

export default instance;