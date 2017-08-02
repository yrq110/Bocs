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
        <div class="erase" @click="deletePlan">
          <div class="banner">添加牌</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/views/TopNav'
export default {
  name: 'PlanDetail',
  data () {
    return {
    }
  },
  methods: {
    newPlanDetail: function () {
      let title = document.querySelector('#title').value
      let id = Math.floor(Math.random() * 10000)
      this.$store.dispatch('addPlan', {
        id: id,
        name: title
      })
      this.$router.push({
        name: 'PlanDetail',
        params: {
          planID: id
        }
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
 @import '../../styles/NewPlan.less';
</style>
