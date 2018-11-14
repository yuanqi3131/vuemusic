<template>
  <div>
    <mt-navbar class="nav" v-model="navChoose">
      <mt-tab-item id="chinese"><span :class="navChoose==='recommend'?navText:''">华语</span></mt-tab-item>
      <mt-tab-item id="europe"><span :class="navChoose==='friend'?navText:''">欧美</span></mt-tab-item>
      <mt-tab-item id="korea"><span :class="navChoose==='radio'?navText:''">韩国</span></mt-tab-item>
      <mt-tab-item id="japan"><span :class="navChoose==='radio'?navText:''">日本</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="navChoose">
      <mt-tab-container-item id="recommend">
        <Recommend></Recommend>
      </mt-tab-container-item>
      <mt-tab-container-item id="friend">
        <Friend></Friend>
      </mt-tab-container-item>
      <mt-tab-container-item id="radio">
        <Radio></Radio>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav', // 头部导航
  data () {
    return {
      navChoose: 'recommend',
      navText: 'navText'
    }
  },
  components: {
  }
}
</script>

<style>

</style>
