<template>
  <div class="musicList" ref="musicList">
    <div>
      <div class="header" >
        <img class="header-img" :src="supermeMusic[0].coverImgUrl"/>
        <router-link to="/supermemusic">
          <div class="header-item">
          <div class="header-item-title">
            <i class="iconfont icon-jingpintuijian" style="font-size: 1.5rem"></i>
            <span>精品歌单</span>
            <i class="iconfont icon-qianjin1"></i>
          </div>
          <p class="header-item-content">{{supermeMusic[0].name}}</p>
          <span class="header-item-desc">{{supermeMusic[0].copywriter}}</span>
        </div>
        </router-link>
      </div>
      <MusicList ref="list"></MusicList>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import MusicList from './MusicList'
export default {
  name: 'MusicHeader',
  props: {
    supermeMusic: Array
  },
  updated () {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.musicList, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
.musicList
  position: absolute
  top: 3rem
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
.header
  display: flex
  background: radial-gradient(#fff -154%, #2d355c 100%)
  padding-bottom: 40%
  height: 0
  position: relative
.header-img
  width: 30%
  position: absolute
  top: 1rem
  left: 1rem
.header-item
   display: flex
   flex-direction: column
   margin-left: .5rem
   width: 100%
   position: absolute
   top: 20%
   left: 35%
  .header-item-title
    font-size: 1.2rem
    color: #fff
  .header-item-content
    font-size: .9rem
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    width: 65%
    color: #fff
    position: absolute
    top: 150%
  .header-item-desc
    font-size: .7rem
    color: #bababa
    position: absolute
    top: 250%
</style>
