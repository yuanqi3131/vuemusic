<template>
  <div class="superList-items" ref="superList">
    <div>
      <div class="superList-item" v-for="(item, index) in supermeMusic" :key="item.id">
        <img class="superList-item-img" :src="item.coverImgUrl"/>
        <div class="superList-item-playCount">
          <i class="iconfont">&#xe601;</i>
          <span>{{item.playCount}}</span>
        </div>
        <div class="superList-item-text">
          <div class="superList-item-text-title">{{item.name}}</div>
          <div class="superList-item-text-writer">by {{item.creator.nickname}}</div>
          <div class="superList-item-text-desc">
            <span class="superList-item-text-desc-tag">{{item.tag}}</span>
            <span class="superList-item-text-desc-info">{{item.copywriter}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  name: 'SuperList',
  mounted () {
    this.$store.dispatch('getSupermeMusic')
  },
  updated () {
    this.scroll = new BScroll(this.$refs.superList)
  },
  computed: {
    ...mapState(['supermeMusic'])
  },
  watch: {
    supermeMusic () {
      const that = this.supermeMusic
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
.superList-items
  position: absolute
  top: 3rem
  bottom: 0
  left: 0
  right: 0
  overflow: hidden
.superList-item
  display: flex
  position: relative
  .superList-item-img
    width: 35%
    height: 19.1%
    margin-top: .3rem
    margin-left: .3rem
  .superList-item-playCount
    position: absolute
    left: 21%
    top: .5rem
    color: #fff
    font-size: .6rem
  .superList-item-text
    display: flex
    flex-direction: column
    margin-left: .5rem
    .superList-item-text-title
      flex: 2
      display: flex
      align-items: center
      font-size: .9rem
      line-height: 1.2rem
    .superList-item-text-writer
      flex: 1
      font-size: .7rem
      color: #b0aeae
    .superList-item-text-desc
      flex: 1
      font-size: .6rem
      .superList-item-text-desc-tag
        color: #ff5270
        display: inline-block
        font-size: .5rem
        padding: .1rem .1rem 0.1rem .1rem
        border: 1px solid #ff5270
        text-align: center
        margin-right: .1rem
      .superList-item-text-desc-info
        line-height: 1rem
</style>
