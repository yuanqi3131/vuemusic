<template>
  <div class="search">
    <Top v-on:showDetail="handler"></Top>
    <Content v-if="!showDetail"></Content>
    <Nav v-if="showDetail" v-on:navChoose="handlerNav"></Nav>
    <Detail v-if="showDetail" :active="navActive"></Detail>
  </div>
</template>

<script>
import Top from '../components/Search/Top'
import Content from '../components/Search/SearchContent'
import Nav from '../components/Search/Nav'
import Detail from '../components/Search/SearchDetail'
export default {
  name: 'Search', // 搜索页面
  data () {
    return {
      showDetail: false, // 点提交显示搜索详情
      navActive: 'songs'
    }
  },
  methods: {
    handler () {
      this.showDetail = true
    },
    handlerNav (val) {
      this.navActive = val
    }
  },
  components: {
    Top,
    Content,
    Detail,
    Nav
  }
}
</script>

<style lang="stylus" scoped>
.search
  overflow: hidden
</style>
