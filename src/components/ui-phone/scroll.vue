<template>
  <div class="mscroll-com">
    <div v-if="loading"
         class="bg-loading">
      <i class="iconfont icon-loading1"></i>
      <p>
        加载中...
      </p>
    </div>
    <div @touchstart="down"
         @touchmove="move"
         @touchend="end"
         id="page1mask"
         class="scroll-content">
      <!-- 加载图片 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      positionY: 0,
      loading: false
    }
  },
  methods: {
    /**
     * 组织浏览器滑动
     */
    default (e) {
      let node = document.getElementById('page1mask')
      node.addEventListener(
        'touchmove',
        function (e) {
          e.preventDefault()
        },
        { passive: false }
      )
    },
    down (e) {
      this.positionY = e.changedTouches[0].clientY
    },
    move (e) {
      if (e.changedTouches[0].clientY - this.positionY > 40 && e.changedTouches[0].clientY - this.positionY < 150) {
        let node = document.getElementById('page1mask')
        this.loading = true
        node.style.transform = `translateY(${e.changedTouches[0].clientY - this.positionY}px)`
      }
    },
    end (e) {
      let node = document.getElementById('page1mask')
      node.style.transform = `translateY(0px)`
      this.loading = false
    }
  }
}
</script>

<style lang="stylus">
.mscroll-com
  width 100%
  height 100%
  .scroll-content
    width 100%
    height 100%
    box-shadow -1px 0 10px #ccc
    // transform translateY(200px)
    transition all 0.3s linear
    background-color $bgcolor
  .bg-loading
    display block
    width 100%
    display flex
    flex-direction column
    position absolute
    text-align center
    i, p
      width 4rem
      line-height 4rem
      margin 0 auto
      color baseColor
    i
      font-size 1.5rem
      animation loadingKey 0.7s linear infinite
    p
      font-size 0.8rem
      line-height 1rem
@keyframes loadingKey
  0%
    transform rotate(360deg)
  100%
    transform rotate(0deg)
</style>
