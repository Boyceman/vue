// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import createStore from './store'
import utils from './utils'
import App from './containers/App'
import router from './routes/router'

Vue.config.productionTip = false

Vue.mixin({
  created: function () {
    this.$utils = utils
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  utils,
  store: createStore(),
  template: '<App/>',
  components: { App }
})
