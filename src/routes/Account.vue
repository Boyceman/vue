<template>
  <div class="Account">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'Account',
    _router: {
      name,
      path: '/account',
      component: resolve => require.ensure([], () => resolve(require('./Account')), 'Account')
    },
    components: {},
    data () {
      return {
        msg: 'Welcome to Component Account'
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .Account {

  }
</style>
