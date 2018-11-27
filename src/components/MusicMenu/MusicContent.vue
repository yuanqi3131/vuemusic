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
    <router-link tag="div" :to="{name:'MusicMenuDetail', params: {id: item.id}}" class="musicList-item"
    v-for="(item, index) in musicList" :key="index"
    >
      <div class="musicList-item-playCount">
        <i class="iconfont" style="color: #fff">&#xe601;</i>
        <span>{{item.playCount}}</span>
      </div>
      <img class="musicList-item-img" :src="item.coverImgUrl"/>
      <span class="musicList-item-desc">{{item.name}}</span>
    </router-link>
    <div v-if="showLoading" class="musicList-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MusicContent',
  props: {
    showLoading: Boolean,
    musicList: Array
  },
  data () {
    return {
    }
  },
  watch: {
    musicList () {
      const that = this.musicList
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
  padding-bottom: 1rem
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
   padding-bottom: 2rem
   position: relative
   .musicList-loading
     padding-bottom: 2rem
     margin: 0 auto
     display: flex
     align-items: center
     font-size: .8rem
   .musicList-item
     width: 49%
     height: 0
     padding-bottom: 63%
     padding-left: 1%
     position: relative
    .musicList-item-playCount
      positionAbsolute(null,1rem,null,null)
      z-index: 2
      color: #fff
      font-size: .8rem
    .musicList-item-img
      width: 96%
      height: 75%
      position: absolute
      border-radius: .4rem
    .musicList-item-desc
      line-height: 1.2rem
      font-size: .8rem
      positionAbsolute(77%)
</style>
