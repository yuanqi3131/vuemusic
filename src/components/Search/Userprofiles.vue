<template>
  <div class="items" ref="SearchUserprofile">
    <div>
      <div class="item" v-for="(item, index) in userprofileList" :key="index">
        <img class="item-left" :src="item.avatarUrl"/>
        <div class="item-content">
          <div class="item-content-username">
            {{item.nickname}}
            <div class="item-content-username-sex iconfont icon-nan" style="color: dodgerblue"  v-if="item.gender === 1"></div>
            <div class="item-content-username-sex iconfont icon-nv" style="color: #ff5270" v-if="item.gender === 2"></div>
          </div>
          <div class="item-content-desc">{{item.signature}}</div>
        </div>
        <div class="item-right">+ 关注</div>
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
  name: 'Userprofiles',
  data () {
    return {
      limit: 20,
      page: 1,
      type: 1002,
      userprofileList: [],
      sex: true, // true代表男性 false 代表女性
      showLoading: false,
      promiseGetData: true
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
          that.userprofileList = val.result.userprofiles
        }
      })
    },
    handlerScroll () {
      this.scroll = new BScroll(this.$refs.SearchUserprofile, {
        click: true,
        pullUpLoad: true
      })
      this.scroll.on('pullingUp', () => { // 绑定上拉事件
        const {limit, page} = this
        this.keyword = JSON.parse(localStorage.getItem('keywords'))[0]
        this.showLoading = true
        this.scroll.refresh()
        const offset = page * limit
        if (this.promiseGetData) {
          this.pullGetSong(this.keyword, this.limit, offset, this.type)
        }
      })
    },
    async pullGetSong (keyword, limit, offset, type) { // 异步获取数据 分页
      try {
        const result = await resSearchList(keyword, limit, offset, type)
        this.promiseGetData = false
        if (result.code === 200) {
          this.promiseGetData = true
          this.showLoading = false
          this.page = this.page + 1
          this.userprofileList = this.userprofileList.concat(result.result.userprofiles)
          this.scroll.finishPullUp()
          this.scroll.refresh()
        }
        this.scroll.refresh()
      } catch (e) {
      }
    }
  },
  watch: {
    userprofileList () {
      if (this.userprofileList.length > this.limit) {

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
    height: 0
    padding-bottom: 15%
    .item-left
      positionAbsolute(.5rem,null,null,.5rem)
      height: 80%
      width: 13%
      border-radius: 100%
    .item-content
      positionAbsolute(.5rem,null,null,18%)
      border-bottom: 1px solid rgba(0,0,0,.1)
      width:100%
      height: 100%
      line-height: 1.4rem
      display: flex
      flex-direction: column
      justify-content: center
      .item-content-username
        font-size: .9rem
        display: flex
        .item-content-username-sex
          margin-left: .3rem
      .item-content-desc
        font-size: .7rem
        width: 60%
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
    .item-right
      positionAbsolute(null,-1rem,null,null)
      border: 1px solid $ThemeColor
      color: $ThemeColor
      border-radius: 1rem
      padding: .3rem .6rem
      font-size: .7rem
      top: 50%
      transform: translateX(-50%)
.loading
    margin: 0 auto
    display: flex
    align-items: center
    justify-content: center
    font-size: .8rem
</style>
