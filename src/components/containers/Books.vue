<template>
  <div class="books">
    <top-nav />
    <div class="container">
      <div class="bar-left"></div>
      <div class="bar-right"></div>

      <book-spine 
        :mainColor="'pink'"
        :title="'添加新书'"
        @clickEvent="addNewBook"
      />

      <template v-for="book in booksData">
        <book-spine 
          :mainColor="mainColor"
          :title="book.name"
          @clickEvent="goBookDetail(book.id)"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TopNav from '../views/TopNav'
import BookSpine from '../views/BookSpine'
export default {
  name: 'Books',
  data () {
    return {
      mainColor: '#a64',
      titles: ['骆驼祥子', '孔乙己', '三个火枪手', '基督山伯爵', '骆驼祥子', '孔乙己', '阿Q正传', '三个火枪手', '基督山伯爵', '骆驼祥子', '孔乙己', '阿Q正传', '三个火枪手', '基督山伯爵']
    }
  },
  created: function () {
    this.$store.dispatch('flashBooks')
  },
  methods: {
    ...mapActions([
      'addBook'
    ]),
    returnDesktop: function () {
      console.log('click')
      this.$router.push({
        path: '/'
      })
    },
    addNewBook: function () {
      this.$router.push({
        name: 'NewBook'
      })
    },
    goBookDetail: function (id) {
      this.$router.push({
        name: 'BookDetail',
        params: {
          bookID: id
        }
      })
    }
  },
  computed: {
    ...mapState({
      booksData: function (state) {
        return state.user.books
      }
    })
  },
  components: {
    TopNav,
    BookSpine
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/Books.less';
</style>
