<template>
  <me-navbar class="header">
    <div slot='center' class="header-search" @click='ToSearch'>
      <i class="iconfont header-search-icon">&#xe665;</i>
      <span class="header-search-text">开学季有礼，好物3折起</span>
    </div>
    <i class="iconfont header-msg" slot="right">&#xe7f3;</i>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar'
export default {
  name: 'CategoryHeader',
  components: {
    MeNavbar
  },
  methods: {
    ToSearch () {
      this.$router.push('/search')
    }
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
