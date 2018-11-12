<template>
  <div>
    <Top>
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="content" id="top-content-desc">歌单</span>
      <div slot="search"><img style="width: 1.8rem" src="static/image/search.png"/></div>
      <div slot="right"><i class="iconfont icon-gengduo"></i></div>
    </Top>
    <ListHeader></ListHeader>
  </div>
</template>

<script>
import Top from '../components/Top'
import ListHeader from '../components/RankDetail/ListHeader'
export default {
  name: 'RankDetail',
  components: {
    Top,
    ListHeader
  }
}
</script>

<style>

</style>
