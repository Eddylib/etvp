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
  homeslidelist: 'homeslide',
  homelist: 'homeslide',
  teachers: 'homeslide',
  studentsinschool: 'homeslide',
  studentsoutschool: 'homeslide'
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
export function getTeacherList() {
  return axios.post(urltable.teachers, {function: 'get_teachers'});
}
export function getStudentsList(type) {
  if(type === 'inschool') {
    return axios.post(urltable.studentsinschool, {function: 'get_students', state: 'study'});
  }else if(type === 'outschool') {
    return axios.post(urltable.studentsoutschool, {function: 'get_students', state: 'graduate'});
  }else {
    alert('network: error request type in get student list!');
  }
}

