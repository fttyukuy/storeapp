<template>
  <div class="history" v-if='historyList.length'>
    <h3 class="history-title">历史搜索</h3>
    <ul>
      <li v-for="(item, index) in historyList" :key="index">
        <c-item cancel :word='item' @handleClick='handleClick' @handleCancel='handleCancel'/>
      </li>
    </ul>
    <div class="history-clear" @click='handleClear'>
      <i class="iconfont">&#xe61c;</i>
      <span>清空历史搜索</span>
    </div>
  </div>
</template>

<script>
import CItem from 'components/item'
export default {
  name: 'SearchHistory',
  components: {
    CItem
  },
  props: {
    historyList: Array
  },
  methods: {
    handleClick (word) {
      this.$emit('handleClick', word)
    },
    handleCancel (word) {
      this.$emit('handleCancel', word)
    },
    handleClear () {
      this.$emit('handleHistoryClear')
    }
  }
}
</script>

<style lang="scss" scoped>
  .history{
    width: 100%;
    background: #fff;
    margin-top: 10px;
    padding: 10px 0;
    &-title{
      font-size: 16px;
      font-weight: 800;
      color: #000;
      padding-left: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f5f5f5;
    }
    &-clear{
      width: 60%;
      margin: 10px auto;
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      line-height: 2.5;
      text-align: center;

    }
  }
</style>
