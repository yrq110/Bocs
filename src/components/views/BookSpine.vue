<template>
  <div class="spine">
    <div class="top" :style="{borderColor:mainColor}">
      <div class="stripe"></div>
    </div>
    <div class="main" :style="{backgroundColor:mainColor}">
      <div class="title">{{ bookTitle }}</div>
    </div>
  </div>
</template>

<script>
// import store from '@/store'
// import { mapState } from 'vuex'
export default {
  name: 'BookSpine',
  data () {
    return {
    }
  },
  props: {
    bookTitle: {
      type: String,
      default: 'null'
    },
    mainColor: {
      type: String
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/BookSpine.less';
</style>
