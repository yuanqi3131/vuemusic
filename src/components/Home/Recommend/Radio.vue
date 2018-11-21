<template>
  <div class="template">
    <router-link to="/" tag="div">
      <div class="template-title"><label class="template-title-desc">{{title}}</label>></div>
    </router-link>
    <div class="template-items">
      <router-link tag="div" :to="{name: 'AnchorRadio', params: {radioInfo: item}}" class="template-item" v-for="(item,index) in list.slice(0,6)" :key="item.id" >
        <div class="template-item-img">
          <p class="template-item-img-desc">{{item.radio.name}}</p>
          <img class="template-item-img-content" :src="item.coverUrl"/>
        </div>
        <p class="template-item-desc">{{item.reason}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    title: String,
    list: Array
  },
  data () {
    return {
      showPlayCount: false,
      listItem: []
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  @import "~styles/mixin.styl"
  .template
    height: 0
    padding-bottom: 100%
    margin-bottom: 2rem
    .template-title
      margin: 1.5rem 0 0 0.5rem
      .template-title-desc
        font-weight: bold
        margin-right: 0.4rem
    .template-items
      overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 110%
      .template-item
        float: left
        width: 33.3%
        padding-bottom: 40%
        position: relative
        margin: 0.9rem 0
        .template-item-img
          positionAbsolute(0,0,null,0)
          .template-item-img-desc
            position: absolute
            bottom: .3rem
            left: .3rem
            color: $White
            font-size: .6rem
          .template-item-img-content
            width: 96%
            display: block
            margin: 0 auto
        .template-item-desc
          positionAbsolute(null,0,0,0)
          height: 1.5rem
          line-height: 1.1rem
          font-size: 0.8rem
</style>
