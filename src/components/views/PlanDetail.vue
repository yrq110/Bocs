<template>
  <div class="plan">
    <top-nav />
    <!-- {{ currentPlanData }} -->
    <div class="container">
      <!-- {{ timeFromNow }} -->
      <div class="note">
        <div class="info-page">
          <template v-for="(value, key) in currentPlanData">
            <div class="cell">
              <div class="key">{{ key }}</div>
              <div class="value">{{ value }}</div>
            </div>
          </template>
        </div>
        <div class="pencil">
          <div class="pencil-bottom"></div>
          <div class="pencil-nip">
            <div class="pencil-tip"></div>
          </div>
        </div>
        <div class="erase" @click="deletePlan">
          <div class="banner">删除牌</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
import TopNav from '@/components/views/TopNav'
export default {
  name: 'PlanDetail',
  data () {
    return {
    }
  },
  created: function () {
    this.$store.dispatch('flashPlans')
  },
  methods: {
    deletePlan () {
      console.log('delete')
      this.$store.dispatch('deletePlan', this.currentPlanData.id)
      this.$router.push({
        path: '/plans'
      })
    }
  },
  computed: {
    id: function () {
      return this.$router.history.current.params.planID
    },
    currentPlanData: function () {
      const bid = this.id
      for (let plan of this.$store.state.user.plans) {
        if (plan.id === parseInt(bid)) {
          return plan
        }
      }
    }
  },
  components: {
    TopNav
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/PlanDetail.less';
</style>
