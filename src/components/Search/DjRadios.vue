<template>
  <div class="items" ref="SearchDjRadio">
    <div>
      <div class="title">电台</div>
      <div class="item" v-for="item in djRadioList" :key="item.id">
        <img class="item-left" :src="item.picUrl"/>
        <div class="item-content">
          <div class="item-content-title">{{item.name}}</div>
          <div class="item-content-desc">{{item.dj.nickname}}</div>
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
  name: 'SearchDjRadios',
  data () {
    return {
      limit: 20,
      page: 1,
      type: 1009,
      djRadioList: [],
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
          that.djRadioList = val.result.djRadios
        }
      })
    },
    handlerScroll () {
      this.scroll = new BScroll(this.$refs.SearchDjRadio, {
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
          this.djRadioList = this.djRadioList.concat(result.result.djRadios)
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
  .title
    width: 100%
    height: 1.2rem
    background-color: rgba(0,0,0,.2)
    font-size: .7rem
    display: flex
    align-items: center
    padding-left: .5rem
  .item
    position: relative
    width: 100%
    height: 0
    padding-bottom: 20%
    .item-left
      positionAbsolute(.5rem, null, null, .5rem)
      height: 90%
      width: 20%
      border-radius: .4rem
    .item-content
      positionAbsolute(.5rem, null, null, 25%)
      width: 100%
      height: 90%
      border-bottom: 1px solid rgba(0,0,0,.1)
      display: flex
      flex-direction: column
      justify-content: center
      line-height: 1.5rem
      .item-content-desc
        font-size: .7rem
.loading
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
  font-size: .8rem
</style>
