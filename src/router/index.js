import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/profile/:userId',
    component: () => import('../views/Profile.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/parts/ProfileHome.vue')
      },
      {
        path: 'pic',
        component: () => import('../views/parts/ProfilePics.vue')
      },
      {
        path: 'portfolios',
        component: () => import('../views/parts/ProfilePortfolios.vue')
      },
      {
        path: 'skills',
        component: () => import('../views/parts/ProfileSkills.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
