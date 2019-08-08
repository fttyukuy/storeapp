<template>
  <div class="loading" :class="{'loading-inline':inline}">
    <span class="loading-icon" v-if="icon==='on'">
      <slot><img src="./loading.gif" alt="loading"/></slot>
    </span>
    <span class="loading-text" v-if="loadingText">{{loadingText}}</span>
  </div>
</template>

<script>
export default {
  name: 'MeLoading',
  props: {
    icon: {
      type: String,
      default: 'on',
      validator (value) {
        return ['on', 'off'].indexOf(value) > -1
      }
    },
    text: {
      type: String,
      default: '加载中。。。'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loadingText: this.text
    }
  },
  watch: {
    text (text) {
      this.loadingText = text
    }
  },
  methods: {
    setText (text) {
      this.loadingText = text
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .loading{
    overflow: hidden;
    height: 100%;
    width: 100%;
    @include flex-center(column);
    &.loading-inline{
      flex-direction: row;
      .loading-icon ~ .loading-text{
        margin-top: 0;
        margin-left: 10px;
      }
    }
    &-icon ~ &-text{
      margin-top: 6px;
    }
  }
</style>
