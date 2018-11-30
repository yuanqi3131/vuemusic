<template>
  <div class="detail" ref="SearchDetail">
    <div>
      <mt-tab-container v-model="active" class="container">
        <mt-tab-container-item id="songs">
          <component :is="SongVue"></component>
          <!--<Songs></Songs>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="videos">
          <component :is="VideoVue"></component>
          <!--<Videos></Videos>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="artists">
          <component :is="ArtistVue"></component>
          <!--<Artists></Artists>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="albums">
          <component :is="AlbumVue"></component>
          <!--<Albums></Albums>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="playlists">
          <component :is="PlaylistVue"></component>
          <!--<Playlists></Playlists>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="djRadios">
          <component :is="DjRadioVue"></component>
          <!--<DjRadios></DjRadios>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="userprofiles">
          <component :is="UserprofileVue"></component>
          <!--<Userprofiles></Userprofiles>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// 异步引入组件
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
      navText: 'navText',
      SongVue: songs,
      VideoVue: null,
      ArtistVue: null,
      AlbumVue: null,
      PlaylistVue: null,
      DjRadioVue: null,
      UserprofileVue: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.SearchDetail, {
      click: true
    })
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
  },
  components: {
    // Songs: resolve => require(['./Songs'], resolve),
    // Videos: resolve => require(['./Videos'], resolve),
    // Artists: resolve => require(['./Artists'], resolve),
    // Albums: resolve => require(['./Albums'], resolve),
    // Playlists: resolve => require(['./Playlists'], resolve),
    // DjRadios: resolve => require(['./DjRadios'], resolve),
    // Userprofiles: resolve => require(['./Userprofiles'], resolve)
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
.detail
  positionAbsolute(5.5rem,0,0,0)
  overflow: hidden
.navText
  border-bottom: 3px solid
  line-height: 1.4rem
  color: #fff
</style>
