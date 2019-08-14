import axios from 'axios'

export const getSearchHot = () => {
  return axios.get('http://www.imooc.com/api/search/hot', {timeout: 10000}).then(res => {
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
