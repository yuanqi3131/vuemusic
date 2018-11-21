<template>
    <div>
      <Top>
        <div slot="left"><i class="iconfont icon-fanhui"></i></div>
        <span slot="content" id="top-content-desc">手机号登录</span>
      </Top>
      <div class="item">
        <i class="iconfont icon-shouji" style="font-size: 1.2rem"></i>
        <div class="item-prefix" :class="profixStyle">+86</div>
        <input v-model="mobile" class="item-mobile" maxlength="11" oninput="value=value.replace(/[^\d]/g,'')" placeholder="请输入手机号" type="text"/>
        <i v-show="showClear" @click="clearInput()" class="iconfont icon-guanbi1 item-close"></i>
      </div>
      <div class="item">
        <i class="iconfont icon-mima" style="font-size: 1.5rem;margin-left: -.2rem"></i>
        <input v-model="password" class="item-mobile" type="password" placeholder="请输入密码"/>
        <span href="#" class="item-forget">忘记密码?</span>
      </div>
      <div class="login" @click="login()">登录</div>
    </div>
</template>
<script>
import Top from '../components/Top'
import {Toast} from 'mint-ui'
import {MobileLogin, resUserDetail} from '../api'
export default {
  name: 'MobileLogin',
  data () {
    return {
      mobile: '', // 手机号
      password: '', // 密码
      profixStyle: '', // 输入手机号时前缀(+86)的样式发生改变
      showClear: false // 输入手机号时清除icon的展示
    }
  },
  watch: {
    mobile (val) {
      if (val !== '') { // 当输入框有值时
        this.profixStyle = 'item-profixStyle'
        this.showClear = true
      } else {
        this.profixStyle = ''
        this.showClear = false
      }
    }
  },
  methods: {
    clearInput () { // 清空输入框
      this.mobile = ''
    },
    async login () {
      const {mobile, password} = this
      if (this.mobile === '') { // 手机号为空
        Toast({
          message: '请输入手机号',
          position: 'bottom',
          duration: 5000
        })
        return
      }
      if (this.mobile.length !== 11) { // 手机号为空
        Toast({
          message: '请输入11位数字的手机号',
          position: 'bottom',
          duration: 5000
        })
        return
      }
      if (this.mobile.password === '') { // 密码为空
        Toast({
          message: '请输入密码',
          position: 'bottom',
          duration: 5000
        })
        return
      }
      const result = await MobileLogin(mobile, password) // 发送ajax请求
      if (result.code === 200) {
        this.$store.dispatch('getUserInfo', result)
        this.$router.push('/') // 跳转首页
      } else {
        Toast({
          message: '用户名或密码错误',
          position: 'bottom',
          duration: 5000
        })
      }
    }
  },
  components: {
    Top
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
@import "~styles/mixin.styl"
input::-webkit-input-placeholder
  color: #bababa // 设置placeholder的颜色
.item
  margin-top: 10%
  margin-left: 1rem
  height: 2rem
  border-bottom: 1px solid #bababa
  display: flex
  align-items: center
  width: 90%
  position: relative
  .item-prefix
    margin-left: .3rem
    font-size: 1.05rem
    color: #bababa
  .item-profixStyle
    color: black
  .item-mobile
    border: 0px
    background: transparent
    margin-left: .2rem
    font-size: 1.05rem
  .item-close
    color: #bababa
    positionAbsolute(null,0,.3rem,null)
    font-size: 1.2rem
  .item-forget
    font-size: .9rem
    text-decoration: none
    display: block
    float: right
    positionAbsolute(null,0,.3rem,null)
    color: #4ab6ff
.login
  width: 90%
  height: 2.5rem
  display: flex
  align-items: center
  justify-content: center
  margin: 0 auto
  margin-top: 1.5rem
  background: linear-gradient(to right, #ff4615 0%, $ThemeColor 100%)
  border-radius: 1rem
  color: $White
</style>
