<template>
  <div class="radio" ref="radio">
    <div>
      <div class="radio-header">
        <img class="radio-header-img" :src="radioInfo.coverUrl"/>
        <div class="radio-header-name">{{radioInfo.radio.name}}</div>
        <div class="radio-header-amount">{{radioInfo.radio.subCount}}人已订阅</div>
        <div class="radio-header-subscribe"><i class="iconfont icon-favor icon"></i>订阅</div>
      </div>
      <RadioContent :content="radioInfo"></RadioContent>
    </div>
  </div>
</template>

<script>
import RadioContent from './RadioContent'
import BScroll from 'better-scroll'
export default {
  name: 'Radio',
  data () {
    return {
      radioInfo: this.$route.params.radioInfo
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.radio, {
        click: true,
        probeType: 2
      })
      this.scroll.on('scroll', ({x, y}) => {
        console.log(x, y)
      })
    })
  },
  methods: {
  },
  components: {
    RadioContent
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  @import "~styles/mixin.styl"
.radio
  positionAbsolute(0,0,0,0)
  overflow: hidden
  .radio-header
    height: 0
    padding-bottom: 80%
    position: relative
    .radio-header-img
      width: 100%
      height: 100%
      position: absolute
    .radio-header-name
      positionAbsolute(null,null,2rem,.5rem)
      color: $White
    .radio-header-amount
      positionAbsolute(null,null,1rem,.5rem)
      font-size: .8rem
      color: #eae8e8
    .radio-header-subscribe
      positionAbsolute(null,1rem,2rem,null)
      color: $White
      width: 5rem
      height: 1.5rem
      background: $ThemeColor
      border-radius: .8rem
      font-size: .8rem
      display: flex
      align-items: center
      justify-content: center
      .icon
        margin: 0 .2rem
</style>
