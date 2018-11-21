<template>
    <div class="template">
      <router-link :to="router" tag="div">
        <div class="template-title"><label class="template-title-desc">{{title}}</label>></div>
      </router-link>
      <div class="template-items">
        <router-link tag="div" :to="{name:'MusicMenuDetail', params: {id: item.id}}" class="template-item" v-for="(item,index) in list.slice(0,6)" :key="item.id" >
          <div class="template-item-listen" v-if="showPlayCount">
            <i class="iconfont" style="color: #fff">&#xe601;</i>
            <span>{{item.playCount}}</span>
          </div>
          <div class="template-item-img"><img class="template-item-imgcontent" :src="item.picUrl"/></div>
          <p class="template-item-desc">{{item.name}}</p>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Template',
  props: {
    title: String,
    list: Array,
    router: String
  },
  data () {
    return {
      showPlayCount: false,
      listItem: []
    }
  },
  watch: {
    list: function () {
      let that = this
      this.$nextTick(() => {
        if (that.list[0].playCount !== undefined) {
          that.showPlayCount = true
        }
        that.listItem = that.list
        if (that.listItem[0].playCount !== undefined) {
          for (let i = 0; i < that.listItem.length; i++) {
            if (that.listItem[i].playCount > 99999) {
              that.listItem[i].playCount = parseInt(that.listItem[i].playCount / 10000) + '万'
            }
          }
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
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
      .template-item-listen
        positionAbsolute(null,0.5rem,null,null)
        z-index: 2
        font-size: 0.8rem
        color: #fff
      .template-item-img
        positionAbsolute(0,0,null,0)
        .template-item-imgcontent
          width: 96%
          display: block
          margin: 0 auto
       .template-item-desc
          positionAbsolute(null,0,0,0)
          height: 1.5rem
          line-height: 1.1rem
          font-size: 0.8rem
</style>
