<template>
  <!--
    全局提示toast组件
    使用this.$toast(options)
  -->
  <div :class="'ui-toast '+className">
    <i class="iconfont icon-jinggao2"></i>
    <p>
      {{text}}
    </p>
    <p v-show='showCounts'>{{count}}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'asas'
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showCounts: false,
      className: 'toast-default'
    }
  },
  mounted () {
    if (this.type === 'warning') {
      this.className = 'toast-warning'
    } else if (this.type === 'error') {
      this.className = 'toast-error'
    } else if (this.type === 'success') {
      this.className = 'toast-success'
    } else {
      this.className = 'toast-default'
    }
  },
  computed: {
    count: function () {
      let nodes
      this.$nextTick(() => {
        nodes = document.querySelectorAll('.ui-toast')
        nodes.forEach((ele, index) => {
          let toplen = 110 * (nodes.length - index)
          ele.style.transform = `translate(-50%,-${toplen}%)`
        })
      })
      return nodes
    }
  }
}
</script>

<style lang="stylus">
.ui-toast
  padding 3px 20px
  line-height 1.5rem
  min-width 40vw
  max-width 90vw
  font-size 0.9rem
  color #fff
  position fixed
  left 50%
  animation keyframes1 0.6s
  top 20%
  z-index 999
  text-align center
  border-radius 3px
  transition all 0.3s
  transform translate(-50%, -50%)
  display flex
  flex-direction row
  i, p
    height 30px
    line-height 30px
    text-align left
    flex-grow 1
.toast-default
  background-color rgba(89, 89, 89, 0.9)
.toast-success
  background-color rgba(82, 196, 26, 0.8)
.toast-error
  background-color rgba(229, 64, 79, 0.8)
.toast-warning
  background-color rgba(255, 142, 20, 0.8)
@keyframes keyframes1
  from
    top -50%
  to
    top 20%
</style>
