<template>
  <div class="home">
    <home-header class="g-header-container"/>
    <div></div>
    <div class="g-backtop-container"></div>
  </div>
</template>

<script>
import HomeHeader from './header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .home{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: $bgc-theme;
  }
</style>
