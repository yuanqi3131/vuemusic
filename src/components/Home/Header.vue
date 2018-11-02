<template>
<div class="header">
  <div class="header-left">
    <img class="headerIcon" src="static/image/cm2_btm_icn_menu.png" />
  </div>
  <div class="header-middle">
    <router-link to="/"><img class="headerIcon" src="static/image/cm2_btm_icn_music_prs.png" /></router-link>
    <router-link to="/"><img class="headerIcon" src="static/image/cm2_btm_icn_discovery_prs.png"/></router-link>
    <router-link to="/"><img class="headerIcon" src="static/image/player.png"/></router-link>
  </div>
  <div class="header-right">
    <img class="headerIcon" src="static/image/search.png" />
  </div>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.header
  background: $ThemeColor
  display: flex
  height: 4rem
  line-height: 5rem
  text-align: center
  position: fixed
  width: 100%
  z-index: 99
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
