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
      showClose: false // 显示close图标
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
      this.keyword = ''
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
  position: relative
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
