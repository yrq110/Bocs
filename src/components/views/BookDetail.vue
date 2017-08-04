<template>
  <div class="book">
    <top-nav />
    <div class="container">
      <div class="cover-page section">
        <!-- {{ currentBookData }} page -->
        <img v-lazy="currentBookData.cover_img" />
      </div>
      <div class="info-page section ">
        <div class="cell">
          <div class="key">书名</div>
          <div class="value">{{ currentBookData.title }}</div>
        </div>
        <div class="cell">
          <div class="key">作者</div>
          <div class="value">{{ currentBookData.author }}</div>
        </div>
        <div class="cell">
          <div class="key">出版时间</div>
          <div class="value">{{ currentBookData.date }}</div>
        </div>
        <div class="cell">
          <div class="key">出版社</div>
          <div class="value">{{ currentBookData.publisher }}</div>
        </div>
      </div>
      <div class="function">
        <div @click="addPlan" class="plan-btn">添加本书计划</div>
        <div @click="deleteBook" class="del-btn">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/views/TopNav'
export default {
  name: 'BookDetail',
  data () {
    return {
    }
  },
  created: function () {
    this.$store.dispatch('flashBooks')
  },
  computed: {
    id: function () {
      return this.$router.history.current.params.bookID
    },
    currentBookData: function () {
      const bid = this.id
      for (let book of this.$store.state.user.books) {
        if (book.id === parseInt(bid)) {
          return book
        }
      }
    }
  },
  methods: {
    async deleteBook () {
      await this.$store.dispatch('deleteBook', this.currentBookData.id)
      this.$router.push({
        path: '/books'
      })
    },
    addPlan () {
      console.log(`add ${this.currentBookData.id} plan`)
      this.$router.push({
        name: 'NewPlanWithBook',
        params: {
          bookid: this.currentBookData.id
        }
      })
    }
  },
  components: {
    TopNav
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/BookDetail.less';
</style>
