<template>
  <div class="items" ref="SearchAlbum">
    <div>
      <div class="item" v-for="item in albumsList" :key="item.id">
        <img class="item-left" :src="item.picUrl"/>
        <div class="item-right">
          <div class="item-right-title">{{item.name}}</div>
          <div class="item-right-writer">{{item.artist.name}} {{item.publishTime}}</div>
          <div class="item-right-desc"></div>
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
  name: 'SearchAlbums',
  data () {
    return {
      limit: 20,
      page: 1,
      type: 10,
      albumsList: [],
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
          that.albumsList = val.result.albums
        }
      })
    },
    formatDate (time) { // 时间戳转换成时间
      const date = new Date(time)
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return year + '.' + month + '.' + day
    },
    handlerScroll () {
      this.scroll = new BScroll(this.$refs.SearchAlbum, {
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
          this.albumsList = this.albumsList.concat(result.result.albums)
          this.scroll.finishPullUp()
          this.scroll.refresh()
        }
        this.scroll.refresh()
      } catch (e) {
      }
    }
  },
  watch: {
    albumsList () {
      for (let i = 0; i < this.albumsList.length; i++) {
        this.albumsList[i].publishTime = this.formatDate(this.albumsList[i].publishTime)
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
    width: 100%
    height: 0
    padding-bottom: 15%
    position:relative
    .item-left
      width: 15%
      height: 90%
      positionAbsolute(.5rem,null,null,.5rem)
    .item-right
      positionAbsolute(.5rem,null,null,20%)
      width: 100%
      height: 100%
      border-bottom: 1px solid rgba(0,0,0,.1)
      display: flex
      flex-direction: column
      justify-content: center
      line-height: 1.4rem
      .item-right-writer
        font-size: .7rem
        color: rgba(0,0,0,.5)
.loading
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
  font-size: .8rem
</style>
