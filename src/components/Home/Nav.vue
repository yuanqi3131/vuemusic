<template>
<div>
  <mt-navbar class="nav" v-model="navChoose">
    <mt-tab-item id="recommend"><span :class="navChoose==='recommend'?navText:''">推荐</span></mt-tab-item>
    <mt-tab-item id="friend"><span :class="navChoose==='friend'?navText:''">朋友</span></mt-tab-item>
    <mt-tab-item id="radio"><span :class="navChoose==='radio'?navText:''">电台</span></mt-tab-item>
  </mt-navbar>
  <mt-tab-container v-model="navChoose">
    <mt-tab-container-item id="recommend">
      <Recommend></Recommend>
    </mt-tab-container-item>
    <mt-tab-container-item id="friend">
      <Friend></Friend>
    </mt-tab-container-item>
    <mt-tab-container-item id="radio">
      <Radio></Radio>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
import Recommend from './Recommend/Recommend'
import Friend from './Friend/Friend'
import Radio from './Radio/Radio'
export default {
  name: 'Nav',
  data () {
    return {
      navChoose: 'recommend',
      navText: 'navText'
    }
  },
  components: {
    Recommend,
    Friend,
    Radio
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variable"
  .mint-tab-item >>>.mint-tab-item-label //>>>不受scoped影响，定制全局
    font-size: 1rem
    width: 2rem
    margin: 0 auto
  .mint-navbar>>>.is-selected
    border-bottom: none
    margin-bottom: 0
  .mint-navbar
    height: 2.5rem
.nav
  position: fixed
  width: 100%
  top: 4rem
  z-index: 99
.mint-tab-item
  background: $ThemeColor
  color: #EAE1E1
  margin-right: -1px;
  .navText
    display: block
    width: 2rem
    border-bottom: 3px solid
    margin-top: -0.1rem
    line-height: 1.2rem
    color: #fff
</style>
