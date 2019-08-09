<template>
  <div class="search">
    <search-header/>
  </div>
</template>

<script>
import SearchHeader from './header'
export default {
  name: 'Search',
  components: {
    SearchHeader
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
</style>
