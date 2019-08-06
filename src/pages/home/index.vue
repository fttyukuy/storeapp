<template>
  <div class="home">
    <home-header class="g-header-container"/>
    <me-scroll :data='recommends'>
       <home-slider/>
       <home-nav/>
       <home-recommend @updata='getRecommend'/>
    </me-scroll>
    <div class="g-backtop-container"></div>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import MeScroll from 'base/scroll'
import HomeNav from './nav'
import HomeRecommend from './recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend
  },
  data () {
    return {
      recommends: []
    }
  },
  methods: {
    getRecommend (recommend) {
      this.recommends = recommend
    }
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
