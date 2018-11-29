<template>
  <div class="items">
    <div class="item" v-for="item in artistList" :key="item.id" >
      <img class="item-left"  :src="item.img1v1Url"/>
      <div class="item-content">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchArtist',
  data () {
    return {
      limit: 20,
      page: 0,
      type: 100,
      artistList: []
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
          that.artistList = val.result.artists
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.item
  position: relative
  width: 100%
  height: 4rem
  .item-left
    width:20%
    height: 90%
    positionAbsolute(.3rem, null ,null, .3rem)
    border-radius: .4rem
  .item-content
    positionAbsolute(null, null ,null, 24%)
    height: 4rem
    width: 100%
    border-bottom: 1px solid rgba(0,0,0,.1)
    display: flex
    align-items: center
</style>
