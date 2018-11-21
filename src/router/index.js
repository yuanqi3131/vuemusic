import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Rank from '../pages/Rank'
import MusicMenu from '../pages/MusicMenu'
import SupermeMusic from '../pages/SupermeMusic'
import MusicMenuDetail from '../pages/MusicMenuDetail'
import SingersList from '../pages/SingersList'
import AnchorRadio from '../pages/AnchorRadio'
import LoginIndex from '../pages/LoginIndex'
import MobileLogin from '../pages/MobileLogin'
import Search from '../pages/Search'
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
      component: MusicMenuDetail,
      name: 'MusicMenuDetail',
      path: '/MusicMenuDetail/:id'
    },
    {
      component: SingersList,
      name: 'SingersList',
      path: '/singerslist'
    },
    {
      component: AnchorRadio,
      name: 'AnchorRadio',
      path: '/anchorradio'
    },
    {
      component: LoginIndex, // 登录页面
      name: 'LoginIndex',
      path: '/loginindex'
    },
    {
      component: MobileLogin, // 手机登录页面
      name: 'MobileLogin',
      path: '/MobileLogin'
    },
    {
      component: Search, // 搜素页面
      name: 'Search',
      path: '/search'
    }
  ]
})
