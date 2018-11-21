<template>
<div>
  <transition name="slide">
    <LeftMenu v-show="showLeftMenu"></LeftMenu>
  </transition>
  <transition name="background">
    <div v-show="showLeftMenu" class="background" @click="clickBackground"></div>
  </transition>
  <Header v-on:showMenu="showMenu"></Header>
  <Nav :class="showLeftMenu ? showMenuStatus : ''"></Nav>
</div>
</template>

<script>
import Header from '../components/Home/Header'
import Nav from '../components/Home/Nav'
import LeftMenu from '../components/Home/LeftMenu'
export default {
  data () {
    return {
      showLeftMenu: false,
      showMenuStatus: 'showMenuStatus'
    }
  },
  methods: {
    showMenu (data) {
      this.showLeftMenu = data
    },
    clickBackground () {
      this.showLeftMenu = false
    }
  },
  components: {
    Header,
    Nav,
    LeftMenu
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
