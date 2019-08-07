<template>
  <transition name="me-backtop">
    <div class="backtop" v-show="isShow" @click="handleBT">
      <i class="iconfont backtop-icon">&#xe633;</i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MeBacktop',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleBT () {
      this.$emit('backtop')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .backtop{
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    &-icon{
      font-size: 30px;
      color: #fff;
    }
  }
  .me-backtop{
    &-enter-active,
    &-leave-active{
      transition: opacity .4s
    }
    &-enter,&-leave-to{
      opacity: 0;
    }
  }
</style>
