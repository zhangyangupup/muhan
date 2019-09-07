<template>
  <div class="ui-cell-box">
    <i :class="'iconfont '+licon"></i>
    <p>{{text}}</p>
    <i v-if="haveRicon"
       :class="'iconfont '+ricon"></i>
  </div>
</template>

<script>
export default {
  props: {
    licon: {
      type: String,
      default: 'icon-zhifeiji'
    },
    text: {
      type: String,
      default: '标题'
    },
    ricon: {
      type: String,
      default: 'icon-jiantouyou'
    },
    haveRicon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus">
.ui-cell-box
  height 2rem
  line-height 2rem
  border-bottom 1px solid #eee
  display flex
  flex-direction row
  i
    flex 0 2rem
    color baseColor
  p
    flex-grow 1
    font-size 0.9rem
    color #444
    text-align left
</style>
