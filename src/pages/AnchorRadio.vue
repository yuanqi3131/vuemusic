<template>
  <div>
    <Top :ShowBackground="true">
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="content">电台</span>
      <span slot="search"><i class="iconfont icon-fenxiang"></i></span>
      <span slot="right"><i class="iconfont icon-gengduo"></i></span>
    </Top>
    <Radio></Radio>
  </div>
</template>

<script>
import Top from '../components/Top'
import Radio from '../components/AnchorRadio/Radio'
export default {
  name: 'AnchorRadio', // 主播电台详情页面
  components: {
    Top,
    Radio
  }
}
</script>

<style>

</style>
