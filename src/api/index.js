import Vue from 'vue'

export default ({ type = 'get', url = 'http://g.cn', params = {} }) => {
  return Vue.http[type](url, params)
}
