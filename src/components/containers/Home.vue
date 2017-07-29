<template>
  <div class="home">
    <div class="book" @click="goBooks">
      <div class="text">
        <span class="txt1">我</span>
        <span class="txt2">的</span>
        <span class="txt3">书</span>
        <span class="txt4">籍</span>
      </div>
      <div class="cover">
        <div class="less"></div>
      </div>
    </div>
    <div class="plan" @click="goPlans">
      <div class="text">
        <span class="txt1">我</span>
        <span class="txt2">的</span>
        <span class="txt3">计</span>
        <span class="txt4">划</span>
      </div>
      <div class="note"></div>
    </div>
    <i class="fa fa-github fa-4x icon-3d" @click="goGithub"></i> 
  </div>
</template>

<script>
// import store from '@/store'
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'addBook'
    ]),
    goBooks: function () {
      this.$router.push({
        path: '/books'
      })
    },
    goPlans: function () {
      this.$router.push({
        path: '/plans'
      })
    },
    goGithub: function () {
      location.href = 'https://github.com/yrq110'
    }
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/Home.less';
 @import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
