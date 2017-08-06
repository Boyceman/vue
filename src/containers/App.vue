<template>
  <div id="app">
    <TabBarLayout>
      <router-view></router-view>
    </TabBarLayout>
  </div>
</template>

<script>
  import '../mintUI'
  import TabBarLayout from '@/layouts/tab-bar-layout'

  export default {
    name: 'app',
    components: {
      TabBarLayout
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
