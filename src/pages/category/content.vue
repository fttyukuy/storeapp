<template>
  <div class="container">
    <div class="loading-wrapper" v-if="isLoading">
      <div class="loading-container">
         <me-loading class="loading"/>
      </div>
    </div>
    <me-scroll hasScrollBar v-if="contents" ref="scroll" @scroll-end="scrollEnd">
      <div class="content">
        <section v-if="contents" class="content-banner">
          <a :href="contents.banner.linkUrl" class="content-banner-link">
            <img v-lazy="contents.banner.picUrl" class="content-banner-img">
          </a>
        </section>
        <section
          class="content-section"
          v-for="(section, index) in contents.data"
          :key="index"
        >
          <h3 class="content-section-title">{{section.name}}</h3>
          <ul class="content-list">
            <li
            class="content-list-item"
            v-for="(item,id) in section.itemList"
            :key="id"
            >
              <a :href="item.linkUrl" class="content-list-item-link">
                <div class="content-list-item-img">
                  <img v-lazy="item.picUrl" class="img">
                </div>
                <span class="content-list-item-name">{{item.name}}</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </me-scroll>
    <div class="g-backtop-container backtop-wrapper">
      <me-backtop :isShow="isBacktop" @backtop="backtop"/>
    </div>
  </div>
</template>

<script>
import {getCategoryContent} from 'api/category'
import { CATEGORY_CONTENT_KEY, CATEGORY_CONTENT_UPDATE_TIME_INTERVAL } from './config'
import storage from 'assets/js/storage'
import MeScroll from 'base/scroll'
import MeLoading from 'base/loading'
import MeBacktop from 'base/backtop'
export default {
  name: 'CategoryContent',
  components: {
    MeScroll,
    MeLoading,
    MeBacktop
  },
  data () {
    return {
      contents: null,
      isLoading: true,
      isBacktop: false
    }
  },
  props: {
    curId: {
      type: String,
      default: ''
    }
  },
  // created () {
  //   this.getContent(this.curId)
  // },
  methods: {
    getContent (id) {
      let contents = storage.get(CATEGORY_CONTENT_KEY)
      let updateTime = 0
      let curTime = new Date().getTime()
      console.log(contents)
      if (contents && contents[id]) {
        updateTime = contents[id].updateTime || 0
        if (curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL) {
          this.contents = contents[id]
          this.backtop()
        } else {
          this.getHttpContent().then(() => {
            this.setStorage(CATEGORY_CONTENT_KEY, id, this.contents, curTime)
          })
        }
      } else {
        this.getHttpContent().then(() => {
          this.setStorage(CATEGORY_CONTENT_KEY, id, this.contents, curTime)
        })
      }
    },
    getHttpContent () {
      if (this.curId) {
        return getCategoryContent(this.curId).then(data => {
          if (data) {
            this.contents = data
            this.backtop()
          }
        })
      }
    },
    setStorage (key, id, content, curTime) {
      let contents = storage.get(key)
      if (!contents) contents = {}
      contents[id] = content
      contents[id].updateTime = curTime
      storage.set(key, contents)
    },
    backtop () {
      this.$refs.scroll && this.$refs.scroll.scrollToTop()
    },
    scrollEnd (translate) {
      if (-translate > 100) {
        this.isBacktop = true
      } else {
        this.isBacktop = false
      }
    }
  },
  watch: {
    curId (curId) {
      this.isLoading = true
      this.getContent(curId)
    },
    contents () {
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/mixins';
  .container{
    // width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .loading-wrapper{
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    .loading-container{
      @include flex-center();
      width: 100%;
      height: 100%;
      .loading{
        width: 100px;
        height: 80px;
        border-radius: 5px;
        background: rgba(0, 0, 0, .1);
        color: #fff;
      }
    }
  }
  .backtop-wrapper{
    bottom: 10px;
  }
  .content{
    padding: 0 10px;
    &-banner{
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 34%;
      margin: 10px 0;
      &-link{
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
      }
      &-img{
        width: 100%;
        height: 100%;
      }
    }
    .content-section{
      width: 100%;
      margin-top: 10px;
      &-title{
        font-weight: 500;
        color: #000;
        line-height: 2.5;
      }
    }
    .content-list{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      background: #fff;
      &-item{
        width: 33%;
        margin: 15px 0;
        &-link{
          @include flex-center(column);
          width: 100%;
        }
        &-img{
          position: relative;
          overflow: hidden;
          width: 70%;
          height: 0;
          padding-top: 70%;
          .img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
        }
        &-name{
          margin-top: 10px;
        }
      }
    }
  }
</style>
