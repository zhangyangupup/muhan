<template>
  <div class="main-page">
    <view-box>
      <!-- header 插槽-->
      <common-header slot='header' />
      <!-- body 插槽-->
      <div slot="body">
        <transition name='main'
                    mode='out-in'>
          <router-view />
        </transition>
      </div>
      <!-- footer 插槽-->
      <tabs-box slot="footer"
                :list='list' />
    </view-box>
  </div>
</template>

<script>
import CommonHeader from '../../components/ui-phone/home-header'
import TabsBox from '../../components/ui-phone/tabs'
import ViewBox from '../../components/ui-phone/main-view'
export default {
  components: {
    ViewBox,
    CommonHeader,
    TabsBox
  },
  data () {
    return {
      list: [
        {
          text: '主页',
          icon: 'icon-shouye',
          path: ''
        },
        {
          text: '社区',
          icon: 'icon-shangchuan5',
          path: 'community'
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

<style lang="stylus"></style>
