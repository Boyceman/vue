import Vue from 'vue'
import Vuex from 'vuex'
import * as logs from '@/utils/logs'

Vue.use(Vuex)

export default (
  initialState = { tabBar: { active: 'latest' } },
  mutations = {
    'tabBar-active': function (state, payload) {
      state.tabBar = { ...payload }
      logs.group('tabBar  --Vuex', payload)
    }
  }
) => {
  return new Vuex.Store({
    state: {
      ...initialState
    },
    mutations: {
      ...mutations
    },
    getters: {
      'tabBar-active': state => {
        return state.tabBar.active
      }
    }
  })
}
