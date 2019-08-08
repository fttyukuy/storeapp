<template>
  <div class="container">
    <div class="g-header-container">
      <category-home/>
    </div>
    <div class="g-content-container category">
      <div class="category-tab">
        <category-tab @switchTab = 'getTabId'/>
      </div>
      <div class="category-content">
        <category-content :curId='curId'/>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryHome from './header'
import CategoryTab from './tab'
import CategoryContent from './content'
export default {
  name: 'Category',
  components: {
    CategoryHome,
    CategoryTab,
    CategoryContent
  },
  data () {
    return {
      curId: ''
    }
  },
  methods: {
    getTabId (id) {
      this.curId = id
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .category{
    display: flex;
    flex-wrap: warp;
    width: 100%;
    height: 100%;
    &-tab{
      width: 25%;
      height: 100%;
    }
    &-content{
      flex: 1;
      height: 100%;
    }
  }

</style>
