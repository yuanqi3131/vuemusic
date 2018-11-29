<template>
  <div class="top">
    <div class="top-left" @click="goBack"><i class="iconfont icon-fanhui" style="font-size: 1.5rem"></i></div>
    <form @submit.prevent="searchKeywords">
      <input v-model="keyword" type="search" class="top-input"/>
    </form>
    <i v-show="showClose" @click="cleanSearch" class="iconfont icon-guanbi1"></i>
  </div>
</template>

<script>
export default {
  name: 'Top', // 搜索页面头部组件
  data () {
    return {
      keyword: '',
      keywords: [],
      limit: 20,
      page: 1,
      type: 1,
      showClose: false, // 显示close图标
      firstSearch: 0 // 是否是第一次搜索，用来重新搜索清空搜索列表
    }
  },
  watch: {
    keyword (val) {
      if (val !== '') {
        this.showClose = true
      } else {
        this.showClose = false
      }
    }
  },
  methods: {
    cleanSearch () { // 清除输入框
      this.keyword = ''
    },
    goBack () {
      this.$router.go(-1)
    },
    searchKeywords () { // 搜索
      // 保留五个最新的搜索记录
      if (localStorage.getItem('keywords')) {
        this.keywords = JSON.parse(localStorage.getItem('keywords'))
        this.keywords = Object.assign([], JSON.parse(localStorage.getItem('keywords')), [])
        if (this.keywords.indexOf(this.keyword) !== -1) { // 如果有相同的值，先删除，再添加
          this.keywords.splice(this.keywords.indexOf(this.keyword), 1)
          this.keywords.unshift(this.keyword)
        } else {
          this.keywords.unshift(this.keyword)
        }
        if (this.keywords.length > 5) { // 保留五个
          this.keywords.pop()
        }
        localStorage.setItem('keywords', JSON.stringify(this.keywords))
      } else {
        this.keywords = Object.assign([], JSON.parse(localStorage.getItem('keywords')), [this.keyword])
        localStorage.setItem('keywords', JSON.stringify([this.keyword]))
      }
      if (this.keyword !== '') { // 发送异步请求
        const {keyword, limit, type} = this
        this.firstSearch = this.firstSearch + 1
        const result = this.$store.dispatch('getSearchList', {keyword, limit, offset: 0, type})
        const that = this
        result.then(val => {
          if (val.code === 200) {
            that.$store.dispatch('getSearchSongs', val.result.songs)
            if (this.firstSearch > 1) {
              this.$store.dispatch('getCleanSongs', true)
            }
            that.$emit('showDetail', true)
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
input[type="search"]::-webkit-search-cancel-button
  display: none
.top
  width: 100%
  height: 3rem
  background: $ThemeColor
  display: flex
  .top-left
    width: 10%
    height: 3rem
    color: $White
    display: flex
    align-items: center
    justify-content: center
  .top-input
    positionAbsolute(null,null,null,10%)
    height: 2rem
    border: 0px
    border-bottom: 1px solid #fff
    background-color: transparent
    width: 85%
    margin-top: .5rem
    margin-left: .5rem
    font-size: 1.2rem
    color: rgba(255,255,255,.8)
.icon-guanbi1
  color: #fff
  positionAbsolute(.8rem,5%,null,null)
  font-size: 1.5rem
</style>
