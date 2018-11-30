<template>
  <div class="detail" ref="SearchDetail">
    <mt-tab-container v-model="active" class="container">
        <mt-tab-container-item id="songs">
          <component :is="SongVue"></component>
        </mt-tab-container-item>
        <mt-tab-container-item id="videos">
          <component :is="VideoVue"></component>
        </mt-tab-container-item>
        <mt-tab-container-item id="artists">
          <component :is="ArtistVue"></component>
        </mt-tab-container-item>
        <mt-tab-container-item id="albums">
          <component :is="AlbumVue"></component>
        </mt-tab-container-item>
        <mt-tab-container-item id="playlists">
          <component :is="PlaylistVue"></component>
        </mt-tab-container-item>
        <mt-tab-container-item id="djRadios">
          <component :is="DjRadioVue"></component>
        </mt-tab-container-item>
        <mt-tab-container-item id="userprofiles">
          <component :is="UserprofileVue"></component>
        </mt-tab-container-item>
      </mt-tab-container>
  </div>
</template>

<script>
// 异步引入组件 组件懒加载
const songs = resolve => require(['./Songs'], resolve)
const videos = resolve => require(['./Videos'], resolve)
const artists = resolve => require(['./Artists'], resolve)
const albums = resolve => require(['./Albums'], resolve)
const playlists = resolve => require(['./Playlists'], resolve)
const djRadios = resolve => require(['./DjRadios'], resolve)
const userprofiles = resolve => require(['./Userprofiles'], resolve)

export default {
  name: 'SearchDetail',
  props: {
    active: String
  },
  data () {
    return {
      navText: 'navText', // 导航条的下划线样式 绑定class
      SongVue: null, // 以下为定义空组件，懒加载
      VideoVue: null,
      ArtistVue: null,
      AlbumVue: null,
      PlaylistVue: null,
      DjRadioVue: null,
      UserprofileVue: null
    }
  },
  mounted () {
    this.SongVue = songs
    // this.scroll = new BScroll(this.$refs.SearchDetail, {
    //   click: true,
    //   pullUpLoad: true
    // })
  },
  watch: {
    active () {
      if (this.active === 'videos') {
        this.VideoVue = videos
      }
      if (this.active === 'artists') {
        this.ArtistVue = artists
      }
      if (this.active === 'albums') {
        this.AlbumVue = albums
      }
      if (this.active === 'playlists') {
        this.PlaylistVue = playlists
      }
      if (this.active === 'djRadios') {
        this.DjRadioVue = djRadios
      }
      if (this.active === 'userprofiles') {
        this.UserprofileVue = userprofiles
      }
    }
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
  position: static
</style>
