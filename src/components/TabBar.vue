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
      return {
        active: this.$store.getters['tabBar-active']
      }
    },
    mounted () {
      this.$utils.logs.group('tabBar mounted', this.$route.path)
    },
    methods: {
      navigator: function (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .TabBar {

  }
</style>
