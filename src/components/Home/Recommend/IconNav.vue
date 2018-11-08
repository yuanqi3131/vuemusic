<template>
  <div class="iconNav">
    <div class="iconItem"><img class="icon" src="static/image/cm2_discover_icn_fm-ip6@2x.png"/>私人FM</div>
    <div class="iconItem"><img class="icon" src="static/image/cm4_disc_topbtn_daily-ip6@2x.png"/>每日推荐</div>
    <router-link to="/musicmenu" tag="span">
      <div class="iconItem"><img class="icon" src="static/image/cm2_discover_icn_fm-ip6@2x.png"/>歌单</div>
    </router-link>
    <router-link to="/rank" tag="span">
      <div class="iconItem"><img class="icon" src="static/image/cm2_discover_icn_upbill-ip6@2x.png"/>排行榜</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'IconNav'
}
</script>

<style lang="stylus" scoped>
.iconNav
  display: flex
  text-align: center
  border-bottom: 1px solid #E5E2E2
  padding-bottom: 1rem
  .iconItem
    display: flex
    flex-direction: column
    flex: 1
    font-size: 0.8rem;
    .icon
      width: 5rem
      margin: 0 auto
</style>
