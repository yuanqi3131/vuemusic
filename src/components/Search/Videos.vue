<template>
  <div class="items" ref="SearchVideo">
    <div>
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
      <div class="loading" v-show="showLoading">
        <mt-spinner type="fading-circle"></mt-spinner>
        正在加载中...
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {resSearchList} from '../../api'
export default {
  name: 'SearchVideo',
  data () {
    return {
      limit: 20,
      page: 1,
      type: 1014,
      videoList: [],
      showLoading: false
    }
  },
  mounted () {
    this.initData()
    this.handlerScroll()
  },
  methods: {
    initData () {
      const {limit, page, type} = this
      const keyword = JSON.parse(localStorage.getItem('keywords'))[0]
      const offset = (page - 1) * limit
      const result = this.$store.dispatch('getSearchList', {keyword, limit, offset, type})
      const that = this
      result.then(val => {
        if (val.code === 200) {
          that.videoList = val.result.videos
        }
      })
    },
    handlerScroll () {
      this.scroll = new BScroll(this.$refs.SearchVideo, {
        click: true,
        pullUpLoad: true
      })
      this.scroll.on('pullingUp', () => { // 绑定上拉事件
        const {limit, page} = this
        this.keyword = JSON.parse(localStorage.getItem('keywords'))[0]
        this.showLoading = true
        this.scroll.refresh()
        const offset = page * limit
        this.pullGetSong(this.keyword, this.limit, offset, this.type)
      })
    },
    async pullGetSong (keyword, limit, offset, type) { // 异步获取数据 分页
      try {
        const result = await resSearchList(keyword, limit, offset, type)
        if (result.code === 200) {
          this.showLoading = false
          this.page = this.page + 1
          this.videoList = this.videoList.concat(result.result.videos)
          this.scroll.finishPullUp()
          this.scroll.refresh()
        }
        this.scroll.refresh()
      } catch (e) {
      }
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
  positionAbsolute(5.5rem,0,0,0)
  overflow: hidden
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
.loading
    margin: 0 auto
    display: flex
    align-items: center
    justify-content: center
    font-size: .8rem
</style>
