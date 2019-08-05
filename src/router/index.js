import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'
import Category from 'pages/category'
import Car from 'pages/car'
import Personal from 'pages/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/category',
      name: 'Category',
      component: Category
    }, {
      path: '/car',
      name: 'Car',
      component: Car
    }, {
      path: '/personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
