<template>
  <div class="login-view">
    <!-- input -->
    <div class="name">
      <input type="text" id="name" name="name" placeholder="请输入用户名"/>
      <div class="name-error" v-show="isNameError">不能为空</div>
    </div>
    <div class="pwd">
      <input type="password" id="pwd" name="pwd" placeholder="请输入密码"/>
      <span>著</span>
      <div class="pwd-error" v-show="isPwdError">不能为空</div>
    </div>

    <!-- bottom -->
    <div class="publish">
      <p class="publisher">{{ publisher }}出版社</p>
    </div>

    <!-- stripe -->
    <div class="left-stripe"></div>
    <div class="right-stripe"></div>

    <!-- lock-icon -->
    <i class="material-icons lock" @click="login">{{  isLogin ?  'lock_open' : 'lock_outline' }}</i>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'login-view',
  data () {
    return {
      isNameError: false,
      isPwdError: false
    }
  },
  methods: {
    login () {
      this.isNameError = false
      this.isPwdError = false
      var name = document.querySelector('#name').value
      var pwd = document.querySelector('#pwd').value
      if (name !== '' && pwd !== '') {
        this.$emit('login', name, pwd)
      } else if (name === '') {
        this.isNameError = true
      } else if (pwd === '') {
        this.isPwdError = true
      }
    }
  },
  computed: {
    publisher: () => {
      let pubs = ['安布雷拉', '火萤组织', '七曜教会']
      return pubs[Math.floor(Math.random() * pubs.length)]
    },
    isLogin: () => {
      return store.state.isLogin
    }
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/LoginView.less';
</style>
