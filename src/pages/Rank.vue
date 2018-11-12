<template>
  <div class="rank">
    <div>
      <Top>
        <div slot="left"><i class="iconfont icon-fanhui"></i></div>
        <span slot="content" id="top-content-desc">排行榜</span>
      </Top>
      <Official :rank="allRankList"></Official>
    </div>
  </div>
</template>

<script>
import Top from '../components/Top'
import Official from '../components/Rank/Official'
import {mapState} from 'vuex'
export default {
  name: 'Rank',
  mounted () {
    this.$store.dispatch('getAllRankList')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['allRankList'])
  },
  components: {
    Top,
    Official
  }
}
</script>

<style lang="stylus" scoped>
.rank
  overflow: hidden
</style>
