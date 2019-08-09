<template>
  <me-navbar class="header" v-show="showHeader">
    <i class="iconfont header-scan" slot="left">&#xe611;</i>
    <div class="header-search" slot="center" @click='ToSearch'>
      <i class="iconfont header-search-icon">&#xe665;</i>
      <span class="header-search-text">开学季有礼，好物3折起</span>
    </div>
    <i class="iconfont header-msg" slot="right">&#xe7f3;</i>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar'
export default {
  name: 'HomeHeader',
  components: {
    MeNavbar
  },
  data () {
    return {
      showHeader: true
    }
  },
  methods: {
    show () {
      this.showHeader = true
    },
    hide () {
      this.showHeader = false
    },
    ToSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
  .header{
    width: 100%;
    transition: background-color .5s;
  }
  .header-scan{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
    .header-search{
      flex: 1;
      display: flex;
      align-items: center;
      height: 30px;
      border-radius: 15px;
      background: #fff;
      &-icon{
        margin: 0 10px;
      }
    }
    .header-msg{
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
    .headerTransition{
      background-color: $header-bgc-translucent;
    }
</style>
