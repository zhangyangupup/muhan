<template>
  <div class="login">
    <div slot="header">
      <div class="header-box"></div>
    </div>
    <div slot="body">
      <div class="body-box">
        <p>登录</p>
        <div class="user-box"></div>
        <div class="pass-box"></div>
      </div>
    </div>
    <div slot="footer">
      <div class="footer-box">
        <button></button>
      </div>
    </div>
  </div>
</template>

<script>
import button from '../../components/ui-pc/button/button'
export default {
  components: {
    button
  }
}
</script>

<style lang="stylus">
.body-box
  background-color baseColor
  width 100%
  height 40px
</style>
