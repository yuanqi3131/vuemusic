<template>
<div class="MusicMenu">
  <div>
    <Top>
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="content" id="top-content-desc">歌单</span>
    </Top>
    <MusicList :supermeMusic="supermeMusic"></MusicList>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Top from '../components/Top'
import MusicList from '../components/MusicMenu/MusicList'
export default {
  name: 'MusicMenu', // 歌单页面
  mounted () {
    this.$store.dispatch('getSupermeMusic')
  },
  computed: {
    ...mapState(['supermeMusic'])
  },
  components: {
    Top,
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
</style>
