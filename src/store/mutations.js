import * as logs from '@/utils/logs'

export default {
  'tabBar-active': function (state, payload) {
    state.tabBar = {
      ...state.tabBar,
      ...payload
    }
    logs.group('tabBar-active  --Vuex Mutation', payload)
  },
  'tabBar-if': function (state, payload) {
    state.tabBar = {
      ...state.if,
      ...payload
    }
    logs.group('tabBar-if  --Vuex Mutation', payload)
  }
}
