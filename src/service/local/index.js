import axios from 'axios';

export function serviceUrl() {
  return 'http://192.168.110.103:8080/myTest';
}

const instance = axios.create({
  baseURL: serviceUrl(),
  timeout: 3000,
  withCredentials: true,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;
