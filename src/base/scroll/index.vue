<template>
  <swiper :options="swiperOption" ref='swiper'>
    <swiper-slide>
      <slot>MeScroll</slot>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'MeScroll',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        }
      }
    }
  },
  // 为什么不用校验就可以根性滚动条。
  props: {
    data: {
      type: [Array, Object]
    }
  },
  watch: {
    data () {
      this.update()
    }
  },
  methods: {
    update () {
      this.$refs.swiper && this.$refs.swiper.swiper.update()
    }
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container,.swiper-wrapper{
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .swiper-slide{
    height: auto;
  }
</style>
