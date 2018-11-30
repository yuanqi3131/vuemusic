<template>
  <div class="items" ref="SearchPlaylist">
    <div>
      <div class="item" v-for="item in playlist" :key="item.id">
        <img class="item-left" :src="item.coverImgUrl"/>
        <div class="item-content">
          <div class="item-content-title">{{item.name}}</div>
          <div class="item-content-desc">{{item.trackCount}}首 by {{item.creator.nickname}},播放{{item.playCount}}次</div>
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
  name: 'SearchPlaylists',
  data () {
    return {
      limit: 20,
      page: 1,
      type: 1000,
      playlist: [],
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
          that.playlist = val.result.playlists
        }
      })
    },
    handlerScroll () {
      this.scroll = new BScroll(this.$refs.SearchPlaylist, {
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
          this.playlist = this.playlist.concat(result.result.playlists)
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
    height: 0
    width: 100%
    padding-bottom: 18%
    position: relative
    .item-left
      height: 90%
      width: 20%
      border-radius: .4rem
      positionAbsolute(.5rem,null,null,.5rem)
    .item-content
      positionAbsolute(.5rem,null,null,25%)
      width: 100%
      height: 90%
      border-bottom: 1px solid rgba(0,0,0,.1)
      display: flex
      flex-direction: column
      justify-content: center
      line-height: 1.5rem
      .item-content-title
        font-size: .9rem
        width: 70%
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
      .item-content-desc
        font-size: .7rem
        color: rgba(0,0,0,.5)
.loading
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
  font-size: .8rem
</style>
