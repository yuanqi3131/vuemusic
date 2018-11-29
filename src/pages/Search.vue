<template>
  <div class="search">
    <Top v-on:showDetail="handler"></Top>
    <Content v-if="!showDetail"></Content>
    <Detail v-else></Detail>
  </div>
</template>

<script>
import Top from '../components/Search/Top'
import Content from '../components/Search/SearchContent'
import Detail from '../components/Search/SearchDetail'
export default {
  name: 'Search', // 搜索页面
  data () {
    return {
      showDetail: false // 点提交显示搜索详情
    }
  },
  methods: {
    handler () {
      this.showDetail = true
    }
  },
  components: {
    Top,
    Content,
    Detail
  }
}
</script>

<style lang="stylus" scoped>
.search
  overflow: hidden
</style>
