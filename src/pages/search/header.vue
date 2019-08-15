<template>
  <me-navbar class="header">
    <i class="iconfont header-scan" slot="left" @click="toBack">&#xe675;</i>
    <div class="header-search" slot="center">
      <i class="iconfont header-search-icon">&#xe665;</i>
      <input type="text" class="header-search-input" ref='input' v-model="query" placeholder="开学季有礼，好物3折起">
      <i class="iconfont header-search-cancel" v-show="query" @click="clear">&#xe714;</i>
    </div>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar'
import {debounce} from 'assets/js/debounce'
export default {
  name: 'SearchHeader',
  components: {
    MeNavbar
  },
  data () {
    return {
      query: ''
    }
  },
  mounted () {
    this.focus()
  },
  watch: {
    query: debounce(function () {
      this.$emit('handleQuery', this.query)
    })
  },
  methods: {
    toBack () {
      this.$router.back()
    },
    focus () {
      this.$refs.input && this.$refs.input.focus()
    },
    clear () {
      this.query = ''
    },
    reset () {
      this.clear()
      this.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '~assets/scss/mixins';
  .header{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid $icon-color;
  }
  .header-scan{
      color: $icon-color;
      font-size: $icon-font-size;
    }
    .header-search{
      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      border-radius: 15px;
      background:  $bgc-theme;
      &-icon{
        margin: 0 10px;
      }
      &-input{
        flex: 1;
        background: transparent;
      }
      &-cancel{
        margin-right: 10px;
      }
    }
</style>
