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
  homeslidelist: 'home',
  homelist: 'home',
  teachers: 'team',
  studentsinschool: 'team',
  studentsoutschool: 'team'
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
  return axios.post(urltable.homeslidelist, {function: 'get_home', classify: 'slide'});
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
    alert('network: error request type in get student list!  --service');
  }
}
export function getAllActivityList() {
  return axios.post(urltable.teachers, {function: 'get_list', classify: 'activity'});
}
export function getAllProjectList() {
  return axios.post(urltable.teachers, {function: 'get_list', classify: 'project'});
}
export function getAllScienceList() {
  return axios.post(urltable.teachers, {function: 'get_list', classify: 'science'});
}
