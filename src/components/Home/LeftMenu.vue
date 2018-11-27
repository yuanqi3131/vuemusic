<template>
  <div class="menu">
    <div class="menu-header" v-show="!showUserInfo">
      <p class="menu-header-desc">登录网易云音乐<br/>手机电脑多端同步，尽享海量高品质音乐</p>
      <div @click="Login()" class="menu-header-login">立即登录</div>
    </div>
    <div class="menu-header" v-if="showUserInfo" :style="{backgroundImage: 'url('+ userDetail.profile.backgroundUrl +')'}">
      <img class="menu-header-avatar" :src="userDetail.profile.avatarUrl"/>
      <router-link  tag="div" to="/person" class="menu-header-text">
        <p class="menu-header-text-username">{{userDetail.profile.nickname}}</p>
        <div class="menu-header-text-level">Lv.{{userDetail.level}}</div>
      </router-link>
      <div class="menu-header-signIn">
        <i class="iconfont icon-jinqianguan"></i>
        <span class="menu-header-signIn-desc">签到</span>
      </div>
    </div>
    <div class="menu-content">
      <div class="menu-content-item">
        <i class="iconfont icon-xiaoxi"></i>
        <p class="menu-content-item-desc">我的消息</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-huiyuanzhongxin1"></i>
        <p class="menu-content-item-desc">会员中心</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-gouwuche"></i>
        <p class="menu-content-item-desc">商城</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-youxi"></i>
        <p class="menu-content-item-desc">游戏推荐:明日之后</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-gedan"></i>
        <p class="menu-content-item-desc">在线听歌免流量</p>
      </div>
      <div class="menu-content-item" style="border-top: 5px solid rgba(179,177,177,0.25)">
        <i class="iconfont icon-huiyuanzhongxin"></i>
        <p class="menu-content-item-desc">我的好友</p>
      </div>
      <div class="menu-content-item" style="border-bottom: 5px solid rgba(179,177,177,0.25)">
        <i class="iconfont icon-fujin"></i>
        <p class="menu-content-item-desc">附近的人</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-huanfu"></i>
        <p class="menu-content-item-desc">个性换肤</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-tinggeshiqu40x40"></i>
        <p class="menu-content-item-desc">听歌识曲</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-dingshi"></i>
        <p class="menu-content-item-desc">定时停止播放</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-552dc065f0478"></i>
        <p class="menu-content-item-desc">扫一扫</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-yuanxingdecircular223"></i>
        <p class="menu-content-item-desc">音乐闹钟</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-fujin"></i>
        <p class="menu-content-item-desc">附近的人</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-jiashi"></i>
        <p class="menu-content-item-desc">驾车模式</p>
      </div>
      <div class="menu-content-item">
        <i class="iconfont icon-youhuiquan"></i>
        <p class="menu-content-item-desc">优惠券</p>
      </div>
    </div>
    <div class="menu-footer">
      <div class="menu-footer-item">
        <i class="iconfont icon-yejianmoshi"></i>
        <p class="menu-footer-item-desc">夜间模式</p>
      </div>
      <div class="menu-footer-item">
        <i class="iconfont icon-shezhi"></i>
        <p class="menu-footer-item-desc">设置</p>
      </div>
      <div class="menu-footer-item">
        <i class="iconfont icon-tuichu"></i>
        <p class="menu-footer-item-desc">退出</p>
      </div>
    </div>
  </div>
</template>

<script>
import {resUserDetail} from '../../api'
export default {
  name: 'LeftMenu',
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  },
  methods: {
    Login () {
      this.$router.push({name: 'LoginIndex'})
    },
    async getUserDetail () { // ajax获取用户详情
      const result = await resUserDetail(this.userInfo.profile.userId)
      if (result.code === 200) {
        this.$store.dispatch('getUserDetail', result)
      }
    }
  },
  computed: {
    showUserInfo () {
      if (this.userInfo.code !== 200) {
        return false
      } else {
        return true
      }
    },
    userDetail () {
      return this.$store.state.userDetail
    }
  },
  watch: {
    userInfo (val) {
      if (val.code !== undefined && val.code === 200) {
        this.getUserDetail()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixin.styl"
@import "~styles/variable.styl"
.menu
  position: fixed
  z-index: 100
  width: 80%
  height: 100%
  background: $White
  overflow-y: auto
  .menu-header
    background: #2c2d31
    height: 0
    width: 100%
    padding-bottom: 50%
    position: relative
    background-size: cover
    .menu-header-avatar
      positionAbsolute(0,null,0,.5rem)
      margin-bottom: auto
      margin-top: auto
      width: 3.6rem
      border-radius: 1.8rem
    .menu-header-text
      color: $White
      display: flex
      positionAbsolute(null,null,10%,5%)
      .menu-header-text-level
        font-size: .7rem
        border: 1px solid $White
        border-radius: .5rem
        padding: 0 .4rem
        margin-left: .5rem
        display: flex
        align-items: center
    .menu-header-signIn
      display: flex
      justify-content: center
      align-items: center
      color: #fff
      border: 1px solid #fff
      width: 20%
      position: absolute
      right: 5%
      bottom: 10%
      border-radius: .5rem
      padding: .15rem 0
      font-size: .9rem
      .menu-header-signIn-desc
        margin-left: .2rem
    .menu-header-desc
      font-size: 12px
      color: #bababa
      text-align: center
      line-height: 1.2rem
      positionAbsolute(25%,null,null,null)
      width: 100%
    .menu-header-login
      font-size: .8rem
      color: $White
      positionAbsolute(68%,null,null,50%)
      transform: translate(-50%,-50%)
      border: 1px solid
      padding: 3% 10%
      border-radius: 1rem
      &:hover,:active
        background: gray
  .menu-content
    display: flex
    flex-direction: column
   .menu-content-item
     display: flex
     padding: 1rem 0 .5rem .5rem
     font-size: .9rem
    .menu-content-item-desc
      margin-left: .5rem
  .menu-footer
    display: flex
    align-items: center
    positionFixed(null,null,0,null)
    background: $White
    width: 80%
    height: 3rem
    border-top: 1px solid rgba(179,177,177,0.25)
    font-size: .9rem
    .menu-footer-item
      display: flex
      margin: 0 auto
      margin-left: .5rem
      align-items: center
      justify-content: center
      .menu-footer-item-desc
        padding-left: .5rem
</style>
