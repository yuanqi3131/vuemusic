<template>
  <div class="myself">
    <div class="myself-item">
      <i class="iconfont icon-yinyuered myself-item-icon"></i>
      <div class="myself-item-desc"><p>本地音乐</p></div>
    </div>
    <div class="myself-item">
      <i class="iconfont icon-bofang2 myself-item-icon"></i>
      <div class="myself-item-desc"><p>最近播放</p></div>
    </div>
    <div class="myself-item">
      <i class="iconfont icon-xiazai myself-item-icon"></i>
      <div class="myself-item-desc"><p>下载管理</p></div>
    </div>
    <div class="myself-item">
      <i class="iconfont icon-diantai1 myself-item-icon"></i>
      <div class="myself-item-desc"><p>我的电台</p></div>
    </div>
    <div class="myself-item">
      <i class="iconfont icon-wodeshoucang myself-item-icon"></i>
      <div class="myself-item-desc">
        <p>我的收藏</p>
        <span class="myself-item-desc-remake">(专辑/歌手/视频/专栏)</span>
      </div>
    </div>
    <div class="myself-item">
      <i class="iconfont icon-yueliang myself-item-icon"></i>
      <div class="myself-item-desc">
        <p>Sati空间</p>
        <span class="myself-item-desc-remake">(特别的聆听模式)</span>
      </div>
    </div>
    <div class="myself-list">
      <div class="myself-list-title" @click="showOrHidden">
        <i class="iconfont icon-icon" :class="rotate"></i>
        <p class="myself-list-title-desc">创建歌单</p>
        <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="myself-list-content" v-if="showSongList">
        <UserSongList></UserSongList>
      </div>
    </div>
  </div>
</template>

<script>
import UserSongList from './UserSongList'
export default {
  name: 'Myself',
  data () {
    return {
      showSongList: true,
      rotate: '' // 箭头旋转样式
    }
  },
  methods: {
    showOrHidden () {
      this.showSongList = !this.showSongList
      if (this.showSongList) {
        this.rotate = ''
      } else {
        this.rotate = 'arrow'
      }
    }
  },
  components: {
    UserSongList
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.myself
  margin-top: 4rem
  .myself-item
    display: flex
    height: 3rem
    .myself-item-icon
      font-size: 1.5rem
      color: $ThemeColor
      display: flex
      margin-left: 1rem
      align-items: center
      justify-content: center
    .myself-item-desc
      width: 100%
      display: flex
      align-items: center
      margin-left: .8rem
      border-bottom: 1px solid rgba(0,0,0,.1)
      .myself-item-desc-remake
        font-size: .7rem
        color: rgba(0,0,0,.4)
        margin-left: .2rem
  .myself-list-title
    display: flex
    align-items: center
    background-color: rgba(0,0,0,.1)
    position: relative
    height: 2rem
    color: rgba(0,0,0,.4)
    .myself-list-title-desc
      margin-left: .5rem
      font-size: .8rem
    .icon-shezhi
      position: absolute
      right: 0.5rem
      top: 50%
      transform: translateY(-50%)
    .icon-icon
      font-size: 1.2rem
      margin-left: .5rem
.arrow // 隐藏时旋转页面箭头
  transform: rotate(-90deg)
  transition: all .3s
</style>
