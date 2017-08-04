<template>
  <div class="bookmark" @click="clickEvent">
    <!-- <div class="nail"></div>  -->
    <div class="header">{{ data.header }}</div>
    <div class="info">
      <div class="begin"><span>起</span>{{ data.begin }}</div>
      <div class="end"><span>止</span>{{ data.end }}</div>
      <div class="page"><span>页数</span>{{ data.page }}</div>
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
