<template>
  <div id="app">
    <header-layout></header-layout>
    <router-view></router-view>
    <tab-bar-layout></tab-bar-layout>
  </div>
</template>

<script>
  import '../mintUI'

  export default {
    name: 'app',
    components: {
      'TabBarLayout': () => import('@/layouts/TabBarLayout'),
      'HeaderLayout': () => import('@/layouts/HeaderLayout')
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  @import "../style/reset";
  @import "../style/iconfont.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background: #f8f8f8;
  }

  .iconfont {
    color: #ffffff;
  }
</style>
