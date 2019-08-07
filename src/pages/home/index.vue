<template>
  <div class="home">
    <home-header class="g-header-container" :class="{headerTransition: isHeaderTransition}" ref='header'/>
    <me-scroll
      :data='recommends'
      @pullDown='downToRefresh'
      @pullUp='upToRefresh'
      @scroll-end='scrollEnd'
      @scroll='scroll'
      @pull-down-transition-end="pullDownTransitionEnd"
      ref='scroll'
      pulldown pullup
    >
       <home-slider ref='slider'/>
       <home-nav/>
       <home-recommend @updata='getRecommend' ref='recommend'/>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :isShow='isBacktop' @backtop='backtop'/>
    </div>
  </div>
</template>

<script>
import HomeHeader from './header'
import HomeSlider from './slider'
import MeScroll from 'base/scroll'
import HomeNav from './nav'
import HomeRecommend from './recommend'
import MeBacktop from 'base/backtop'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSlider,
    MeScroll,
    HomeNav,
    HomeRecommend,
    MeBacktop
  },
  data () {
    return {
      recommends: [],
      isBacktop: false,
      isHeaderTransition: false
    }
  },
  methods: {
    getRecommend (recommend) {
      this.recommends = recommend
    },
    // 下拉刷新
    downToRefresh (end) {
      this.$refs.slider.update().then(end)
    },
    // 上拉加载更多
    upToRefresh (end) {
      this.$refs.recommend.update().then(end).catch(err => {
        if (err) {
          console.log(err)
        }
      })
    },
    scroll (translate) {
      if (translate <= 0) {
        this.$refs.header.show()
        this.isHeaderTransition = -translate > 100
      } else {
        this.$refs.header.hide()
      }
    },
    // 下拉后延时显示头部
    pullDownTransitionEnd () {
      this.$refs.header.show()
    },
    scrollEnd (translate, scroll, pulling) {
      this.isBacktop = translate < 0 && -translate > scroll.height
      if (!pulling) {
        if (translate <= 0) {
          this.$refs.header.show()
        }
      }
      this.isHeaderTransition = -translate > 100
    },
    backtop () {
      this.$refs.scroll && this.$refs.scroll.scrollToTop()
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
