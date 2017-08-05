<template>
  <div id="app">
    <main>
      <login v-show="!isLogin" />
      <router-view v-show="isLogin"></router-view>
    </main>
  </div>
</template>

<script>
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

<style lang="less">
 @import './styles/common/iconFont.less';
</style>
