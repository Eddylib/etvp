import Vue from 'vue';
import Vuex from 'vuex';
import * as service from '../service';

Vue.use(Vuex);

let account;
try {
  account = JSON.parse(localStorage.getItem('account'));
} catch(e) {
  localStorage.setItem('account', null);
  account = null;
}

let methods = {

  getBook: (books, isbn) => {
    if (books instanceof Array) {
      for (let i in books) {
        let e = books[i];
        if (e && e.isbn === isbn) {
          return {
            index: i,
            value: e
          };
        }
      }
      return {
        index: -1,
        value: undefined
      };
    } else {
      return undefined;
    }
  },

  getBookTrace: (traces, id) => {
    if (traces instanceof Array) {
      for (let i in traces) {
        let e = traces[i];
        if (e && e.id === id) {
          return {
            index: i,
            value: e
          };
        }
      }
      return {
        index: null,
        value: undefined
      };
    } else {
      return undefined;
    }
  },

  getBorrow: (borrows, id) => {
    if (borrows instanceof Array) {
      for (let i in borrows) {
        let e = borrows[i];
        if (e && e.id === id) {
          return {
            index: i,
            value: e
          };
        }
      }
      return {
        index: null,
        value: undefined
      };
    } else {
      return undefined;
    }
  },

  DUMP: () => {}

};

const store = new Vuex.Store({
  state: {

    account: account,

    books: [],
    borrows: [],

    admin_users: [],
    admin_books: [],
    admin_bookTraces: [],
    admin_borrows: [],
    // news: titie,url,home-page-pict-url
    homeslide: [''],
    // news: page-num,titie,description,url,disp-small-picturl,detail-url,is-in-homepage,home-page-pict-url
    news: [],
    // studys: page-num,titie,description,url,disp-small-picturl,detial-url
    studys: [],
    // projects: page-num,titie,description,url,disp-small-picturl,detial-url,members
    projects: [],
    // teachers: disp-pict-url,name,study-master
    teachers: [],
    // students: name,page-url,pict-url,study-master,in-school-date,after-graduate,[presentation],[aword],[paper]
    students: [],
    DUMP: {}

    //
  },

  actions: {
    FETCH_HOME_SLIDE_LIST: ({ commit, dispatch, state, getters }) => {

        console.log("fetch method: need fetch");
        return service.getHomeSlideList().then(response => {
          if(response.data.state === 1) {
            commit('SET_HOME_SLIDE', response.data.data);
          } else {
            alert("error response \n" + response.data);
          }
        })
    },

    ADMIN_FETCH_BOOK_TRACES: ({ commit, dispatch, state, getters }, book) => {
      if (!getters.isAdmin) return false;
      return service.getBookTracesByAdmin(book).then(response => {
        if (response.data.success) {
          commit('ADMIN_SET_BOOK_TRACES', {
            isbn: book.isbn,
            traces: response.data.entities
          });
        } else {
          console.log(response.data.error);
          alert(response.data.error);
        }
      }).catch(e => {
        alert(e);
      });
    }
  },

  mutations: {
    SET_HOME_SLIDE: (state, data) => {
    state.homeslide = data.slice();
  },
    DEL_ACCOUNT: (state) => {
      state.account = null;
      localStorage.setItem('account', null);
    }
  },

  getters: {
    isLogin: state => {
      return !!state.account;
    }
  }
});

export default store;
