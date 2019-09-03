<template>
  <div class="page-search">
    <view-box :footer='footer'>
      <!-- header -->
      <div slot='header'
           class="search-header">
        <header-box type='search'
                    :searchClick="searchClick"
                    v-model="inputValue" />
      </div>
      <!-- body -->
      <div slot="body"
           class="search-body-box">
        <no-data />
      </div>
    </view-box>
  </div>
</template>

<script>
import HeaderBox from '../../components/ui-phone/header-box'
import ViewBox from '../../components/ui-phone/main-view'
import NoData from '../../components/ui-phone/no-data'
export default {
  components: {
    HeaderBox,
    ViewBox,
    NoData
  },
  data () {
    return {
      footer: false,
      inputValue: ''
    }
  },
  watch: {
    inputValue: function () {
      console.log(this.inputValue)
    }
  },
  methods: {
    searchClick () {
      console.log('这是搜索键')
      console.log(this.inputValue)
    }
  }
}
</script>

<style lang="stylus"></style>
