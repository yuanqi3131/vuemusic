<template>
<div class="header">
  <div class="header-left" @click="handleClick">
    <img class="headerIcon" src="static/image/cm2_btm_icn_menu.png" />
  </div>
  <div class="header-middle">
    <img @click="clickIcon('myself')" class="headerIcon" src="static/image/cm2_btm_icn_music_prs.png" />
    <img @click="clickIcon('index')" class="headerIcon" src="static/image/cm2_btm_icn_discovery_prs.png"/>
    <img @click="clickIcon('play')" class="headerIcon" src="static/image/player.png"/>
  </div>
  <div class="header-right" @click="handleSearch">
    <img class="headerIcon" src="static/image/search.png" />
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showMenu: false,
      active: 'index'
    }
  },
  methods: {
    handleClick () { // 点击弹出侧边菜单栏
      this.$emit('showMenu', !this.showMenu)
    },
    handleSearch () { // 点击搜索
      this.$router.push('/search')
    },
    clickIcon (val) {
      this.$emit('changePage', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.header-middle>>>.mint-navbar
  background-color: $ThemeColor
.header
  background: $ThemeColor
  display: flex
  height: 4rem
  line-height: 5rem
  text-align: center
  position: fixed
  width: 100%
  z-index: 98
  overflow: hidden
  .header-left
    flex: 0.4
  .header-middle
    flex: 1.7
    word-spacing: 1.5rem
  .header-right
    flex: 0.4
  .headerIcon
   width: 1.8rem
</style>
