import jsonp from 'jsonp'

const parseParams = data => {
  let params = []
  for (let k in data) {
    params.push(`${k}=${data[k]}`)
  }
  return params.join('&')
}
export default (url, data, options) => {
  url += (url.indexOf('?') > -1 ? '&' : '?') + parseParams(data)
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
