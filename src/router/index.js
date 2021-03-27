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
    component: () => import('../views/Dashboard.vue'),
    meta: {
      protected: true
    }
  },
  {
    path: '/profile/:userId',
    component: () => import('../views/Profile.vue'),
    meta: {
      protected: true
    },
    children: [
      {
        path: '',
        component: () => import('../views/parts/ProfileHome.vue'),
        meta: {
          protected: true
        },
      },
      {
        path: 'pic',
        component: () => import('../views/parts/ProfilePics.vue'),
        meta: {
          protected: true
        },
      },
      {
        path: 'portfolios',
        component: () => import('../views/parts/ProfilePortfolios.vue'),
        meta: {
          protected: true
        },
      },
      {
        path: 'skills',
        component: () => import('../views/parts/ProfileSkills.vue'),
        meta: {
          protected: true
        },
      },
    ]
  },
  {
    path: '/jobs/:id/show',
    name: 'jobsshow',
    component: () => import('../views/JobsView.vue'),
    meta: {
      protected: true
    },
  },
  {
    path: '/jobs/new',
    name: 'jobsnew',
    component: () => import('../views/JobsNew.vue'),
    meta: {
      protected: true
    },
  },
  { 
    path: '/jobs/:id/edit',
    name: 'jobsedit',
    component: () => import('../views/JobsEdit.vue'),
    meta: {
      protected: true
    },
  },
  {
    path: '/jobs/:id/application/new',
    name: 'applicationnew',
    component: () => import('../views/ApplicationNew.vue'),
    meta: {
      protected: true
    },
  },
  {
    path: '/jobs/:id/application/:applicationId/edit',
    name: 'applicationedit',
    component: () => import('../views/ApplicationEdit.vue'),
    meta: {
      protected: true
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
