import axios from 'axios';

export function serviceUrl() {
  return 'http://192.168.110.101:8080/';
}

const instance = axios.create({
  baseURL: serviceUrl(),
  timeout: 3000,
  withCredentials: true,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;
