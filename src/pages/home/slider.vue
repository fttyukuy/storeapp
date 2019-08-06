<template>
  <div class="home-slider">
    <me-slider
      :direction='direction'
      :interval= 'interval'
      :loop:='loop'
      :pagination='pagination'
      :data = 'sliders'
      v-if='sliders.length'
    >
      <swiper-slide v-for= "(item, index) in sliders" :key = "index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
    <me-loading v-else/>
  </div>
</template>

<script>
import {swiperSlide} from 'vue-awesome-swiper'
import MeSlider from 'base/slider'
import {sliderOptions} from './config'
import MeLoading from 'base/loading'
export default {
  name: 'HomeSlider',
  components: {
    swiperSlide,
    MeSlider,
    MeLoading
  },
  props: {
    sliders: Array
  },
  data () {
    return {
      direction: sliderOptions.direction,
      interval: sliderOptions.interval,
      loop: sliderOptions.loop,
      pagination: sliderOptions.pagination
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-slider{
    width: 100%;
    height: 183px;
  }
  .slider-link{
    display: block;
    width: 100%;
    height: 100%;
    .slider-img{
      width: 100%;
      height: 100%;
    }
  }
</style>
