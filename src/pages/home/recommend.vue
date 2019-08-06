<template>
  <div class="recommend">
    recommend
  </div>
</template>

<script>
import {getHomeRecommend} from 'api/home'
export default {
  name: 'HomeRecommend',
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
    getRecommend () {
      if (this.curPage > this.totalPage) {
        return
      }
      getHomeRecommend(this.curPage).then(data => {
        console.log(data)
        if (data) {
          this.curPage++
          this.totalPage = data.totalPage
          this.recommendList = this.recommendList.concat(data.itemList)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
