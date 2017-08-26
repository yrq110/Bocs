<template>
  <div class="plan">
    <top-nav />
    <!-- {{ currentPlanData }} -->
    <div class="container">
      <!-- {{ timeFromNow }} -->
      <div class="note">
        <div class="info-page">
          <div class="cell book">
            <div v-show="hasBook" class="title">{{ getBookTitle(bookID) }}</div>
            <div class="btn" @click="selectBook" v-show="!hasBook">选择图书</div>
            <div class="btn" @click="addBook" v-show="!hasBook">添加图书</div>
          </div>
          <div class="cell">
            <div class="key">起始日期</div>
            <input type="number" id="begin-year" ref="beginYear" class="input date" placeholder="年" autocomplete="off"/> -
            <input type="number" id="begin-month" ref="beginMonth" class="input date" placeholder="月" autocomplete="off"/> -
            <input type="number" id="begin-day" ref="beginDay" class="input date" placeholder="日" autocomplete="off"/>
          </div>
          <div class="cell">
            <div class="key">截止日期</div>
            <input type="number" id="end-year" ref="endYear" class="input date" placeholder="年" autocomplete="off"/> -
            <input type="number" id="end-month" ref="endMonth" class="input date" placeholder="月" autocomplete="off"/> -
            <input type="number" id="end-day" ref="endDay" class="input date" placeholder="日" autocomplete="off"/>
          </div>
          <div class="cell">
            <div class="key">页数</div>
            <input type="number" id="page" ref="page" class="input" placeholder="输入已读页数" autocomplete="off"/>
          </div>
        </div>
        <div class="pencil">
          <div class="pencil-bottom"></div>
          <div class="pencil-nip">
            <div class="pencil-tip"></div>
          </div>
          <div class="text" @click="newPlanDetail">添加</div>
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
      hasBook: false
    }
  },
  created: function () {
    this.$store.dispatch('flashBooks')
  },
  mounted () {
    let date = new Date()
    this.$refs.beginYear.value = date.getFullYear()
    this.$refs.beginMonth.value = date.getMonth() + 1
    this.$refs.beginDay.value = date.getDate()
    this.$refs.endYear.value = date.getFullYear()

    this.hasBook = typeof (this.$router.history.current.params.bookid) !== 'undefined'
  },
  methods: {
    async newPlanDetail () {
      let date = new Date()
      if (this.$refs.endMonth.value === '') this.$refs.endMonth.value = date.getMonth() + 2
      if (this.$refs.endDay.value === '') this.$refs.endDay.value = date.getDate() + 1
      if (this.$refs.page.value === '') this.$refs.page.value = 0

      let beginDate = this.$refs.beginYear.value + '-' + this.$refs.beginMonth.value + '-' + this.$refs.beginDay.value
      let endDate = this.$refs.endYear.value + '-' + this.$refs.endMonth.value + '-' + this.$refs.endDay.value
      let page = this.$refs.page.value
      let id = Math.floor(Math.random() * 10000)

      if (typeof (this.bookID) !== 'undefined') {
        await this.$store.dispatch('addPlan', {
          id: id,
          bookID: this.bookID,
          begin: beginDate,
          end: endDate,
          page: page
        })
        this.$router.push({
          name: 'PlanDetail',
          params: {
            planID: id
          }
        })
      }
    },
    getBookTitle (id) {
      // console.log(this.$store.state.user.books)
      if (typeof (this.$store.state.user.books) === 'undefined') {
        return 'null'
      }
      let book = this.$store.state.user.books.filter(e => {
        return e.id === id
      })
      // console.log(book)
      return book.length !== 0 ? book[0].title : 'null'
    },
    selectBook () {
      this.$router.push({
        path: '/books'
      })
    },
    addBook () {
      this.$router.push({
        path: '/newbook'
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
    bookID () {
      // console.log(this.$router)
      return this.$router.history.current.params.bookid
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
