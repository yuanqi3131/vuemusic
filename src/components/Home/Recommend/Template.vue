<template>
    <div class="template">
      <div class="template-title"><label class="template-title-desc">{{title}}</label>></div>
      <div class="template-items">
        <div class="template-item" v-for="(item,index) in list.slice(0,6)" :key="list.id">
          <div class="template-item-img"><img class="template-item-imgcontent" :src="item.picUrl"/></div>
          <p class="template-item-desc">{{item.name}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Template',
  props: {
    title: String,
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
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
        position: absolute
        top: 0
        left: 0
        right: 0
        .template-item-imgcontent
          width: 96%
          display: block
          margin: 0 auto
       .template-item-desc
          position: absolute
          bottom: 0rem
          left: 0
          right: 0
          height: 1.5rem
          line-height: 1.1rem
          font-size: 0.8rem
</style>
