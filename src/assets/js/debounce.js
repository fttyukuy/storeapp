export function debounce (fun, delay = 200) {
  let timer = null
  return function (...arg) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, arg)
    }, delay)
  }
}
