import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AppView',
    name: 'AppView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AppView" */ '../views/AppView.vue')
  },
  {
    path: '/Chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ChatView" */ '../views/chatView.vue')
  },
  {
    path: '/ThreeButton',
    name: 'ThreeButton',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ThreeButton" */ '../components/ThreeButton.vue')
  },

  {
    path: '/SixButton',
    name: 'SixButton',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SixButton" */ '../components/SixButton.vue')
  },
  {
    path: '/CommissionPanel',
    name: 'CommissionPanel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CommissionPanel" */ '../components/CommissionPanel.vue')
  },
  {
    path: '/GrabOrder',
    name: 'GrabOrder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "GrabOrderView" */ '../views/grabOrderView.vue')
  },
  {
    path: '/DepositView',
    name: 'DepositView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DepositView" */ '../views/depositView.vue')
  },
  {
    path: '/WithdrawView',
    name: 'WithdrawView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "WithdrawView" */ '../views/withdrawView.vue')
  },
  {
    path: '/IntroduceView',
    name: 'IntroduceView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "IntroduceView" */ '../views/introduceView.vue')
  },
    {
    path: '/ActionButton',
    name: 'ActionButton',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ActionButton" */ '../views/ActionButtonView.vue')
  },
  {
    path: '/IntroduceView',
    name: 'IntroduceView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "IntroduceView" */ '../views/introduceView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
