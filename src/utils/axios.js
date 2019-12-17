import axios from 'axios';
import {Alert} from 'react-native';

// axios.baseUrl = 'http://localhost:7001/api/v1';
const BASE_URL = 'http://192.168.52.158:7001/api/v1';
// 192.168.199.171  192.168.52.158

axios.interceptors.request.use(config => {
  return config;
});

axios.interceptors.response.use(
  response => {
    const {status} = response;
    if (status === 200 || status === 304) {
      return response.data;
    }

    // Alert.alert()
  },
  error => {
    console.log(error);
  },
);

export function get({url, params}) {
  return axios.get(BASE_URL + url, {params});
}

export function post({url, data}) {
  return axios.post(BASE_URL + url, data);
}
