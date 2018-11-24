<template>
  <div>
    <div class="title">
      <div class="title-left">歌单(8)</div>
      <div class="title-right">共收藏0次</div>
    </div>
    <div class="items">
      <div class="item">
        <img :src="userDetail.profile.backgroundUrl"  class="item-img"/>
        <div class="item-desc">
          <p class="item-desc-title">{{userDetail.profile.nickname}}的听歌排行</p>
          <p class="item-desc-remake">累计听歌{{userDetail.listenSongs}}首</p>
        </div>
      </div>
      <div class="item" v-for="(item,index) in userSongList" :key="item.id">
        <img :src="userSongList[index].coverImgUrl"  class="item-img"/>
        <div class="item-desc">
          <p class="item-desc-title">{{userSongList[index].name}}</p>
          <p class="item-desc-remake">{{userSongList[index].trackCount}}首，播放{{userSongList[index].playCount}}次</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'PersonMusic',
  computed: {
    ...mapState(['userSongList', 'userDetail'])
  }
}
</script>

<style lang="stylus" scopred>
@import "~styles/mixin.styl"
.title
  width: 100%
  height: 1.5rem
  display: flex
  align-items: center
  background-color: rgba(0,0,0,.1)
  color: rgba(0,0,0,.6)
  .title-left
    font-size: .8rem
    padding-left: .5rem
  .title-right
    positionAbsolute(1.5%,.8rem,null,null)
    font-size: .7rem
.item
  width: 100%
  height: 0
  padding-bottom: 13%
  display: flex
  margin-left: .5rem
  margin-top: .3rem
  position: relative
  .item-img
    position: absolute
    width: 13%
    height: 100%
  .item-desc
    display: flex
    flex-direction: column
    line-height: 1.5rem
    position: absolute
    left: 16%
    width: 100%
    border-bottom: 1px solid rgba(0,0,0,.1)
    .item-desc-title
      font-size: .9rem
    .item-desc-remake
      font-size: .7rem
      color: rgba(0,0,0,.6)
</style>
