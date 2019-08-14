<template>
  <div class="hot">
    <h3 class="hot-title">热门搜索</h3>
    <me-loading class="hot-loading" v-if='!hotList.length'/>
    <ul class="hot-list" v-else>
      <li class="hot-list-item" v-for="item in hotList" :key="item.num">{{item.hotWord}}</li>
    </ul>
  </div>
</template>

<script>
import {getSearchHot} from 'api/search'
import MeLoading from 'base/loading'
export default {
  name: 'SearchHot',
  components: {
    MeLoading
  },
  data () {
    return {
      hotList: []
    }
  },
  created () {
    this.getHot()
  },
  methods: {
    getHot () {
      return getSearchHot().then(data => {
        if (data) {
          console.log(data)
          this.hotList = data.owner
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .hot{
    width: 100%;
    background: #fff;
    padding: 10px;
    &-title{
      font-size: 16px;
      font-weight: 800;
      color: #000;
    }
    &-loading{
      margin: 40px 0;
    }
    &-list{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      &-item{
        padding: 10px;
        margin: 10px 10px 0 0;
        background: $bgc-theme;
        border-radius: 3px;
      }
    }
  }
</style>
