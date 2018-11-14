<template>
  <div class="top">
    <div class="top-left"  @click="goback()"><slot name="left"></slot></div>
    <div id="top-content" class="top-content" @click="textMove()">
      <slot name="content"></slot>
    </div>
    <div class="top-search"><slot name="search"></slot></div>
    <div class="top-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    left: String,
    content: String,
    right: String
  },
  mounted () {
  },
  methods: {
    textMove () {
      let content = document.getElementById('top-content')
      let contentWidth = content.offsetWidth // 240
      let scroWidth = content.scrollWidth // 598
      setInterval(() => {
        if (scroWidth - contentWidth > content.scrollLeft) {
          content.scrollLeft++
        } else {
          // content.scrollLeft = contentWidth
        }
      }, 20)
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable"
.top
  width: 100%
  height: 3rem
  background: $ThemeColor
  display: flex
  .top-left
    flex: 1
    align-self: center
    text-align: center
    color: $White
    .iconfont
      font-size: 1.5rem
  .top-content
    flex: 6
    align-self: center
    color: $White
    font-size: 1.15rem
    white-space: nowrap
    overflow: hidden
  .top-search
    flex: 1
    align-self: center
    text-align: center
    color: $TopColor
  .top-right
    flex: 1
    align-self: center
    text-align: center
    color: $White
    .iconfont
      font-size: 1.5rem
</style>
