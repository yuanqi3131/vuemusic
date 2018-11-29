<template>
  <div class="items">
    <div class="item" v-for="item in albumsList" :key="item.id">
      <img class="item-left" :src="item.picUrl"/>
      <div class="item-right">
        <div class="item-right-title">{{item.name}}</div>
        <div class="item-right-writer">{{item.artist.name}} {{item.publishTime}}</div>
        <div class="item-right-desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchAlbums',
  data () {
    return {
      limit: 20,
      page: 0,
      type: 10,
      albumsList: []
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
          that.albumsList = val.result.albums
        }
      })
    },
    formatDate (time) { // 时间戳转换成时间
      var date = new Date(time)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      return year + '.' + month + '.' + day
    }
  },
  watch: {
    albumsList () {
      for (let i = 0; i < this.albumsList.length; i++) {
        this.albumsList[i].publishTime = this.formatDate(this.albumsList[i].publishTime)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.item
  width: 100%
  height: 0
  padding-bottom: 15%
  position:relative
  .item-left
    width: 15%
    height: 90%
    positionAbsolute(.5rem,null,null,.5rem)
  .item-right
    positionAbsolute(.5rem,null,null,20%)
    width: 100%
    height: 100%
    border-bottom: 1px solid rgba(0,0,0,.1)
    display: flex
    flex-direction: column
    justify-content: center
    line-height: 1.4rem
    .item-right-writer
      font-size: .7rem
      color: rgba(0,0,0,.5)
</style>
