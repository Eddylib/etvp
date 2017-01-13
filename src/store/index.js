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
    //
    listProject: [],
    listActivity: [],
    listScience: [],
    sumpage: [],
    // teachers: disp-pict-url,name,study-master
    listTeachers: [],
    // students: name,page-url,pict-url,study-master,in-school-date,after-graduate,[presentation],[aword],[paper]
    listStudents: [],
    listGraduates: [],
    currStudent: {baseInfo: {}, speeches: [], projects: [], prizes: [], thesises: []},
    currArticle: {},
    directionList: {},
    DUMP: {}
    //
  },

  actions: {
    FETCH_HOME_SLIDE_LIST: ({ commit, dispatch, state, getters }) => {
        return service.getHomeSlideList().then(response => {
          if(response.data.state === 1) {
            commit('SET_HOME_SLIDE', response.data.data);
          } else {
            alert("service error\n" + response.data.message);
          }
        })
    },
    ADD_HOME_SLIDE_LIST: ({ commit, dispatch, state, getters }, item) => {
      return service.addHomeSlideList(item).then(response => {
        if(response.data.state === 1) {
          alert("add home slide item ok!\n" + response.data.message);
        } else {
          alert("service error!\n" + response.data.message);
        }
      })
    },
    DEL_HOME_SLIDE_LIST: ({ commit, dispatch, state, getters }, item) => {
      return service.deleteHomeSlideList(item).then(response => {
        if(response.data.state === 1) {
          alert("delete home slide item ok!\n" + response.data.message);
        } else {
          alert("service error!\n" + response.data.message);
        }
      })
    },
    // EDIT_HOME_SLIDE_LIST: ({ commit, dispatch, state, getters }, item) => {
    //   return service.editHomeSlideList(item).then(response => {
    //     if(response.data.state === 1) {
    //       alert("edit home slide item ok!\n" + response.data.message);
    //     } else {
    //       alert("service error!\n" + response.data.message);
    //     }
    //   })
    // },
    FETCH_HOME_LIST: ({ commit, dispatch, state, getters }, type) => {
      return service.getHomeList(type).then(response => {
        if(response.data.state === 1) {
          commit('SET_HOME_LIST', {datacontent: response.data.data, datatype: type});
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_TEACHERS: ({ commit, dispatch, state, getters }) => {
      return service.getTeacherList().then(response => {
        if(response.data.state === 1) {
          commit('SET_LIST_TEACHERS', response.data.data);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    ADD_TEACHERS: ({ commit, dispatch, state, getters }, item) => {
      return service.addTeacher(item).then(response => {
        if(response.data.state === 1) {
          alert("add teacher ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_TEACHERS: ({ commit, dispatch, state, getters }, idin) => {
      return service.deleteTeacher(idin).then(response => {
        if(response.data.state === 1) {
          alert("delete teacher ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
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
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_STUDENTS: ({ commit, dispatch, state, getters }, idin) => {
      return service.delStudent(idin).then(response => {
        if(response.data.state === 1) {
          alert("delete student ok! \n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_STUDENT_DETAIL_BASE_INFO: ({ commit, dispatch, state, getters }, idin) => {
      return service.getStudintDetailBaseInfo(idin).then(response => {
        if(response.data.state === 1) {
            commit('SET_CURR_STUDENT_BASEINFO', response.data.data);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    MOD_STUDENT_SIMPLE: ({ commit, dispatch, state, getters }, item) => {
      return service.modStudentSimple(item).then(response => {
        if(response.data.state === 1) {
          alert("add student ok\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_STUDENT_DETAIL_SPEECHES: ({ commit, dispatch, state, getters }, idin) => {
      return service.getStudintDetilSpeech(idin).then(response => {
        if(response.data.state === 1) {
          commit('SET_CURR_STUDENT_SPEECH', response.data.data);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_STUDENT_DETAIL_SPEECH: ({ commit, dispatch, state, getters }, idin) => {
      return service.deleteStudintDetilSpeech(idin).then(response => {
        if(response.data.state === 1) {
          alert("delete student's speech ok! \n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    MOD_STUDENT_DETAIL_SPEECHES: ({ commit, dispatch, state, getters }, item) => {
      return service.modStudintDetilSpeech(item).then(response => {
        if(response.data.state === 1) {
          alert("mod student speech ok\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_STUDENT_DETAIL_PROJECTS: ({ commit, dispatch, state, getters }, idin) => {
      return service.getStudintDetilProject(idin).then(response => {
        if(response.data.state === 1) {
          commit('SET_CURR_STUDENT_PROJECTS', response.data.data);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    ADD_STUDENT_DETAIL_PROJECTS: ({ commit, dispatch, state, getters }, item) => {
      return service.addStudintDetilProject(item).then(response => {
        if(response.data.state === 1) {
          alert("add project ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_STUDENT_DETAIL_PROJECTS: ({ commit, dispatch, state, getters }, item) => {
      return service.delStudentDetailProject(item).then(response => {
        if(response.data.state === 1) {
          alert("delete project ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_STUDENT_DETAIL_PRIZES: ({ commit, dispatch, state, getters }, idin) => {
      return service.getStudintDetilPrize(idin).then(response => {
        if(response.data.state === 1) {
          commit('SET_CURR_STUDENT_PRIZES', response.data.data);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_STUDENT_DETAIL_PRIZE: ({ commit, dispatch, state, getters }, idin) => {
      return service.delStudintDetilPrize(idin).then(response => {
        if(response.data.state === 1) {
          alert("delete student's prize ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    MOD_STUDENT_DETAIL_PRIZES: ({ commit, dispatch, state, getters }, item) => {
      return service.modStudintDetilPrize(item).then(response => {
        if(response.data.state === 1) {
          alert("mod prize ok\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_STUDENT_DETAIL_THESISES: ({ commit, dispatch, state, getters }, idin) => {
      return service.getStudintDetilThesis(idin).then(response => {
        if(response.data.state === 1) {
          commit('SET_CURR_STUDENT_THESISES', response.data.data);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_STUDENT_DETAIL_THESIS: ({ commit, dispatch, state, getters }, idin) => {
      return service.delStudintDetilThesis(idin).then(response => {
        if(response.data.state === 1) {
          alert("delete student's thesis ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    MOD_STUDENT_DETAIL_THESISES: ({ commit, dispatch, state, getters }, item) => {
      return service.modStudintDetilThesis(item).then(response => {
        if(response.data.state === 1) {
          alert("mod thesis ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_LIST_PROJECT: ({ commit, dispatch, state, getters }, page) => {
      return service.getAllProjectList(page).then(response => {
        if(response.data.state === 1) {
          commit('SET_LIST_PROJECT', response.data.data);
          commit('SET_LIST_SUM_PAGE', response.data.sum_page);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_LIST_ACTIVITY: ({ commit, dispatch, state, getters }, page) => {
      return service.getAllActivityList(page).then(response => {
        if(response.data.state === 1) {
          commit('SET_LIST_ACTIVITY', response.data.data);
          commit('SET_LIST_SUM_PAGE', response.data.sum_page);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_LIST_SCIENCE: ({ commit, dispatch, state, getters }, page) => {
      return service.getAllScienceList(page).then(response => {
        if(response.data.state === 1) {
          commit('SET_LIST_SCIENCE', response.data.data);
          commit('SET_LIST_SUM_PAGE', response.data.sum_page);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    ADD_ASP: ({ commit, dispatch, state, getters }, item) => {
      return service.addASPD(item).then(response => {
        if(response.data.state === 1) {
          alert("add " + item.condition + " ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    EDIT_ASP: ({ commit, dispatch, state, getters }, item) => {
      return service.editASPD(item).then(response => {
        if(response.data.state === 1) {
          alert("edit" + item.condition + "  ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_ASP: ({ commit, dispatch, state, getters }, item) => {
      return service.deleteASPD(item).then(response => {
        if(response.data.state === 1) {
          alert("delete" + item.classify + "  ok!\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_ASP_DETAIL: ({ commit, dispatch, state, getters }, item) => {
      return service.getASPDDetail(item).then(response => {
        commit('SET_CURR_ARTICLE_INFO', response.data.data);
        if(response.data.state === 1) {
          commit('SET_CURR_ARTICLE_INFO', response.data.data);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    FETCH_DIRECTION_LIST: ({ commit, dispatch, state, getters }) => {
      return service.getDirect().then(response => {
        commit('SET_DIRECT_LIST', response.data.data);
        if(response.data.state === 1) {
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    ADD_DIRECTION: ({ commit, dispatch, state, getters }, item) => {
      return service.addDirect(item).then(response => {
        if(response.data.state === 1) {
          alert("add direction ok! \n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    EDIT_DIRECTION: ({ commit, dispatch, state, getters }, item) => {
      return service.editDirect(item).then(response => {
        if(response.data.state === 1) {
          alert("edit direction ok\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
        }
      })
    },
    DEL_DIRECTION: ({ commit, dispatch, state, getters }, idin) => {
      return service.deleteDirect(idin).then(response => {
        if(response.data.state === 1) {
          alert("delete direction ok\n" + response.data.message);
        } else {
          alert("service error\n" + response.data.message);
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
    },
    SET_LIST_PROJECT: (state, data) => {
        state.listProject = data;
    },
    SET_LIST_ACTIVITY: (state, data) => {
      state.listActivity = data;
    },
    SET_LIST_SCIENCE: (state, data) => {
      state.listScience = data;
    },
    SET_CURR_STUDENT_BASEINFO: (state, data) => {
      state.currStudent.baseInfo = data;
    },
    SET_CURR_STUDENT_SPEECH: (state, data) => {
      state.currStudent.speeches = data;
    },
    SET_CURR_STUDENT_PROJECTS: (state, data) => {
      state.currStudent.projects = data;
    },
    SET_CURR_STUDENT_PRIZES: (state, data) => {
      state.currStudent.prizes = data;
    },
    SET_CURR_STUDENT_THESISES: (state, data) => {
      state.currStudent.thesises = data;
    },
    SET_CURR_ARTICLE_INFO: (state, data) => {
      state.currArticle = data;
    },
    CLEAR_CURR_ARTICLE_INFO: (state) => {
      state.currArticle = {};
    },
    SET_LIST_SUM_PAGE: (state, data) => {
      state.sumpage = data;
    },
    SET_DIRECT_LIST: (state, data) => {
      state.directionList = data;
    }
  },

  getters: {
  }
});

export default store;
