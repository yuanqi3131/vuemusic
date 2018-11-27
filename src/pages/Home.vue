<template>
<div>
  <transition name="slide">
    <LeftMenu v-show="showLeftMenu"></LeftMenu>
  </transition>
  <transition name="background">
    <div v-show="showLeftMenu" class="background" @click="clickBackground"></div>
  </transition>
  <Header v-on:showMenu="showMenu" v-on:changePage="changePage"></Header>
  <mt-tab-container v-model="active">
    <mt-tab-container-item id="myself">
      <Myself></Myself>
    </mt-tab-container-item>
    <mt-tab-container-item id="index">
      <Nav :class="showLeftMenu ? showMenuStatus : ''"></Nav>
    </mt-tab-container-item>
    <mt-tab-container-item id="play">
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
import Header from '../components/Home/Header'
import Nav from '../components/Home/Nav'
import LeftMenu from '../components/Home/LeftMenu'
import Myself from '../components/Home/Myself/Myself'
import {resUserSongList} from '../api'
export default {
  name: 'Home', // 推荐首页
  data () {
    return {
      showLeftMenu: false,
      showMenuStatus: 'showMenuStatus',
      active: 'index', // 进入home页面默认菜单项
      userInfo: {} // 用户信息
    }
  },
  mounted () {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  },
  methods: {
    showMenu (data) {
      this.showLeftMenu = data
    },
    clickBackground () {
      this.showLeftMenu = false
    },
    changePage (val) {
      this.active = val
    },
    async getUserSongList () { // 异步获取用户歌单
      debugger
      const result = await resUserSongList(this.userInfo.profile.userId)
      if (result.code === 200) {
        this.$store.dispatch('getUserSongList', result.playlist)
      }
    }
  },
  watch: {
    userInfo (val) {
      if (val.code !== undefined && val.code === 200) {
        this.getUserSongList()
      }
    }
  },
  components: {
    Header,
    Nav,
    LeftMenu,
    Myself
  }
}
</script>

<style lang="stylus" scoped>
  @keyframes slide
    from
      transform: translateX(-100%)
    to
      transform: translateX(0)
  @keyframes background
    from
      background: transparent
    to
      background: rgba(0,0,0,.5)
.slide-enter-active
  animation: slide .4s linear
.slide-leave-active
  animation: slide .3s linear reverse
.background-enter-active
  animation: background .3s linear
.background-leave-active
  animation: background .3s linear reverse
.background
  position: fixed
  height: 100%
  width: 100%
  z-index: 99
  background: rgba(0,0,0,.5)
.showMenuStatus
  position: fixed
  right: 0
  left: 0
  overflow: hidden
</style>
