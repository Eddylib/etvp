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
  getdirect: 'list',
  editstudent: 'editstudent',
  direction: 'direction',
  editteacher: 'editteacher',
  deleteteacher: 'delete',
  deletedirect: 'delete',
  deleteASPD: 'delete',
  deletestudent: 'delete',
  deletestudentspeech: 'delete',
  deletestudentproject: 'delete',
  deletestudentprize: 'delete',
  deletestudentthesis: 'delete'
};
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
export function addTeacher(item) {
  return axios.post(urltable.editteacher,
    {function: 'add_teacher',
      condition: "simple",
      name: item.name,
      id: item.id,
      email: item.email,
      homepage: item.homepage,
      picture: item.picture,
      direction_id: item.direction_id});
}
export function deleteTeacher(idin) {
  return axios.post(urltable.deleteteacher,
    {function: 'delete_teacher',
      condition: "all",
      id: idin});
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
export function delStudent(idin) {
  return axios.post(urltable.deletestudent, {function: 'delete_student', condition: 'all', id: idin});
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
export function modStudentSimple(item) {
  return axios.post(urltable.editstudent,
    {function: item.function,
      condition: 'simple',
      name: item.name,
      id: item.id,
      email: item.email,
      time: item.time,
      work: item.work,
      picture: item.picture,
      direction_id: item.direction_id
    });
}

export function getStudintDetilSpeech(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'speech', id: idin});
}
export function deleteStudintDetilSpeech(idin) {
  return axios.post(urltable.deletestudentspeech, {function: 'delete_student_detail', condition: 'speech', id: idin});
}
export function modStudintDetilSpeech(item) {
  return axios.post(urltable.editstudent,
    {function: item.function,
      condition: 'speech',
      id: item.id,
      student_id: item.student_id,
      title: item.title,
      path: item.path});
}
export function getStudintDetilProject(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'project', id: idin});
}
export function addStudintDetilProject(item) {
  return axios.post(urltable.editstudent, {
    function: 'add_student',
    condition: 'project',
    id: item.id,
    project: item.project});
}
export function delStudentDetailProject(item) {
  return axios.post(urltable.deletestudentproject, {
    function: 'delete_student',
    condition: 'project',
    id: item.id});
}
export function getStudintDetilPrize(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'prize', id: idin});
}
export function modStudintDetilPrize(item) {
  return axios.post(urltable.editstudent,
    {function: item.function,
      condition: 'prize',
      id: item.id,
      student_id: item.student_id,
      title: item.title});
}
export function delStudintDetilPrize(idin) {
  return axios.post(urltable.deletestudentprize, {function: 'delete_student_detail', condition: 'prize', id: idin});
}
export function getStudintDetilThesis(idin) {
  return axios.post(urltable.studentdetail, {function: 'get_student_detail', condition: 'thesis', id: idin});
}
export function modStudintDetilThesis(item) {
  return axios.post(urltable.editstudent,
    {function: item.function,
      condition: 'thesis',
      id: item.id,
      student_id: item.student_id,
      title: item.title,
      path: item.path});
}
export function delStudintDetilThesis(idin) {
  return axios.post(urltable.deletestudentthesis, {function: 'delete_student_detail', condition: 'thesis', id: idin});
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
export function deleteASPD(item) {
  return axios.post(urltable.deleteASPD,
    {function: 'delete_list',
      classify: item.classify,
      id: item.id});
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
  return axios.post(urltable.itemlist,
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
export function deleteDirect(idin) {
  return axios.post(urltable.deletedirect,
    {function: 'delete_direction',
      id: idin});
}
