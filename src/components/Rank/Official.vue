<template>
    <div class="official" ref="official">
      <div class="official-content" v-if="rank">
        <div class="official-title">官方榜</div>
        <div class="official-items" style="padding-bottom: 123%">
          <router-link :to="{name: 'MusicMenuDetail', params: {id: item.id}}" tag="div" class="official-item" v-for="(item, index) in officialRank" :key="item.id">
            <img class="official-item-img" :src="item.coverImgUrl"/>
            <div class="official-item-update">{{item.updateFrequency}}</div>
            <div class="official-item-Ranks">
              <div class="official-item-Rank" v-for="(list,index) in item.tracks" :key="index">
                <p class="official-item-Rank-desc">{{index+1}}.{{list.first}} - {{list.second}}</p>
              </div>
            </div>
          </router-link>
        </div>
        <!--歌手榜-->
        <div class="official-items">
          <router-link tag="div" to="/singerslist" class="official-item" >
            <img class="official-item-img" :src="rank.artistToplist.coverUrl"/>
            <div class="official-item-update">{{rank.artistToplist.updateFrequency}}</div>
            <div class="official-item-Ranks">
              <div class="official-item-Rank" v-for="(item,index) in rank.artistToplist.artists" :key="index">
                <span>{{index+1}}.{{item.first}}</span>
                <div class="official-item-songRank-desc">
                  <i class="iconfont icon-huoyan"></i>
                  <span>{{item.third}}</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!--赞赏榜-->
        <div class="official-items">
          <div class="official-item">
            <img class="official-item-img" :src="rank.rewardToplist.coverUrl"/>
            <div class="official-item-update">{{rank.rewardToplist.updateFrequency ? rank.rewardToplist.updateFrequency : '实时更新'}}</div>
            <div class="official-item-Ranks">
              <div class="official-item-Rank" v-for="(item,index) in rank.rewardToplist.songs" :key="index">
                <p>{{index+1}}.{{item.name}} - {{item.artists[0].name}}</p>
              </div>
            </div>
          </div>
        </div>
        <Global :globalRank="globalRank"></Global>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import Global from './Global'
export default {
  name: 'Official',
  props: {
    rank: Object
  },
  data () {
    return {
      officialRank: [], // 官方榜
      globalRank: [] // 全球榜
    }
  },
  updated () {
    this.scroll = new BScroll(this.$refs.official, {
      click: true
    })
  },
  watch: {
    rank () {
      const list = this.rank.list
      for (let i = 0; i < list.length; i++) {
        if (list[i].ToplistType !== undefined) {
          this.officialRank.push(list[i])
        } else {
          this.globalRank.push(list[i])
        }
      }
    }
  },
  components: {
    Global
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixin"
.official
  overflow: hidden
  positionAbsolute(3rem,0,0,0)
  .official-title
    padding-top: 1rem
    margin-left: .5rem
    font-weight: bold
  .official-items
    margin-left: .5rem
    height: 0
    padding-bottom: 29%
    .official-item
      position: relative
      margin-top: .4rem
      font-size: .9rem
      /*height: 0*/
      padding-bottom: 30%
      .official-item-img
        width: 34%
        height: 100%
        border-radius: .4rem
        position: absolute
      .official-item-update
        positionAbsolute(null,null,.7rem,.5rem)
        color: #fff
        font-size: .7rem
      .official-item-Ranks
        display: flex
        flex-direction: column
        height: 85%
        positionAbsolute(.8rem,null,null,36%)
        border-bottom: 1px solid #bababa
        width: 63%
        padding-bottom: 1%
        .official-item-Rank
          white-space: nowrap
          flex: 1
          display: flex
          align-items: center
          .official-item-Rank-desc
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
          .official-item-songRank-desc
            display: inline-block
            margin-left: 1rem
            color: #B6A7A7
</style>
