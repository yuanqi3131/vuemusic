import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Rank from '../pages/Rank'
import MusicMenu from '../pages/MusicMenu'
import SupermeMusic from '../pages/SupermeMusic'
import RecommendMusic from '../pages/RecommendMusic'
import SingersList from '../pages/SingersList'
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
    },
    {
      component: MusicMenu,
      name: 'MusicMenu',
      path: '/musicmenu'
    },
    {
      component: SupermeMusic,
      name: 'SupermeMusic',
      path: '/supermemusic'
    },
    {
      component: RecommendMusic,
      name: 'RecommendMusic',
      path: '/recommendmusic/:id'
    },
    {
      component: SingersList,
      name: 'SingersList',
      path: '/singerslist'
    }
  ]
})
