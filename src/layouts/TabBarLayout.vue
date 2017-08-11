<template>
  <div class="TabBarLayout">
    <tab-bar :tabBars="tabBars"></tab-bar>
  </div>
</template>

<script>
  import { _router as LatestMeeting } from '@/routes/LatestMeeting'
  import { _router as HistoryMeeting } from '@/routes/HistoryMeeting'

  export default {
    name: 'TabBarLayout',
    components: {
      'TabBar': () => import('@/components/TabBar')
    },
    data () {
      return {
        active: '',
        tabBars: [
          {
            clazz: 'latest',
            display: '最近会议',
            path: LatestMeeting.path,
            icon: 'icon-training'
          },
          {
            clazz: 'HistoryMeeting',
            display: '历史会议',
            path: HistoryMeeting.path,
            icon: 'icon-Meeting-Participants'
          },
          {
            clazz: 'news',
            display: '会议资讯',
            path: '',
            icon: 'icon-survey'
          },
          {
            clazz: 'account',
            display: '个人中心',
            path: '',
            icon: 'icon-account'
          }
        ]
      }
    },
    mounted () {
      const active = this.trackActive()
      this.$store.commit('tabBar-active', { active })
      this.$utils.logs.group('layout mounted', this.$route.path)
    },
    methods: {
      trackActive: function () {
        let active = ''
        this.tabBars.forEach(item => {
          if (this.$route.path === item.path) {
            active = item.clazz
          }
        })
        return active
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss" type="text/scss">
  .TabBarLayout {

  }
</style>
