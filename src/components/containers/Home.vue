<template>
  <div class="home">
    <logo-pad class="nav"/>
    <div class="mug">
      <div class="mug_head">
        <div class="coffee"></div>
        <div class="ear"></div>
      </div>
    </div>
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
    <div class="passbook hover">
      <div class="symbol">
        <div class="h_line"></div>
        <div class="v_line"></div>
        <div class="inner_circle"></div>
      </div>
      <div class="details1"></div>
      <div class="details2"></div>
      <div class="details3"></div>
    </div>
    <div class="footer">
      2017 © <a href="https://github.com/yrq110/Bocs">yrq110</a>
      <br>
      Bocs is licensed under <a href="https://opensource.org/licenses/MIT">MIT</a>
      <i class="fa fa-github fa-4x icon-3d" @click="goGitHub"></i> 
    </div>
  </div>
</template>

<script>
import LogoPad from '../views/LogoPad'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
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
    goGitHub: function () {
      location.href = 'https://github.com/yrq110'
    }
  },
  components: {
    LogoPad
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/Home.less';
 @import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
