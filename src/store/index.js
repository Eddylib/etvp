import Vue from 'vue';
import Vuex from 'vuex';
import * as service from '../service';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {

    // activities: titie,url,home-page-pict-url
    homeslide: [''],
    // activities: page-num,titie,description,url,disp-small-picturl,detail-url,is-in-homepage,home-page-pict-url
    homeActivities: [],
    // studys: page-num,titie,description,url,disp-small-picturl,detial-url
    homeStudys: [],
    // projects: page-num,titie,description,url,disp-small-picturl,detial-url,members
    homeProjects: [],
    // teachers: disp-pict-url,name,study-master
    teachers: [],
    // students: name,page-url,pict-url,study-master,in-school-date,after-graduate,[presentation],[aword],[paper]
    listStudents: [],
    listGraduates: [],
    DUMP: {}
    //
  },

  actions: {
    FETCH_HOME_SLIDE_LIST: ({ commit, dispatch, state, getters }) => {
        return service.getHomeSlideList().then(response => {
          if(response.data.state === 1) {
            commit('SET_HOME_SLIDE', response.data.data);
          } else {
            alert("network : error response on fetching home slide list data\n" + response.data);
          }
        })
    },
    FETCH_HOME_LIST: ({ commit, dispatch, state, getters }, type) => {
      return service.getHomeList(type).then(response => {
        if(response.data.state === 1) {
          commit('SET_HOME_LIST', response.data.data, type);
        } else {
          alert("network : error response on fetching home list data\n" + response.data);
        }
      })
    },
    FETCH_TEACHERS: ({ commit, dispatch, state, getters }) => {
      return service.getTeacherList().then(response => {
        if(response.data.state === 1) {
          commit('SET_LIST_TEACHERS', response.data.data);
        } else {
          alert("network : error response on fetching teachers data\n" + response.data);
        }
      })
    },
    FETCH_STUDENTS: ({ commit, dispatch, state, getters }, type) => {
      return service.getStudentsList(type).then(response => {
        if(response.data.state === 1) {
          commit('SET_LIST_STUDENTS', response.data.data, type);
        } else {
          alert("network : error response on fetching students data\n" + response.data);
        }
      })
    }
  },

  mutations: {
    SET_HOME_SLIDE: (state, data) => {
      state.homeslide = data.slice();
    },
    // home means items just shown in the home list -- 5 newest per type
    SET_HOME_LIST: (state, data, type) => {

      if(type === 'activity') {
        state.homeActivities = data.slice();
      }else if(type === 'science') {
        state.homeStudys = data.slice();
      }else if(type === 'project') {
        state.homeProjects = data.slice();
      }else {
        alert("error request type");
      }
    },
    SET_LIST_TEACHERS: (state, data) => {
      state.listTeachers = data.slice();
    },
    SET_LIST_STUDENTS: (state, data, type) => {
      if(type === 'inschool') {
        state.listStudents = data.slice();
      }else if(type === 'outschool') {
        state.listGraduates = data.slice();
      }
    }
  },

  getters: {
  }
});

export default store;
