<template>
  <div class="menu">
    <div class="speaker"></div>
    <div class="screen">
      <div class="nav-item home" @click="goHome">首页</div>
      <div class="nav-item book" @click="goBooks">书籍</div>
      <div class="nav-item plan" @click="goPlans">计划</div>
    </div>
    <div class="button"></div>
    <div class="volume_rockers"></div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
    }
  },
  methods: {
    goHome: function () {
      this.$router.push({
        path: '/'
      })
    },
    goBooks: function () {
      this.$router.push({
        path: '/books'
      })
    },
    goPlans: function () {
      this.$router.push({
        path: '/plans'
      })
    }
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/TopNav.less';
</style>
