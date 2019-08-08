<template>
  <me-scroll :isScrollBar="false">
    <ul>
      <li
        class="tab-item"
        :class="{'tab-item-active': curId === item.id}"
        v-for="item in items"
        :key="item.id"
        @click='switchTab(item.id)'
      >{{item.name}}</li>
    </ul>
  </me-scroll>
</template>

<script>
import MeScroll from 'base/scroll'
import {categoryNames} from './config'
export default {
  name: 'CategoryTab',
  components: {
    MeScroll
  },
  data () {
    return {
      curId: ''
    }
  },
  created () {
    this.init()
    this.switchTab(this.items[0].id)
  },
  methods: {
    init () {
      this.items = categoryNames
    },
    switchTab (id) {
      if (this.curId === id) return
      this.curId = id
      this.$emit('switchTab', id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
  .tab-item{
    width: 100%;
    padding: 15px 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
    font-size: $font-size-l;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
  .tab-item-active{
    background: none;
    color: $link-active-color;
  }
</style>
