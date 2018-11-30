<template>
  <div class="items" ref="SearchArtist">
    <div>
      <div class="item" v-for="item in artistList" :key="item.id" >
        <img class="item-left"  :src="item.img1v1Url"/>
        <div class="item-content">{{item.name}}</div>
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
  name: 'SearchArtist',
  data () {
    return {
      limit: 20,
      page: 1,
      type: 100,
      artistList: [],
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
          that.artistList = val.result.artists
        }
      })
    },
    handlerScroll () {
      this.scroll = new BScroll(this.$refs.SearchArtist, {
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
          this.artistList = this.artistList.concat(result.result.artists)
          this.scroll.finishPullUp()
          this.scroll.refresh()
        }
        this.scroll.refresh()
      } catch (e) {
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.items
  positionAbsolute(5.5rem,0,0,0)
  overflow: hidden
  .item
    position: relative
    width: 100%
    height: 4rem
    .item-left
      width:18%
      height: 90%
      positionAbsolute(.3rem, null ,null, .3rem)
      border-radius: .4rem
    .item-content
      positionAbsolute(null, null ,null, 22%)
      height: 4rem
      width: 100%
      border-bottom: 1px solid rgba(0,0,0,.1)
      display: flex
      align-items: center
.loading
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
  font-size: .8rem
</style>
