import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Rank from '../pages/Rank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      component: Rank,
      name: 'Rank',
      path: '/rank'
    }
  ]
})
