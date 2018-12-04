<template>
  <div class="items">
    <div class="items-title">精品推荐</div>
    <div class="items-desc">你值得拥有的优质内容</div>
    <div class="items-content">
      <div class="item" v-for="item in payRadio.slice(0,3)" :key="item.id">
      <img class="item-img" :src="item.picUrl"/>
      <div class="item-tag">付费精品</div>
      <div class="item-theme">{{item.name}}</div>
      <div class="item-text">
        <div class="item-text-desc">{{item.rcmdText}}</div>
        <div class="item-text-price">￥{{item.originalPrice}}</div>
      </div>
    </div>
    </div>
    <div class="items-footer">全部精品电台</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'PayRadio',
  mounted () {
    this.$store.dispatch('getPayRadio')
  },
  computed: {
    ...mapState(['payRadio'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.items
  positionRelative(3rem)
  height: 0
  padding-bottom: 85%
  background: radial-gradient(#4e485e 0%,#9e9ca3 100%)
  .items-title
    positionAbsolute(1rem,null,null,50%)
    color: $White
    font-size: 1.2rem
    transform: translateX(-50%)
  .items-desc
    positionAbsolute(2.5rem,null,null,50%)
    transform: translateX(-50%)
    font-size: .8rem
    color: rgba(255,255,255,.5)
  .items-content
    positionAbsolute(4rem)
    width: 100%
    display: flex;
    flex-flow: nowrap
    padding-left: .2rem
    .item
      position: relative
      width: 33.3%
      height: 0
      padding-bottom: 55%
      .item-img
        width: 96%
      .item-tag
        positionAbsolute(0)
        background-color: $ThemeColor
        color: $White
        font-size: .7rem
      .item-theme
        positionAbsolute(50%,null,null,null)
        font-size: .7rem
        color: $White
      .item-text
        position: absolute
        top: 58%
        width: 96%
        height: 25%
        background-color: $White
        .item-text-desc
          font-size: .8rem
          line-height: 1.2rem
          margin-left: .3rem
        .item-text-price
          font-size: .7rem
          color: $ThemeColor
          margin-left: .3rem
  .items-footer
    positionAbsolute(null,null,2rem,50%)
    transform: translateX(-50%)
    border: 1px solid White
    border-radius: 1rem
    color: $White
    font-size: .8rem
    padding: .6rem 1rem
</style>
