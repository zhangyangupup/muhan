<template>
  <div class="main-home-content">
    <scroll-box>
      <div class="content">
        <p>下拉测试滚动组件</p>
      </div>
    </scroll-box>
  </div>
</template>

<script>
import ScrollBox from '../../../components/ui-phone/scroll'
export default {
  components: {
    ScrollBox
  }
}
</script>

<style lang="stylus">
.main-home-content
  width 100%
  height 100%
  p
    line-height 3rem
</style>
