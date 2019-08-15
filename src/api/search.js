import axios from 'axios'
import jsonp from 'assets/js/jsonp'
import {JSONP_OPTIONS, TIMEOUT} from './config'

export const getSearchHot = () => {
  return axios.get('http://www.imooc.com/api/search/hot', {timeout: TIMEOUT}).then(res => {
    if (res.status === 200) {
      return res.data.hotKeyWord
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

export const getSearchResult = keyword => {
  const url = 'https://suggest.taobao.com/sug'
  const params = {
    q: keyword,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null
  }
  return jsonp(url, params, JSONP_OPTIONS).then(res => {
    if (res.result) {
      return res.result
    }
    throw new Error('没有成功获取数据')
  }).catch(err => {
    console.log(err)
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    })
  })
}
