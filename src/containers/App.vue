<template>
  <div id="app">
    <img src="../assets/logo.png">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import '../mintUI'
  import TabBar from '../layouts/TabBar'

  export default {
    name: 'app',
    components: {
      TabBar
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
