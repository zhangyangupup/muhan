<template>
  <!-- 视窗组件 -->
  <div class="ui-view-main">
    <!-- 头部 -->
    <div v-if="header"
         class="view-header-box">
      <slot name="header">
      </slot>
    </div>
    <!-- 主题内容区 -->
    <div class="view-main-box">
      <slot name='body'>
      </slot>
    </div>
    <!-- 页脚 -->
    <div v-if="footer"
         class="view-footer-box">
      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: true
    },
    body: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus">
.ui-view-main
  width 100vw
  height 100vh
  display flex
  flex-direction column
  .view-header-box
    flex 0 50px
  .view-main-box
    flex 1
    display flex
    flex-direction column
  .view-main-box>div
    flex-grow 1
    overflow hidden
  .view-footer-box
    flex 0 50px
</style>
