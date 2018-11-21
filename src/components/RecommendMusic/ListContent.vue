<template>
  <div class="content">
    <div class="content-item">
      <div class="content-item-headL">
        <i class="iconfont icon-bofang1" style="font-size: 1.5rem"></i>
        <span class="content-item-headL-play">播放全部</span>
        <span class="content-item-headL-amount">(共{{list.trackCount}}首)</span>
      </div>
      <div class="content-item-headR">
        <i class="iconfont icon-plus"></i>
        <span>收藏</span>
        <span>({{list.subscribedCount}})</span>
      </div>
    </div>
    <div class="content-music">
      <div class="content-music-item" v-for="(item, index) in musicList" :key="list.tracks.id">
        <span class="content-music-item-index">{{index+1}}</span>
        <div class="content-music-item-texts">
          <div class="content-music-item-text">
            <span class="content-music-item-text-name">{{item.name}}</span>
            <span class="content-music-item-text-songer">{{item.songer}}</span>
          </div>
          <div class="content-music-item-icon">
            <i class="iconfont icon-shipin" ></i>
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    list: Object
  },
  computed: {
    musicList () { // 计算歌手名字
      const that = this.list.tracks
      let songer
      for (let i = 0; i < that.length; i++) {
        if (that[i].ar.length === 1) {
          songer = that[i].ar[0].name + ' - ' + that[i].al.name
          that[i].songer = songer
          songer = ''
        } else {
          for (let j = 0; j < that[i].ar.length; j++) {
            songer += that[i].ar[j].name + '/'
          }
          songer = songer.substring(0, songer.lastIndexOf('/'))// 去掉最后一个斜杠
          songer = songer + '-' + that[i].al.name
          that[i].songer = songer
          songer = ''
        }
      }
      return that
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin"
.content
  width: 100%
  .content-item
    display: flex
    .content-item-headL
      width: 70%
      height: 2.6rem
      border-bottom: 1px solid rgba(190, 188, 188, 0.15)
      display: flex
      align-items: center
      padding-left: 3%
      .content-item-headL-play
        margin-left: .5rem
      .content-item-headL-amount
        color: #bababa
        font-size: .9rem
        margin-top: .1rem
    .content-item-headR
      width: 30%
      background-color: #dd4137
      display: flex
      align-items: center
      color: #fff
      font-size: .8rem
      padding-left: 10%
      position: relative
      .icon-plus
        font-size: 1.5rem
        positionAbsolute(20%,null,null,18%)
  .content-music-item
    display: flex
    .content-music-item-index
      display: flex
      width: 12%
      align-items: center
      justify-content: center
      color: #bababa
    .content-music-item-texts
      height: 3.2rem
      border-bottom: 1px solid rgba(190, 188, 188, 0.15)
      width: 88%
      display: flex
      .content-music-item-text
        display: flex
        width: 75%
        flex-direction: column
        line-height: 1.8rem
        justify-content: center
        .content-music-item-text-name
          font-size: .9rem
          width: 95%
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .content-music-item-text-songer
          font-size: .7rem
          color: #bababa
          line-height: .7rem
          width: 95%
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
      .content-music-item-icon
        display: flex
        width: 25%
        align-items: center
        justify-content: center
        .icon-shipin
          font-size: 1.5rem
          color: #bababa
          flex: 1
        .icon-gengduo
          font-size: 1.5rem
          color: #bababa
          flex: 1
</style>
