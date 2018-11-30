<template>
  <div class="items">
    <div class="item" v-for="item in playlist" :key="item.id">
      <img class="item-left" :src="item.coverImgUrl"/>
      <div class="item-content">
        <div class="item-content-title">{{item.name}}</div>
        <div class="item-content-desc">{{item.trackCount}}首 by {{item.creator.nickname}},播放{{item.playCount}}次</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPlaylists',
  data () {
    return {
      limit: 20,
      page: 0,
      type: 1000,
      playlist: []
    }
  },
  mounted () {
    debugger
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
          that.playlist = val.result.playlists
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
.items
  position: relative
  .item
    height: 0
    width: 100%
    padding-bottom: 18%
    position: relative
    .item-left
      height: 90%
      width: 20%
      border-radius: .4rem
      positionAbsolute(.5rem,null,null,.5rem)
    .item-content
      positionAbsolute(.5rem,null,null,25%)
      width: 100%
      height: 90%
      border-bottom: 1px solid rgba(0,0,0,.1)
      display: flex
      flex-direction: column
      justify-content: center
      line-height: 1.5rem
      .item-content-title
        font-size: .9rem
        width: 70%
        text-overflow: ellipsis
        overflow: hidden
        white-space: nowrap
      .item-content-desc
        font-size: .7rem
        color: rgba(0,0,0,.5)
</style>
