<template>
  <div class="home-page">
    <!-- <h1>home</h1> -->
    <div class="home-header-box">
      <header-box />
    </div>
    <!-- body -->
    <div class="home-body-box">
      <transition name='fade'
                  mode="out-in">
        <router-view />
      </transition>
    </div>
    <!-- footer -->
    <div class="home-footer-box">
      <tabs-box :list="list" />
    </div>
  </div>
</template>

<script>
import HeaderBox from '../components/home-header'
import TabsBox from '../components/tabs'

export default {
  components: {
    HeaderBox,
    TabsBox
  },
  data () {
    return {
      list: [
        {
          text: '主页',
          icon: 'icon-shouye',
          path: 'main'
        },
        {
          text: '社区',
          icon: 'icon-shangchuan5',
          path: 'shequ'
        },
        {
          text: '功能',
          icon: 'icon-yingyong2',
          path: 'applications'
        },
        {
          text: '个人中心',
          icon: 'icon-switchuser',
          path: 'personal'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.home-page
  width 100vw
  height 100vh
  display flex
  flex-direction column
  .home-header-box
    flex 0 50px
  .home-body-box
    flex-grow 1
    background $backcolor
    display flex
    flex-direction column
  .home-footer-box
    border-top 1px solid #ccc
    flex 0 50px
</style>
