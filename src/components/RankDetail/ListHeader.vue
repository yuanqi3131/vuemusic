<template>
  <div class="list" ref="list">
    <div>
      <div class="list-header">
        <div class="list-header-playCount">
          <i class="iconfont">&#xe601;</i>
          <span class="list-header-playCount-desc">{{listInfo.playCount}}</span>
        </div>
        <img class="list-header-img" :src="listInfo.coverImgUrl"/>
        <div class="list-header-info">
          <div class="list-header-title">{{listInfo.name}}</div>
          <div class="list-header-user">
            <img class="list-header-user-img" :src="listInfo.creator.avatarUrl"/>
            <div class="list-header-user-name">{{listInfo.creator.nickname}}</div>
            <i class="iconfont icon-qianjin1 list-header-user-icon"></i>
          </div>
        </div>
        <div class="list-header-icon">
          <div class="list-header-icon-item">
            <i class="iconfont icon-liuyan" style="font-size: 1.5rem"></i>
            <span>{{listInfo.commentCount}}</span>
          </div>
          <div class="list-header-icon-item">
            <i class="iconfont icon-fenxiang" style="font-size: 1.5rem"></i>
            <span>{{listInfo.shareCount}}</span>
          </div>
          <div class="list-header-icon-item">
            <i class="iconfont icon-xiazai" style="font-size: 1.5rem"></i>
            <span>下载</span>
          </div>
          <div class="list-header-icon-item">
            <i class="iconfont icon-duoxuan" style="font-size: 1.3rem"></i>
            <span>多选</span>
          </div>
        </div>
      </div>
      <ListContent :list="listInfo"></ListContent>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import ListContent from './ListContent'
export default {
  name: 'ListHeader',
  mounted () {
    this.$store.dispatch('getMusicListInfo', this.$route.params.id)
  },
  updated () {
    this.scroll = new BScroll(this.$refs.list)
  },
  computed: {
    ...mapState(['musicListInfo']),
    listInfo () {
      let that = this.musicListInfo
      if (that.playCount > 99999) {
        that.playCount = parseInt(that.playCount / 10000) + '万'
      }
      return that
    }
  },
  components: {
    ListContent
  }
}
</script>

<style lang="stylus" scoped>
.list
  overflow: hidden
  position: absolute
  top: 3rem
  right: 0
  bottom: 0
  left: 0
.list-header
  width: 100%
  height: 0
  padding-bottom: 60%
  position: relative
  display: flex
  background: #939f9f
  .list-header-playCount
    position: absolute
    top: 10%
    left: 25%
    font-size: .7rem
    color: #fff
    z-index: 2
  .list-header-img
    width: 35%
    position: absolute
    top: 10%
    left: 5%
  .list-header-info
    position: absolute
    top: 8%
    left: 45%
    display: flex
    flex-direction: column
    height: 60%
    .list-header-title
      color: #fff
      line-height: 1.5rem
      flex: 2
      display: flex
      align-items: center
    .list-header-user
      display: flex
      flex: 1
      .list-header-user-img
        width: 2rem
        height: 2rem
        border-radius: 1rem
      .list-header-user-name
        color: #c8cece
        font-size: .8rem
        margin-top: .6rem
        margin-left: .5rem
      .list-header-user-icon
        color: #c8cece
        font-size: .8rem
        margin-top: .6rem
     .list-header-icon
      position: absolute
  .list-header-icon
    position: absolute
    display: flex
    top: 76%
    width: 100%
    .list-header-icon-item
      display: flex
      flex-direction: column
      flex: 1
      align-items: center
      color: #fff
      font-size: .8rem
      line-height: 1.5rem
</style>
