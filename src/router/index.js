import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView'
import ProjectView from '../views/ProjectView'
import ProblemView from '../views/ProblemView'
import Login from '../views/Login'
import User from '../views/User'
import Zhuce from '../views/Zhuce'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/problem',
    name: 'problem',
    component: ProblemView
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      showNav:true

    }
  },
  {
    path:'/zhuce',
    name:"zhuce",
    component: Zhuce,
    meta:{
      showNav:true
    }

  }
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
