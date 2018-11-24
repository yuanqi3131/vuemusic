<template>
  <div>
    <Top>
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="content" id="top-content-desc">精品歌单·全部</span>
      <div slot="right">筛选</div>
    </Top>
    <SuperList></SuperList>
  </div>
</template>

<script>
import Top from '../components/Top'
import SuperList from '../components/SupermeMusic/SuperList'
export default {
  name: 'SupermeMusic', // 精品歌单
  components: {
    Top,
    SuperList
  }
}
</script>

<style>

</style>
