<template>
  <div class="home">
    <home-header class="g-header-container"/>
    <div>
      <home-slider :sliders = 'sliders'/>
    </div>
    <div class="g-backtop-container"></div>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import {getHomeSlider} from 'api/home.js'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider
  },
  data () {
    return {
      sliders: []
    }
  },
  created () {
    this.getSlider()
  },
  methods: {
    getSlider () {
      getHomeSlider().then(data => {
        console.log(data)
        this.sliders = data
      })
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
