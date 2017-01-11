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
  studentsoutschool: 'team',
  studentdetail: 'student',
  itemlist: 'list',
  editInfo: 'editinfo',
  articledetail: 'article',
  deleteinfo: 'delete',
  getdirect: 'list'
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
export function addHomeSlideList(item) {
  return axios.post(urltable.editInfo,
    {function: 'add_slide',
      id: item.id,
      classify: item.classify,
      picture: item.picture});
}
// export function editHomeSlideList(item) {
//   return axios.post(urltable.homeslidelist, {function: 'get_home', classify: 'slide'});
// }
export function deleteHomeSlideList(item) {
  return axios.post(urltable.deleteinfo,
    {function: 'delete_slide',
      id: item.id});
}
export function getHomeList(type) {
  return axios.post(urltable.homelist, {function: 'get_home', classify: type});
}
export function getTeacherList() {
  return axios.post(urltable.teachers, {function: 'get_teachers', state: 'all'});
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
export function getAllActivityList(page) {
  return axios.post(urltable.itemlist, {function: 'get_list', classify: 'activity', page: page});
}
export function getAllProjectList(page) {
  return axios.post(urltable.itemlist, {function: 'get_list', classify: 'project', page: page});
}
export function getAllScienceList(page) {
  return axios.post(urltable.itemlist, {function: 'get_list', classify: 'science', page: page});
}
export function getStudintDetailBaseInfo(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'simple', id: idin});
}
export function getStudintDetilSpeech(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'speech', id: idin});
}
export function getStudintDetilProject(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'project', id: idin});
}
export function getStudintDetilPrize(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'prize', id: idin});
}
export function getStudintDetilThesis(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'thesis', id: idin});
}
export function addASPD(item) {
  return axios.post(urltable.editInfo,
    {function: 'add',
      condition: item.condition,
      title: item.title,
      guide: item.guide,
      picture: item.picture,
      path: item.path});
}
export function editASPD(item) {
  return axios.post(urltable.editInfo,
    {function: 'edit',
      condition: item.condition,
      id: item.id,
      title: item.title,
      guide: item.guide,
      picture: item.picture,
      path: item.path});
}

export function getASPDDetail(item) {
  return axios.post(urltable.articledetail,
    {function: 'get_article_detail',
      classify: item.classify,
      id: item.id});
}
export function getDirect() {
  return axios.post(urltable.getdirect,
    {function: 'get_direction'});
}

export function addDirect(item) {
  return axios.post(urltable.editInfo,
    {function: 'add',
      condition: 'direction',
      name: item.name,
      guide: item.guide});
}
export function editDirect(item) {
  return axios.post(urltable.editInfo,
    {function: 'edit',
      condition: 'direction',
      id: item.id,
      name: item.name,
      guide: item.guide});
}
export function deleteDirect(item) {
  return axios.post(urltable.deleteinfo,
    {function: 'delete_direction',
      id: item.id});
}
