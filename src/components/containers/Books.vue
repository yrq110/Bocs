<template>
  <div class="books">
    <div class="container">
      <div class="bar-left"></div>
      <div class="bar-right"></div>
      <book-spine 
        :mainColor="'pink'"
        :bookTitle="'读书计划'"
      />
      <book-spine 
        :mainColor="'pink'"
        :bookTitle="'添加新书'"
      />
      <template v-for="title in titles">
        <book-spine 
          :mainColor="mainColor"
          :bookTitle="title"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BookSpine from '../views/BookSpine'
export default {
  name: 'Books',
  data () {
    return {
      mainColor: '#a64',
      // title: 'text',
      titles: ['骆驼祥子', '孔乙己', '三个火枪手', '基督山伯爵', '骆驼祥子', '孔乙己', '阿Q正传', '三个火枪手', '基督山伯爵', '骆驼祥子', '孔乙己', '阿Q正传', '三个火枪手', '基督山伯爵']
    }
  },
  methods: {
    ...mapActions([
      'addBook'
    ])
  },
  components: {
    BookSpine
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/Books.less';
</style>
