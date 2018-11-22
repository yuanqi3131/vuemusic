import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../pages/Home'], resolve)
    },
    {
      path: '/shop',
      name: 'Shop',
      component: resolve => require(['../pages/Shop'], resolve)
    },
    {
      name: 'Rank',
      path: '/rank',
      component: resolve => require(['../pages/Rank'], resolve)
    },
    {
      name: 'MusicMenu',
      path: '/musicmenu',
      component: resolve => require(['../pages/MusicMenu'], resolve)
    },
    {
      name: 'SupermeMusic',
      path: '/supermemusic',
      component: resolve => require(['../pages/SupermeMusic'], resolve)
    },
    {
      name: 'MusicMenuDetail',
      path: '/MusicMenuDetail/:id',
      component: resolve => require(['../pages/MusicMenuDetail'], resolve)
    },
    {
      name: 'SingersList',
      path: '/singerslist',
      component: resolve => require(['../pages/SingersList'], resolve)
    },
    {
      name: 'AnchorRadio',
      path: '/anchorradio',
      component: resolve => require(['../pages/AnchorRadio'], resolve)
    },
    {
      name: 'LoginIndex',
      path: '/loginindex',
      component: resolve => require(['../pages/LoginIndex'], resolve)
    },
    {
      name: 'MobileLogin',
      path: '/MobileLogin',
      component: resolve => require(['../pages/MobileLogin'], resolve)
    },
    {
      name: 'Search',
      path: '/search',
      component: resolve => require(['../pages/Search'], resolve)
    },
    {
      name: 'SingerCategory',
      path: '/singercategory',
      component: resolve => require(['../pages/SingerCategory'], resolve)
    }
  ]
})
