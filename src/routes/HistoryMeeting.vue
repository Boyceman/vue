<template>
  <div class="HistoryMeeting">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'HistoryMeeting',
    _router: {
      name,
      path: '/history-meeting',
      component: resolve => require.ensure([], () => resolve(require('./HistoryMeeting')), 'HistoryMeeting')
    },
    components: {},
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
