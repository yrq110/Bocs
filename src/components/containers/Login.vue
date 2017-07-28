<template>
  <div class="login">
    <!-- log view -->
    <login-view
      @login="login"
    />
  </div>
</template>

<script>
// import router from '@/router'
import store from '@/store'
import LoginView from '../views/LoginView'
import crypto from 'crypto'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  components: {
    LoginView
  },
  methods: {
    login (name, pwd) {
      const md5 = crypto.createHash('md5')
      pwd = md5.update(pwd).digest('hex')
      console.log(`${name}: ${pwd}`)
      store.commit('LOGIN_SUCCESS')
    }
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/Login.less';
</style>
