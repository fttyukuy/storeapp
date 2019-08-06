import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('pages/home')
    }, {
      path: '/category',
      name: 'Category',
      component: () => import('pages/category')
    }, {
      path: '/car',
      name: 'Car',
      component: () => import('pages/car')
    }, {
      path: '/personal',
      name: 'Personal',
      component: () => import('pages/personal')
    }, {
      path: '*',
      redirect: '/home'
    }, {
      path: '/product/:id',
      name: 'Product',
      component: () => import('pages/product')
    }
  ]
})
