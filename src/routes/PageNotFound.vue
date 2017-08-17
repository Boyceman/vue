<template>
  <div class="PageNotFound">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'PageNotFound',
    _router: {
      path: '*',
      name: 'PageNotFound',
      component: resolve => require.ensure([], () => resolve(require('./PageNotFound')), 'PageNotFound')
    },
    data () {
      return {
        msg: 'Welcome to Component PageNotFound'
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .PageNotFound {

  }
</style>
