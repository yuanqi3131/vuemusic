<template>
  <div class="Radio" ref="IndexRadio">
    <div>
      <Banner></Banner>
      <IconNav></IconNav>
      <RecommendDj></RecommendDj>
      <PayRadio></PayRadio>
      <RecommendTemplate></RecommendTemplate>
      <Category></Category>
    </div>
  </div>
</template>

<script>
import Banner from '../Recommend/Banner'
import IconNav from './IconNav'
import RecommendDj from './RecommendDj'
import PayRadio from './PayRadio'
import RecommendTemplate from './RadioCategoryTemplate'
import Category from './Category'
import BScroll from 'better-scroll'
export default {
  name: 'Radio',
  mounted () {
    this.$nextTick(() => {
      this.$store.dispatch('getRadioRecommend')
      this.scroll = new BScroll(this.$refs.IndexRadio, {
        click: true
      })
    })
  },
  components: {
    Banner,
    IconNav,
    RecommendDj,
    PayRadio,
    RecommendTemplate,
    Category
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl"
.Radio
  positionAbsolute(0,0,0,0)
  overflow: hidden
</style>
