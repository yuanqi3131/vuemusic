<template>
  <div class="musicList" ref="musicList">
    <div>
      <router-link to="/supermemusic" tag="div" class="header" >
        <img class="header-img" :src="supermeMusic[0].coverImgUrl"/>
        <div>
          <div class="header-item">
          <div class="header-item-title">
            <i class="iconfont icon-jingpintuijian" style="font-size: 1.5rem"></i>
            <span>精品歌单</span>
            <i class="iconfont icon-qianjin1"></i>
          </div>
          <p class="header-item-content">{{supermeMusic[0].name}}</p>
          <span class="header-item-desc">{{supermeMusic[0].copywriter}}</span>
        </div>
        </div>
      </router-link>
      <MusicContent :showLoading="showLoading" :musicList="musicList"></MusicContent>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import MusicContent from './MusicContent'
import {resMusicList} from '../../api'
import {mapState} from 'vuex'
export default {
  name: 'MusicList',
  data () {
    return {
      showLoading: false, // 展示正在加载的文字
      limit: 20, // 每页的数量
      page: 1, // 第几页
      musicList: [] // 歌单
    }
  },
  props: {
    supermeMusic: Array
  },
  mounted () {
    this.$store.dispatch('getMusicList', ({'limit': 20, 'offset': 0}))
    this.handlerScroll()
  },
  methods: {
    handlerScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.musicList, {
          click: true,
          pullUpLoad: true
        })
        this.scroll.on('pullingUp', () => { // 绑定上拉事件
          const {limit, page} = this
          this.showLoading = true
          const offset = page * limit
          this.pullGetMusic(limit, offset)
        })
      })
    },
    async pullGetMusic (limit, offset) { // 异步获取数据 分页
      try {
        const result = await resMusicList(limit, offset)
        if (result.code === 200) {
          this.showLoading = false
          this.page = this.page + 1
          this.musicList = this.musicList.concat(result.playlists)
          // this.$store.state.MusicList = this.$store.state.MusicList.concat(result.playlists)
          this.scroll.finishPullUp()
          this.scroll.refresh()
        }
        this.scroll.refresh()
      } catch (e) {
      }
    }
  },
  computed: {
    ...mapState(['MusicList'])
  },
  watch: {
    MusicList (val) {
      this.musicList = val
    }
  },
  components: {
    MusicContent
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin"
.musicList
  positionAbsolute(3rem,0,0,0)
  overflow: hidden
.header
  display: flex
  background: radial-gradient(#fff -154%, #2d355c 100%)
  padding-bottom: 40%
  height: 0
  position: relative
.header-img
  width: 30%
  positionAbsolute(1rem,0,0,1rem)
.header-item
   display: flex
   flex-direction: column
   margin-left: .5rem
   width: 100%
   position: absolute
   top: 20%
   left: 35%
  .header-item-title
    font-size: 1.2rem
    color: #fff
  .header-item-content
    font-size: .9rem
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    width: 65%
    color: #fff
    positionAbsolute(150%)
  .header-item-desc
    font-size: .7rem
    color: #bababa
    positionAbsolute(250%)
</style>
