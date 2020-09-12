import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/layout/home.vue'
import TradeHistory from '@/layout/TradeHistory';
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
