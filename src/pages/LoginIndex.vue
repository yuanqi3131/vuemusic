<template>
  <div class="login">
    <img class="login-img" src="static/image/AppIcon57x57@2x.png"/>
    <router-link tag="div" to="/mobilelogin" class="login-des" >手机号登录</router-link>
    <div class="login-des">注册</div>
    <div class="login-other">
      <p class="login-other-desc">其他登录方式</p>
      <div class="login-other-content">
        <div class="login-other-content-item">
          <i class="iconfont icon-weixin-copy" style="font-size: 1.5rem;color: green"></i>
          <p class="login-other-content-item-desc">微信</p>
        </div>
        <div class="login-other-content-item">
          <i class="iconfont icon-QQ" style="font-size: 1.5rem;color: dodgerblue"></i>
          <p class="login-other-content-item-desc">QQ</p>
        </div>
        <div class="login-other-content-item">
          <i class="iconfont icon-weibo" style="font-size: 1.5rem;color: #c70d18"></i>
          <p class="login-other-content-item-desc">微博</p>
        </div>
        <div class="login-other-content-item">
          <i class="iconfont icon-wangyi-copy" style="font-size: 1.5rem;color: #c71ea6"></i>
          <p class="login-other-content-item-desc">网易邮箱</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
.login
  background: url("/static/image/timg.jpg")
  height: 100%
  width: 100%
  position: absolute
  background-size: cover
  .login-img
    width: 20%
    border-radius: 1rem
    display: block
    margin: 0 auto
    margin-top: 5rem
    margin-bottom: 4rem
  .login-des
    color: $ThemeColor
    border: 1px solid $ThemeColor
    border-radius: 1rem
    width: 80%
    padding: 2.5%
    margin: 0 auto
    margin-top: 5%
    text-align: center
  .login-other
    position: absolute
    bottom: 10%
    width: 100%
    .login-other-desc
      text-align: center
      font-size: .9rem
      margin: 1rem
      color: rgba(0,0,0,.6)
    .login-other-content
      display: flex
      width: 70%
      margin: 0 auto
      .login-other-content-item
        display: flex
        flex: 1
        flex-direction: column
        align-items: center
        font-size: .7rem
        .login-other-content-item-desc
          margin-top: .5rem
</style>
