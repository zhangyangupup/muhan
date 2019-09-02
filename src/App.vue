<template>
  <div id="app">
    <home />
  </div>
</template>
<script>
import Home from './views/home'
export default {
  components: {
    Home
  },
  mounted () {
    // this.$router.replace({ name: 'barConfig' })
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
