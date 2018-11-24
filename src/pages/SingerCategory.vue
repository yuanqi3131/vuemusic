<template>
  <div>
    <Top>
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="content" id="top-content-desc">歌手分类</span>
    </Top>
  </div>
</template>

<script>
import Top from '../components/Top'
export default {
  name: 'SingerCategory', // 歌手分类页
  components: {
    Top
  }
}
</script>

<style>

</style>
