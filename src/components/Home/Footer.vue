<template>
  <div class="footer">
    <div class="footer-left">
      <img class="footer-img" src="static/image/cm4_disc_cover_new@2x.png"/>
    </div>
    <div class="footer-desc">
      <p class="footer-desc-song">上新了·故宫(《上新了·故宫》同名主题曲)</p>
      <p class="footer-desc-songer">邓伦</p>
    </div>
    <div class="footer-right">
      <img class="footer-right-play" src="static/image/cm2_icn_list@2xcm2_icn_list1@2x.png"/>
      <img class="footer-right-list" src="static/image/cm2_icn_list1@2x.png"/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin.styl"
  .footer
    width: 100%
    height: 3rem
    background: #fff
    positionFixed(null,null,0,null)
    z-index: 99
    display: flex
    .footer-left
      display: flex
      flex: 1
      .footer-img
        width: 2.5rem
        height: 2.5rem
        margin: 0.2rem
    .footer-desc
      flex: 6
      .footer-desc-song
        font-size: 0.8rem
        margin-top: 0.4rem
      .footer-desc-songer
        font-size: 0.7rem
        margin-top: 0.2rem
        color: #948787
     .footer-right
       display: flex
       flex: 1
      .footer-right-play
        width: 2rem
        height: 2rem
        margin: .5rem .5rem 0 0
      .footer-right-list
        width: 2rem
        height: 2rem
        margin: .5rem .5rem 0 0
</style>
