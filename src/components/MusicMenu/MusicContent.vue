<template>
<div class="musicList">
  <div class="musicList-title">
    <span class="musicList-title-choose">全部歌单</span>
    <i class="iconfont icon-qianjin1"></i>
    <div class="musicList-little-title">
      <span class="musicList-little-title-desc">欧美</span>
      <span  class="musicList-little-title-desc">说唱</span>
      <span  class="musicList-little-title-desc">电子</span>
    </div>
  </div>
  <div class="musicList-items">
    <router-link tag="div" :to="{name:'MusicMenuDetail', params: {id: item.id}}" class="musicList-item" v-for="(item, index) in MusicList" :key="item.id">
      <div class="musicList-item-playCount">
        <i class="iconfont" style="color: #fff">&#xe601;</i>
        <span>{{item.playCount}}</span>
      </div>
      <img class="musicList-item-img" :src="item.coverImgUrl"/>
      <span class="musicList-item-desc">{{item.name}}</span>
    </router-link>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'MusicContent',
  mounted () {
    this.$store.dispatch('getMusicList')
  },
  computed: {
    ...mapState(['MusicList'])
  },
  watch: {
    MusicList () {
      const that = this.MusicList
      this.$nextTick(() => {
        for (let i = 0; i < that.length; i++) {
          if (that[i].playCount > 99999) {
            that[i].playCount = parseInt(that[i].playCount / 10000) + '万'
          }
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin"
.musicList
  positionRelative(1rem)
.musicList-title-choose
  font-weight: bold
  margin-left: .5rem
.musicList-little-title
  float: right
  display: flex
  font-size: .8rem
  color: #b0aeae
  & span:last-child
    border-right: 0
  .musicList-little-title-desc
    display: block
    width: 2.5rem
    border-right: 1px solid #bababa
    margin-right: .5rem
 .musicList-items
   display: flex
   flex-wrap: wrap
   margin-top: 1.5rem
   .musicList-item
     display: flex
     flex-direction: column
     width: 50%
     height: 0
     padding-bottom: 60%
     display: flex
     position: relative
    .musicList-item-playCount
      positionAbsolute(null,1rem,null,null)
      z-index: 2
      color: #fff
      font-size: .8rem
    .musicList-item-img
      width: 96%
      height: 80%
      position: absolute
    .musicList-item-desc
      line-height: 1.2rem
      font-size: .8rem
      positionAbsolute(81%)
</style>
