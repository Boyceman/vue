import Vue from 'vue'
const baseUrl = 'http://g.cn'

export default ({ type = 'get', url, params = {} }) => {
  return Vue.http[type](baseUrl + url, params)
}
