<template>
  <div class="plan">
    <top-nav />
    <div class="container">
      <div class="note">
        <div class="info-page">
          <div class="cell">
            <div class="title">
              {{ bookTitle }}
            </div>
          </div>
          <div class="cell">
            <div class="key">起始日期</div>
            <div class="value">{{ currentPlanData.begin }}</div>
          </div>
          <div class="cell">
            <div class="key">终止日期</div>
            <input type="number" id="end-year" class="input" placeholder="年" autocomplete="off" v-show="isEditing"/>
            <input type="number" id="end-month" class="input" placeholder="月" autocomplete="off" v-show="isEditing"/>
            <input type="number" id="end-day" class="input" placeholder="日" autocomplete="off" v-show="isEditing"/>
            <div class="value" v-show="!isEditing">{{ currentPlanData.end }}</div>
          </div>
          <div class="cell">
            <div class="key">页数</div>
            <input type="number" id="page" class="input" autocomplete="off" v-show="isEditing"/>
            <div class="value" v-show="!isEditing">{{ currentPlanData.page }}</div>
          </div>
        </div>
        <div class="pencil" @click="editPlan">
          <div class="pencil-bottom"></div>
          <div class="pencil-nip">
            <div class="pencil-tip"></div>
          </div>
          <div class="banner">
            {{ isEditing ? '保存' : '修改'}}
          </div>
        </div>
        <div class="erase" @click="deletePlan">
          <div class="banner">删除</div>
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
      isEditing: false
    }
  },
  created: function () {
    this.$store.dispatch('flashPlans')
    this.$store.dispatch('flashBooks')
  },
  methods: {
    editPlan () {
      if (this.isEditing) {
        let endDate = document.querySelector('#end-year').value + '-' + document.querySelector('#end-month').value + '-' + document.querySelector('#end-day').value
        let page = document.querySelector('#page').value
        this.currentPlanData.end = endDate
        this.currentPlanData.page = page
        this.$store.dispatch('updatePlan', this.currentPlanData)
      } else {
        document.querySelector('#end-year').value = this.currentPlanData.end.split('-')[0]
        document.querySelector('#end-month').value = this.currentPlanData.end.split('-')[1]
        document.querySelector('#end-day').value = this.currentPlanData.end.split('-')[2]
        document.querySelector('#page').value = this.currentPlanData.page
      }
      this.isEditing = !this.isEditing
    },
    deletePlan () {
      console.log('delete')
      this.$store.dispatch('deletePlan', this.currentPlanData.id)
      this.$router.push({
        path: '/plans'
      })
    }
  },
  computed: {
    id () {
      return this.$router.history.current.params.planID
    },
    currentPlanData () {
      const bid = this.id
      for (let plan of this.$store.state.user.plans) {
        if (plan.id === parseInt(bid)) {
          return plan
        }
      }
    },
    bookTitle () {
      let book = this.$store.state.user.books.filter(e => {
        return e.id === this.currentPlanData.bookID
      })
      // console.log(book)
      return book.length !== 0 ? book[0].title : '此书已删除'
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
