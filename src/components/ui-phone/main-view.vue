<template>
  <!-- 视窗组件 -->
  <div class="ui-view-main">
    <!-- 头部 -->
    <div class="view-header-box">
      <slot name="header">
        header
      </slot>
    </div>
    <!-- 主题内容区 -->
    <div class="view-main-box">
      <slot name='body'>
        body
      </slot>
    </div>
    <!-- 页脚 -->
    <div class="view-footer-box">
      <slot name="footer">
        footer
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
  .view-footer-box
    flex 0 50px
</style>
