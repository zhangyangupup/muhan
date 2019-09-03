<template>
  <div class="common-header-box">
    <div @click="changeSildBar"
         class="common-header-left">
      <i class="iconfont icon-liebiao2"></i>
    </div>
    <div class="common-header-center">
      <p>{{title}}</p>
      <p>{{word}}</p>
    </div>
    <div @click="searchPage"
         class="common-header-right">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <!-- sild bar -->
    <div :class="sildBarShow?'sild-bar shild-bar-show':'sild-bar'">
      <!-- sild header -->
      <div class="sild-headr-box">
        <div></div>
        <div class="sild-center-box">
          <p>应用木函</p>
          <p>Hello World, Hello Yourself!</p>
        </div>
        <div>
        </div>
      </div>
      <!-- my account -->
      <div @click="goToPage(account[0].path)"
           class="header-cell-box">
        <i :class="account[0].icon"></i>
        <p>{{account[0].title}}</p>
      </div>
      <div v-for="(item2, index2) in cells"
           :key='index2'
           @click="goToPage(item2.path)"
           class="header-cells-box">
        <i :class="item2.icon"></i>
        <p>{{item2.title}}</p>
      </div>
    </div>
    <div v-show='sildBarShow'
         @click='cancleMask'
         class="header-mask">

    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '一只木函'
    },
    word: {
      type: String,
      default: '枕上诗书闲处好，门前风景雨来佳'
    }
  },
  data () {
    return {
      sildBarShow: false,
      account: [{
        title: '我的账户',
        path: '',
        icon: 'iconfont icon-switchuser'
      }],
      cells: [
        {
          title: '全部应用',
          path: '',
          icon: 'iconfont icon-text'
        },
        {
          title: '添加快捷方式',
          path: '',
          icon: 'iconfont icon-zhifeiji'
        },
        {
          title: '设置',
          path: '',
          icon: 'iconfont icon-webduanmobancaozuo_shezhi'
        },
        {
          title: '关于',
          path: '',
          icon: 'iconfont icon-shuoming'
        },
        {
          title: '退出',
          path: '',
          icon: 'iconfont icon-poweroff'
        }
      ]
    }
  },
  methods: {
    changeSildBar () {
      this.sildBarShow = !this.sildBarShow
    },
    cancleMask () {
      this.sildBarShow = !this.sildBarShow
    },
    searchPage () {
      this.$router.push({ name: 'SearchPage' })
    },
    goToPage (path) {
      // this.$message('功能暂未开放，敬请期待...')
      // this.$ui.toast('暂不提供此功能')
      this.$ui.notice('暂不提供此功能', 'warning')
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
  .common-header-center
    flex 1
    text-align left
    display flex
    flex-direction column
    p
      flex 1
      font-size 1rem
      height 30px
      line-height 30px
    p:nth-child(2)
      height 20px
      line-height 20px
      font-size 0.7rem
  .common-header-right
    flex 0 60px
    width 80px
    text-align center
    font-weight bold
    font-size 20px
  .sild-bar
    z-index 22
    position absolute
    top 0px
    width 200px
    background rgb(248, 248, 248)
    left -200px
    height 100%
    transition left 0.3s ease-in-out
    .sild-headr-box
      height 25%
      display flex
      flex-direction column
      background linear-gradient(baseColor, baseColor, #F8F8F8)
      overflow hidden
      div:nth-child(1)
        flex 1
      div:nth-child(2)
        flex 1
        display flex
        flex-direction column
        p
          line-height 20px
          padding 3px 10px
          letter-spacing 2px
          text-align left
        p:nth-child(1)
          font-family 'sxzh'
          font-weight bold
          font-size 20px
        p:nth-child(2)
          font-size 12px
      div:nth-child(3)
        flex 0 60px
    .header-cell-box
      color wordColor
      height 40px
      line-height 40px
      text-align left
      padding-left 20px
      border-bottom 1px solid #ccc
      i
        font-size 18px
        position relative
        top 2px
      p
        font-size 14px
        padding-left 10px
    .header-cells-box
      color wordColor
      height 50px
      line-height 50px
      text-align left
      padding-left 20px
      i
        font-size 18px
        position relative
        top 2px
      p
        font-size 14px
        padding-left 10px
  .shild-bar-show
    left 0px
    width 200px
    transition left 0.3s ease-in-out
  .header-mask
    position fixed
    width 100%
    height 100%
    z-index 20
    top 0
    left 0
    background rgba(0, 0, 0, 0.5)
</style>
