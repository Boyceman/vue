<template>
  <div class="TabBarLayout">
    <router-view></router-view>
    <tab-bar :tabBars="tabBars" :_active="active"></tab-bar>
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
        active: this.$route.path,
        tabBars: [
          {
            clazz: 'latest',
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
    mounted () {
      this.$utils.logs.group('mounted', this.active)
    },
    watch: {
      '$route' (to) {
        this.trackActive(this.tabBars, to.path)
        // 对路由变化作出响应...
      }
    },
    methods: {
      trackActive: function (tabBars, path) {
        let active = ''
        tabBars.forEach(item => {
          if (path === item.path) {
            active = item.clazz
          }
        })
//        this.$store.commit('tabBar-active', { active })
        this.$utils.logs.group('trackActive', this.active)
        this.$set(this.$data, 'active', active)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .TabBarLayout {

  }
</style>
