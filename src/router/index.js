import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/Home';
import LoginView from '../views/Login';
import RegisterView from '../views/Register';
import UserView from '../views/User';
import BorrowRecordsView from '../views/Borrows';
import BookManagementView from '../views/admin/BookManagement';
import BorrowManagementView from '../views/admin/BorrowManagement';
import UserManagementView from '../views/admin/UserManagement';
import AboutView from '../views/About.vue'
import TeamView from '../views/Team.vue'
import StudentView from '../views/Students.vue'
import AddArticleView from '../views/AddArticle.vue'
Vue.use(Router);

var router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/index', component: HomeView },
    { path: '/addarticle', component: AddArticleView },
    { path: '/student', component: StudentView },
    { path: '/user/login', component: LoginView },
    { path: '/user/register', component: RegisterView },
    { path: '/user', component: UserView },
    { path: '/team', component: TeamView },
    { path: '/about', component: AboutView },
    { path: '/user/borrows', component: BorrowRecordsView },
    { path: '/admin/books', component: BookManagementView },
    { path: '/admin/borrows', component: BorrowManagementView },
    { path: '/admin/users', component: UserManagementView },
    { path: '*', redirect: '/index' }
  ]
});

export default router;
