<template>
  <div class="menu">
    <mt-navbar v-model="navChoose" class="nav">
    <mt-tab-item id="songs"><span :class="navChoose==='songs'?navText:''">单曲</span></mt-tab-item>
    <mt-tab-item id="videos"><span :class="navChoose==='videos'?navText:''">视频</span></mt-tab-item>
    <mt-tab-item id="artists"><span :class="navChoose==='artists'?navText:''">歌手</span></mt-tab-item>
    <mt-tab-item id="albums"><span :class="navChoose==='albums'?navText:''">专辑</span></mt-tab-item>
    <mt-tab-item id="playlists"><span :class="navChoose==='playlists'?navText:''">歌单</span></mt-tab-item>
    <mt-tab-item id="djRadios"><span :class="navChoose==='djRadios'?navText:''">主播电台</span></mt-tab-item>
    <mt-tab-item id="userprofiles"><span :class="navChoose==='userprofiles'?navText:''">用户</span></mt-tab-item>
    </mt-navbar>
  </div>
</template>

<script>
export default {
  name: 'SearchNav',
  data () {
    return {
      navChoose: 'songs',
      navText: 'navText'
    }
  },
  watch: {
    navChoose () {
      this.$emit('navChoose', this.navChoose)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.menu>>>.mint-navbar
  background-color: $ThemeColor
  padding: 0
  overflow-x: auto
.mint-navbar>>>.mint-tab-item
  display: flex
  align-items: center
  justify-content: center
  color: rgba(255,255,255,.7)
  padding: 8px 0
.mint-navbar>>>.is-selected
  margin-bottom: 0
  border-bottom: 0
  color: $White
  font-size: .9rem
.mint-tab-item>>>.mint-tab-item-label
  font-size: .9rem
  width: 4rem
  display: inline-flex
  align-items: center
  justify-content: center
.navText
  border-bottom: 3px solid
  line-height: 1.4rem
  color: #fff
</style>
