<template>
  <div class="common-header-box">
    <div @click="back"
         class="common-header-left">
      <i class="iconfont icon-fanhui1"></i>
    </div>
    <div v-if="options.type===1"
         class="common-header-center-title">
      <p>
        {{options.title}}
      </p>
    </div>
    <!-- 0 为搜索 -->
    <div v-if="options.type===0"
         class="common-header-center-box">
      <el-input placeholder="请输入内容"
                v-model="input"
                clearable>
      </el-input>
    </div>
    <div @click="emit"
         class="common-header-right">
      <i :class="options.ricon"></i>
    </div>
    <!-- <div v-show='sildBarShow' @click='cancleMask' class="header-mask">

      </div> -->
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    emit () {
      let that = this
      this.$emit('emitMe', that.input)
    }
  }
}
</script>
<style lang="stylus">
headerHeight = 50px
pHeight = 30px
.common-header-box
  display flex
  flex-direction row
  height headerHeight
  line-height headerHeight
  background baseColor
  color #fff
  p
    margin-block-start 0em
    margin-block-end 0em
    display inline
  .common-header-left
    flex 0 60px
    width 80px
    text-align center
    font-weight bold
    font-size 20px
  .common-header-center-title
    flex 1
    height 50px
    line-height 50px
    text-align center
    p
      height 50px
      line-height 50px
  .common-header-center-box
    flex 1
    text-align left
    display flex
    flex-direction column
    padding 10px
    line-height 30px
    .el-input__inner
      height 30px
      line-height 30px
  .common-header-right
    flex 0 60px
    width 80px
    text-align center
    font-weight bold
    font-size 22px
  .header-mask
    position fixed
    width 100%
    height 100%
    z-index 20
    top 0
    left 0
    background rgba(0, 0, 0, 0.5)
</style>
