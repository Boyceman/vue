<template>
  <mt-tab-container v-model="active">
    <mt-tab-container-item v-for="tabBar in tabBars" :key="tabBar.clazz"
      id="tabBar.clazz" name="tabBar.clazz">
      <img slot="icon" :src="tabBar.icon">
      {{ tabBar.display }}
    </mt-tab-container-item>
  </mt-tab-container>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
      active: 'active',
      tabBars: [
        {
          display: '最近会议',
          clazz: 'latest',
          icon: 'http://placehold.it/100x100'
        },
        {
          display: '历史会议',
          clazz: 'history',
          icon: 'http://placehold.it/100x100'
        },
        {
          display: '我的会议',
          clazz: 'mine',
          icon: 'http://placehold.it/100x100'
        },
        {
          display: '线下会议',
          clazz: 'offline',
          icon: 'http://placehold.it/100x100'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .TabBar {

  }
</style>
