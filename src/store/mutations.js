import * as logs from '@/utils/logs'

export default {
  'navBarIf': function (state, payload) {
    state.navBar.if = payload.if
    logs.group('navBarIf  --Vuex Mutation', payload)
  },
  'tabBarActive': function (state, payload) {
    state.tabBar.active = payload.active
    logs.group('tabBarActive  --Vuex Mutation', payload)
  },
  'tabBarIf': function (state, payload) {
    state.tabBar.if = payload.if
    logs.group('tabBarIf  --Vuex Mutation', payload)
  },
  'listLoading': function (state, payload) {
    state.list.loading = payload.loading
    logs.group('listLoading  --Vuex Mutation', payload)
  }
}
