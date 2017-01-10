import Vue from 'vue';
import Router from 'vue-router';

import HomeView from '../views/Home';
import AboutView from '../views/About.vue'
import TeamView from '../views/Team.vue'
import StudentView from '../views/Students.vue'
import AddArticleView from '../views/AddArticle.vue'
import Activity from '../views/Acitvity.vue'
import ControlMainView from '../views/admin/ControlMain.vue'
import ControlDirectListView from '../views/admin/ControlDirectList.vue'
import ControlASPListView from '../views/admin/ControlASPList.vue'
import ControlASPDetailView from '../views/admin/ControlASPDetail.vue'
import ProjectMemberView from '../views/admin/ProjectMember.vue';
import ASPListView from '../views/ASPList.vue'
import ASPDetailView from '../views/ASPDetail.vue'
import ControlStudentList from '../views/admin/ControlStudentList.vue'
import ControlStudentDetail from '../views/admin/ControlStudentDetail.vue'
//
import LoginView from '../views/Login';
import RegisterView from '../views/Register';
import UserView from '../views/User';
import BorrowRecordsView from '../views/Borrows';
import BookManagementView from '../views/admin/BookManagement';
import BorrowManagementView from '../views/admin/BorrowManagement';
import UserManagementView from '../views/admin/UserManagement';
Vue.use(Router);

var router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    { path: '/index', component: HomeView },
    { path: '/activity', component: Activity },
    { path: '/addarticle', component: AddArticleView },
    { path: '/student', component: StudentView },
    { path: '/user', component: UserView },
    { path: '/team', component: TeamView },
    { path: '/about', component: AboutView },
    { path: '/adminmain', component: ControlMainView },
    { path: '/adminmasterlist', component: ControlDirectListView },
    { path: '/adminasplist', component: ControlASPListView },
    { path: '/adminaspdetail', component: ControlASPDetailView },
    { path: '/projectmember', component: ProjectMemberView },
    { path: '/asplist', component: ASPListView },
    { path: '/aspdetail', component: ASPDetailView },
    { path: '/adminstudentlist', component: ControlStudentList },
    { path: '/adminstudentdetail', component: ControlStudentDetail },
    //
    { path: '/user/borrows', component: BorrowRecordsView },
    { path: '/admin/books', component: BookManagementView },
    { path: '/admin/borrows', component: BorrowManagementView },
    { path: '/admin/users', component: UserManagementView },
    { path: '/user/login', component: LoginView },
    { path: '/user/register', component: RegisterView },
    { path: '*', redirect: '/index' }
  ]
});
export default router;
