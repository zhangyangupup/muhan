<template>
  <div @click="emt"
       :style="option.style"
       :class="option.trantion?'component-cell-box frame-cell':'component-cell-box'">
    <div class="cell-box-header">
      <i :class="option.leftIcon"></i>
      <i v-if="option.isRicon"
         :class="option.rightIcon"></i>
      <p class="title">{{option.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    emt () {
      this.$emit('qwe', '111')
    }
  }
}
</script>
<style lang="stylus">
cellHeight = 50px
textColor = #666
.component-cell-box
  overflow hidden
  height cellHeight
  line-height cellHeight
  background #fff
  .cell-box-header
    height 100%
    display flex
    flex-direction row
    i
      flex 0 60px
      text-align center
      color baseColor
    i:nth-child(1)
      order 0
      font-size 20px
    i:nth-child(2)
      order 2
      color textColor
    .title
      order 1
      font-size 15px
      font-family 'sxzh'
      color textColor
      letter-spacing 1px
      flex-grow 1
      text-align left
</style>
