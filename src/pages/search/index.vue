<template>
   <transition  name="search" mode="out-in">
    <div class="search">
      <search-header @handleQuery='handleQuery'/>
      <me-scroll class="search-scroll">
        <div class="search-scroll-content" v-show='!query'>
          <search-hot @handleClick = 'handleClick'/>
          <search-history
            :historyList="historyList"
            @handleClick='handleClick'
            @handleCancel='handleCancel'
            @handleHistoryClear='handleHistoryClear'
          />
        </div>
        <div class="search-scroll-content" v-show='query'>
          <search-list :query="query"  @handleClick='handleClick'></search-list>
        </div>
      </me-scroll>
    </div>
  </transition>
</template>

<script>
import SearchHeader from './header'
import SearchHot from './hot'
import SearchHistory from './history'
import SearchList from './list'
import MeScroll from 'base/scroll'
import storage from 'assets/js/storage'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchHot,
    SearchHistory,
    MeScroll,
    SearchList
  },
  data () {
    return {
      historyList: [],
      query: ''
    }
  },
  created () {
    this.historyList = this.getHistoryList()
  },
  methods: {
    getHistoryList () {
      let historyList = storage.get('history')
      if (!historyList) {
        historyList = []
        storage.set('history', [])
      }
      return historyList
    },
    handleClick (word) {
      let historyList = storage.get('history')
      historyList = historyList.filter(val => val !== word)
      historyList.unshift(word)
      this.historyList = historyList
      storage.set('history', historyList)
      // location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q=${word}`
    },
    handleCancel (word) {
      let historyList = storage.get('history')
      historyList = historyList.filter(val => val !== word)
      this.historyList = historyList
      storage.set('history', historyList)
    },
    handleHistoryClear () {
      this.historyList = []
      storage.set('history', [])
    },
    handleQuery (val) {
      this.query = val
    }
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
    &-scroll-content{
      margin-bottom: 60px;
    }
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
