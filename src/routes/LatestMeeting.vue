<template>
  <div class="LatestMeeting">
    <cell v-for="(cell, index) in cells" :key="index" :cell="cell"></cell>
  </div>
</template>

<script>
  import Cell from '@/components/Cell'
  import TabBarLayout from '@/layouts/tab-bar-layout'

  export default {
    name: 'LatestMeeting',
    components: {
      Cell,
      TabBarLayout
    },
    _router: {
      name,
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./LatestMeeting')), 'LatestMeeting')
    },
    data () {
      return {
        cells: [
          {
            title: 'hello 3c',
            image: 'http://placehold.it/100x100'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .LatestMeeting {

  }
</style>
