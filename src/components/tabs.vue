<template>
  <div class="ui-tabs-box">
    <ul>
      <li @click="chooseThis(index,item)"
          v-for="(item,index) in list"
          :key="index"
          :class="chooseIndex==index?'choose-style':''">
        <i :class="'iconfont ' + item.icon"></i>
        <p>
          {{item.text}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => { }
    }
  },
  data () {
    return {
      chooseIndex: 0
    }
  },
  methods: {
    chooseThis (index, item) {
      this.chooseIndex = index
      this.$router.push({ name: item.path })
    }
  }
}
</script>

<style lang="stylus">
.ui-tabs-box
  display flex
  flex-direction row
  ul
    flex-grow 1
    display flex
    flex-direction row
    li
      flex 0 25%
      display flex
      flex-direction column
      cursor pointer
      transition all 0.3s
      border-radius 2px
      i
        height 30px
        line-height 30px
        font-size 1.5rem
      p
        height 20px
        font-size 0.8rem
        line-height 15px
    .choose-style
      color baseColor
      background-color #ddd
</style>
