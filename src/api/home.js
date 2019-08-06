import axios from 'axios'
import {SUC_CODE, TIMEOUT} from './config.js'

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
      }, 5000)
    })
  })
}
