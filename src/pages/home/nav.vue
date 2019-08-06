<template>
  <div class="nav">
    <div class="nav-item" v-for="(item, index) in navs" :key="index">
      <a :href="item.linkUrl" class="nav-item-link">
        <img :src="item.picUrl" alt="icon" class="nav-item-img">
        <span class="nav-item-text">{{item.text}}</span>
      </a>
    </div>
  </div>
</template>

<script>
import {navItems} from './config'
export default {
  name: 'HomeNav',
  created () {
    this.navs = navItems
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .nav{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 15px;
    background: #fff;
    &-item{
      width: 20%;
      padding-bottom: 15px;
      &-link{
        @include flex-center(column);
      }
      &-img{
        width: 60%;
      }
      &-text{
        margin-top: 5px;
        font-size: $font-size-l;
      }
    }
  }
</style>
