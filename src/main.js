import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'assets/scss/index.scss'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

fastclick.attach(document.body)
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('assets/imgs/error.png'),
  loading: require('assets/imgs/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
