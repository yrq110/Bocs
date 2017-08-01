<template>
  <div class="bookmark" @click="clickEvent">
    <!-- <div class="nail"></div>  -->
    <div class="header">{{ data.header }}</div>
    <div class="info">
      <div class="begin"><span>起</span>{{ data.begin }}</div>
      <div class="end"><span>止</span>{{ data.end }}</div>
      <div class="page"><span>页数</span>{{ data.page }}</div>
      <div class="rate"><span>已读</span>{{ data.rate }}</div>
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
  props: {
    data: {
      type: Object,
      default: {
        header: '南',
        begin: '2017-7-09',
        end: '2017-7-22',
        page: '67',
        rate: '50%'
      }
    }
  },
  methods: {
    clickEvent: function () {
      this.$emit('clickEvent')
    }
  }
}
</script>

<style lang="less" scoped>
 @import '../../styles/PlanBookMark.less';
</style>
