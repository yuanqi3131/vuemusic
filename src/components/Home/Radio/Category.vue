<template>
  <div class="category">
    <div class="hot">
      <div class="hot-title">热门分类</div>
      <div class="hot-items">
        <div class="hot-item" v-for="item in radioCategory.slice(0,6)" :key="item.id">
          <div class="hot-item-category">
            <img class="hot-item-category-img" :src="item.pic56x56Url"/>
            <div class="hot-img-category-name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      <div class="more-title">更多分类</div>
      <div class="more-items">
        <div class="more-item" v-for="item in radioCategory.slice(6)" :key="item.id">
          <div class="more-item-category">
            <img class="more-item-category-img" :src="item.pic56x56Url"/>
            <div class="more-img-category-name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'RadioCategory',
  computed: {
    ...mapState(['radioCategory'])
  }
}
</script>

<style lang="stylus" scoped>
.hot-title
  font-weight: bold
  margin: 2.5rem 0 1rem .5rem
.hot-items
  width: 100%
  height: 0
  padding-bottom: 50%
  .hot-item
    width: 50%
    height: 3rem
    display: inline-flex
    align-items: center
    border-top: 1px solid rgba(0,0,0,.1)
    &:nth-last-child(2)
     border-bottom: 1px solid rgba(0,0,0,.1)
    &:last-child
     border-bottom: 1px solid rgba(0,0,0,.1)
    .hot-item-category
      display: flex
      align-items: center
      height: 70%
      width: 100%
      border-right: 1px solid rgba(0,0,0,.1)
     .hot-item-category-img
      height: 2rem
      width: 2rem
      margin-left: 1rem
     .hot-img-category-name
      margin-left: .8rem
      font-size: .9rem
.more-title
  font-weight: bold
  margin: 0 0 1rem .5rem
.more-items
  width: 100%
  .more-item
    width: 50%
    height: 3rem
    display: inline-flex
    align-items: center
    border-top: 1px solid rgba(0,0,0,.1)
    border-left: 0
    border-right: 0
    &:nth-last-child(2)
      border-bottom: 1px solid rgba(0,0,0,.1)
    &:last-child
      border-bottom: 1px solid rgba(0,0,0,.1)
    .more-item-category
      display: flex
      align-items: center
      height: 70%
      width: 100%
      border-right: 1px solid rgba(0,0,0,.1)
    .more-item-category-img
      height: 2rem
      width: 2rem
      margin-left: 1rem
    .more-img-category-name
      margin-left: .8rem
      font-size: .9rem
</style>
