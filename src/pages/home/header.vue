<template>
  <div class="header">
    <i class="iconfont header-scan">&#xe611;</i>
    <div class="header-search">
      <i class="iconfont header-search-icon">&#xe665;</i>
      <span class="header-search-text">开学季有礼，好物3折起</span>
    </div>
    <i class="iconfont header-msg">&#xe7f3;</i>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .header{
    display: flex;
    align-items: center;
    width: 100%;
    height: $navbar-height;
    &-scan{
      margin-left: 10px;
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
    &-search{
      flex: 1;
      display: flex;
      align-items: center;
      height: 30px;
      border-radius: 15px;
      background: #fff;
      margin: 0 10px;
      &-icon{
        margin: 0 10px;
      }
    }
    &-msg{
      margin-right: 10px;
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }

</style>
