<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <div class="recommmend-loading" v-if="!recommendList.length">
      <me-loading :inline = "true"/>
    </div>
    <ul class="recommend-list" v-else>
      <li class="recommend-item" v-for='(item, index) in recommendList' :key = 'index'>
        <router-link
          class="recommend-link"
          :to="{name: 'Product', params:{id: item.baseinfo.itemId}}"
        >
          <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew"></p>
          <p class="recommend-name">{{item.name.shortName}}</p>
          <p class="recommend-origPrice"><del>¥{{item.price.origPrice}}</del></p>
          <p class="recommend-info">
            <span class="recommend-price">¥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
            <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {getHomeRecommend} from 'api/home'
import MeLoading from 'base/loading'
export default {
  name: 'HomeRecommend',
  components: {
    MeLoading
  },
  data () {
    return {
      recommendList: [],
      curPage: 1,
      totalPage: 1
    }
  },
  created () {
    this.getRecommend()
  },
  methods: {
    update () {
      return this.getRecommend()
    },
    getRecommend () {
      if (this.curPage > this.totalPage) {
        return Promise.reject(new Error('没有更多数据了~~'))
      }
      return getHomeRecommend(this.curPage).then(data => {
        if (data) {
          this.curPage++
          this.totalPage = data.totalPage
          this.recommendList = this.recommendList.concat(data.itemList)
          this.$emit('updata', this.recommendList)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
  .recommend {
    &-title {
      position: relative;
      width: 100%;
      padding: 10px 0;
      font-size: $font-size-l;
      text-align: center;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: 40%;
        height: 1px;
        background-color: #ddd;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }

    &-list {
      @include flex-between();
      flex-wrap: wrap;
    }

    &-item {
      width: 49%;
      background-color: #fff;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
      margin-bottom: 8px;
    }

    &-link {
      display: block;
    }

    &-pic {
      position: relative;
      width: 100%;
      padding-top: 100%;
      margin-bottom: 5px;
    }

    &-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-name {
      height: 36px;
      padding: 0 5px;
      margin-bottom: 8px;
      line-height: 1.5;
      @include multiline-ellipsis();
    }

    &-origPrice {
      padding: 0 5px;
      margin-bottom: 8px;
      color: #ccc;
    }

    &-info {
      @include flex-between();
      padding: 0 5px;
      margin-bottom: 8px;
    }

    &-price {
      color: #e61414;
    }

    &-price-num {
      font-size: 20px;
    }

    &-count {
      color: #999;
    }
  }
  .recommmend-loading{
    padding-top: 100px;
  }
</style>
