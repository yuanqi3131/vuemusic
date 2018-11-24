<template>
  <div>
    <Top left="icon-fanhui" right="icon-fenxiang" content="【网易云音乐国风极乐夜音乐盛典】11月3日独家同步直播！ -网易云音乐"></Top>
    <iframe :src="url" style="width: 100%;min-height: 100vh;"></iframe>
  </div>
</template>

<script>
import Top from '../components/Top'
export default {
  name: 'Shop', //商品页面
  data () {
    return {
      url: this.$route.params.url
    }
  },
  components: {
    Top
  }
}
</script>

<style>

</style>
