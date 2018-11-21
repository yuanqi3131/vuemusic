<template>
  <div class="detail">
    <div class="detail-anchor">主播</div>
    <div class="detail-intro">
      <img class="detail-intro-img" :src="detail.dj.avatarUrl"/>
      <p class="detail-intro-name">{{detail.dj.nickname}}</p>
      <p class="detail-intro-role">{{detail.dj.description}}</p>
    </div>
    <div class="detail-info">
      <div class="detail-info-title">电台内容简介</div>
      <div class="detail-info-category">分类:<span class="detail-info-category-desc">{{detail.radio.category}}</span></div>
      <div class="detail-info-content">{{detail.radio.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnchorDetail',
  props: {
    detail: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin.styl"
  @import "~styles/variable.styl"
.detail
  padding-bottom: 70%
  .detail-anchor
    width: 100%
    height: 3rem
    border-bottom: 1px solid rgba(184, 182, 182, 0.37)
    font-weight: bold
    display: flex
    align-items: center
    padding-left: .5rem
  .detail-intro
    width: 100%
    height: 0
    padding-bottom: 20%
    border-bottom: 1px solid rgba(184, 182, 182, 0.37)
    position: relative
    .detail-intro-img
      height: 70%
      border-radius: 13.8rem
      position: absolute
      positionAbsolute(0,0,0,.5rem)
      margin-top: auto
      margin-bottom: auto
    .detail-intro-name
      positionAbsolute(25%,null,null,18%)
    .detail-intro-role
      positionAbsolute(55%,null,null,18%)
      font-size: .8rem
  .detail-info
    margin-top: 2rem
    margin-left: .5rem
    .detail-info-title
      font-weight: bold
    .detail-info-category
      margin-top: 1rem
      display: flex
      font-size: .8rem
      .detail-info-category-desc
        display: block
        border: 1px solid $ThemeColor
        color: $ThemeColor
        padding: .1rem
        margin-left: .2rem
        margin-top: -.2rem
        font-size: .7rem
    .detail-info-content
      margin-top: .5rem
      font-size: .8rem
      color: #b0aeae
      line-height: 1.2rem
</style>
