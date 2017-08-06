<template>
  <div class="TabBarLayout">
    <TabBar :tabBars="tabBars" @navigator="navigator"></TabBar>
  </div>
</template>

<script>
  import { _router as LatestMeeting } from '@/routes/LatestMeeting'
  import { _router as HistoryMeeting } from '@/routes/HistoryMeeting'
  import TabBar from '@/components/TabBar'

  export default {
    name: 'TabBarLayout',
    components: {
      TabBar
    },
    data () {
      return {
        tabBars: [
          {
            clazz: 'LatestMeeting',
            display: '最近会议',
            path: LatestMeeting.path,
            icon: 'http://placehold.it/100x100'
          },
          {
            clazz: 'HistoryMeeting',
            display: '历史会议',
            path: HistoryMeeting.path,
            icon: 'http://placehold.it/100x100'
          },
          {
            clazz: 'MineMeeting',
            display: '我的会议',
            path: '',
            icon: 'http://placehold.it/100x100'
          },
          {
            clazz: 'offline',
            display: '线下会议',
            path: '',
            icon: 'http://placehold.it/100x100'
          }
        ]
      }
    },
    methods: {
      navigator: function (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .TabBarLayout {

  }
</style>
