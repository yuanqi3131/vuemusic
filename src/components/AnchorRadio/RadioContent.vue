<template>
  <div class="content">
    <mt-navbar class="nav" v-model="navChoose">
      <mt-tab-item id="detail"><span class="nav-desc" :class="navChoose==='detail' ? navText  : ''">详情</span></mt-tab-item>
      <mt-tab-item id="program"><span class="nav-desc" :class="navChoose==='program' ? navText : ''">节目</span></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="navChoose">
      <mt-tab-container-item id="detail">
        <AnchorDetail :detail="content"></AnchorDetail>
      </mt-tab-container-item>
      <mt-tab-container-item id="program">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import AnchorDetail from './AnchorDetail'
export default {
  name: 'RadioContent',
  props: {
    content: Object
  },
  data () {
    return {
      navChoose: 'detail',
      navText: 'navText'
    }
  },
  components: {
    AnchorDetail
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin.styl"
  @import "~styles/variable.styl"
.mint-navbar>>>.is-selected
  color: #ff314b
  border-bottom: none
.nav-desc
  font-size: 1rem
.navText
  display: block
  width: 2rem
  border-bottom: 2px solid
  margin: 0 auto
  margin-top: -2px
  line-height: 1.3rem
</style>
