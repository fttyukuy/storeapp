<template>
  <div class="mine-navbar">
    <div class="mine-navbar-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div class="mine-navbar-center" v-if="$slots.center">
      <slot name="center"></slot>
    </div>
    <div class="mine-navbar-right" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
    <div class="mine-navbar-title" v-if="title">
      <p class="mine-navbar-title-text">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeNavbar',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .mine-navbar{
    display: flex;
    align-items: center;
    width: 100%;
    height: $navbar-height;
    &-left{
      margin-left: 10px;
      ~ .mine-navbar-right{
        position: static;
      }
    }
    &-center{
      flex: 1;
      margin: 0 10px;
       ~ .mine-navbar-right{
        position: static;
      }
    }
    &-right{
      position: absolute;
      right: 0;
      margin-right: 10px;
    }
    &-title{
      position: absolute;
      width: 60%;
      height: 100%;
      left: 20%;
      @include flex-center();
      &-text{
        width: 100%;
        @include ellipsis();
        text-align: center;
        font-size: $icon-font-size-sm;
        line-height: 1.5em;
      }
    }
  }
</style>
