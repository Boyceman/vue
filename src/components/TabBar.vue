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
    props: ['tabBars', '_active'],
    data () {
      console.log(`%c${this.$props._active}`, 'background: orange')
      return {
        active: this.$store.getters['tabBar-active']
      }
    },
    computed: {},
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
