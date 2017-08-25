import Vue from 'vue'

const baseUrl = 'http://g.cn'

export default ({ type = 'get', url = '/', options = {} }) => {
  return Vue.http[type](baseUrl + url, options)
}
