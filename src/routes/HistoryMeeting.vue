<template>
  <div class="HistoryMeeting">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HistoryMeeting',
  _router: {
    path: '/HistoryMeeting',
    name: 'HistoryMeeting',
    component: resolve => require.ensure([], () => resolve(require('./HistoryMeeting')), 'HistoryMeeting')
  },
  data () {
    return {
      msg: 'Welcome to Component HistoryMeeting'
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .HistoryMeeting {

  }
</style>
