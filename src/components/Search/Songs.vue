<template>
  <div class="items" ref="SearchSong">
    <div>
    <div class="item" v-for="(item, index) in songList" :key="index">
      <div class="item-left">
        <div class="item-left-title">{{item.name}}</div>
        <div class="item-left-singer">{{item.artists[0].name}}-{{item.album.name}}</div>
      </div>
      <div class="item-right"></div>
    </div>
    <div class="loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      正在加载中...
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import {resSearchList} from '../../api'
export default {
  name: 'SearchSongs', // 搜索单曲组件
  data () {
    return {
      limit: 20, // 每页显示的条数
      page: 1, // 第几页
      type: 1,
      keyword: '',
      songList: [],
      showLoading: false
    }
  },
  mounted () {
    this.songList = this.$store.state.searchList.songs
    this.handlerScroll()
  },
  methods: {
    handlerScroll () {
      // this.scroll = new BScroll(this.$refs.SearchSong, {
      //   click: true,
      //   pullUpLoad: true
      // })
      // this.scroll.on('pullingUp', () => { // 绑定上拉事件
      //   const {limit, page} = this
      //   this.keyword = JSON.parse(localStorage.getItem('keywords'))[0]
      //   this.showLoading = true
      //   console.log(this.scroll)
      //   this.scroll.refresh()
      //   const offset = page * limit
      //  // this.pullGetSong(this.keyword, this.limit, offset, this.type)
      // })
    },
    async pullGetSong (keyword, limit, offset, type) { // 异步获取数据 分页
      try {
        const result = await resSearchList(keyword, limit, offset, type)
        if (result.code === 200) {
          this.showLoading = false
          this.page = this.page + 1
          this.songList = this.songList.concat(result.result.songs)
          this.scroll.finishPullUp()
          this.scroll.refresh()
        }
        this.scroll.refresh()
      } catch (e) {
      }
    }
  },
  computed: {
    ...mapState(['cleanSongList', 'searchList'])
  },
  watch: {
    cleanSongList (val) {
      if (val) {
        this.songList = []
        this.songList = this.searchList.songs // 监视state中的变化，如果重新搜索则为true，则清空记录
        this.$store.dispatch('getCleanSongs', false)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl"
.item
  width: 100%
  height: 0
  padding-bottom: 3.5rem
  border-bottom: 1px solid rgba(0,0,0,.1)
  line-height: 1.5rem
  padding-left: .5rem
  .item-left
    width: 80%
    .item-left-title
      padding-top: .5rem
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
    .item-left-singer
      font-size: .7rem
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
.loading
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
  font-size: .8rem
</style>
