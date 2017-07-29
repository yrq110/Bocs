<template>
  <div class="plans">
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
    PlanBookMark
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/Plans.less';
</style>
