<template>
  <mt-tabbar class="TabBar" v-model="active">
    <mt-tab-item v-for="(tabBar, index) in tabBars" :key="tabBar.clazz"
      :id="tabBar.clazz" @click.native="navigator(tabBar.path)">
      <img slot="icon" :src="tabBar.icon">
      {{ tabBar.display }}
     </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'TabBar',
  props: ['tabBars'],
  data () {
    // TODO status manager (vuex?)
    const currentPath = this.$route.path.split('/')[1]
    console.log(currentPath, 888)
    return {
      active: currentPath
    }
  },
  methods: {
    navigator: function (path) {
      console.log(path)
      this.$emit('navigator', path)
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .TabBar {

  }
</style>
