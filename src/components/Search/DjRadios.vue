<template>
  <div class="items">
    <div class="title">电台</div>
    <div class="item" v-for="item in djRadioList" :key="item.id">
      <img class="item-left" :src="item.picUrl"/>
      <div class="item-content">
        <div class="item-content-title">{{item.name}}</div>
        <div class="item-content-desc">{{item.dj.nickname}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchDjRadios',
  data () {
    return {
      limit: 20,
      page: 0,
      type: 1009,
      djRadioList: []
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    initData () {
      const {limit, page, type} = this
      const keyword = JSON.parse(localStorage.getItem('keywords'))[0]
      const offset = page * limit
      const result = this.$store.dispatch('getSearchList', {keyword, limit, offset, type})
      const that = this
      result.then(val => {
        if (val.code === 200) {
          that.djRadioList = val.result.djRadios
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.title
  width: 100%
  height: 1.2rem
  background-color: rgba(0,0,0,.2)
  font-size: .7rem
  display: flex
  align-items: center
  padding-left: .5rem
.item
  position: relative
  width: 100%
  height: 0
  padding-bottom: 20%
  .item-left
    positionAbsolute(.5rem, null, null, .5rem)
    height: 90%
    width: 20%
    border-radius: .4rem
  .item-content
    positionAbsolute(.5rem, null, null, 25%)
    width: 100%
    height: 90%
    border-bottom: 1px solid rgba(0,0,0,.1)
    display: flex
    flex-direction: column
    justify-content: center
    line-height: 1.5rem
    .item-content-desc
      font-size: .7rem
</style>
