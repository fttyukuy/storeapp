<template>
  <div class="g-tabbar">
    <router-link to='/home' class="g-tabbar-item">
      <i class="iconfont g-tabbar-item-icon">&#xe627;</i>
      <span class="g-tabbar-item-title">首页</span>
    </router-link>
    <router-link to='/category' class="g-tabbar-item">
      <i class="iconfont g-tabbar-item-icon">&#xe7f9;</i>
      <span class="g-tabbar-item-title">分类</span>
    </router-link>
    <router-link to='/car' class="g-tabbar-item">
      <i class="iconfont g-tabbar-item-icon">&#xe606;</i>
      <span class="g-tabbar-item-title">购物车</span>
    </router-link>
    <router-link to='/personal' class="g-tabbar-item">
      <i class="iconfont g-tabbar-item-icon">&#xe610;</i>
      <span class="g-tabbar-item-title">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CTabbar'
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .router-link-active{
    color: $link-active-color;
  }
</style>
