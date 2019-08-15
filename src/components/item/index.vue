<template>
  <div class="item">
    <span class='item-word' @click='handleClick'>{{word}}</span>
    <i class="iconfont" v-if="Cancel" @click='handleCancel'>&#xe70a;</i>
  </div>
</template>

<script>
export default {
  name: 'CItem',
  props: {
    Cancel: {
      type: Boolean,
      default: false
    },
    word: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('handleClick', this.word)
    },
    handleCancel () {
      this.$emit('handleCancel', this.word)
    }
  }
}
</script>

<style lang="scss" scoped>
  .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
    padding: 0 10px;
    font-size: 14px;
    &-word{
      flex: 1;
    }
  }
</style>
