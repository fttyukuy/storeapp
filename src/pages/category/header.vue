<template>
  <me-navbar class="header">
    <div slot='center' class="header-search">搜索</div>
    <i class="iconfont header-msg" slot="right">&#xe7f3;</i>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar'
export default {
  name: 'CategoryHeader',
  components: {
    MeNavbar
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .header{
    width: 100%;
    background: $header-bgc-translucent;
    .header-search{
      flex: 1;
      display: flex;
      align-items: center;
      height: 30px;
      border-radius: 15px;
      background: #fff;
      text-indent: 10px;
    }
    .header-msg{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
