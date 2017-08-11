<template>
  <div class="SelectBar">
    <selector v-for="(type, index) in types" :key="index" :type="type"></selector>
    <ul>
      <li v-for="(option, index) in options" :key="index"></li>
    </ul>
  </div>
</template>

<script>
  import Selector from '@/components/Selector'
  export default {
    name: 'SelectBar',
    _router: {
      name,
      path: '/SelectBar',
      component: resolve => require.ensure([], () => resolve(require('./SelectBar')), 'SelectBar')
    },
    components: { Selector },
    props: ['options', 'types'],
    data () {
      return {
        msg: 'Welcome to Component SelectBar'
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .SelectBar {
    position: fixed;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    background: #fff;
  }
</style>
