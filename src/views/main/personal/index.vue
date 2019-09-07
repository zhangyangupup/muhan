<template>
  <div class="personal-content">
    <scroll-box>
      <h6>personal</h6>
      <img src="http://www.zhangyangupup.top/images/1.jpg"
           alt="">
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
.personal-content
  width 100%
  height 100%
  img
    width 100%
</style>
