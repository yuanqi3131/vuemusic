<template>
  <div class="person" ref="person">
    <div>
      <div class="header" :style="{backgroundImage: 'url(' + userDetail.profile.backgroundUrl + ')',backgroundSize:'cover'}">
        <img class="header-avatar" :src="userDetail.profile.avatarUrl"/>
        <p class="header-name">{{userDetail.profile.nickname}}</p>
        <p class="header-follows">关注{{userDetail.profile.follows}}</p>
        <p class="header-followeds">粉丝{{userDetail.profile.followeds}}</p>
        <div class="header-edit">
          <i class="iconfont icon-bianji"></i>
          <p class="header-edit-text">编辑</p>
        </div>
      </div>
      <div class="background" :style="{opacity: opacityStyle}"></div>
      <PersonContent></PersonContent>
    </div>
  </div>
</template>

<script>
import PersonContent from './Content'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'PersonHeader',
  data () {
    return {
      opacityStyle: 0
    }
  },
  computed: {
    ...mapState(['userDetail'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.person, {
      click: 'true',
      probeType: 2
    })
    this.scroll.on('scroll', ({x, y}) => {
      console.log(y)
      if (y > 0) {
        this.opacityStyle = 0
      } else {
        this.opacityStyle = Math.abs((y / 190))
      }
    })
  },
  components: {
    PersonContent
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import '~styles/mixin.styl'
.person
  positionAbsolute(0,0,0,0)
  overflow: hidden
.header
  height: 0
  padding-bottom: 70%
  position: relative
  .header-avatar
    position: absolute
    top: 50%
    left: 5%
    transform: translateY(-50%)
    width: 20%
    border-radius: 10rem
  .header-name
    color: $White
    position: absolute
    top: 70%
    left: 5%
    font-size: 1.1rem
  .header-follows
    position: absolute
    color: $White
    left: 5%
    top: 80%
    font-size: .8rem
  .header-followeds
    position: absolute
    color: $White
    left: 20%
    top: 80%
    font-size: .8rem
  .header-edit
    display: flex
    align-items: center
    color: $White
    position: absolute
    top: 50%
    transform: translateY(-50%)
    right: 5%
    border: 1px solid
    padding: .2rem .5rem
    .header-edit-text
      font-size: .8rem
.background
  position: fixed
  height: 0
  padding-bottom: 70%
  left: 0
  right: 0
  top: 0
  background: rgba(26, 26, 26, 0.87)
</style>
