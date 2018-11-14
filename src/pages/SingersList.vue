<template>
  <div>
    <Top>
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="content" id="top-content-desc">云音乐歌手榜</span>
    </Top>
    <Content></Content>
  </div>
</template>

<script>
import Top from '../components/Top'
import Content from '../components/SingersList/Content'
export default {
  name: 'SingersList', // 歌手榜
  components: {
    Top,
    Content
  }
}
</script>

<style>

</style>
