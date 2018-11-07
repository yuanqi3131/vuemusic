// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './assets/reset.css'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import './assets/styles/iconfont.css'
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
