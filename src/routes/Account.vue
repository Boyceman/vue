<template>
  <div class="Account">
    <title-h1 :title="title"></title-h1>
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
    components: {
      'TitleH1': () => import('@/components/Title')
    },
    data () {
      return {
        title: '个人中心',
        msg: 'Welcome to Component Account'
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .Account {

  }
</style>
