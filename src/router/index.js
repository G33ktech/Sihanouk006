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
    component: () => import(/* webpackChunkName: "AppView" */ '../views/AppView.vue')
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "ChatView" */ '../views/chatView.vue')
  },
  {
    path: '/ThreeButton',
    name: 'ThreeButton',
    component: () => import(/* webpackChunkName: "ThreeButton" */ '../components/ThreeButton.vue')
  },

  {
    path: '/SixButton',
    name: 'SixButton',
    component: () => import(/* webpackChunkName: "SixButton" */ '../components/SixButton.vue')
  },
  {
    path: '/CommissionPanel',
    name: 'CommissionPanel',
    component: () => import(/* webpackChunkName: "CommissionPanel" */ '../components/CommissionPanel.vue')
  },
  {
    path: '/GrabOrder',
    name: 'GrabOrder',
    component: () => import(/* webpackChunkName: "GrabOrderView" */ '../views/grabOrderView.vue')
  },
  {
    path: '/OrderView',
    name: 'OrderView',
    component: () => import(/* webpackChunkName: "OrderView" */ '../views/orderView.vue')
  },
  {
    path: '/MyAccountView',
    name: 'MyAccountView',
    component: () => import(/* webpackChunkName: "MyAccountView" */ '../views/myAccountView.vue')
  },
  {
    path: '/MainGrabView',
    name: 'MainGrabView',
    component: () => import(/* webpackChunkName: "MainGrabView" */ '../views/mainGrabView.vue')
  },
  {
    path: '/ServiceView',
    name: 'ServiceView',
    component: () => import(/* webpackChunkName: "ServiceView" */ '../views/serviceView.vue')
  },
  {
    path: '/DepositView',
    name: 'DepositView',
    component: () => import(/* webpackChunkName: "DepositView" */ '../views/depositView.vue')
  },
  {
    path: '/WithdrawView',
    name: 'WithdrawView',
    component: () => import(/* webpackChunkName: "WithdrawView" */ '../views/withdrawView.vue')
  },
  {
    path: '/IntroduceView',
    name: 'IntroduceView',
    component: () => import(/* webpackChunkName: "IntroduceView" */ '../views/introduceView.vue')
  },
    {
    path: '/ActionButton',
    name: 'ActionButton',
    component: () => import(/* webpackChunkName: "ActionButton" */ '../views/ActionButtonView.vue')
  },
  {
    path: '/AccountDetails',
    name: 'AccountDetails',
    component: () => import(/* webpackChunkName: "AccountDetails" */ '../account/AccountDetails.vue')
  },
  {
    path: '/BindBankCard',
    name: 'BindBankCard',
    component: () => import(/* webpackChunkName: "BindBankCard" */ '../account/BindBankCard.vue')
  },
  {
    path: '/ChangePassword',
    name: 'ChangePassword',
    component: () => import(/* webpackChunkName: "IntroduceView" */ '../account/ChangePassword.vue')
  },
  {
    path: '/Language',
    name: 'Language',
    component: () => import(/* webpackChunkName: "Language" */ '../account/Language.vue')
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "Logout" */ '../account/Logout.vue')
  },
  {
    path: '/notification',
    name: 'notification',
    component: () => import(/* webpackChunkName: "notification" */ '../account/notification.vue')
  },
  {
    path: '/RechargeRecord',
    name: 'RechargeRecord',
    component: () => import(/* webpackChunkName: "RechargeRecord" */ '../account/RechargeRecord.vue')
  },
  {
    path: '/ShippingAddress',
    name: 'ShippingAddress',
    component: () => import(/* webpackChunkName: "ShippingAddress" */ '../account/ShippingAddress.vue')
  },
  {
    path: '/TeamReports',
    name: 'TeamReports',
    component: () => import(/* webpackChunkName: "TeamReports" */ '../account/TeamReports.vue')
  },
  {
    path: '/WithdrawAction',
    name: 'WithdrawAction',
    component: () => import(/* webpackChunkName: "WithdrawAction" */ '../account/WithdrawAction.vue')
  },
  {
    path: '/WithdrawRecord',
    name: 'WithdrawRecord',
    component: () => import(/* webpackChunkName: "WithdrawRecord" */ '../account/WithdrawRecord.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
