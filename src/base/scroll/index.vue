<template>
  <swiper :options="swiperOption" ref='swiper'>
    <div class="scroll-pull-down" v-if="pulldown">
      <me-loading inline :text="pullDownText" ref="pullDown"/>
    </div>
    <swiper-slide>
      <slot></slot>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import MeLoading from 'base/loading'
import {
  PULL_DOWN_HEIGHT,
  PULL_DOWN_TEXT_INIT,
  PULL_DOWN_TEXT_START,
  PULL_DOWN_TEXT_ING,
  PULL_DOWN_TEXT_END
} from './config'
export default {
  name: 'MeScroll',
  components: {
    swiper,
    swiperSlide,
    MeLoading
  },
  data () {
    return {
      pulling: false,
      pullDownText: PULL_DOWN_TEXT_INIT
    }
  },
  // 为什么不用校验就可以根性滚动条。
  props: {
    data: {
      type: [Array, Object]
    },
    pulldown: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    data () {
      this.update()
    }
  },
  created () {
    this.init()
  },
  methods: {
    update () {
      this.$refs.swiper && this.$refs.swiper.swiper.update()
    },
    init () {
      this.swiperOption = {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd
        }
      }
    },
    scroll () {
      if (this.pulling) return
      const swiper = this.$refs.swiper.swiper
      if (swiper.translate > 0) {
        if (!this.pulldown) {
          return
        }
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          this.$refs.pullDown.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.pullDown.setText(PULL_DOWN_TEXT_INIT)
        }
      }
    },
    touchEnd () {
      if (this.pulling) return
      const swiper = this.$refs.swiper.swiper
      if (swiper.translate > PULL_DOWN_HEIGHT) {
        if (!this.pulldown) {
          return
        }
        this.pulling = true
        swiper.allowTouchMove = false// 禁止触摸
        swiper.setTranslate(PULL_DOWN_HEIGHT)
        swiper.params.virtualTranslate = true// 定住不给回弹
        this.$refs.pullDown.setText(PULL_DOWN_TEXT_ING)
        this.$emit('pullDown', this.pullDownEnd)
      }
    },
    pullDownEnd () {
      this.pulling = false
      const swiper = this.$refs.swiper.swiper
      this.$refs.pullDown.setText(PULL_DOWN_TEXT_END)
      swiper.params.virtualTranslate = false
      swiper.allowTouchMove = true
      swiper.setTransition(swiper.params.speed)
      swiper.setTranslate(0)
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
  .scroll-pull-down{
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 100%;
    height: 100px;
  }
</style>
