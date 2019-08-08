const storage = window.localStorage || localStorage

export default {
  set (key, val) {
    if (val) {
      storage.setItem(key, stringify(val))
    }
  },
  get (key, del) {
    const val = parse(storage.getItem(key))
    // return val === undefined ? del : val
    return val
  },
  remove (key) {
    storage.removeItem(key)
  },
  clear () {
    storage.clear()
  }
}

function stringify (val) {
  if (typeof val !== 'string') {
    return JSON.stringify(val)
  } else {
    return val
  }
}

function parse (val) {
  if (typeof val === 'string') {
    return JSON.parse(val)
  } else {
    return val
  }
}
