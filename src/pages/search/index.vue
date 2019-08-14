<template>
   <transition  name="search" mode="out-in">
    <div class="search">
      <search-header/>
      <search-hot/>
    </div>
  </transition>
</template>

<script>
import SearchHeader from './header'
import SearchHot from './hot'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchHot
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .search{
    position: absolute;
    z-index: $search-z-index;
    width: 100%;
    height: 100%;
    background: $bgc-theme;
  }
  .search-enter-active,
  .search-leave-active{
    transition: all .5s;
  }
  .search-enter,
  .search-leave-to{
    transform: translateX(100%);
  }
</style>
