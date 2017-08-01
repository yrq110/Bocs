<template>
  <div class="plans">
    <top-nav />
    <div class="container">
      <plan-book-mark :data="newPlanText" @clickEvent="addNewPlan"/>
      <template v-for="plan in plansData">
        <plan-book-mark
          :data="plan"
          @clickEvent="goPlanDetail(plan.id)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopNav from '../views/TopNav'
import PlanBookMark from '../views/PlanBookMark'
export default {
  name: 'Plans',
  data () {
    return {
      newPlanText: {
        header: '新',
        begin: '于何时',
        end: '于何时',
        page: '何地',
        rate: '几何'
      }
    }
  },
  created: function () {
    this.$store.dispatch('flashPlans')
  },
  methods: {
    addNewPlan: function () {
      this.$store.dispatch('addPlan', {
        header: '权',
        begin: '2017-7-10',
        end: '2017-7-20',
        page: 67,
        rate: '40%',
        bookID: 1478,
        id: 1001
      })
      // this.$router.push({
      //   name: 'PlanDetail',
      //   params: {
      //     planID: 1000
      //   }
      // })
      // this.$router.push({
      //   name: 'NewPlan'
      // })
    },
    goPlanDetail (id) {
      this.$router.push({
        name: 'PlanDetail',
        params: {
          planID: id
        }
      })
    }
  },
  computed: {
    ...mapState({
      plansData: function (state) {
        return state.user.plans
      }
    })
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
