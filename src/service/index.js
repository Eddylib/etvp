import mockAxios from './mock';
import localAxios from './local';
import productionAxios from './production';

const env = 'local';
var axios;
switch (env) {
  case 'local':
    axios = localAxios;
    break;
  case 'mock':
    axios = mockAxios;
    break;
  case 'production':
    axios = productionAxios;
    break;
}
export const urltable = {
  homeslidelist: 'hi',
  homelist: 'hello'
};
function extractMapToForm(map) {
  const form = new FormData();
  for (var key in map) {
    if (!map.hasOwnProperty(key)) continue;
    form.append(key, map[key]);
  }
  return form;
}
export function getHomeSlideList() {
  return axios.post(urltable.homeslidelist, {function: 'haha'});
}
export function getHomeList(type) {
  return axios.post(urltable.homelist, {function: 'get_home', classify: type});
}
export function borrowBookTrace(trace) {
  return axios.post(`/books/${trace.book.isbn}/traces/${trace.id}/lend`);
}
