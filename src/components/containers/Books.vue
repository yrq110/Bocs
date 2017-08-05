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
          :title="book.title"
          @clickEvent="goBookDetail(book.id)"
        />
      </template>
    </div>
  </div>
</template>

<script>
// import RGBaster from 'rgbaster'
import { mapActions, mapState } from 'vuex'
import TopNav from '../views/TopNav'
import BookSpine from '../views/BookSpine'
export default {
  name: 'Books',
  data () {
    return {
      colorArr: ['#b64', '#ff9', '#ffc', '#ea5', '#964', '#feb']
    }
  },
  created: function () {
    this.$store.dispatch('flashBooks')
  },
  methods: {
    ...mapActions([
      'addBook'
    ]),
    returnDesktop () {
      // console.log('click')
      this.$router.push({
        path: '/'
      })
    },
    addNewBook () {
      this.$router.push({
        name: 'NewBook'
      })
    },
    goBookDetail (id) {
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
    }),
    mainColor () {
      let color = this.colorArr[Math.floor(Math.random() * this.colorArr.length)]
      // console.log(color)
      return color
    }
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
