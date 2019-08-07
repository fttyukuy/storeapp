<template>
  <swiper :options="swiperOption" ref='swiper'>
    <div class="scroll-pull-down" v-if="pulldown">
      <me-loading inline :text="pullDownText" ref="pullDown"/>
    </div>
    <swiper-slide>
      <slot></slot>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper-slide>
    <div class="scroll-pull-up" v-if="pullup">
      <me-loading inline :text="pullUpText" ref="pullUp"/>
    </div>
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
  PULL_DOWN_TEXT_END,
  PULL_UP_HEIGHT,
  PULL_UP_TEXT_INIT,
  PULL_UP_TEXT_START,
  PULL_UP_TEXT_ING,
  PULL_UP_TEXT_END
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
      pulling: false
    }
  },
  // 为什么不用校验就可以根性滚动条。
  props: {
    data: {
      type: [Array, Object]
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
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
    // 供外部更新滚动条用
    update () {
      this.$refs.swiper && this.$refs.swiper.swiper.update()
    },
    init () {
      this.pullDownText = PULL_DOWN_TEXT_INIT
      this.pullUpText = PULL_UP_TEXT_INIT
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
          touchEnd: this.touchEnd,
          transitionEnd: this.scrollEnd
        }
      }
    },
    scroll () {
      if (this.pulling) return
      const swiper = this.$refs.swiper.swiper
      this.$emit('scroll', swiper.translate, swiper)
      if (swiper.translate > 0) {
        if (!this.pulldown) {
          return
        }
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          this.$refs.pullDown.setText(PULL_DOWN_TEXT_START)
        } else {
          this.$refs.pullDown.setText(PULL_DOWN_TEXT_INIT)
        }
      } else if (swiper.isEnd) {
        if (!this.pullup) return
        const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'))
        if (isPullUp) {
          this.$refs.pullUp.setText(PULL_UP_TEXT_START)
        } else {
          this.$refs.pullUp.setText(PULL_UP_TEXT_INIT)
        }
      }
    },
    scrollEnd () {
      const swiper = this.$refs.swiper.swiper
      this.$emit('scroll-end', swiper.translate, swiper, this.pulling)
    },
    scrollToTop (speed, runCallbacks) {
      this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks)
    },
    touchEnd () {
      if (this.pulling) return
      const swiper = this.$refs.swiper.swiper
      const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'))
      const translate = parseInt(swiper.$wrapperEl.css('height')) + PULL_UP_HEIGHT - swiper.height
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
      } else if (isPullUp) {
        this.pulling = true
        swiper.allowTouchMove = false// 禁止触摸
        swiper.setTranslate(-translate)
        swiper.params.virtualTranslate = true// 定住不给回弹
        this.$refs.pullUp.setText(PULL_UP_TEXT_ING)
        this.$emit('pullUp', this.pullUpEnd)
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
      setTimeout(() => {
        this.$emit('pull-down-transition-end')
      }, swiper.params.speed)
    },
    pullUpEnd () {
      this.pulling = false
      const swiper = this.$refs.swiper.swiper
      this.$refs.pullUp.setText(PULL_UP_TEXT_END)
      swiper.params.virtualTranslate = false
      swiper.allowTouchMove = true
      swiper.setTransition(swiper.params.speed)
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
  .scroll-pull-up{
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 50px;
  }
</style>
