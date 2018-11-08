<template>
<div class="recommend">
  <div>
    <Banner></Banner>
    <IconNav></IconNav>
    <Template title="推荐歌单" :list="recommendList" router="/musicmenu"></Template>
    <Template title="最新音乐" :list="recommendList" router="/musicmenu"></Template>
    <Template title="主播电台" :list="anchorRadios" router="/musicmenu"></Template>
    <Footer></Footer>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Banner from './Banner'
import IconNav from './IconNav'
import Template from './Template'
import Footer from './Footer'
import BScroll from 'better-scroll'
export default {
  name: 'Recommend',
  mounted () {
    this.$store.dispatch('getRecommendList')
    this.$store.dispatch('getAnchorRadios')
  },
  activated () {
    let scroll = new BScroll('.recommend', {
      scrollY: true,
      click: true
    })
  },
  computed: {
    ...mapState(['recommendList', 'anchorRadios'])
  },
  components: {
    Banner,
    IconNav,
    Template,
    Footer
  }
}
</script>

<style>

</style>
