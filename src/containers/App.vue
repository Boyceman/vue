<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar-layout></tab-bar-layout>
  </div>
</template>

<script>
  import '../mintUI'

  export default {
    name: 'app',
    components: {
      'tab-bar-layout': () => import('@/layouts/TabBarLayout')
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  @function p2r($px) {
    @return $px / 75 * 1rem;
  }

</style>
