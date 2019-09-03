<template>
  <div :style="styles"
       class="no-data">
    <i class="iconfont icon-pingjia"></i>
  </div>
</template>
<script>
export default {
  props: {
    styles: {
      style: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus">
.no-data
  text-align center
  display flex
  flex-direction row
  line-height 80px
  width 100%
  height 100%
  i
    flex-grow 1
    font-size 40px
    color #ccc
</style>
