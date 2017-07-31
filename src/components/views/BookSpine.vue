<template>
  <div class="spine" @click="clickEvent">
    <div class="top" :style="{borderColor:mainColor}">
      <div class="stripe"></div>
    </div>
    <div class="main" :style="{backgroundColor:mainColor}">
      <div class="title fit">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookSpine',
  data () {
    return {
    }
  },
  mounted () {
    // var fy = fitty('.fit', {
    //   minSize: 16,
    //   maxSize: 32
    // })
  },
  props: {
    title: {
      type: String
    },
    mainColor: {
      type: String
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
 @import '../../styles/BookSpine.less';
</style>
