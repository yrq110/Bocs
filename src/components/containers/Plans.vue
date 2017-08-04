<template>
  <div class="plans">
    <top-nav />
    <div class="container">
      <plan-book-mark :data="newPlanText" @clickEvent="addNewPlan"/>
      <template v-for="plan in plans">
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
    this.$store.dispatch('flashBooks')
  },
  methods: {
    addNewPlan: function () {
      this.$router.push({
        name: 'NewPlan'
      })
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
      plans: function (state) {
        let plans = state.user.plans
        if (typeof (plans) !== 'undefined') {
          plans.map(e => {
            let book = state.user.books.filter(r => {
              // console.log(plan)
              return r.id === e.bookID
            })
            // console.log(book)
            e.header = book.length !== 0 ? book[0].title.slice(0, 1) : '无'
          })
        } else {
          plans = []
        }
        return plans
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
