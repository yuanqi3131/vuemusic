<template>
  <div class="global">
      <div class="global-title">全球榜</div>
        <div class="global-items">
          <div class="global-item"  v-for="(item, index) in globalRank" :key="item.id">
            <img class="global-item-img" :src="item.coverImgUrl"/>
            <span class="global-item-desc">{{item.name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Global',
  props: {
    globalRank: Array
  }
}
</script>

<style lang="stylus" scoped>
.global-title
  padding-top: 2rem
  padding-bottom: 1rem
  margin-left: .5rem
  font-weight: bold
.global-items
  display: flex
  flex-wrap: wrap
  margin-left: .3rem
  .global-item
    width: 33.3%
    display: flex
    flex-direction: column
    padding-bottom: 2.5rem
.global-item-img
  width: 94%
  height: 90%
  margin-bottom: .5rem
.global-item-desc
  line-height: 1.2rem
  font-size: .8rem
</style>
