<template>
  <div>
    <div class="item" v-for="item in userSongList" :key="item.id">
      <img class="item-img" :src="item.coverImgUrl"/>
      <div class="item-img-desc">
        <div class="item-img-desc-info">
          <p class="item-img-desc-info-title">{{item.name}}</p>
          <span class="item-img-desc-info-amount">{{item.trackCount}}首</span>
        </div>
        <i class="iconfont icon-gengduo item-img-desc-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'UserSongList', // 用户歌单组件
  computed: {
    ...mapState(['userSongList'])
  }
}
</script>

<style lang="stylus" scoped>
.item
  display: flex
  margin-top: .4rem
  margin-left: .4rem
  height: 0
  padding-bottom: 15%
  position: relative
  .item-img
    position: absolute
    height: 100%
    width: 15%
    border-radius: .3rem
  .item-img-desc
    position: absolute
    left: 15%
    width: 85%
    height: 100%
    display: flex
    border-bottom: 1px solid rgba(0,0,0,.1)
    margin-left: .5rem
    .item-img-desc-info
      display: flex
      flex-direction: column
      justify-content: center
      line-height: 1.3rem
      width: 83%
      .item-img-desc-info-title
        font-size: 1rem
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
      .item-img-desc-info-amount
        font-size: .7rem
        color: rgba(0,0,0,.3)
    .item-img-desc-icon
      display: flex
      align-items: center
      justify-content: center
      width: 20%
      font-size: 1.5rem
      color: rgba(0,0,0,.3)
      margin-right: .5rem
</style>
