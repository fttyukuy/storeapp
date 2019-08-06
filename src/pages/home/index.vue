<template>
  <div class="home">
    <home-header class="g-header-container"/>
    <me-scroll>
       <home-slider/>
    </me-scroll>
    <div class="g-backtop-container"></div>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import MeScroll from 'base/scroll'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll
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
