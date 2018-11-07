<template>
  <div class="top">
    <div class="top-left" @click="goback()"><i class="iconfont" :class="left"></i></div>
    <div id="top-content" class="top-content" @click="textMove()">
      <span id="top-content-desc">{{content}}</span>
    </div>
    <div class="top-right"><i class="iconfont" :class="right"></i></div>
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
    color: $TopColor
    .iconfont
      font-size: 1.5rem
  .top-content
    flex: 6
    align-self: center
    color: $TopColor
    font-size: 1.15rem
    white-space: nowrap
    overflow: hidden
  .top-right
    flex: 1
    align-self: center
    text-align: center
    color: $TopColor
    .iconfont
      font-size: 1.5rem
</style>
