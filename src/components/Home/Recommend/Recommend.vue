<template>
<div class="recommend" ref="recommend">
  <div>
    <Banner></Banner>
    <IconNav></IconNav>
    <Template title="推荐歌单" :list="recommendList" router="/musicmenu"></Template>
    <Template title="最新音乐" :list="recommendList" router="/musicmenu"></Template>
    <Radio title="主播电台" :list="anchorRadios"></Radio>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Banner from './Banner'
import IconNav from './IconNav'
import Template from './Template'
import Radio from './Radio'
import BScroll from 'better-scroll'
export default {
  name: 'Recommend',
  mounted () {
    this.$store.dispatch('getRecommendList')
    this.$store.dispatch('getAnchorRadios')
    this.createScroll()
  },
  methods: {
    createScroll () {
      this.scroll = new BScroll(this.$refs.recommend, {
        click: true
      })
      console.log(this.scroll)
    }
  },
  computed: {
    ...mapState(['recommendList', 'anchorRadios'])
  },
  components: {
    Banner,
    IconNav,
    Template,
    Radio
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl"
.recommend
  positionAbsolute(0,0,0,0)
  overflow: hidden
</style>
