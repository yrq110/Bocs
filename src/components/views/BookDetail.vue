<template>
  <div class="book">
    <top-nav />
    <div class="container">
      <div class="cover-page">
        <!-- {{ currentBookData }} page -->
        <img :src="currentBookData.cover" />
      </div>
      <div class="info-page">
        <template v-for="(value, key) in currentBookData.info">
          <div class="cell">
            <div class="key">{{ key }}</div>
            <div class="value">{{ value }}</div>
          </div>
        </template>
      </div>
      <div @click="deleteBook" class="delete">delete</div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/views/TopNav'
export default {
  name: 'BookDetail',
  data () {
    return {
      detail: {
        title: 'JavaScript'
      }
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
    deleteBook () {
      this.$store.dispatch('deleteBook', this.currentBookData.id)
      this.$router.push({
        path: '/books'
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
