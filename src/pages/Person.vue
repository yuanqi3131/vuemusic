<template>
  <div>
    <Top :ShowBackground="true">
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="right"><i class="iconfont icon-fenxiang"></i></span>
    </Top>
      <PersonHeader></PersonHeader>
  </div>
</template>

<script>
import Top from '../components/Top'
import PersonHeader from '../components/Person/Header'
export default {
  name: 'Person', // 个人主页
  components: {
    Top,
    PersonHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
