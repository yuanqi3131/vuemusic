<template>
  <div class="content">
    <router-link tag="div"  to="/singercategory" class="content-songer">
      <div class="content-songer-title">
        <div class="content-songer--title-desc">按歌手搜索</div>
        <i class="iconfont icon-qianjin1" style="color: rgba(0,0,0,.2)"></i>
      </div>
      <div class="content-songer-img">
        <img v-for="item in hotSinger.slice(0,3)" :key="item.id" class="content-songer-img-item" :src="item.img1v1Url"/>
      </div>
    </router-link>
    <div class="content-hot">
      <div class="content-hot-title">热门搜索</div>
      <div class="content-hot-item" v-for="(item, index) in hotSearch" :key="index">
        {{item.first}}
      </div>
    </div>
    <div class="content-history" v-if="showHistory">
      <div class="content-history-header">
        <span class="content-history-header-desc">历史记录</span>
        <i @click="cleanHistory" class="iconfont icon-lajitong content-history-header-clean"></i>
      </div>
      <div class="content-history-item" v-for="(value,index) in keywords" :key="index">
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import { MessageBox } from 'mint-ui'
export default {
  name: 'SearchContent',
  data () {
    return {
      keywords: [],
      showHistory: false
    }
  },
  mounted () {
    this.getHotSearch()
    this.getHotSinger()
    this.keywords = JSON.parse(localStorage.getItem('keywords'))
  },
  methods: {
    ...mapActions(['getHotSearch', 'getHotSinger']),
    cleanHistory () {
      MessageBox.confirm('', {
        message: '确定清空全部历史记录?',
        title: '',
        confirmButtonText: '清空'
      }).then(action => {
        localStorage.removeItem('keywords')
        this.showHistory = false
      })
    }
  },
  computed: {
    ...mapState(['hotSearch', 'hotSinger'])
  },
  watch: {
    keywords (val) {
      val === null ? this.showHistory = false : this.showHistory = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-songer
  display: flex
  padding: 1rem 0 1rem 0rem
  width: 92%
  font-size: .9rem
  margin: 0 auto
  border-bottom: 1px solid rgba(0,0,0,.06)
  position: relative
  .content-songer-title
    display: flex
    flex: 1
    .content-songer--title-desc
      font-weight: bold
      font-size: 1.05rem
  .content-songer-img
    position: absolute
    right: 0
    top: 0.5rem
    .content-songer-img-item
      width: 2rem
      height: 2rem
      border-radius: 1rem
.content-hot
  height: 0
  padding-bottom: 50%
  width: 92%
  font-size: .8rem
  margin: 0 auto
  margin-top: 1rem
  position: relative
  .content-hot-title
    font-weight: bold
    font-size: .9rem
  .content-hot-item
    display: inline-flex
    padding: .4rem .6rem .4rem .6rem
    border-radius: 1rem
    background-color:rgba(0,0,0,.06)
    margin: .5rem .5rem 0 0
    align-items: center
    justify-content: center
    font-size: .8rem
.content-history
  width: 92%
  margin: 0 auto
  .content-history-header
    position: relative
    .content-history-header-desc
      font-weight: bold
    .content-history-header-clean
      font-size: 1.2rem
      position: absolute
      right: 0
      margin-right: .5rem
  .content-history-item
    display: inline-flex
    padding: .4rem .6rem .4rem .6rem
    border-radius: 1rem
    background-color:rgba(0,0,0,.06)
    margin: .8rem .5rem 0 0
    align-items: center
    justify-content: center
    font-size: .8rem
</style>
