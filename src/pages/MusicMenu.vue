<template>
<div class="MusicMenu">
  <div>
    <Top>
      <div slot="left"><i class="iconfont icon-fanhui"></i></div>
      <span slot="content" id="top-content-desc">歌单</span>
    </Top>
    <MusicHeader :supermeMusic="supermeMusic"></MusicHeader>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Top from '../components/Top'
import MusicHeader from '../components/MusicMenu/MusciHeader'
export default {
  name: 'MusicMenu',
  mounted () {
    this.$store.dispatch('getSupermeMusic')
  },
  computed: {
    ...mapState(['supermeMusic'])
  },
  components: {
    Top,
    MusicHeader
  }
}
</script>

<style lang="stylus" scoped>
</style>
