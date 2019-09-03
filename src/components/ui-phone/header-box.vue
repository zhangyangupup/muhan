<template>
  <div class="ui-header-box">
    <i @click="$router.go(-1)"
       class="iconfont icon-fanhui1"></i>
    <!-- 普通header -->
    <p v-if="type==='title'||!type">
      {{title}}
    </p>
    <!-- 搜索框header -->
    <p v-if="type==='search'">
      <!-- <i v-show="showClear"
         class="iconfont"></i> -->
      <input class="search-box"
             @input="inputChange"
             type="text"
             :value="inputValue"
             :placeholder="placeholder">
      <!-- <i @click="clearBox"
         v-if="showClear"
         class="iconfont icon-guanbi9 clear-icon"></i> -->
    </p>
    <i @click="searchClick"
       :class="rightIcon?'iconfont icon-sousuo':'iconfont'"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    searchClick: {
      type: Function,
      default: () => { console.log('sa') }
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'title' // search、 title
    },
    rightIcon: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputValue: '',
      showClear: false
    }
  },
  mounted () {
    this.inputValue = this.value
  },
  watch: {
    inputValue: function () {
      this.$emit('input', this.inputValue)
    }
  },
  methods: {
    inputChange (e) {
      this.$emit('input', e.target.value)
    },
    clearBox () {
      this.inputValue = ''
    }
  }
}
</script>

<style lang="stylus">
.ui-header-box
  height 50px
  line-height 50px
  display flex
  flex-direction row
  background baseColor
  i
    flex 0 3rem
    font-size 1.1rem
    color whiteFont
    font-weight 600
    cursor pointer
    transition all 0.2s linear
  i:active
    background-color $successcolor
    color #ccc
  p
    flex-grow 1
    letter-spacing 2px
    font-weight 600
    text-align center
    color whiteFont
    // display flex
    // flex-direction row
    .search-box
      height 70%
      min-width 60%
      // flex-grow 1
      color #222
      transition all 0.3s ease-in
    .search-box:focus
      min-width 80%
</style>
