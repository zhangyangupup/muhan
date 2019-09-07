<template>
  <div class="main-home-content">
    <scroll-box>
      <div class="content">
        <!-- BANNER -->
        <div class="banner-img-box">
          <img :src="imgSrc"
               alt="">
        </div>
        <!--  -->
        <div class="content-bottom-box">
          <cell-box text="精选" />
        </div>
      </div>
    </scroll-box>
  </div>
</template>

<script>
import ScrollBox from '../../../components/ui-phone/scroll'
import CellBox from '../../../components/ui-phone/cellBox'
export default {
  components: {
    ScrollBox,
    CellBox
  },
  data () {
    return {
      imgSrc: 'http://www.zhangyangupup.top/images/8.png'
    }
  }
}
</script>

<style lang="stylus">
.main-home-content
  width 100%
  height 100%
  // background-color #ddd
  .content-bottom-box
    padding 0 10px
  .banner-img-box
    img
      width 100%
</style>
