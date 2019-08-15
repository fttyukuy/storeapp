<template>
  <div class="list">
    <div class="list-loading" v-if="isLoading">
      <me-loading/>
    </div>
    <div v-else>
      <ul v-if='result.length'>
        <li v-for="(item, index) in result" :key="index">
          <c-item :word='item[0]' @handleClick='handleClick'/>
        </li>
      </ul>
      <p class="list-info" v-else>没有搜索到结果</p>
    </div>
  </div>
</template>

<script>
import {getSearchResult} from 'api/search'
import CItem from 'components/item'
import MeLoading from 'base/loading'
export default {
  name: 'searchList',
  components: {
    CItem,
    MeLoading
  },
  data () {
    return {
      result: [],
      isLoading: false
    }
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  methods: {
    getResult () {
      this.isLoading = true
      getSearchResult(this.query).then(data => {
        this.result = data
        this.isLoading = false
      })
    },
    handleClick (word) {
      this.query = ''
      this.$emit('handleClick', word)
    }
  },
  watch: {
    query: function () {
      this.getResult()
    }
  }
}
</script>

<style lang="scss" scoped>
  .list{
    background: #fff;
    &-loading{
      padding: 40px 0;
    }
    &-info{
      text-align: center;
      padding: 40px 0;
    }
  }
</style>
