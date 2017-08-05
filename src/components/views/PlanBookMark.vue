<template>
  <div class="bookmark" @click="clickEvent">
    <!-- <div class="nail"></div>  -->
    <div class="header">{{ data.header }}</div>
    <div class="info">
      <div class="begin">起于  {{ data.begin }}</div>
      <div class="end">止于  {{ data.end }}</div>
      <div class="page">页数  {{ data.page }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanBookMark',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.data)
  },
  props: {
    data: Object
  },
  methods: {
    clickEvent () {
      this.$emit('clickEvent')
    },
    getFirstLetter (str) {
      return str.slice(0, 1)
    }
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/PlanBookMark.less';
</style>
