<template>
  <div id="app">
    <!-- <header>
      <span>Vue.js PWA</span>
    </header> -->
    <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA" v-show="!isLogin">  -->
      <login v-show="!isLogin" />
      <router-view v-show="isLogin"></router-view>
    </main>
  </div>
</template>

<script>
// import store from '@/store'
import { mapState } from 'vuex'
import Login from '@/components/containers/Login'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Login
  },
  computed: mapState({
    isLogin: state => state.user.isLogin
  })
}
</script>
