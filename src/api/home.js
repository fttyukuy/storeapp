import axios from 'axios'
import {SUC_CODE, TIMEOUT, REC_PSIZE, JSONP_OPTIONS} from './config.js'
import jsonp from 'assets/js/jsonp'

// 获取轮播数据
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {timeout: TIMEOUT}).then(res => {
    if (res.data.code === SUC_CODE) {
      return res.data.slider
    }
    throw new Error('未成功获取数据')
  }).catch(err => {
    console.log(err)
    return [
      {
        linkUrl: 'https://www.imooc.com',
        picUrl: require('assets/imgs/404.png')
      }
    ]
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  })
}

// 获取推荐商品
export const getHomeRecommend = (page = 1, psize = REC_PSIZE) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json'
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  }
  return jsonp(url, params, JSONP_OPTIONS).then(res => {
    if (res.code === '200') {
      return res
    }
    throw new Error('未成功获取数据')
  }).catch(err => {
    console.log(err)
  }).then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1000)
    })
  })
}
