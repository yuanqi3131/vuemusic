<template>
  <div class="items">
    <div class="items-title">
      <div class="items-left">今日优选</div>
      <div class="items-right"><i class="iconfont icon-weibiaoti547" style="font-size: .9rem;margin-right: .5rem"></i>换一换</div>
    </div>
    <div class="item" v-for="item in recommendDJ.slice(0,3)" :key="item.id">
      <img class="item-img" :src="item.picUrl"/>
      <div class="item-text">
        <div class="item-text-title">{{item.name}}</div>
        <div class="item-text-desc">{{item.rcmdtext}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'recommendDj',
  mounted () {
    this.$store.dispatch('getRecommendDj')
  },
  computed: {
    ...mapState(['recommendDJ'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl"
.items
  positionRelative(2rem)
  .items-title
    display: flex
    padding-bottom: .5rem
    .items-left
      font-weight: bold
      margin-left: .5rem
    .items-right
      color: rgba(0,0,0,.4)
      positionAbsolute(null,0.5rem,null,null)
      font-size: .8rem
  .item
    width: 100%
    height: 0
    padding-bottom: 35%
    position: relative
   .item-img
     positionAbsolute(.5rem,null,null,.5rem)
     height: 90%
     width: 35%
     border-radius: .4rem
  .item-text
    positionAbsolute(.5rem,null,null,40%)
    width: 100%
    height: 90%
    border-bottom: 1px solid rgba(0,0,0,0.1)
    display: flex
    flex-direction: column
    .item-text-title
      font-weight: bold
      display: flex
      flex: 1
      align-items: center
    .item-text-desc
      font-size: .7rem
      color: rgba(0,0,0,0.5)
      display: flex
      flex: 1
</style>
