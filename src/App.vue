<template>
  <div id="app">
    <transition name='fade'
                mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  components: {
  },
  beforeCreate () {
    this.$ui.loading.show()
  },
  mounted () {
    this.$ui.loading.hide()
    this.$router.replace({ path: '/main' })
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 100vw
  height 100vh
  background-size cover
  background-repeat no-repeat
</style>
