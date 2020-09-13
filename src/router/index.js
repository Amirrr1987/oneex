import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/home.vue'
import TradeHistory from '@/layout/TradeHistory'
import Deposit from '@/layout/Deposit'
import Withdraw from '@/layout/Withdraw.vue'
import WithdrawHistory from '@/layout/WithdrawHistory.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tradeHistory',
    name: 'TradeHistory',
    component: TradeHistory
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/withdrawHistory',
    name: 'WithdrawHistory',
    component: WithdrawHistory
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
