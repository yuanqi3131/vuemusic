<template>
  <div class="iconNav">
    <router-link to="" tag="div" class="iconItem">
      <i class="iconfont icon-category"></i>电台分类
    </router-link>
    <router-link to="" tag="div" class="iconItem">
      <i class="iconfont icon-paihang-copy"></i>电台排行
    </router-link>
    <router-link to="" tag="div" class="iconItem">
      <i class="iconfont icon-xuanzeanniu"></i>DI电音
    </router-link>
    <router-link to="" tag="div" class="iconItem">
      <i class="iconfont icon-xiaobing"></i>小冰电台
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RadioIconNav'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.iconNav
  display: flex
  text-align: center
  border-bottom: 1px solid #E5E2E2
  padding: 1rem 0
  .iconItem
    display: flex
    flex-direction: column
    flex: 1
    font-size: 0.8rem;
    line-height: 2rem
    .iconfont
      font-size: 2rem
      width: 5rem
      margin: 0 auto
      color: $ThemeColor
</style>
