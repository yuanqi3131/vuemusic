<template>
  <div>
    <mt-navbar class="nav" v-model="navChoose">
      <mt-tab-item id="music"><span class="nav-desc" :class="navChoose==='music' ? navText  : ''">音乐</span></mt-tab-item>
      <mt-tab-item id="trend"><span class="nav-desc" :class="navChoose==='trend' ? navText : ''">动态</span></mt-tab-item>
      <mt-tab-item id="aboutme"><span class="nav-desc" :class="navChoose==='aboutme' ? navText : ''">关于我</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="navChoose">
      <mt-tab-container-item id="music">
        <PersonMusic></PersonMusic>
      </mt-tab-container-item>
      <mt-tab-container-item id="trend">
      </mt-tab-container-item>
      <mt-tab-container-item id="aboutme">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import UserSongList from '../Home/Myself/UserSongList'
import PersonMusic from './Music'
export default {
  name: 'PersonContent',
  data () {
    return {
      navChoose: 'music',
      navText: 'navText'
    }
  },
  components: {
    UserSongList,
    PersonMusic
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.mint-navbar>>>.is-selected
  color: $ThemeColor
  border-bottom: none
  margin-top: -2px
.mint-navbar>>>.mint-tab-item
  padding: 10px 0
.mint-tab-container
  top: -1rem
.nav
  position: relative
  top: -1.1rem
  border: 1px solid $White
  border-radius: .4rem
.nav-desc
  font-size: 1rem
.navText
  border-bottom: 2px solid
  margin: 0 auto
  padding-bottom: .3rem
  line-height: 1.3rem
</style>
