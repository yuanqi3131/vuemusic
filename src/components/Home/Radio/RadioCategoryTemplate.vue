<template>
  <div>
    <div class="items"  v-for="(items, index) in radioCategoryDetail" :key="index">
      <div class="title">{{items[0].category}}<i class="iconfont icon-qianjin1" style="color: rgba(0,0,0,.3)"></i></div>
      <div class="content">
        <div class="item" v-for="item in items.slice(0,3)" :key="item.id">
          <div class="item-header">
            <img class="item-header-img" :src="item.picUrl"/>
            <div class="item-header-name">{{item.name}}</div>
          </div>
          <div class="item-desc">{{item.rcmdtext}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'RadioCategoryTemplate',
  computed: {
    ...mapState(['radioCategoryDetail'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl"
@import "~styles/variable.styl"
.title
  font-weight: bold
  margin: 2rem 0 1rem .5rem
.content
  display: flex
  flex-direction: row
  margin-left: .3rem
  .item
    width: 33.3%
    height: 0;
    padding-bottom: 43%;
    position: relative
    .item-header
      position: relative
      height: 0
      padding-bottom: 100%
      .item-header-img
        position: absolute
        width: 98%
        border-radius: .4rem
      .item-header-name
        positionAbsolute(null,null,.5rem,.5rem)
        font-size: .7rem
        color: $White
    .item-desc
      position: absolute
      bottom: 0
      font-size: .8rem
      line-height: 1.2rem
</style>
