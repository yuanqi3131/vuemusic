<template>
  <div class="detail">
      <mt-navbar v-model="navChoose" class="nav">
        <mt-tab-item id="songs"><span :class="navChoose==='songs'?navText:''">单曲</span></mt-tab-item>
        <mt-tab-item id="videos"><span :class="navChoose==='videos'?navText:''">视频</span></mt-tab-item>
        <mt-tab-item id="artists"><span :class="navChoose==='artists'?navText:''">歌手</span></mt-tab-item>
        <mt-tab-item id="albums"><span :class="navChoose==='albums'?navText:''">专辑</span></mt-tab-item>
        <mt-tab-item id="playlists"><span :class="navChoose==='playlists'?navText:''">歌单</span></mt-tab-item>
        <mt-tab-item id="djRadios"><span :class="navChoose==='djRadios'?navText:''">主播电台</span></mt-tab-item>
        <mt-tab-item id="userprofiles"><span :class="navChoose==='userprofiles'?navText:''">用户</span></mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="navChoose" class="container">
        <mt-tab-container-item id="songs">
          <Songs></Songs>
        </mt-tab-container-item>
        <mt-tab-container-item id="videos">
          <Videos></Videos>
        </mt-tab-container-item>
        <mt-tab-container-item id="artists">
          <Artists></Artists>
        </mt-tab-container-item>
        <mt-tab-container-item id="albums">
          <Albums></Albums>
        </mt-tab-container-item>
        <mt-tab-container-item id="playlists">
          <Playlists></Playlists>
        </mt-tab-container-item>
        <mt-tab-container-item id="djRadios">
          <DjRadios></DjRadios>
        </mt-tab-container-item>
        <mt-tab-container-item id="userprofiles">
          <Userprofiles></Userprofiles>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script>
export default {
  name: 'SearchDetail',
  data () {
    return {
      navChoose: 'songs',
      navText: 'navText'
    }
  },
  components: {
    Songs: resolve => { require(['./Songs'], resolve) },
    Videos: resolve => { require(['./Videos'], resolve) },
    Artists: resolve => { require(['./Artists'], resolve) },
    Albums: resolve => { require(['./Albums'], resolve) },
    Playlists: resolve => { require(['./Playlists'], resolve) },
    DjRadios: resolve => { require(['./DjRadios'], resolve) },
    Userprofiles: resolve => { require(['./Userprofiles'], resolve) }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.detail>>>.mint-navbar
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
.container
 height: 84vh
</style>
