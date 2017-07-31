<template>
  <div class="plans">
    <top-nav />
    <div class="container">
      <plan-book-mark :data="data"/>   
      <plan-book-mark :data="data"/> 
      <plan-book-mark :data="data"/> 
      <plan-book-mark :data="data"/> 
      <plan-book-mark :data="data"/> 
      <plan-book-mark :data="data"/> 
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import TopNav from '../views/TopNav'
import PlanBookMark from '../views/PlanBookMark'
export default {
  name: 'Plans',
  data () {
    return {
      data: {
        header: '权',
        begin: '2017-7-10',
        end: '2017-7-20',
        page: '67',
        rate: '40%'
      }
    }
  },
  methods: {
  },
  components: {
    TopNav,
    PlanBookMark
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/Plans.less';
</style>
