<template>
  <div>
    <Top></Top>
    <Content></Content>
  </div>
</template>

<script>
import Top from '../components/Search/Top'
import Content from '../components/Search/SearchContent'
export default {
  name: 'Search',
  components: {
    Top,
    Content
  }
}
</script>

<style>

</style>
