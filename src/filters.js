import Vue from 'vue'

Vue.filter('lowercase', (key) => {
  return key.toLowerCase()
})

Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
})

const leftpad = (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
}

Vue.filter('htime', (seconds) => {
  let [h, m, s] = [0, 0, 0]
  if (seconds > 3600) {
    h = Math.floor(seconds / 3600)
    m = Math.floor((seconds % 3600) / 60)
    s = seconds % 60
    return `${leftpad(h)} : ${leftpad(m)} : ${leftpad(s)}`
  }
  m = Math.floor(seconds / 60)
  s = seconds % 60
  return `${leftpad(m)} : ${leftpad(s)}`
})
