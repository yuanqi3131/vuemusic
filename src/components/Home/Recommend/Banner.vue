<template>
  <div class="banner">
    <div class="bannerBack"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
          <img class="bannerImg" :src="banner.imageUrl"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Banner',
  mounted () {
    this.$store.dispatch('getBanners')
  },
  computed: {
    ...mapState(['banners'])
  },
  watch: {
    banners () {
      this.$nextTick(() => {
        let mySwiper = new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: '.swiper-pagination'
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
.bannerBack
  background: $ThemeColor
  height: 6rem
  position: relative
  top: 6.4rem
.swiper-container
  margin-top: 0rem
  .bannerImg
    width: 96%
    display: block
    margin: 0 auto
</style>
