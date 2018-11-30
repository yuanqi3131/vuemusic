<template>
  <div class="items">
    <div class="item" v-for="(item, index) in videoList" :key="index">
      <div class="item-left">
        <img class="item-left-img" :src="item.coverUrl"/>
        <div class="item-left-playCount">
          <i class="iconfont" style="color: #fff">&#xe601;</i>
          <span>{{item.playTime}}</span>
        </div>
      </div>
      <div class="item-right">
        <div class="item-right-title">{{item.title}}</div>
        <div class="item-right-writer">by {{item.creator[0].userName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchVideo',
  data () {
    return {
      limit: 20,
      page: 0,
      type: 1014,
      videoList: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      const {limit, page, type} = this
      const keyword = JSON.parse(localStorage.getItem('keywords'))[0]
      const offset = page * limit
      const result = this.$store.dispatch('getSearchList', {keyword, limit, offset, type})
      const that = this
      result.then(val => {
        if (val.code === 200) {
          that.videoList = val.result.videos
        }
      })
    }
  },
  watch: {
    videoList () {
      let that = this
      this.$nextTick(() => {
        if (that.videoList[0].playTime !== undefined) {
          for (let i = 0; i < that.videoList.length; i++) {
            if (that.videoList[i].playTime > 99999) {
              that.videoList[i].playTime = parseInt(that.videoList[i].playTime / 10000) + '万'
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
@import '~styles/variable.styl'
.items
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  .item
    width: 100%
    height: 0
    padding-bottom: 5rem
    display: flex
    position: relative
    .item-left
      position: relative
      height: 5rem
      width: 35%
      .item-left-img
        width: 100%
        height: 90%
        positionAbsolute(.5rem,null,null,.5rem)
      .item-left-playCount
        positionAbsolute(.5rem,0,null,null)
        color: $White
        font-size: .7rem
    .item-right
      position: absolute
      left: 39%
      top: 1rem
      height: 4rem
      border-bottom: 1px solid rgba(0,0,0,.1)
      .item-right-title
        font-size: .8rem
        line-height: 1.3rem
      .item-right-writer
        font-size: .7rem
        margin-top: .5rem
        color: rgba(0,0,0,.5)
</style>
