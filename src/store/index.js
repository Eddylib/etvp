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
    listTeachers: [],
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
            alert("network : error response on fetching home slide list data\n" + response.data.message);
          }
        })
    },
    FETCH_HOME_LIST: ({ commit, dispatch, state, getters }, type) => {
      return service.getHomeList(type).then(response => {
        if(response.data.state === 1) {
          commit('SET_HOME_LIST', {datacontent: response.data.data, datatype: type});
        } else {
          alert("network : error response on fetching home list data\n" + response.data.message);
        }
      })
    },
    FETCH_TEACHERS: ({ commit, dispatch, state, getters }) => {
      return service.getTeacherList().then(response => {
        if(response.data.state === 1) {
          commit('SET_LIST_TEACHERS', response.data.data);
        } else {
          alert("network : error response on fetching teachers data\n" + response.data.message);
        }
      })
    },
    FETCH_STUDENTS: ({ commit, dispatch, state, getters }, type) => {
      return service.getStudentsList(type).then(response => {
        if(response.data.state === 1) {
          if(type === 'inschool') {
            commit('SET_LIST_STUDENTS_INSCHOOL', response.data.data);
          } else if(type === 'outschool') {
            commit('SET_LIST_STUDENTS_OUTSCHOOL', response.data.data);
          }
        } else {
          alert("network : error response on fetching students data\n" + response.data.message);
        }
      })
    }
  },

  mutations: {
    SET_HOME_SLIDE: (state, data) => {
      state.homeslide = data.slice();
    },
    // home means items just shown in the home list -- 5 newest per type
    SET_HOME_LIST: (state, data) => {
      if(data.datatype === 'activity') {
        state.homeActivities = data.datacontent;
      }else if(data.datatype === 'science') {
        state.homeStudys = data.datacontent;
      }else if(data.datatype === 'project') {
        state.homeProjects = data.datacontent;
      }else {
        alert("error request type  --store /set home list " + data.datatype);
      }
    },
    SET_LIST_TEACHERS: (state, data) => {
      state.listTeachers = data;
    },
    SET_LIST_STUDENTS_INSCHOOL: (state, data) => {
        state.listStudents = data;
    },
    SET_LIST_STUDENTS_OUTSCHOOL: (state, data) => {
        state.listGraduates = data;
    }
  },

  getters: {
  }
});

export default store;
