import axios from 'axios';

export function serviceUrl() {
  return 'http://138.197.208.74:8080/myTest';
}

const instance = axios.create({
  baseURL: serviceUrl(),
  timeout: 3000,
  withCredentials: true,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;
