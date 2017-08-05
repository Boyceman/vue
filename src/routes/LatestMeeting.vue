<template>
  <div class="LatestMeeting">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'LatestMeeting',
  _router: {
    name,
    path: '/',
    component: resolve => require.ensure([], () => resolve(require('./LatestMeeting')), 'LatestMeeting')
  },
  data () {
    return {
      msg: 'Welcome to Component LatestMeeting'
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .LatestMeeting {

  }
</style>
